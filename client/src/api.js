// API utility for portfolio backend
const API_BASE = 'https://portfolio-wqld.onrender.com/api';

export async function sendContact(form) {
  // Use correct backend URL for email: local in development, Render in production
  const backendUrl =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:5000/send_mail'
      : 'https://portfolio-1-ggqn.onrender.com/send_mail'; // Update to your deployed backend
  const res = await fetch(backendUrl, {
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