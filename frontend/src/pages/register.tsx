import React from 'react';
import AuthForm from '../components/AuthForm';

const Register: React.FC = () => {
  return (
    <div className="auth-container">
      <h2>Register</h2>
      <AuthForm type="register" />
    </div>
  );
};

export default Register;
