import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/dashboard.module.css';

const Dashboard = () => {
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchDashboardData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('Token is missing');
        router.push('/login');
        return;
      }

      try {
        const response = await fetch('/api/dashboard', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setMessage(data.message);
        } else {
          console.error('Unauthorized or failed response', response.status);
          router.push('/login');
        }
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        router.push('/login');
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.dashboardContainer}>
      <h1 className={styles.dashboardTitle}>Admin Dashboard</h1>
      <p className={styles.dashboardMessage}>{message}</p>
    </div>
  );
};

export default Dashboard;
