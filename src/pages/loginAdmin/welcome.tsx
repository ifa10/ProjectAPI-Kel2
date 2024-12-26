const WelcomeAdmin: React.FC = () => {
  return (
    <div style={{ padding: "80px 20px", textAlign: "center" }}>
      <h1>Welcome, Admin!</h1>
      <p>Selamat datang di Dashboard Admin. Di sini Anda bisa mengelola data.</p>
      <div style={{ marginTop: "20px" }}>
        <h2>Data Pemesanan</h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Nama</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Destinasi</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Tanggal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>John Doe</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>Bali</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>2024-12-10</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
