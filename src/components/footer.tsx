import React from "react";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa"; // Import ikon dari react-icons
import styles from "@/styles/footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Logo dan Deskripsi */}
        <div className={styles.section}>
          <Image
            src="/images/logo.png" // Path gambar
            alt="Logo"
            width={100} // Atur ukuran lebar gambar
            height={100} // Atur ukuran tinggi gambar
            priority // Tambahkan priority untuk memuat gambar lebih cepat
            className={styles.logo} // Tambahkan class untuk styling
          />
          <p>Dinas Pariwisata<br />Kabupaten Blitar</p>
          <p>FOLLOW US</p>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
              <FaFacebook size={24} /> Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
              <FaTwitter size={24} /> Twitter
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
              <FaYoutube size={24} /> YouTube
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
              <FaInstagram size={24} /> Instagram
            </a>
          </div>
        </div>

        {/* Link Terkait */}
        <div className={styles.section}>
          <h4>Link Terkait</h4>
          <ul className={styles.links}>
            <li><a href="#">Home</a></li>
            <li><a href="#">Wisata</a></li>
            <li><a href="#">Pemesanan</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </div>

        {/* Alamat Kami */}
        <div className={styles.section}>
          <h4>Alamat Kami</h4>
          <p>
            📞 0338 676072<br />
            📧 disparblitarkab@gmail.com<br />
            📍 Sirah kencong, Ngadirenggo, Wlingi, Kab Blitar
          </p>
        </div>
      </div>
      <p className={styles.copyright}>
        © {new Date().getFullYear()} Dinas Pariwisata Kabupaten Blitar
      </p>
    </footer>
  );
};

export default Footer;
