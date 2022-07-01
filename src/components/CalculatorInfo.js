export const calculatorDisplay = [
  {
    name: 'display',
    value: '0',
    className: 'calculator-display',
    type: 'text',
  },
];

export const CalculatorDisplay = ({ updateDisplay }) => {
  const { total, next } = updateDisplay;
  const array = calculatorDisplay.map((element) => (
    <div
      className={element.className}
      key={element.name}
    >
      <span
        value={element.value}
        type="input"
      >
        {next || total || '0'}
      </span>
    </div>
  ));
  return array;
};

const calculatorButtonValues = [
  {
    name: 'clear',
    value: 'AC',
    className: 'operator',
    type: 'button',
  },
  {
    name: 'plus-minus',
    value: '+/-',
    className: 'operator',
    type: 'button',
  },
  {
    name: 'percent',
    value: '%',
    className: 'operator',
    type: 'button',
  },
  {
    name: 'divide',
    value: '÷',
    className: 'operator',
    type: 'button',
  },
  {
    name: 'seven',
    value: '7',
    className: 'number',
    type: 'button',
  },
  {
    name: 'eight',
    value: '8',
    className: 'number',
    type: 'button',
  },
  {
    name: 'nine',
    value: '9',
    className: 'number',
    type: 'button',
  },
  {
    name: 'multiply',
    value: 'x',
    className: 'operator',
    type: 'button',
  },
  {
    name: 'four',
    value: '4',
    className: 'number',
    type: 'button',
  },
  {
    name: 'five',
    value: '5',
    className: 'number',
    type: 'button',
  },
  {
    name: 'six',
    value: '6',
    className: 'number',
    type: 'button',
  },
  {
    name: 'minus',
    value: '-',
    className: 'operator',
    type: 'button',
  },
  {
    name: 'one',
    value: '1',
    className: 'number',
    type: 'button',
  },
  {
    name: 'two',
    value: '2',
    className: 'number',
    type: 'button',
  },
  {
    name: 'three',
    value: '3',
    className: 'number',
    type: 'button',
  },
  {
    name: 'plus',
    value: '+',
    className: 'operator',
    type: 'button',
  },
  {
    name: 'zero',
    value: '0',
    className: 'number',
    type: 'button',
  },
  {
    name: 'decimal',
    value: '.',
    className: 'operator',
    type: 'button',
  },
  {
    name: 'equals',
    value: '=',
    className: 'operator',
    type: 'button',
  },
];

const CalculatorButtons = ({ onClick }) => {
  const array = calculatorButtonValues.map((element) => (
    <button
      onClick={() => { onClick(element.value); }}
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

export default CalculatorButtons;
