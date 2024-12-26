import React, { useState } from "react";

const wisataList = [
  {
    title: "Candi Sirah Kencong",
    description: "Desa Sirah Kencong, Kecamatan Wlingi, Kabupaten Blitar, Jawa Timur",
    image: "/images/candi.jpg",
  },
  {
    title: "Air Terjun Sirah Kencong",
    description: "Desa Sirah Kencong, Kecamatan Wlingi, Kabupaten Blitar, Jawa Timur",
    image: "/images/air_terjun.jpg",
  },
  {
    title: "Wukir Negoro",
    description: "Desa Sirah Kencong, Kecamatan Wlingi, Kabupaten Blitar, Jawa Timur",
    image: "/images/wukir.jpg",
  },
  {
    title: "Wahana Permainan Sirah Kencong",
    description: "Desa Sirah Kencong, Kecamatan Wlingi, Kabupaten Blitar, Jawa Timur",
    image: "/images/wahana.jpg",
  },
];

export const Wisata: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
    alert(`Anda memilih: ${wisataList[index].title}`);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <main style={{ flex: 1, padding: "20px", backgroundColor: "#f8f9fa" }}>
        {/* Header */}
        <h1
          style={{
            textAlign: "center",
            fontSize: "2rem",
            marginBottom: "20px",
            color: "#333",
          }}
        >
          Pilihan Wisata
        </h1>
        <p
          style={{
            textAlign: "center",
            fontSize: "1rem",
            color: "#555",
            marginBottom: "30px",
          }}
        >
          Berikut adalah pilihan wisata menarik di kawasan Sirah Kencong yang dapat Anda kunjungi.
        </p>

        {/* Grid List */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
            marginTop: "10px",
          }}
        >
          {wisataList.map((wisata, index) => (
            <div
              key={index}
              onClick={() => handleSelect(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                backgroundColor: selectedIndex === index ? "#e0f7fa" : "white",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow:
                  hoveredIndex === index
                    ? "0 8px 12px rgba(0, 0, 0, 0.2)"
                    : "0 4px 6px rgba(0, 0, 0, 0.1)",
                transform: hoveredIndex === index ? "scale(1.03)" : "scale(1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
              }}
            >
              {/* Image */}
              <img
                src={wisata.image}
                alt={wisata.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderBottom: "2px solid #e0e0e0",
                }}
              />

              {/* Content */}
              <div style={{ padding: "15px" }}>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    color: selectedIndex === index ? "#00796b" : "#004d40",
                    marginBottom: "10px",
                  }}
                >
                  {wisata.title}
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "#555",
                    lineHeight: "1.5",
                    textAlign: "justify",
                  }}
                >
                  {wisata.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Wisata;
