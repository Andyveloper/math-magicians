import React, { Component } from 'react';
import calculatorButtonValues from './CalculatorInfo';

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
        <CalculatorButtons />
      </section>
    );
  }
}

export default RenderCalculator;
