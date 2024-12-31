import { useState, useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import styles from "@/styles/dashboard.module.css"; // Menggunakan modul CSS

const Dashboard = () => {
  const [wisataList, setWisataList] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    idMember: "",
  });

  useEffect(() => {
    fetchWisataData();
  }, []);

  const fetchWisataData = async () => {
    try {
      const response = await axios.get("/api/wisata");
      setWisataList(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/api/wisata", formData);
      setFormData({ name: "", description: "", price: "", idMember: "" });
      fetchWisataData();
    } catch (error) {
      console.error("Error adding wisata", error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`/api/wisata/${id}`);
      fetchWisataData();
    } catch (error) {
      console.error("Error deleting wisata", error);
    }
  };

  return (
    <div className={styles.dashboardContainer}>
      <Head>
        <title>Dashboard Admin - Wisata</title>
      </Head>

      <header className={styles.dashboardTitle}>
        Dashboard Admin - Wisata
      </header>

      <main className={styles.dashboardMain}>
        <section className={styles.formSection}>
          <h2 className={styles.sectionTitle}>Tambah Data Wisata</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Nama Wisata"
              value={formData.name}
              onChange={handleInputChange}
              className={styles.inputField}
              required
            />
            <textarea
              name="description"
              placeholder="Deskripsi"
              value={formData.description}
              onChange={handleInputChange}
              className={styles.inputField}
              required
            ></textarea>
            <input
              type="number"
              name="price"
              placeholder="Harga"
              value={formData.price}
              onChange={handleInputChange}
              className={styles.inputField}
              required
            />
            <input
              type="number"
              name="idMember"
              placeholder="ID Member"
              value={formData.idMember}
              onChange={handleInputChange}
              className={styles.inputField}
              required
            />
            <button type="submit" className={styles.buttonPrimary}>
              Tambah Wisata
            </button>
          </form>
        </section>

        <section className={styles.tableSection}>
          <h2 className={styles.sectionTitle}>Daftar Wisata</h2>
          <table className={styles.table}>
            <thead>
              <tr className={styles.tableHeader}>
                <th>Nama</th>
                <th>Deskripsi</th>
                <th>Harga</th>
                <th>ID Member</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {wisataList.map((wisata: any) => (
                <tr key={wisata.id} className={styles.tableRow}>
                  <td>{wisata.name}</td>
                  <td>{wisata.description}</td>
                  <td>{wisata.price}</td>
                  <td>{wisata.idMember}</td>
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
        </section>
      </main>
    </div>
  );
};

export default Dashboard;