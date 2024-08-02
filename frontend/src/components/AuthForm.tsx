import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface AuthFormProps {
  type: 'register' | 'login';
}

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post(`${API_URL}/auth/${type}`, { email, password });
      localStorage.setItem('token', response.data.token);
      router.push('/dashboard');
    } catch (err) {
      setError('Authentication failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {error && <p className="error">{error}</p>}
      <button type="submit">{type === 'register' ? 'Register' : 'Login'}</button>
    </form>
  );
};

export default AuthForm;
