import '../global.css'
import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onclick: () => void;
}

export default function Button({ children, type, onclick }: ButtonProps) {
  let has_type: boolean;
  has_type = (type !== undefined);

  return (
    <>
      {
        has_type ?
        <button className={styles.button} onClick={onclick} type={type}>
          {children}
        </button>
        :
        <button className={styles.button} onClick={onclick}>
          {children}
        </button>
      }
    </>
  );
}
