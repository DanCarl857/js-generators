//import libraries
import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

// create a component
const Card = ({ title, value, getNextFibonacciNumber }) => {
  return (
    <div className="card card-extras m-2">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{value}</p>
        <button 
          className="btn btn-primary shadow-none"
          onClick={() => getNextFibonacciNumber()}>
          Next Number
        </button>
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
