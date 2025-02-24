export default async function handler(req, res) {
  console.log(req.body);
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const SECRET_KEY = process.env.TURNSTILE_SECRET_KEY as string;
  const email = process.env.EMAIL as string;
  const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

  const [token] = JSON.parse(req.body);
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  if (!token) {
    return res.status(400).json({ error: 'Missing token' });
  }

  try {
    const idempotencyKey = crypto.randomUUID();

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        secret: SECRET_KEY,
        response: token,
        remoteip: ip,
        idempotency_key: idempotencyKey,
      }),
    });

    const data = await response.json();

    if (data.success) {
      return res.status(200).json({ success: true, message: 'Verification successful', email: email });
    } else {
      return res.status(400).json({ success: false, message: 'Verification failed', error: data });
    }
  } catch (error:any) {
    return res.status(500).json({ success: false, message: 'Internal Server Error', error: error.message });
  }
}
