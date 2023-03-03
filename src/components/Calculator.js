import React, { useState } from 'react';
import calculate from './Logic/Calc';

function Calculator() {
  const [calculation, setCalculation] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    const buttonName = e.currentTarget.textContent;
    const newState = calculate(calculation, buttonName);
    setCalculation(newState);
  };

  const { total, next, operation } = calculation;

  return (
    <div className="main-wrapper">
      <h3>Let us do some math!</h3>
      <div className="calContainer">
        <div className="input">
          {total}
          {operation}
          {next}
        </div>
        <ul className="second">
          <li><button name="AC" type="button" onClick={handleClick}>AC</button></li>
          <li><button name="+/-" type="button" onClick={handleClick}>+/-</button></li>
          <li><button name="%" type="button" onClick={handleClick}>%</button></li>
          <li>
            <button name="÷" className="yellow" type="button" onClick={handleClick}>
              ÷
            </button>
          </li>
        </ul>

        <ul className="second">
          <li><button name="7" type="button" onClick={handleClick}>7</button></li>
          <li><button name="8" type="button" onClick={handleClick}>8</button></li>
          <li><button name="9" type="button" onClick={handleClick}>9</button></li>
          <li>
            <button name="x" className="yellow" type="button" onClick={handleClick}>
              x
            </button>
          </li>
        </ul>

        <ul className="second">
          <li><button name="4" type="button" onClick={handleClick}>4</button></li>
          <li><button name="5" type="button" onClick={handleClick}>5</button></li>
          <li><button name="6" type="button" onClick={handleClick}>6</button></li>
          <li>
            <button name="-" className="yellow" type="button" onClick={handleClick}>
              -
            </button>
          </li>
        </ul>

        <ul className="second">
          <li><button name="1" type="button" onClick={handleClick}>1</button></li>
          <li><button name="2" type="button" onClick={handleClick}>2</button></li>
          <li><button name="3" type="button" onClick={handleClick}>3</button></li>
          <li>
            <button name="+" className="yellow" type="button" onClick={handleClick}>
              +
            </button>
          </li>
        </ul>

        <ul className="second">
          <li className="zero">
            <button name="0" type="button" onClick={handleClick}>
              0
            </button>
          </li>
          <li><button name="." type="button" onClick={handleClick}>.</button></li>
          <li>
            <button name="=" className="yellow" type="button" onClick={handleClick}>
              =
            </button>
          </li>
        </ul>
      </div>

    </div>

  );
}

export default Calculator;
