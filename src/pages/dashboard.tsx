import React, { useState } from "react";
import styles from '@/styles/dashboard.module.css';

// Helper function for consistent number formatting
const formatPrice = (price: number): string => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

interface Wisata {
  id: number;
  title: string;
  description: string;
  image: string;
  idWisata: number;
}

interface FormData {
  title: string;
  description: string;
  image: string;
  idWisata: string;
}

const initialWisataList: Wisata[] = [
  {
    id: 1,
    title: "Candi Sirah Kencong",
    description: "Temukan ketenangan di tengah jejak sejarah Hindu kuno di Candi Sirah Kencong. Bangunan megah yang berdiri kokoh di tengah alam pegunungan ini memancarkan pesona masa lalu yang berpadu harmonis dengan panorama alam hijau.",
    image: "/images/candi.jpg",
    idWisata: 1
  },
  {
    id: 2,
    title: "Air Terjun Sirah Kencong",
    description: "Rasakan petualangan menyegarkan menuju Air Terjun Sirah Kencong. Dengan trekking ringan sejauh 700 meter, Anda akan disambut oleh gemericik air yang jatuh dari ketinggian 10 meter.",
    image: "/images/air_terjun.jpeg",
    idWisata: 2
  },
  {
    id: 3,
    title: "Wukir Negoro",
    description: "Nikmati panorama spektakuler di ketinggian 2.300 mdpl di Wukir Negoro. Lanskap kebun teh yang memukau dan udara segar pegunungan menjadikan tempat ini sempurna untuk menyaksikan keajaiban matahari terbit. Ideal bagi mereka yang mencari harmoni alam dan ketenangan jiwa.",
    image: "/images/wukir.jpg",
    idWisata: 3
  },
  {
    id: 4,
    title: "Villa",
    description: "Rasakan kenyamanan seperti di rumah sendiri di villa Sirah Kencong. Dengan desain elegan, fasilitas modern, dan suasana yang tenang, villa ini menawarkan pengalaman menginap yang menyegarkan, dikelilingi oleh keindahan pegunungan.",
    image: "/images/Villa.jpg",
    idWisata: 4
  },
  {
    id: 5,
    title: "Glamping",
    description: "Ciptakan kenangan tak terlupakan dengan glamping di Sirah Kencong. Nikmati kenyamanan tempat tidur empuk dan fasilitas modern, semuanya di tengah keindahan alam terbuka. Glamping di sini adalah perpaduan sempurna antara petualangan dan kemewahan.",
    image: "/images/glamping.jpg",
    idWisata: 5
  },
  {
    id: 6,
    title: "Wahana Permainan Sirah Kencong",
    description: "Siap untuk keseruan tak terlupakan? Sirah Kencong menghadirkan wahana unik seperti Keranjang Sultan untuk foto-foto estetik, flying fox yang memacu adrenalin, hingga ATV untuk eksplorasi penuh gaya. Petualangan seru menanti Anda di sini!",
    image: "/images/wahana.jpg",
    idWisata: 6
  },
];

const Dashboard: React.FC = () => {
  const [wisataList, setWisataList] = useState<Wisata[]>(initialWisataList);
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    image: "",
    idWisata: ""
  });
  const [notification, setNotification] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newWisata: Wisata = {
      id: wisataList.length + 1,
      title: formData.title,
      description: formData.description,
      image: formData.image,
      idWisata: parseInt(formData.idWisata)
    };
    setWisataList([...wisataList, newWisata]);
    setNotification(`Wisata "${newWisata.title}" berhasil ditambahkan!`);
    setFormData({
      title: "",
      description: "",
      image: "",
      idWisata: ""
    });

    // Hapus notifikasi setelah 3 detik
    setTimeout(() => setNotification(null), 3000);
  };

  const handleDelete = (id: number) => {
    const deletedWisata = wisataList.find(wisata => wisata.id === id);
    setWisataList(wisataList.filter(wisata => wisata.id !== id));
    setNotification(`Wisata "${deletedWisata?.title}" berhasil dihapus!`);

    // Hapus notifikasi setelah 3 detik
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.card}>
        <h1 className={styles.dashboardTitle}>
          Dashboard Admin - Wisata Sirah Kencong
        </h1>

        {notification && (
          <div className={styles.notification}>{notification}</div>
        )}

        <div className={styles.formSection}>
          <h2 className={styles.sectionTitle}>Tambah Data Wisata</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGrid}>
              <input
                type="text"
                name="title"
                placeholder="Nama Wisata"
                value={formData.title}
                onChange={handleInputChange}
                className={styles.inputField}
                required
              />
              <input
                type="text"
                name="image"
                placeholder="URL Gambar"
                value={formData.image}
                onChange={handleInputChange}
                className={styles.inputField}
                required
              />
              <input
                type="number"
                name="idWisata"
                placeholder="ID Wisata"
                value={formData.idWisata}
                onChange={handleInputChange}
                className={styles.inputField}
                required
              />
            </div>
            <textarea
              name="description"
              placeholder="Deskripsi"
              value={formData.description}
              onChange={handleInputChange}
              className={styles.textArea}
              required
            />
            <button
              type="submit"
              className={styles.buttonPrimary}
            >
              Tambah Wisata
            </button>
          </form>
        </div>

        <div className={styles.tableSection}>
          <h2 className={styles.sectionTitle}>Daftar Wisata</h2>
          <table className={styles.table}>
            <thead>
              <tr className={styles.tableHeader}>
                <th>Nama</th>
                <th>Deskripsi</th>
                <th>ID Wisata</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {wisataList.map((wisata) => (
                <tr key={wisata.id} className={styles.tableRow}>
                  <td>{wisata.title}</td>
                  <td className={styles.descriptionCell}>
                    {wisata.description.length > 100
                      ? `${wisata.description.substring(0, 100)}...`
                      : wisata.description}
                  </td>
                  <td>{wisata.idWisata}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(wisata.id)}
                      className={styles.buttonDanger}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
