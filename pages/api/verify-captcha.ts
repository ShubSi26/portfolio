// pages/api/verify-captcha.ts

import type { NextApiRequest, NextApiResponse } from "next";

type Data = { email?: string; error?: string };

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    // If the body is already parsed as JSON, you can directly destructure it.
    const { token } = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    console.log("Received token:", token);

    const secretKey = process.env.SECRET_KEY as string;
    if (!secretKey) {
      return res.status(500).json({ error: "Server configuration error" });
    }

    // Access the connecting IP correctly
    const ip = req.headers["cf-connecting-ip"];

    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret: secretKey, response: token, remoteip: ip }),
    });

    console.log("Cloudflare response:", response);

    const data = await response.json();
    console.log("Verification result:", data);

    if (data.success) {
      res.status(200).json({ email: "shubhamsi160@gmail.com" });
    } else {
      res.status(400).json({ error: "Invalid Captcha" });
    }
  } catch (error) {
    console.error("Error in captcha verification:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
