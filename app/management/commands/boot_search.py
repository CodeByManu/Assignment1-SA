import os
import time
from django.conf import settings
from django.core.management.base import BaseCommand
from django.core.management import call_command

class Command(BaseCommand):
    help = "Espera OpenSearch (si está habilitado), aplica migraciones, seed y arranca el server."

    def add_arguments(self, parser):
        parser.add_argument("--no-seed", action="store_true", help="No ejecutar seed.")
        parser.add_argument("--addrport", default="0.0.0.0:8000", help="Host:port para runserver.")
        parser.add_argument("--os-timeout", type=int,
                            default=int(os.getenv("WAIT_FOR_OS_TIMEOUT", "60")),
                            help="Tiempo máx (segundos) para esperar OpenSearch.")

    def _wait_for_opensearch(self, timeout: int):
        if not settings.SEARCH_ENABLED:
            self.stdout.write(self.style.NOTICE("SEARCH_ENABLED=false → no se espera OpenSearch."))
            return False

        scheme = "https" if settings.OPENSEARCH_USE_TLS else "http"
        host = settings.OPENSEARCH_HOST
        port = settings.OPENSEARCH_PORT
        user = (settings.OPENSEARCH_USER or None)
        pwd  = (settings.OPENSEARCH_PASS or None)

        try:
            from opensearchpy import OpenSearch
            client = OpenSearch(
                hosts=[{"host": host, "port": port, "scheme": scheme}],
                http_auth=(user, pwd) if user else None,
                verify_certs=settings.OPENSEARCH_VERIFY_TLS,
                timeout=10,
            )
        except Exception as e:
            self.stdout.write(self.style.WARNING(f"No se pudo crear cliente OS: {e}"))
            return False

        self.stdout.write(self.style.NOTICE(f"Esperando OpenSearch en {scheme}://{host}:{port} ..."))
        deadline = time.time() + timeout
        while time.time() < deadline:
            try:
                if client.ping():
                    self.stdout.write(self.style.SUCCESS("OpenSearch está listo."))
                    return True
            except Exception:
                pass
            time.sleep(1)

        self.stdout.write(self.style.WARNING("OpenSearch no respondió a tiempo; sigo sin OS."))
        return False

    def handle(self, *args, **opts):
        # Migraciones siempre
        try:
            call_command("makemigrations", interactive=False, verbosity=0)
        except Exception:
            pass
        call_command("migrate", interactive=False, verbosity=1)

        # Esperar OS si corresponde (esto garantiza que los signals indexen durante el seed)
        self._wait_for_opensearch(opts["os_timeout"])

        # Seed (tu comando existente). Si ya hay datos y tu seed se niega, lo reporta y sigue.
        if not opts["no_seed"]:
            try:
                call_command("seed")
            except Exception as e:
                self.stdout.write(self.style.WARNING(f"Seed omitido: {e}"))

        # Arrancar servidor (bloqueante)
        call_command("runserver", opts["addrport"])
