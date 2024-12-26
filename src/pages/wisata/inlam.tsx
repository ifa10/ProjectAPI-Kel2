// import React from "react";
// import Navbar from "@/components/navbar";
// import Footer from "@/components/footer";

// const wisataList = [
//   {
//     title: "Taman Nasional Baluran",
//     description: "Desa Wonorejo, Kecamatan Banyuwangi, Kabupaten Situbondo, Jawa Timur",
//     image: "/images/baluran.jpg",
//   },
//   {
//     title: "Ekowisata Kampung Blekok",
//     description: "Desa Klatakan, Kecamatan Kendit, Kabupaten Situbondo, Jawa Timur",
//     image: "/images/blekok.jpg",
//   },
//   {
//     title: "Air Terjun Talempong",
//     description: "Desa Talempong, Kecamatan Banyuglugur, Kabupaten Situbondo, Jawa Timur",
//     image: "/images/talempong.jpg",
//   },
//   {
//     title: "Pantai Tampora",
//     description: "Desa Kalianget, Kecamatan Banyuglugur, Kabupaten Situbondo, Jawa Timur",
//     image: "/images/tampora.jpg",
//   },
//   {
//     title: "Pantai Dubibir",
//     description: "Pesisir Desa Ketah, Kecamatan Suboh, Kabupaten Situbondo, Jawa Timur",
//     image: "/images/dubibir.jpg",
//   },
//   {
//     title: "Agrowisata Kayumas",
//     description: "Desa Kayumas, Kecamatan Arjasa, Kabupaten Situbondo, Jawa Timur",
//     image: "/images/kayumas.jpg",
//   },
//   {
//     title: "Situbondo Adventure Samir",
//     description: "Dusun Samir, Desa Bantul, Kecamatan Asembagus, Kabupaten Situbondo, Jawa Timur",
//     image: "/images/adventure-samir.jpg",
//   },
//   {
//     title: "Agrowisata Banongan",
//     description: "Desa Wringinanom, Kecamatan Asembagus, Kabupaten Situbondo, Jawa Timur",
//     image: "/images/banongan.jpg",
//   },
//   {
//     title: "Pantai Pasir Putih",
//     description: "Desa Pasir Putih, Kecamatan Bungatan, Kabupaten Situbondo, Jawa Timur",
//     image: "/images/pasir-putih.jpg",
//   },
// ];

// const WisataPage: React.FC = () => {
//   return (
//     <div style={{ fontFamily: "Arial, sans-serif" }}>
//       <Navbar />

//       <div style={{ padding: "80px 20px", backgroundColor: "#f8f9fa" }}>
//         <h1
//           style={{
//             textAlign: "center",
//             fontSize: "2.5rem",
//             marginBottom: "30px",
//             color: "#343a40",
//           }}
//         >
//           Wisata Alam di Situbondo
//         </h1>
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//             gap: "20px",
//             padding: "0 20px",
//           }}
//         >
//           {wisataList.map((wisata, index) => (
//             <div
//               key={index}
//               style={{
//                 backgroundColor: "white",
//                 borderRadius: "10px",
//                 boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//                 overflow: "hidden",
//                 transition: "transform 0.3s ease",
//               }}
//             >
//               <img
//                 src={wisata.image}
//                 alt={wisata.title}
//                 style={{ width: "100%", height: "200px", objectFit: "cover" }}
//               />
//               <div style={{ padding: "15px" }}>
//                 <h3 style={{ fontSize: "1.5rem", marginBottom: "10px", color: "#004d40" }}>
//                   {wisata.title}
//                 </h3>
//                 <p style={{ fontSize: "1rem", color: "#555" }}>{wisata.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default WisataPage;
