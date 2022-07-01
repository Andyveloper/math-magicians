import React, { useState } from 'react';
import CalculatorButtons, { CalculatorDisplay } from './CalculatorInfo';
import calculate from '../logic/calculate';
// import operate from '../logic/operate';

const RenderCalculator = () => {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const calculation = (buttonName) => {
    const updateState = calculate(calculatorData, buttonName);
    setCalculatorData(updateState);
  };

  return (
    <section className="grid-container">
      <CalculatorDisplay updateDisplay={calculatorData} />
      <CalculatorButtons onClick={calculation} />
    </section>
  );
};

// class RenderCalculator extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       total: null,
//       next: null,
//       operation: null,
//     };
//   }

//   calculate = (buttonName) => {
//     const updateState = calculate(this.state, buttonName);
//     this.setState(updateState);
//   }

//   render() {

//   }
// }

export default RenderCalculator;
