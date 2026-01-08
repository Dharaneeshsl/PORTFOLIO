# PORTFOLIO

Containerized full-stack portfolio (React client + Flask server).

## Prerequisites
- Docker and Docker Compose
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
