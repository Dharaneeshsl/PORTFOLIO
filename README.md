# PORTFOLIO

Containerized full-stack portfolio with a React client and Express server.

## Prerequisites

- Docker and Docker Compose

## Run With Docker Compose

Create `server/.env` first, then run:

```bash
docker compose up --build
```

- Client: http://localhost:3000
- Server: http://localhost:5000

## Test Email Endpoint

```bash
curl -X POST http://localhost:5000/api/send_mail \
  -H "Content-Type: application/json" \
  -d "{\"subject\":\"Test\",\"sender\":\"you@example.com\",\"message\":\"Hello\"}"
```

## Required Server Environment

```env
MAIL_USER=your_gmail_address@gmail.com
MAIL_PASS=your_gmail_app_password
RECIPIENT_EMAIL=where_contact_messages_should_go@example.com
ADMIN_TOKEN=your_admin_dashboard_token
PORT=5000
```

`RECIPIENT_EMAIL` is optional. If it is not set, mail is sent to `MAIL_USER`.
