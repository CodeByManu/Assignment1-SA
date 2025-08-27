from django.core.management.base import BaseCommand
from django.conf import settings
from app.models import Book, Review
from app.services import search_service as s

class Command(BaseCommand):
    help = "Recrea índices e indexa todos los Books y Reviews existentes."

    def handle(self, *args, **opts):
        if not s.is_enabled():
            self.stdout.write(self.style.WARNING("SEARCH_ENABLED=false. Aborto."))
            return
        c = s.client()
        if c is None:
            self.stdout.write(self.style.ERROR("Sin cliente OpenSearch."))
            return

        # drop + create
        for idx in (settings.OS_INDEX_BOOKS, settings.OS_INDEX_REVIEWS):
            if c.indices.exists(index=idx):
                c.indices.delete(index=idx)
        s.ensure_indices()

        for b in Book.objects.select_related("author").all():
            s.index_book(b)
        for r in Review.objects.select_related("book").all():
            s.index_review(r)

        self.stdout.write(self.style.SUCCESS("Reindex completo."))
