import React from 'react';
import AuthForm from '../components/AuthForm';

const Login: React.FC = () => {
  return (
    <div className="auth-container">
      <h2>Login</h2>
      <AuthForm type="login" />
    </div>
  );
};

export default Login;
