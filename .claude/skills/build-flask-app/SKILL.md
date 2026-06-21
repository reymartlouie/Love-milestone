---
name: build-flask-app
description: Build a complete Flask web application — management systems, POS, ERP, CRUD apps. Uses Flask + SQLAlchemy + Flask-Login + Flask-WTF + Flask-Limiter + Waitress + SQLite (local) or PostgreSQL (production). One phase at a time.
---

# Flask App Builder

Build production-ready Flask applications — management systems, POS, ERP, CRUD dashboards.

**Stack:** Flask + SQLAlchemy + Flask-Login + Flask-WTF + Flask-Limiter + Waitress + SQLite/PostgreSQL + Jinja2

**Same stack as:** fitnessmadness

---

## Phase Plan (12 phases, one at a time)

| # | Phase |
|---|-------|
| 1 | Project setup + folder structure + venv + requirements.txt |
| 2 | Config + extensions + app factory (`create_app`) |
| 3 | Database models (SQLAlchemy) + init_db |
| 4 | Auth system (Flask-Login + Flask-WTF + password hashing) |
| 5 | Core blueprints + routes structure |
| 6 | Jinja2 base template + layout + static files |
| 7 | Core CRUD pages (list, create, edit, delete) |
| 8 | Forms (Flask-WTF + WTForms validation) |
| 9 | Advanced features (search, filters, pagination, CSV export) |
| 10 | Security hardening (Flask-Limiter, CSRF, input validation) |
| 11 | Production server setup (Waitress + .env + start.bat for Windows) |
| 12 | Testing + deployment verification |

---

## Standard Project Structure

```
project/
├── app.py                  ← app factory entry point
├── config.py               ← Config class, reads .env
├── extensions.py           ← db, login_manager, csrf, limiter
├── requirements.txt
├── .env                    ← secrets (never commit)
├── .env.example
├── start.bat               ← Windows launcher (Waitress)
├── models/
│   ├── __init__.py
│   └── [model].py
├── routes/
│   ├── __init__.py
│   ├── auth.py
│   └── [module].py
├── templates/
│   ├── base.html
│   ├── auth/
│   └── [module]/
├── static/
│   ├── css/
│   └── js/
└── database/
    ├── init_db.py
    └── create_admin.py
```

---

## Standard requirements.txt

```
Flask==3.0.3
Flask-SQLAlchemy==3.1.1
Flask-Login==0.6.3
Flask-WTF==1.2.1
Flask-Limiter==4.1.1
Werkzeug==3.0.3
WTForms==3.1.2
SQLAlchemy==2.0.31
python-dotenv==1.0.1
python-dateutil==2.9.0
waitress==3.0.2
```

---

## Standard extensions.py

```python
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from flask_wtf import CSRFProtect
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

db = SQLAlchemy()
login_manager = LoginManager()
csrf = CSRFProtect()
limiter = Limiter(key_func=get_remote_address)
```

---

## Standard app factory (app.py)

```python
from flask import Flask
from config import Config
from extensions import db, login_manager, csrf, limiter

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    login_manager.init_app(app)
    csrf.init_app(app)
    limiter.init_app(app)

    from routes.auth import auth_bp
    from routes.[module] import [module]_bp
    app.register_blueprint(auth_bp, url_prefix='/auth')
    app.register_blueprint([module]_bp, url_prefix='/[module]')

    return app

if __name__ == '__main__':
    app = create_app()
    from waitress import serve
    serve(app, host='0.0.0.0', port=5000, threads=4)
```

---

## Database

- **SQLite** → local/offline/single-PC apps (like fitnessmadness)
- **PostgreSQL** → multi-user, networked, production

Switch by changing one line in config.py:
```python
# SQLite
SQLALCHEMY_DATABASE_URI = 'sqlite:///app.db'

# PostgreSQL
SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL')
```

---

## Execution Rules

- One phase per response — stop and wait after each phase
- After each phase: show files created, commit message, then ask "Type 'next' to continue"
- Never advance without user confirmation
