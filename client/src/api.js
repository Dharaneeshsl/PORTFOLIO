// API utility for portfolio backend
const API_BASE = 'https://portfolio-wqld.onrender.com/api';

export async function sendContact(form) {
  // Use Render backend for sending email
  const res = await fetch('https://portfolio-1-fc5w.onrender.com/send_mail', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      subject: `Portfolio Contact from ${form.name}`,
      sender: form.email,
      message: form.message
    }),
  });
  if (!res.ok) throw new Error((await res.json()).message || 'Failed to send');
  return res.json();
}

export async function fetchGithubActivity(username) {
  const res = await fetch(`${API_BASE}/github/${username}`);
  if (!res.ok) throw new Error('Failed to fetch GitHub activity');
  return res.json();
}

export async function fetchAdminMessages(token) {
  const res = await fetch(`${API_BASE}/admin/messages`, {
    headers: { 'x-admin-token': token },
  });
  if (!res.ok) throw new Error('Unauthorized or failed to fetch messages');
  return res.json();
} 