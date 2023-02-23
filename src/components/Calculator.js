import React from 'react';

function Calculator() {
  return (
    <div className="main-wrapper">
      <input className="input" type="number" dir="rtl" />
      <ul className="second">
        <li><button type="button">AC</button></li>
        <li><button type="button">+/-</button></li>
        <li><button type="button">%</button></li>
        <li><button className="yellow" type="button">÷</button></li>
      </ul>

      <ul className="second">
        <li><button type="button">7</button></li>
        <li><button type="button">8</button></li>
        <li><button type="button">9</button></li>
        <li><button className="yellow" type="button">x</button></li>
      </ul>

      <ul className="second">
        <li><button type="button">4</button></li>
        <li><button type="button">5</button></li>
        <li><button type="button">6</button></li>
        <li><button className="yellow" type="button">-</button></li>
      </ul>

      <ul className="second">
        <li><button type="button">1</button></li>
        <li><button type="button">2</button></li>
        <li><button type="button">3</button></li>
        <li><button className="yellow" type="button">+</button></li>
      </ul>

      <ul className="second">
        <li className="zero"><button type="button">0</button></li>
        <li><button type="button">.</button></li>
        <li><button className="yellow" type="button">=</button></li>
      </ul>
    </div>
  );
}

export default Calculator;
