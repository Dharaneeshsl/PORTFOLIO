// API utility for portfolio backend
const API_BASE = 'http://localhost:5000/api';

export async function sendContact(form) {
  const res = await fetch(`${API_BASE}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  });
  if (!res.ok) throw new Error((await res.json()).error || 'Failed to send');
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