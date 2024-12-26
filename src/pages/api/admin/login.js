export default function handler(req, res) {
    if (req.method === 'POST') {
      const { username, password } = req.body;
  
      // Simulasi validasi username dan password
      if (username === 'admin' && password === 'password') {
        // Mengembalikan respons sukses dengan token (simulasi)
        return res.status(200).json({ message: 'Login berhasil', token: 'admin-token' });
      } else {
        // Mengembalikan error jika username atau password salah
        return res.status(401).json({ message: 'Username atau password salah' });
      }
    } else {
      // Mengembalikan error jika metode HTTP tidak didukung
      return res.status(405).json({ message: 'Method not allowed' });
    }
  }
  