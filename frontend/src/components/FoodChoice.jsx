import React from 'react';
import styles from './FoodChoice.module.css';

const FoodChoice = ({ title, options, selected, onChange, multiSelect = false }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.list}>
        {options.map(option => (
          <li key={option} className={styles.listItem}>
            <label className={styles.label}>
              <input
                className={styles.input}
                type={multiSelect ? 'checkbox' : 'radio'}
                value={option}
                checked={multiSelect ? selected.includes(option) : selected === option}
                onChange={() => onChange(option)}
              />
              <span>{option}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodChoice;
