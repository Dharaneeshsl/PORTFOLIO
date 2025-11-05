from flask import Flask, request, jsonify
from flask_mail import Mail, Message
from flask_cors import CORS
from dotenv import load_dotenv
import os

# Load .env from project
load_dotenv()

app = Flask(__name__)

# CORS: allow all origins for API endpoints, handle preflight automatically
CORS(
    app,
    resources={r"/*": {"origins": "*"}},
    supports_credentials=False,
    allow_headers=["Content-Type", "Authorization"],
    methods=["GET", "POST", "OPTIONS"],
)

# Configure Flask-Mail (defaults for Gmail if not provided)
app.config['MAIL_SERVER'] = os.environ.get('MAIL_SERVER', 'smtp.gmail.com')
app.config['MAIL_PORT'] = int(os.environ.get('MAIL_PORT', 587))
app.config['MAIL_USE_TLS'] = os.environ.get('MAIL_USE_TLS', 'true').lower() == 'true'
app.config['MAIL_USE_SSL'] = os.environ.get('MAIL_USE_SSL', 'false').lower() == 'true'
app.config['MAIL_USERNAME'] = os.environ.get('MAIL_USERNAME', '')
app.config['MAIL_PASSWORD'] = (os.environ.get('MAIL_PASSWORD', '') or '').replace(' ', '')
app.config['MAIL_DEFAULT_SENDER'] = os.environ.get('MAIL_DEFAULT_SENDER', app.config['MAIL_USERNAME'])

mail = Mail(app)

@app.route('/')
def health():
    return 'Backend is running!', 200

@app.route('/send_mail', methods=['POST', 'OPTIONS'])
def send_mail():
    if request.method == 'OPTIONS':
        return '', 204

    data = request.get_json(force=True) or {}
    subject = data.get('subject', 'No subject')
    sender = data.get('sender')
    message_body = data.get('message', '')

    recipient = os.environ.get('RECIPIENT_EMAIL') or app.config['MAIL_USERNAME']

    msg = Message(
        subject=subject,
        sender=app.config['MAIL_DEFAULT_SENDER'],
        recipients=[recipient],
        body=message_body,
        reply_to=sender,
    )
    try:
        mail.send(msg)
        return jsonify({'status': 'success', 'message': 'Email sent!'})
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
