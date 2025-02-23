export default async function handler(req, res) {
    const { token } = JSON.parse(req.body);
    const secretKey = process.env.SECRET_KEY as string;
  
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret: secretKey, response: token }),
    });
  
    const data = await response.json();
    if(data.success) {
      res.status(200).json({ email: "shubhamsi160@gmail.com" });
    } else {
        res.status(400).json({ error: "Invalid Captcha" });
    }
  }
  