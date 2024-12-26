import React from "react";
import { AppProps } from "next/app"; // Import tipe AppProps
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar /> {/* Navbar tetap tampil di semua halaman */}
      <main style={{ flex: "1" }}>
        <Component {...pageProps} /> {/* Render komponen halaman */}
      </main>
      <Footer /> {/* Footer tetap tampil di semua halaman */}
    </div>
  );
}

export default MyApp;
