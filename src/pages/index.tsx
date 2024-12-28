import React from "react";
import Navbar from "@/components/navbar"; // Pastikan path sesuai lokasi file Navbar

const wisataList = [
  {
    title: "Candi Sirah Kencong",
    description: "Desa Sirah Kencong, Kecamatan Wlingi, Kabupaten Blitar, Jawa Timur",
    image: "/images/candi.jpg",
  },
  {
    title: "Air Terjun Sirah Kencong",
    description: "Desa Sirah Kencong, Kecamatan Wlingi, Kabupaten Blitar, Jawa Timur",
    image: "/images/air_terjun.jpeg",
  },
  {
    title: "Wukir Negoro",
    description: "Desa Sirah Kencong, Kecamatan Wlingi, Kabupaten Blitar, Jawa Timur",
    image: "/images/wukir.jpg",
  },
  {
    title: "Villa",
    description: "Desa Sirah Kencong, Kecamatan Wlingi, Kabupaten Blitar, Jawa Timur",
    image: "/images/villa.jpg",
  },
  {
    title: "Glamping",
    description: "Desa Sirah Kencong, Kecamatan Wlingi, Kabupaten Blitar, Jawa Timur",
    image: "/images/glamping.jpg",
  },
  {
    title: "Wahana Permainan Sirah Kencong",
    description: "Desa Sirah Kencong, Kecamatan Wlingi, Kabupaten Blitar, Jawa Timur",
    image: "/images/wahana.jpg",
  },
];

const paketWisata = [
  {
    name: "Paket A",
    price: "100.000",
    includes: ["Candi Sirah Kencong", "Air Terjun Sirah Kencong"],
  },
  {
    name: "Paket B",
    price: "150.000",
    includes: ["Wukir Negoro", "Wahana Permainan Sirah Kencong"],
  },
  {
    name: "Paket D",
    price: "250.000",
    includes: [
      "Menginap di vila dengan pemandangan perkebunan teh",
      "Wisata ke Candi Sirah Kencong",
      "Menikmati keindahan air terjun",
      "Relaksasi di area perkebunan teh",
    ],
  },
  {
    name: "Paket E",
    price: "350.000",
    includes: [
      "Menginap di area glamping",
      "Trekking menuju puncak Gunung Butak",
      "Menikmati sunrise di puncak gunung",
      "Wisata ke air terjun untuk bermain air dan berfoto",
    ],
  },
  {
    name: "Paket F",
    price: "500.000",
    includes: [
      "Kombinasi vila dan glamping (1 malam di vila, 1 malam di glamping)",
      "Trekking ke puncak Gunung Butak",
      "Wisata sejarah ke Candi Sirah Kencong",
      "Eksplorasi air terjun",
    ],
  },
];

const HomePage: React.FC = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Navbar */}
      <div
        style={{
          backgroundColor: "#2e7d32", // Hijau tua untuk navbar
          color: "#fff",
          padding: "15px 20px",
          textAlign: "center",
        }}
      >
        <Navbar />
      </div>

      {/* Welcome Section */}
      <div
        style={{
          backgroundColor: "#a5d6a7", // Hijau pastel lembut untuk kesan ramah
          color: "#1b5e20",
          textAlign: "center",
          padding: "100px 20px",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
          Welcome to the Sirah Kencong Tourism Website
        </h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "40px" }}>
          Explore and experience the beauty of Sirah Kencong
        </p>
        <button
          style={{
            backgroundColor: "#2e7d32", // Hijau navbar untuk konsistensi
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => {
            const section = document.getElementById("destinasi-wisata");
            if (section) section.scrollIntoView({ behavior: "smooth" });
          }}
        >
          View Tours
        </button>
      </div>

      {/* Destinasi Wisata */}
      <div
        id="destinasi-wisata"
        style={{
          backgroundColor: "#e8f5e9", // Hijau muda hampir putih
          padding: "50px 20px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "30px", color: "#2e7d32" }}>
          Destinasi Wisata Sirah Kencong
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {wisataList.map((wisata, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#fff",
                borderRadius: "10px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
              }}
            >
              <img
                src={wisata.image}
                alt={wisata.title}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <div style={{ padding: "15px" }}>
                <h3 style={{ marginBottom: "10px", color: "#1b5e20" }}>{wisata.title}</h3>
                <p style={{ fontSize: "0.9rem", color: "#555" }}>{wisata.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Paket Wisata */}
      <div
        style={{
          backgroundColor: "#c8e6c9", // Hijau pastel medium
          padding: "50px 20px",
          color: "#1b5e20",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Paket Wisata Sirah Kencong</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {paketWisata.map((paket, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#fff",
                borderRadius: "10px",
                padding: "15px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
              }}
            >
              <h3 style={{ color: "#2e7d32", marginBottom: "10px" }}>{paket.name}</h3>
              <p style={{ marginBottom: "10px" }}>Harga: Rp {paket.price}</p>
              <ul style={{ textAlign: "left", paddingLeft: "20px" }}>
                {paket.includes.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
