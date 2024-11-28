import React from 'react';

const FoodChoice = ({ title, options, selected, onChange, multiSelect = false }) => {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {options.map(option => (
          <li key={option}>
            <label>
              <input
                type={multiSelect ? 'checkbox' : 'radio'}
                value={option}
                checked={multiSelect ? selected.includes(option) : selected === option}
                onChange={() => onChange(option)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodChoice;
