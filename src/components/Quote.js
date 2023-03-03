import React from 'react';
import styles from '../styles/Quote.module.css';

function Quote() {
  return (
    <div>
      <p className={styles.qoute}>
        {' '}
        Mathematics is not about number, equations, computations, or
        algorithms: it is about understanding. -William Paul Thurston
      </p>

    </div>
  );
}

export default Quote;
