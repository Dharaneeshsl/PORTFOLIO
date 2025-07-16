from flask import Flask, request, jsonify
from flask_mail import Mail, Message
import os

app = Flask(__name__)

# Configure Flask-Mail (replace with your actual credentials or use environment variables)
app.config['MAIL_SERVER'] = 'smtp.gmail.com'  # Or your SMTP server
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.environ.get('MAIL_USERNAME', 'your_email@gmail.com')
app.config['MAIL_PASSWORD'] = os.environ.get('MAIL_PASSWORD', 'your_app_password')  # Use App Password for Gmail

mail = Mail(app)

@app.route('/send_mail', methods=['POST'])
def send_mail():
    data = request.get_json(force=True)
    subject = data.get('subject')
    sender = data.get('sender')
    message_body = data.get('message')

    msg = Message(subject=subject,
                  sender=sender,
                  recipients=[app.config['MAIL_USERNAME']],  # Where you want to receive the mail
                  body=message_body)
    try:
        mail.send(msg)
        return jsonify({'status': 'success', 'message': 'Email sent!'})
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True) 