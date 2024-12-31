// // pages/dashboard.tsx
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';

// const Dashboard = () => {
//   const [message, setMessage] = useState('');
//   const router = useRouter();

//   useEffect(() => {
//     const fetchDashboard = async () => {
//       const token = localStorage.getItem('token');
//       const response = await fetch('/api/dashboard', {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setMessage(data.message);
//       } else {
//         router.push('/'); // Jika tidak diizinkan, arahkan ke login
//       }
//     };

//     fetchDashboard();
//   }, [router]);

//   return <div>{message}</div>;
// };

// export default Dashboard;
