//import libraries
import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

// create a component
const Card = ({ 
  title, 
  value, 
  getNextFibonacciNumber,
  getNextFactorialNumber,
  getNextPrimeNumber,
  getNextRangeNumber
}) => {
  return (
    <div className="card card-extras m-lg-2 m-md-2 offset-sm-1 offset-xs-1">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{value}</p>
        {
          getNextFibonacciNumber ? 
          <button 
            className="btn btn-primary shadow-none"
            onClick={() => getNextFibonacciNumber()}>
            Next Number
          </button> : <div></div>
        }
        {
          getNextFactorialNumber ? 
          <button 
            className="btn btn-primary shadow-none"
            onClick={() => getNextFactorialNumber()}>
            Next Number
          </button> : <div></div>
        }
        {
          getNextPrimeNumber ? 
          <button 
            className="btn btn-primary shadow-none"
            onClick={() => getNextPrimeNumber()}>
            Next Number
          </button> : <div></div>
        }
        {
          getNextRangeNumber ? 
          <button 
            className="btn btn-primary shadow-none"
            onClick={() => getNextRangeNumber()}>
            Next Number
          </button> : <div></div>
        }
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  getNextFibonacciNumber: PropTypes.func
}

Card.defaultProps = {
  value: 0,
  title: "Sequencer Title"
}

//make this component available to the app
export default Card;
