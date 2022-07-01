import React, { Component } from 'react';
import calculatorButtonValues, { calculatorDisplay } from './CalculatorInfo';
// import calculate from '../logic/calculate';
// import operate from '../logic/operate';

const CalculatorDisplay = () => {
  const array = calculatorDisplay.map((element) => (
    <input
      className={element.className}
      key={element.name}
      value={element.value}
      type="input"
    />
  ));
  return array;
};

const CalculatorButtons = () => {
  const array = calculatorButtonValues.map((element) => (
    <button
      className={element.className}
      key={element.name}
      value={element.value}
      type="button"
    >
      {element.value}
    </button>
  ));
  return array;
};

class RenderCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="grid-container">
        <CalculatorDisplay />
        <CalculatorButtons />
      </section>
    );
  }
}

export default RenderCalculator;
