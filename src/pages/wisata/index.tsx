import React, { useState } from "react";

const wisataList = [
  {
    title: "Candi Sirah Kencong",
    description:
      "Temukan ketenangan di tengah jejak sejarah Hindu kuno di Candi Sirah Kencong, sebuah monumen yang menyimpan nilai budaya dan spiritual yang tinggi. Bangunan megah ini berdiri kokoh di tengah alam pegunungan yang sejuk, dikelilingi oleh hamparan hijau yang memanjakan mata. Setiap sudut candi ini bercerita tentang kejayaan masa lalu, dengan ukiran yang detail dan batu-batu yang telah menyaksikan perjalanan waktu. Suasana di sekitar candi begitu hening, membuatnya tempat yang sempurna untuk merenung atau bermeditasi. Pengunjung juga dapat menikmati panorama pegunungan yang indah, menjadikan kunjungan ke sini pengalaman yang menyejukkan jiwa sekaligus mendidik. Jangan lupa untuk mengabadikan momen di tempat bersejarah ini, yang merupakan perpaduan sempurna antara arsitektur kuno dan keindahan alam.",
    image: "/images/candi.jpg",
  },
  {
    title: "Air Terjun Sirah Kencong",
    description:
      "Rasakan petualangan menyegarkan menuju Air Terjun Sirah Kencong, destinasi yang menawarkan keindahan alami yang luar biasa. Dengan trekking ringan sejauh 700 meter, perjalanan Anda akan dihiasi oleh suara gemerisik daun, aroma segar pepohonan, dan kicauan burung yang menemani setiap langkah. Setibanya di air terjun, Anda akan disambut oleh pemandangan air yang jatuh dari ketinggian 10 meter, menciptakan tirai air alami yang memukau. Udara di sekitar air terjun begitu sejuk, membuat siapa pun merasa segar dan rileks. Anda bisa merasakan percikan air yang jernih dan menyentuh dinginnya kolam di bawahnya. Tempat ini cocok untuk bersantai, menikmati piknik, atau sekadar menikmati harmoni alam yang menenangkan. Pastikan untuk membawa kamera karena setiap sudut di sini layak untuk diabadikan.",
    image: "/images/air_terjun.jpeg",
  },
  {
    title: "Wukir Negoro",
    description:
      "Nikmati panorama spektakuler di ketinggian 2.300 mdpl di Wukir Negoro, sebuah destinasi yang menjanjikan pengalaman tak terlupakan. Tempat ini dikenal dengan lanskap kebun teh yang memukau, di mana hijaunya dedaunan membentang sejauh mata memandang. Saat pagi tiba, Wukir Negoro menjadi tempat yang sempurna untuk menyaksikan keajaiban matahari terbit. Perlahan, langit berubah warna menjadi semburat jingga dan emas, menciptakan suasana magis yang sulit diungkapkan dengan kata-kata. Selain itu, udara segar pegunungan di sini memberikan rasa tenang dan menyegarkan, ideal untuk melepaskan penat dari kesibukan sehari-hari. Wukir Negoro juga merupakan surga bagi para fotografer yang mencari momen indah untuk diabadikan. Datanglah dan rasakan harmoni antara alam dan kedamaian di tempat ini.",
    image: "/images/wukir.jpg",
  },
  {
    title: "Villa",
    description:
      "Rasakan kenyamanan seperti di rumah sendiri di Villa Sirah Kencong, tempat menginap yang menawarkan pengalaman istimewa di tengah keindahan pegunungan. Dengan desain interior yang elegan dan fasilitas modern, villa ini menjadi pilihan ideal bagi mereka yang mencari kenyamanan dan ketenangan. Setiap kamar dirancang dengan detail untuk memberikan suasana hangat dan akrab, dilengkapi dengan pemandangan langsung ke alam sekitar yang memukau. Anda bisa bersantai di balkon sambil menikmati secangkir teh atau kopi, mendengarkan suara alam yang menenangkan. Lokasi villa yang strategis juga memudahkan Anda untuk menjelajahi destinasi wisata lainnya di Sirah Kencong. Nikmati pengalaman menginap yang tidak hanya menyegarkan tubuh, tetapi juga pikiran dan jiwa.",
    image: "/images/Villa.jpg",
  },
  {
    title: "Glamping",
    description:
      "Ciptakan kenangan tak terlupakan dengan glamping di Sirah Kencong, pengalaman unik yang memadukan petualangan dan kenyamanan. Berbeda dengan camping tradisional, glamping di sini menawarkan fasilitas lengkap seperti tempat tidur empuk, kamar mandi modern, dan dekorasi yang estetik, semuanya di tengah keindahan alam terbuka. Anda bisa menikmati malam yang hangat di sekitar api unggun sambil menyaksikan langit malam yang dipenuhi bintang-bintang. Saat pagi tiba, udara segar pegunungan dan pemandangan indah akan menyambut Anda. Glamping di Sirah Kencong sangat cocok bagi pasangan, keluarga, atau kelompok teman yang ingin menikmati suasana alam tanpa harus mengorbankan kenyamanan. Ini adalah cara sempurna untuk melarikan diri dari rutinitas dan menyatu dengan alam.",
    image: "/images/glamping.jpg",
  },
  {
    title: "Wahana Permainan Sirah Kencong",
    description:
      "Siap untuk keseruan tak terlupakan? Wahana Permainan Sirah Kencong adalah tempat yang tepat untuk menikmati berbagai aktivitas menarik bersama keluarga dan teman. Di sini, Anda dapat mencoba Keranjang Sultan, wahana foto yang dirancang untuk menciptakan momen estetik. Bagi pecinta adrenalin, flying fox menawarkan sensasi meluncur di atas lanskap indah. Jika Anda lebih suka petualangan darat, ATV tersedia untuk eksplorasi penuh gaya di jalur-jalur yang menantang. Selain itu, ada juga berbagai permainan anak yang membuat tempat ini cocok untuk semua usia. Dengan suasana yang menyenangkan dan fasilitas yang aman, Wahana Permainan Sirah Kencong memastikan setiap pengunjung membawa pulang pengalaman penuh kebahagiaan.",
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
        backgroundColor: "#f0fff4",
      }}
    >
      <main style={{ flex: 1, padding: "20px" }}>
        {/* Header */}
        <div style={{ marginTop: "100px", marginBottom: "30px" }}></div>
        <h1
          style={{
            textAlign: "center",
            fontSize: "3rem",
            marginBottom: "20px",
            color: "#006400",
          }}
        >
          Pilihan Wisata
        </h1>
        <p
          style={{
            textAlign: "center",
            fontSize: "1rem",
            color: "#2f4f4f",
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
                backgroundColor: selectedIndex === index ? "#98fb98" : "#ffffff",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow:
                  hoveredIndex === index
                    ? "0 8px 16px rgba(0, 128, 0, 0.2)"
                    : "0 4px 8px rgba(0, 0, 0, 0.1)",
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
                  borderBottom: "2px solid #90ee90",
                }}
              />

              {/* Content */}
              <div style={{ padding: "15px" }}>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    color: selectedIndex === index ? "#006400" : "#228b22",
                    marginBottom: "10px",
                  }}
                >
                  {wisata.title}
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "#2f4f4f",
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
