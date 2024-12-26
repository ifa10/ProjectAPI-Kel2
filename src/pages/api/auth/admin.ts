// // src/pages/api/auth/admin.ts

// import { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   // Logika server-side Anda di sini
//   // Contoh memeriksa status admin (logika ini tidak menggunakan useEffect)
//   try {
//     // Simulasi pengecekan status admin
//     const isAdmin = req.headers.role === 'admin'; // Pengecekan contoh
//     if (isAdmin) {
//       res.status(200).json({ message: 'Admin terotorisasi' });
//     } else {
//       res.status(403).json({ message: 'Akses Ditolak' });
//     }
//   } catch (error) {
//     res.status(500).json({ message: 'Kesalahan Internal Server' });
//   }
// }
