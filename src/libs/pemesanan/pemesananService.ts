import { db } from ""
import firebase from "firebase/app";

// Fungsi untuk menambahkan pemesanan ke Firestore
export const tambahPemesanan = async (nama: string, pesanan: string, tanggal: string) => {
  try {
    const hasil = await db.collection("pemesanan").add({
      nama,
      pesanan,
      tanggal,
      dibuatPada: firebase.firestore.FieldValue.serverTimestamp(),
    });
    console.log("Pemesanan berhasil ditambahkan, ID:", hasil.id);
  } catch (error) {
    console.error("Gagal menambahkan data:", error);
  }
};