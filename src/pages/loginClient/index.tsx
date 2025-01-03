import { useState } from 'react';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import styles from '@/styles/loginMember.module.css'; // Import styles module

const LoginMember = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    const response = await fetch('/api/member-login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('token', data.token);
      router.push('/member-dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const response = await fetch('/api/member-signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      alert('Account created successfully. You can now log in.');
      setIsSignUp(false);
    } else {
      alert('Failed to create account. Please try again.');
    }
  };

  const handleGoogleLogin = async () => {
    signIn('google', { callbackUrl: '/member-dashboard' });
  };

  return (
    <div className={styles['login-container']}>
      <div className={styles['login-form']}>
        <h1 className={styles['login-title']}>
          {isSignUp ? 'Sign Up Member' : 'Login Member'}
        </h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles['input-field']}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles['input-field']}
        />
        {isSignUp && (
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={styles['input-field']}
          />
        )}
        <button
          onClick={isSignUp ? handleSignUp : handleLogin}
          className={styles['login-btn']}
        >
          {isSignUp ? 'Sign Up' : 'Login'}
        </button>
        <p className={styles['toggle-auth']}>
          {isSignUp ? (
            <>
              Already have an account?{' '}
              <span onClick={() => setIsSignUp(false)} className={styles['auth-link']}>
                Login here
              </span>
            </>
          ) : (
            <>
              Don't have an account?{' '}
              <span onClick={() => setIsSignUp(true)} className={styles['auth-link']}>
                Sign up here
              </span>
            </>
          )}
        </p>
        {!isSignUp && (
          <>
            <p className={styles['forgot-password']}>
              Forgot your password? <a href="/reset-password">Reset it here</a>
            </p>
            <hr className={styles['divider']} />
            <button
              onClick={handleGoogleLogin}
              className={styles['google-login-btn']}
            >
              Login with Google
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginMember;
