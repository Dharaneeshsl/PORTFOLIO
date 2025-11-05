# PORTFOLIO

Containerized full-stack portfolio (React client + Flask server).

## Prerequisites
- Docker and Docker Compose

## Setup env (email)
Create `server/.env` with your Gmail SMTP app password:

```
MAIL_SERVER=smtp.gmail.com
MAIL_PORT=587
MAIL_USE_TLS=true
MAIL_USERNAME=<your_gmail>
MAIL_PASSWORD=<your_app_password>
MAIL_DEFAULT_SENDER=<your_gmail>
RECIPIENT_EMAIL=<recipient_email>
```

Note: `.env` is gitignored and not committed.

## Run with Docker Compose

```
docker compose up --build
```
- Client available at http://localhost:3000
- Server available at http://localhost:5000

## Test email endpoint

```
curl -X POST http://localhost:5000/send_mail \
  -H "Content-Type: application/json" \
  -d '{"subject":"Test","sender":"you@example.com","message":"Hello"}'
```

## Development
- node_modules is ignored (not in Git).
- To stop: `docker compose down`.
