from flask import Flask, request, jsonify
from flask_mail import Mail, Message
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app, origins="*", allow_headers="*", methods=["GET", "POST", "OPTIONS"])

# Configure Flask-Mail
app.config['MAIL_SERVER'] = os.environ.get('MAIL_SERVER', 'smtp.gmail.com')
app.config['MAIL_PORT'] = int(os.environ.get('MAIL_PORT', 587))
app.config['MAIL_USE_TLS'] = os.environ.get('MAIL_USE_TLS', 'true').lower() == 'true'
app.config['MAIL_USERNAME'] = os.environ.get('MAIL_USERNAME', 'your_email@gmail.com')
app.config['MAIL_PASSWORD'] = os.environ.get('MAIL_PASSWORD', 'your_app_password')

mail = Mail(app)

@app.route('/')
def health():
    return 'Backend is running!', 200

@app.route('/send_mail', methods=['POST', 'OPTIONS'])
def send_mail():
    if request.method == 'OPTIONS':
        return '', 204
    data = request.get_json(force=True)
    subject = data.get('subject')
    sender = data.get('sender')
    message_body = data.get('message')

    msg = Message(subject=subject,
                  sender=sender,
                  recipients=[os.environ.get('RECIPIENT_EMAIL', app.config['MAIL_USERNAME'])],
                  body=message_body)
    try:
        mail.send(msg)
        return jsonify({'status': 'success', 'message': 'Email sent!'})
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True) 