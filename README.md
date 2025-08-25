# BookLook - Book Review Platform

## Table of Contents
- [Local Development Setup](#local-development-setup)
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