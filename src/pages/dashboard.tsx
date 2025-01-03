import React, { useState, useEffect } from "react";
import styles from "@/styles/dashboard.module.css";
import { paketWisata } from "@/pages/pemesanan/index";

interface Wisata {
  id: number;
  name: string;
  description: string;
  price: string;
}

const Dashboard: React.FC = () => {
  const [wisataList, setWisataList] = useState<Wisata[]>(paketWisata.map((paket, index) => ({
    id: index + 1,
    name: paket.name,
    description: paket.includes.join(", "), // joining the includes array into a string
    price: paket.price,
  })));  // Menggunakan data dari wisataData
  const [formData, setFormData] = useState({ name: "", description: "", price: "" });
  const [notification, setNotification] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Fungsi fetchWisata dapat diubah jika Anda mengambil data dari API atau state lokal
  useEffect(() => {
    // Di sini Anda dapat menggunakan fetch untuk mengambil data dari API, jika ada
    // Misalnya fetchWisata();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddWisata = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.description || !formData.price) {
      setNotification("Harap isi semua field.");
      setTimeout(() => setNotification(null), 3000);
      return;
    }

    if (isNaN(parseFloat(formData.price))) {
      setNotification("Harga harus berupa angka.");
      setTimeout(() => setNotification(null), 3000);
      return;
    }

    // Anda dapat menambahkan wisata baru ke wisataList
    const newWisata = {
      id: wisataList.length + 1,
      name: formData.name,
      description: formData.description,
      price: formData.price,
    };

    setWisataList([...wisataList, newWisata]);
    setNotification("Wisata berhasil ditambahkan!");
    setFormData({ name: "", description: "", price: "" });

    setTimeout(() => setNotification(null), 3000);
  };

  const handleDeleteWisata = (id: number) => {
    setWisataList(wisataList.filter(wisata => wisata.id !== id));
    setNotification("Wisata berhasil dihapus!");
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className={styles.dashboardContainer}>
      <h1 className={styles.dashboardTitle}>Tambah Data Paket Wisata</h1>
      {notification && <p className={styles.notification}>{notification}</p>}
      {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={handleAddWisata} className={styles.form}>
        <input
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Nama Wisata"
          className={styles.inputField}
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Deskripsi"
          className={styles.inputField}
        />
        <input
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          placeholder="Harga"
          className={styles.inputField}
        />
        <button type="submit" className={styles.buttonPrimary}>Tambah Paket Wisata</button>
      </form>

      <h2 className={styles.sectionTitle}>Daftar Paket Wisata</h2>
      <table className={styles.table}>
        <thead className={styles.tableHeader}>
          <tr>
            <th>Nama</th>
            <th>Deskripsi</th>
            <th>Harga</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {wisataList.map((wisata) => (
            <tr key={wisata.id} className={styles.tableRow}>
              <td>{wisata.name}</td>
              <td>{wisata.description}</td>
              <td>Rp {parseFloat(wisata.price).toLocaleString()}</td>
              <td>
                <button className={styles.buttonPrimary}>Checkout</button>
                <button
                  onClick={() => handleDeleteWisata(wisata.id)}
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
  );
};

export default Dashboard;
