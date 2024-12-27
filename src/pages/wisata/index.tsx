import React, { useState } from "react";

const wisataList = [
  {
    title: "Candi Sirah Kencong",
    description: "Candi Sirah Kencong adalah sebuah situs peninggalan Hindu, menjadi salah satu destinasi sejarah yang menarik, terutama bagi para pecinta budaya dan arsitektur kuno. Lokasinya yang berada di kawasan pegunungan juga menambah daya tarik wisata ini sebagai tempat yang memadukan sejarah dengan keindahan alam.",
    image: "/images/candi.jpg",
  },
  {
    title: "Air Terjun Sirah Kencong",
    description: "Untuk mencapai air terjun ini, pengunjung perlu berjalan kaki sejauh kurang lebih 700 meter, yang memberikan pengalaman trekking ringan di tengah suasana perkebunan teh yang sejuk. Dengan ketinggian sekitar 10 meter, air terjun ini menawarkan pemandangan air yang mengalir jernih di atas bebatuan, menciptakan suasana segar dan alami. Kejernihan dan suhu dingin airnya menjadi daya tarik utama, menjadikan Air Terjun Sirah Kencong tempat yang sempurna untuk melepas penat dan menikmati keindahan alam.",
    image: "/images/air_terjun.jpeg",
  },
  {
    title: "Wukir Negoro",
    description: "Berada di ketinggian 2.300 mdpl, lebih tinggi dibandingkan Sirah Kencong yang berada di 1.179 mdpl, Wukir Negoro menyuguhkan pemandangan hijau dari gugusan daun teh yang memanjakan mata. Tempat ini menjadi destinasi favorit untuk menikmati kesejukan pegunungan sekaligus menyaksikan keindahan matahari terbit yang menakjubkan. Dengan udara segar dan suasana yang tenang, Wukir Negoro adalah pilihan sempurna bagi para pencinta alam yang mencari ketenangan dan keindahan di tempat tersembunyi nan menawan.",
    image: "/images/wukir.jpg",
  },
  {
    title: "Villa",
    description: "Villa ini menyediakan kenyamanan lengkap dengan fasilitas modern, seperti ruang tamu luas, kamar tidur yang nyaman, serta kamar mandi pribadi. Pengunjung dapat menikmati ketenangan dan privasi di tengah alam, sambil merasakan udara segar pegunungan. Dengan desain yang elegan dan suasana yang tenang, villa di Sirah Kencong menjadi pilihan sempurna bagi mereka yang mencari liburan yang santai dan menyegarkan.",
    image: "/images/Villa.jpg",
  },
  {
    title: "Glamping",
    description: "Glamping di Sirah Kencong menawarkan pengalaman menginap di tengah alam dengan kenyamanan ala hotel bintang lima. Terletak di kawasan yang sejuk dan dikelilingi pemandangan hijau perkebunan teh, glamping ini memungkinkan pengunjung menikmati udara segar dan keindahan alam tanpa mengorbankan kenyamanan. Dilengkapi dengan fasilitas modern seperti tempat tidur nyaman, kamar mandi pribadi, dan berbagai fasilitas lainnya.",
    image: "/images/glamping.jpg",
  },
  {
    title: "Wahana Permainan Sirah Kencong",
    description: "Sirah Kencong kini semakin menarik dengan hadirnya berbagai wahana seru yang pertama kali ada di Blitar, bahkan di Jawa Timur! Salah satu yang paling mencuri perhatian adalah Keranjang Sultan, sebuah atraksi unik yang cocok untuk spot foto kekinian. Selain itu, terdapat flying fox yang menawarkan pengalaman meluncur dengan adrenalin tinggi, serta penyewaan ATV untuk menjelajahi kawasan dengan sensasi berbeda. ",
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
