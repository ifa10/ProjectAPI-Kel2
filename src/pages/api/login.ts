import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    // Contoh login hardcoded
    if (email === "admin@wisata.com" && password === "admin123") {
      res.status(200).json({ message: "Login berhasil!" });
    } else {
      res.status(401).json({ message: "Email atau password salah." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} tidak diizinkan`);
  }
}
