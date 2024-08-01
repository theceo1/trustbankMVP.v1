import React from 'react';
import styles from '../../styles/Auth.module.css';

type FormProps = {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent) => void;
};

const Form: React.FC<FormProps> = ({ children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      {children}
    </form>
  );
};

export default Form;
