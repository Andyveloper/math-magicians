import React, { Component } from 'react';
import CalculatorButtons, { CalculatorDisplay } from './CalculatorInfo';
import calculate from '../logic/calculate';
// import operate from '../logic/operate';

class RenderCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  calculate = (buttonName) => {
    const updateState = calculate(this.state, buttonName);
    console.log(updateState);
    this.setState(updateState);
  }

  render() {
    return (
      <section className="grid-container">
        <CalculatorDisplay updateDisplay={this.state} />
        <CalculatorButtons onClick={this.calculate} />
      </section>
    );
  }
}

export default RenderCalculator;
