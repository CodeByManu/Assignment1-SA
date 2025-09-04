FROM python:3.13-slim

ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    APP_HOME=/app \
    PORT=8000 \
    USE_BOOT_SEARCH=true

WORKDIR ${APP_HOME}

RUN apt-get update && apt-get install -y --no-install-recommends \
    sqlite3 libsqlite3-dev \
  && rm -rf /var/lib/apt/lists/*

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

RUN python manage.py collectstatic --noinput || true

EXPOSE 8000

# Directly run the Django management command that handles migrations, optional seed, and server start
CMD ["python", "manage.py", "boot_search", "--addrport", "0.0.0.0:8000"]
