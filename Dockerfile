# Django application Dockerfile
FROM python:3.13-slim

WORKDIR /app

RUN apt-get update && apt-get install -y sqlite3 libsqlite3-dev

COPY requirements.txt /app/

RUN pip install --no-cache-dir -r requirements.txt

COPY . /app/

EXPOSE 8000

ENTRYPOINT ["python", "manage.py"]

CMD ["runserver", "0.0.0.0:8000"]