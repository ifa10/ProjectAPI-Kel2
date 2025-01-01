import React, { createContext, useState, ReactNode } from "react";

interface Wisata {
  id: number;
  title: string;
  description: string;
  image: string;
  idWisata: number;
}

interface WisataContextProps {
  wisataList: Wisata[];
  addWisata: (newWisata: Wisata) => void;
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

export const WisataContext = createContext<WisataContextProps | undefined>(
  undefined
);

export const WisataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [wisataList, setWisataList] = useState<Wisata[]>(initialWisataList);

  const addWisata = (newWisata: Wisata) => {
    setWisataList((prev) => [...prev, newWisata]);
  };

  return (
    <WisataContext.Provider value={{ wisataList, addWisata }}>
      {children}
    </WisataContext.Provider>
  );
};
