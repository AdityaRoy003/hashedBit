// src/Calculator.js
import React, { useState } from 'react';
import './Calculator.css'; // Import the CSS file

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleAddition = () => {
    setResult(Number(num1) + Number(num2));
  };

  const handleSubtraction = () => {
    setResult(Number(num1) - Number(num2));
  };

  const handleMultiplication = () => {
    setResult(Number(num1) * Number(num2));
  };

  const handleDivision = () => {
    if (num2 !== '0') {
      setResult(Number(num1) / Number(num2));
    } else {
      alert("Cannot divide by zero");
    }
  };

  return (
    <div className="calculator">
      <h2>Calculator</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
        className="input-field"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
        className="input-field"
      />
      <div className="button-container">
        <button onClick={handleAddition} className="calc-button">+</button>
        <button onClick={handleSubtraction} className="calc-button">-</button>
        <button onClick={handleMultiplication} className="calc-button">*</button>
        <button onClick={handleDivision} className="calc-button">/</button>
      </div>
      <div className="result">
        <h3>Result: {result !== null ? result : '0'}</h3>
      </div>
    </div>
  );
};

export default Calculator;