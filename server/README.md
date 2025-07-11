# Portfolio Backend

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file in the `server` directory with the following:
   ```env
   MONGO_URI=your_mongodb_connection_string
   SMTP_USER=your_gmail_address@gmail.com
   SMTP_PASS=your_gmail_app_password
   CONTACT_EMAIL=your_destination_email@gmail.com
   PORT=5000
   ```
   - `MONGO_URI`: MongoDB connection string (e.g., from MongoDB Atlas)
   - `SMTP_USER`/`SMTP_PASS`: Gmail credentials for sending emails (use an App Password)
   - `CONTACT_EMAIL`: Where contact form messages are sent

3. Start the server:
   ```bash
   node index.js
   ```

## API Endpoints

- `POST /api/contact` — Contact form submission
- `GET /api/github/:username` — Public GitHub activity for a user
- `GET /api/admin/messages` — Get all contact messages (admin only, requires `x-admin-token` header)

### Admin Dashboard

To access the admin dashboard route, set an `ADMIN_TOKEN` in your `.env`:

```env
ADMIN_TOKEN=your_secret_token
```

Then, make a GET request to `/api/admin/messages` with the header:

```
x-admin-token: your_secret_token
```

This will return all contact messages in the database, sorted by most recent. 