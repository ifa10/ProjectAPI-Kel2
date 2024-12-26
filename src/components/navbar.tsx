import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Import untuk menangani gambar

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const linkStyle: React.CSSProperties = {
    textDecoration: "none",
    color: "white",
    fontSize: "1rem",
    padding: "10px 15px",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
    display: "inline-block",
    textAlign: "center",
    margin: "0 10px",
  };

  const dropdownStyle: React.CSSProperties = {
    position: "absolute",
    top: "100%",
    right: 0,
    backgroundColor: "white",
    borderRadius: "5px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    zIndex: 10,
    display: isDropdownOpen ? "block" : "none",
  };

  const dropdownItemStyle: React.CSSProperties = {
    padding: "10px 20px",
    color: "#333",
    textDecoration: "none",
    display: "block",
    transition: "background-color 0.3s ease",
  };

  return (
    <nav
      style={{
        backgroundColor: "#004d40",
        padding: "0 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 100,
        height: "70px", // Tinggi navbar
      }}
    >
      {/* Logo dan Tulisan Sirah Kencong */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Image
          src="/images/logo.png" // Path ke logo
          alt="Logo Sirah Kencong"
          width={60} // Lebar logo lebih besar
          height={60} // Tinggi logo lebih besar
          priority // Properti Next.js untuk memberi prioritas pada gambar
        />
        <span
          style={{
            marginLeft: "10px",
            color: "white",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          Sirah Kencong
        </span>
      </div>

      <ul
        style={{
          listStyle: "none",
          display: "flex",
          alignItems: "center",
          margin: 0,
          padding: 0,
          marginLeft: "30px",
        }}
        className="navbar-menu"
      >
        {[{ href: "/", label: "Home" }, { href: "/wisata", label: "Wisata" }, { href: "/pemesanan", label: "Pemesanan" }].map(({ href, label }) => (
          <li key={href}>
            <Link href={href} legacyBehavior>
              <a style={linkStyle}>{label}</a>
            </Link>
          </li>
        ))}
        <li style={{ position: "relative" }}>
          <button
            style={{
              ...linkStyle,
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
            }}
            onClick={toggleDropdown}
          >
            Login
          </button>
          <ul style={dropdownStyle}>
            {[{ href: "/loginAdmin", label: "Admin" }, { href: "/loginClient", label: "Member" }].map(({ href, label }) => (
              <li key={href}>
                <Link href={href} legacyBehavior>
                  <a style={dropdownItemStyle}>{label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
