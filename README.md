# BookLook - Book Review Platform

## Table of Contents
- [Local Development Setup](#local-development-setup)
- [Cache Setup](#cache-setup)
- [Docker compose method](#docker-compose-method)
- [Docker Swarm Orchestration method](#docker-swarm-orchestration-method)

## Local Development Setup

### 1. Create and activate virtual environment

Windows:
```bash
py -m venv .venv
.venv\Scripts\Activate.ps1
```

Linux & MacOS:
```bash
python3 -m venv .venv
source .venv/bin/activate
```

### 2. Install dependencies
```bash
python -m pip install -U pip
pip install -r requirements.txt
```

### 3. Set up database
```bash
python manage.py makemigrations
python manage.py migrate
```

### 4. Populate with sample data
```bash
python manage.py seed
```

### 5. Create admin user
```bash
python manage.py createsuperuser
```

### 6. Run the development server
```bash
python manage.py runserver
```

## Cache Setup

The application uses Django's in-memory cache by default. To enable Redis:

1. **Start a Redis server**
   ```bash
   docker run -d --name redis -p 6379:6379 redis:7
   ```
2. **Configure the application** by adding the following line to your `.env` file:
   ```env
   REDIS_URL=redis://localhost:6379/1
   ```
3. **Verify the cache works**:
   ```bash
   python manage.py shell
   >>> from django.core.cache import cache
   >>> cache.set("test", "ok")
   >>> cache.get("test")
   'ok'
   ```
   With Redis you can also run `redis-cli monitor` in another terminal to see `GET`/`SET` operations.

If `REDIS_URL` is not set, the application falls back to the local memory cache.

## Different docker-compose

### Application + Database
```bash
docker compose -f docker-compose.yml up --build
```
### Application + Database + Cache

### Application + Database + Search Engine
```bash
docker compose -f docker-compose.search.yml up --build
```

### Application + Database + Reverse Proxy

### Application + Database + Reverse Proxy + Cache + SearchEngine



## Docker compose method

### 1. Run docker compose command
```bash
docker compose up --build
```

The application will be available at http://localhost:8000

## Docker Swarm Orchestration method

### 1. Initialize Docker Swarm (if not already initialized)
```bash
docker swarm init
```

### 2. Deploy the stack
```bash
docker stack deploy -c compose.yml <stack_name>
```

The application will be available at http://localhost:8000

### 3. Leave the swarm (if needed)
```bash
docker swarm leave --force
```

## Important Notes
- Make sure Docker is installed and running on your system
- The application uses SQLite by default for development
- Ensure all required ports (8000 by default) are available