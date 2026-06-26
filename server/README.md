# Portfolio Backend

Express backend for the portfolio contact form, GitHub activity proxy, and admin message view.

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create `server/.env`:

   ```env
   MAIL_USER=your_gmail_address@gmail.com
   MAIL_PASS=your_gmail_app_password
   RECIPIENT_EMAIL=where_contact_messages_should_go@example.com
   ADMIN_TOKEN=your_admin_dashboard_token
   PORT=5000
   ```

   `RECIPIENT_EMAIL` is optional. If it is not set, messages are sent to `MAIL_USER`.

3. Start the server:

   ```bash
   npm start
   ```

## API Endpoints

- `GET /` - health check
- `POST /api/send_mail` - contact form submission
- `GET /api/github/:username` - public GitHub activity for a user
- `GET /api/admin/messages` - contact messages, requires `x-admin-token: ADMIN_TOKEN`

Messages are stored in memory, so they reset when the server restarts.
