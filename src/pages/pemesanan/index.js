// import React, { useState } from "react";

// const wisataList = [
//   {
//     title: "Candi Sirah Kencong",
//     description: "Desa Sirah Kencong, Kecamatan Wlingi, Kabupaten Blitar, Jawa Timur",
//     image: "/images/candi.jpg",
//   },
//   {
//     title: "Air Terjun Sirah Kencong",
//     description: "Desa Sirah Kencong, Kecamatan Wlingi, Kabupaten Blitar, Jawa Timur",
//     image: "/images/air_terjun.jpeg",
//   },
//   {
//     title: "Wukir Negoro",
//     description: "Desa Sirah Kencong, Kecamatan Wlingi, Kabupaten Blitar, Jawa Timur",
//     image: "/images/wukir.jpg",
//   },
//   {
//     title: "Villa",
//     description: "Desa Sirah Kencong, Kecamatan Wlingi, Kabupaten Blitar, Jawa Timur",
//     image: "/images/Villa.jpg",
//   },
//   {
//     title: "Glamping",
//     description: "Desa Sirah Kencong, Kecamatan Wlingi, Kabupaten Blitar, Jawa Timur",
//     image: "/images/glamping.jpg",
//   },
//   {
//     title: "Wahana Permainan Sirah Kencong",
//     description: "Desa Sirah Kencong, Kecamatan Wlingi, Kabupaten Blitar, Jawa Timur",
//     image: "/images/wahana.jpg",
//   },
// ];

// export const paketWisata = [
//   {
//     id:1,
//     name: "Paket A",
//     price: "150.000",
//     includes: ["Candi Sirah Kencong", "Air Terjun Sirah Kencong"],
//   },
//   {
//     id:2,
//     name: "Paket B",
//     price: "200.000",
//     includes: ["Wukir Negoro", "Wahana Permainan Sirah Kencong"],
//   },
//   {
//     id:3,
//     name: "Paket D",
//     price: "1.250.000",
//     includes: [
//       "Menginap di vila dengan pemandangan perkebunan teh",
//       "Wisata ke Candi Sirah Kencong",
//       "Menikmati keindahan air terjun",
//       "Relaksasi di area perkebunan teh",
//     ],
//   },
//   {
//     id:4,
//     name: "Paket E",
//     price: "1.350.000",
//     includes: [
//       "Menginap di area glamping",
//       "Trekking menuju puncak Gunung Butak",
//       "Menikmati sunrise di puncak gunung",
//       "Wisata ke air terjun untuk bermain air dan berfoto",
//     ],
//   },
//   {
//     id:5,
//     name: "Paket F",
//     price: "2.500.000",
//     includes: [
//       "Kombinasi vila dan glamping (1 malam di vila, 1 malam di glamping)",
//       "Trekking ke puncak Gunung Butak",
//       "Wisata sejarah ke Candi Sirah Kencong",
//       "Eksplorasi air terjun",
//     ],
//   },
// ];

// const Wisata = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [selectedPaketIndex, setSelectedPaketIndex] = useState(null);

//   const handlePaketSelect = (index) => {
//     setSelectedPaketIndex(index);
//   };

//   const handlePesan = (paket) => {
//     const paymentUrl = "https://app.sandbox.midtrans.com/payment-links/1735740256410";
//     window.location.href = paymentUrl;
//   };

//   const filteredWisataList =
//     selectedPaketIndex !== null
//       ? wisataList.filter((wisata) =>
//           paketWisata[selectedPaketIndex]?.includes?.includes(wisata.title)
//         )
//       : wisataList;

//   return (
//     <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
//       <main style={{ flex: 1, padding: "20px", backgroundColor: "#f8f9fa" }}>
//         <h1 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "20px", color: "#333" }}>
//           Pilihan Wisata
//         </h1>
//         <p style={{ textAlign: "center", fontSize: "1rem", color: "#555", marginBottom: "30px" }}>
//           Berikut adalah pilihan paket wisata menarik di kawasan Sirah Kencong yang dapat Anda kunjungi.
//         </p>

//         <h2 style={{ textAlign: "center", fontSize: "1.5rem", marginBottom: "20px", color: "#333" }}>
//           Paket Wisata
//         </h2>
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//             gap: "20px",
//             marginBottom: "30px",
//           }}
//         >
//           {paketWisata.map((paket, index) => (
//             <div
//               key={index}
//               onClick={() => handlePaketSelect(index)}
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//               style={{
//                 backgroundColor: selectedPaketIndex === index ? "#e0f7fa" : "#ffffff",
//                 borderRadius: "10px",
//                 padding: "15px",
//                 boxShadow:
//                   hoveredIndex === index
//                     ? "0 8px 16px rgba(0, 0, 0, 0.2)"
//                     : "0 4px 6px rgba(0, 0, 0, 0.1)",
//                 transform: hoveredIndex === index ? "translateY(-5px)" : "translateY(0)",
//                 transition: "transform 0.3s ease, box-shadow 0.3s ease",
//                 textAlign: "center",
//                 cursor: "pointer",
//               }}
//             >
//               <h3 style={{ fontSize: "1.25rem", color: "#00796b", marginBottom: "10px" }}>
//                 {paket.name}
//               </h3>
//               <p style={{ fontSize: "1rem", color: "#555", marginBottom: "10px" }}>
//                 Harga: Rp {paket.price}
//               </p>
//               <p style={{ fontSize: "1rem", color: "#555" }}>Termasuk:</p>
//               <ul style={{ listStyleType: "circle", padding: "0 20px", textAlign: "left" }}>
//                 {paket.includes.map((item, idx) => (
//                   <li key={idx} style={{ fontSize: "1rem", color: "#555" }}>
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handlePesan(paket);
//                 }}
//                 style={{
//                   backgroundColor: "#00796b",
//                   color: "#fff",
//                   padding: "10px 20px",
//                   border: "none",
//                   borderRadius: "5px",
//                   cursor: "pointer",
//                   marginTop: "10px",
//                 }}
//               >
//                 Pesan Sekarang
//               </button>
//             </div>
//           ))}
//         </div>

//         <h2 style={{ textAlign: "center", fontSize: "1.5rem", marginBottom: "20px", color: "#333" }}>
//           Destinasi Wisata
//         </h2>
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//             gap: "20px",
//             marginTop: "10px",
//           }}
//         >
//           {filteredWisataList.map((wisata, index) => (
//             <div
//               key={index}
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//               style={{
//                 backgroundColor: "white",
//                 borderRadius: "10px",
//                 overflow: "hidden",
//                 boxShadow:
//                   hoveredIndex === index
//                     ? "0 8px 16px rgba(0, 0, 0, 0.2)"
//                     : "0 4px 6px rgba(0, 0, 0, 0.1)",
//                 transform: hoveredIndex === index ? "translateY(-5px)" : "translateY(0)",
//                 transition: "transform 0.3s ease, box-shadow 0.3s ease",
//                 cursor: "pointer",
//               }}
//             >
//               <img
//                 src={wisata.image}
//                 alt={wisata.title}
//                 style={{ width: "100%", height: "200px", objectFit: "cover" }}
//               />
//               <div style={{ padding: "15px" }}>
//                 <h3 style={{ fontSize: "1.25rem", color: "#004d40" }}>{wisata.title}</h3>
//                 <p
//                   style={{
//                     fontSize: "1rem",
//                     color: "#555",
//                     lineHeight: "1.5",
//                     textAlign: "justify",
//                   }}
//                 >
//                   {wisata.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Wisata;
