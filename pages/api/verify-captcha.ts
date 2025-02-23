export default async function handler(req, res) {
    console.log(req.body);
    const { token } = JSON.parse(req.body);
    console.log(token);
    const secretKey = process.env.SECRET_KEY as string;
    const ip = req.headers.get("CF-Connecting-IP");
  
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret: secretKey, response: token, remoteip: ip }),
    });
    console.log(response);
  
    const data = await response.json();
    if(data.success) {
      res.status(200).json({ email: "shubhamsi160@gmail.com" });
    } else {
        res.status(400).json({ error: "Invalid Captcha" });
    }
  }
  