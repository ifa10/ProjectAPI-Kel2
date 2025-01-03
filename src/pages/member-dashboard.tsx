import { useEffect, useState } from 'react';
import { Wisata, WisataPackage, WisataItem } from '../types/wisata';

const MemberDashboard = () => {
  const wisataPackages: Wisata[] = [
    {
      id: 1,
      name: 'Paket A',
      description: 'Paket Wisata A',
      price: 150000,
      includes: [
        'Candi Sirah Kencong',
        'Air Terjun Sirah Kencong'
      ]
    },
    {
      id: 2,
      name: 'Paket B',
      description: 'Paket Wisata B',
      price: 200000,
      includes: [
        'Wukir Negoro',
        'Wahana Permainan Sirah Kencong'
      ]
    },
    {
      id: 3,
      name: 'Paket D',
      description: 'Paket Wisata D',
      price: 1250000,
      includes: [
        'Menginap di vila dengan pemandangan perkebunan teh',
        'Wisata ke Candi Sirah Kencong',
        'Menikmati keindahan air terjun',
        'Relaksasi di area perkebunan teh'
      ]
    },
    {
      id: 4,
      name: 'Paket E',
      description: 'Paket Wisata E',
      price: 1350000,
      includes: [
        'Menginap di area glamping',
        'Trekking menuju puncak Gunung Butak',
        'Menikmati sunrise di puncak gunung',
        'Wisata ke air terjun untuk bermain air dan berfoto'
      ]
    },
    {
      id: 5,
      name: 'Paket F',
      description: 'Paket Wisata F',
      price: 2500000,
      includes: [
        'Kombinasi vila dan glamping (1 malam di vila, 1 malam di glamping)',
        'Trekking ke puncak Gunung Butak',
        'Wisata sejarah ke Candi Sirah Kencong',
        'Eksplorasi air terjun'
      ]
    }
  ];

  const [loading, setLoading] = useState(false);
  const [processingId, setProcessingId] = useState<number | null>(null);

  const handleCheckout = async (wisataId: number) => {
    setProcessingId(wisataId);
    setLoading(true);
    
    try {
      const response = await fetch('/api/pemesanan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ wisataId }),
      });

      if (!response.ok) throw new Error('Checkout failed');

      const { redirectUrl } = await response.json();
      window.location.href = redirectUrl;
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Failed to process checkout. Please try again.');
    } finally {
      setLoading(false);
      setProcessingId(null);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <main style={{ flex: 1, padding: "20px", backgroundColor: "#f8f9fa" }}>
        <h1 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "20px", color: "#333" }}>
          Pilihan Wisata
        </h1>
        <p style={{ textAlign: "center", fontSize: "1rem", color: "#555", marginBottom: "30px" }}>
          Berikut adalah pilihan paket wisata menarik di kawasan Sirah Kencong yang dapat Anda kunjungi.
        </p>

        <h2 style={{ textAlign: "center", fontSize: "1.5rem", marginBottom: "20px", color: "#333" }}>
          Paket Wisata
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          {wisataPackages.map((wisata) => (
            <div
              key={wisata.id}
              style={{
                backgroundColor: "#fff",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                padding: "20px",
                transition: "transform 0.2s, box-shadow 0.2s",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
              }}
            >
              {wisata.image && (
                <div style={{ width: "100%", height: "200px", marginBottom: "15px", borderRadius: "8px", overflow: "hidden" }}>
                  <img
                    src={wisata.image}
                    alt={wisata.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
                  />
                </div>
              )}
              <h3 style={{ color: "#00796b", fontSize: "1.25rem", marginBottom: "10px" }}>
                {wisata.name}
              </h3>
              <p style={{ color: "#333", marginBottom: "15px" }}>
                Harga: Rp {wisata.price.toLocaleString('id-ID')}
              </p>
              <div style={{ marginBottom: "20px" }}>
                <p style={{ fontWeight: "500", marginBottom: "10px" }}>Termasuk:</p>
                <ul style={{ listStyleType: "disc", paddingLeft: "20px", color: "#555" }}>
                  {wisata.includes.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => handleCheckout(wisata.id)}
                disabled={loading && processingId === wisata.id}
                style={{
                  backgroundColor: "#00796b",
                  color: "#fff",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer",
                  width: "100%",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#004d40"}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#00796b"}
              >
                {loading && processingId === wisata.id ? 'Processing...' : 'Pesan Sekarang'}
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MemberDashboard;
