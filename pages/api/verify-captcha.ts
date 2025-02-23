export default async function handler(req, res) {
    const { token } = req.body;
    const secretKey = process.env.SECRET_KEY as string;
  
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret: secretKey, response: token }),
    });
  
    const data = await response.json();
    res.json({ success: data.success, email:"shubhamsi160@gmail.com" });
  }
  