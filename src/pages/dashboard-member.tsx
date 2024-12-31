import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import "@/styles/dashboard-member.module.css";

interface Wisata {
  id: number;
  name: string;
  description: string;
  price: number;
}

const MemberDashboard = () => {
  const [wisataList, setWisataList] = useState<Wisata[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Fetch data wisata dari API
    const fetchWisata = async () => {
      const response = await fetch('/api/wisata');
      if (response.ok) {
        const data = await response.json();
        setWisataList(data);
      } else {
        alert('Failed to fetch wisata data');
      }
    };

    fetchWisata();
  }, []);

  const handleCheckout = async (wisataId: number) => {
    setLoading(true);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ wisataId }),
      });

      if (response.ok) {
        const { redirectUrl } = await response.json();
        window.location.href = redirectUrl; // Redirect to Midtrans payment page
      } else {
        alert('Checkout failed');
      }
    } catch (error) {
      console.error('Checkout error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard Member</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {wisataList.map((wisata) => (
          <div
            key={wisata.id}
            className="border p-4 rounded shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{wisata.name}</h2>
            <p>{wisata.description}</p>
            <p className="text-green-500 font-bold">Rp {wisata.price.toLocaleString()}</p>
            <button
              onClick={() => handleCheckout(wisata.id)}
              className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600"
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Checkout'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemberDashboard;
