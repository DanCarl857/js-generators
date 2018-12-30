import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

// Import custom components
import Card from './../../components/Card/Card';

// Import Action creator(s)
import { 
  fetchFibonacciNumber,
  fetchFactorialNumber,
  fetchPrimeNumber,
  fetchRangeNumber
} from './../../actions/fetchNumberData';

class App extends Component {

  // Fetch data once component loads
  componentDidMount() {
    this.props.fetchFibonacciNumber();
    this.props.fetchFactorialNumber();
    this.props.fetchPrimeNumber();
    this.props.fetchRangeNumber();
  }

  constructor(props) {
    super(props);

    // Bind functions to `this` context
    this.getNextFibonacciNumber = this.getNextFibonacciNumber.bind(this);
    this.getNextFactorialNumber = this.getNextFactorialNumber.bind(this);
    this.getNextPrimeNumber = this.getNextPrimeNumber.bind(this);
    this.getNextRangeNumber = this.getNextRangeNumber.bind(this);
  }

  // Function to get the next fibonacci number
  getNextFibonacciNumber() {
    this.props.fetchFibonacciNumber();
  }

  // Function to get the next factorial number
  getNextFactorialNumber() {
    this.props.fetchFactorialNumber();
  }

  // Function to get the next prime number
  getNextPrimeNumber() {
    this.props.fetchPrimeNumber();
  }

  // Function to get the next range number
  getNextRangeNumber() {
    this.props.fetchRangeNumber();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="app-header animated infinite bounce delay-5s">JUMPCUT</h1>
          <p className="container margin20">
            This project is about creating pseudo generator functions based on sequencer functions that have been implemented. ES6 generators or async/await wasn't used in the implementations of said sequencer functions. Closures were used to implement the sequencer functions.
          </p>

          {/* Display all our sequencers using our Card component */}
          <div className="row marginTop20">
            {
              this.props.fibonacciNumber.data ? 
                <Card 
                  title="Fibonacci Numbers" 
                  value={this.props.fibonacciNumber.data}
                  getNextFibonacciNumber={this.getNextFibonacciNumber}
                /> : 
                // If there is no fibonacci number display a 0 to keep the UI neat
                <Card 
                  title="Factorial Numbers" 
                  value={0}
                />
            }
            {
              this.props.factorialNumber.data ? 
                <Card 
                  title="Factorial Numbers" 
                  value={this.props.factorialNumber.data}
                  getNextFactorialNumber={this.getNextFactorialNumber}
                /> : 
                // If there is no factorial number display a 0 to keep the UI neat
                <Card 
                  title="Factorial Numbers" 
                  value={0}
                />
            }
            {
              this.props.primeNumber.data ? 
                <Card 
                  title="Prime Numbers" 
                  value={this.props.primeNumber.data}
                  getNextPrimeNumber={this.getNextPrimeNumber}
                /> : 
                // If there is no prime number display a 0 to keep the UI neat
                <Card 
                  title="Prime Numbers" 
                  value={0}
                />
            }
            {
              this.props.rangeNumber.data ? 
                <Card 
                  title="Range Numbers" 
                  value={this.props.rangeNumber.data}
                  getNextRangeNumber={this.getNextRangeNumber}
                /> : 
                // If there is no range number display a 0 to keep the UI neat
                <Card 
                  title="Range Numbers" 
                  value={0}
                />
            }
          </div>

          <p className="container marginTop20">
            <span className="underline">Source Code</span> | <span className="underline">Documentation</span> | <span className="underline">Daniel Carlson</span>
          </p>
        </header>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    fibonacciNumber: state.fibonacciNumber,
    factorialNumber: state.factorialNumber,
    primeNumber: state.primeNumber,
    rangeNumber: state.rangeNumber
  }
}

// Connect container/component to the redux state
export default connect(mapStateToProps, { 
  fetchFibonacciNumber,
  fetchFactorialNumber,
  fetchPrimeNumber,
  fetchRangeNumber
})(App);
