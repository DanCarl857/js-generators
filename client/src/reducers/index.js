import { combineReducers } from 'redux';

// Import reducers
import FibonacciReducer from './FibonacciReducer';
import FactorialReducer from './FactorialReducer';
import PrimeReducer from './PrimeReducer';
import RangeReducer from './RangeReducer';

// Combine all our reducers into one
export default combineReducers({
  fibonacciNumber: FibonacciReducer,
  factorialNumber: FactorialReducer,
  primeNumber: PrimeReducer,
  rangeNumber: RangeReducer
});