import { Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import RenderCalculator from './RenderCalculator';

const Navigation = () => (
  <>
    <div className="navbar">
      <div className="container">
        <span className="title"><h1>Math Magicians</h1></span>
        <ul className="navbar-nav ">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/calculator">Calculator</Link></li>
          <li><Link to="/quote">Quote</Link></li>
        </ul>
      </div>
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </>
);

export default Navigation;

const Home = () => (
  <div className="home">
    <h2>Welcome to the Math Magicians</h2>
    <p>
      You can now turn any website into a math challenge with our advanced
      calculator. Just type in your problem and you&apos;re done! Let&apos;s say you&apos;re
      looking at a webpage and you&apos;re working on a math problem. You have to
      calculate a price, calculate the change, or else. All you have to do is type
      mathmagicians.com/ in your browser and then click “Calculator”.
      Now your math problem is being magically calculated.

    </p>
    <p>
      Math Magicians is an innovative web application that allows slideshow-style
      browsing of complex mathematics topics. This application allows users to use
      the advanced calculator and other tools to calculate what they need.

    </p>
    <p>
      Math Magic is a revolutionary web application that allows the user to
      seamlessly preview multiple documents on numerous devices in a manner that
      does not require loads of data to be loaded, and refreshing the website. Math
      Magic allows people to bring up the document, perform calculations and then
      seamlessly return to the document with the results of the calculation.

    </p>
  </div>
);

const Calculator = () => (
  <div className="calculator">
    <h2>Let&apos;s do some math!</h2>
    <div><RenderCalculator /></div>
  </div>
);

const Quote = () => {
  const [text, setText] = useState(null);

  const getQuoteData = async () => {
    const urlRequest = 'https://random-math-quote-api.herokuapp.com/';
    const response = await fetch(urlRequest, {
      method: 'GET',
    });
    const data = await response.json();

    return data;
  };

  const setQuoteData = async () => {
    const storedData = await getQuoteData();
    if (!text) {
      setText(storedData.quote);
    }
  };

  useEffect(() => {
    setQuoteData();
  }, []);

  return (
    <div className="quote">
      <h2>Welcome to the Math Magicians</h2>
      <p>
        {text}
      </p>
    </div>
  );
};
