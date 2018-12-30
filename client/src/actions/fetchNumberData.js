import axios from 'axios';
import { apiBaseURL } from './../utils/constants';

// Import types
import {
  FETCH_FACTORIAL_NUMBER,
  FETCH_FIBONACCI_NUMBER,
  FETCH_FIBONACCI_FAIL,
  FETCH_PRIME_NUMBER,
  FETCH_FACTORIAL_FAIL,
  FETCH_PRIME_FAIL,
  FETCH_RANGE_NUMBER,
  FETCH_RANGE_FAIL
} from './../utils/types';

export function fetchFibonacciNumber() {

  return dispatch => {
    
    return axios.get(`${apiBaseURL}/fibonacci`)
      .then(res => {
        dispatch({ type: FETCH_FIBONACCI_NUMBER, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_FIBONACCI_FAIL, payload: err.data });
      })
  }
}

export function fetchFactorialNumber() {
  return dispatch => {
    
    return axios.get(`${apiBaseURL}/factorial`)
      .then(res => {
        dispatch({ type: FETCH_FACTORIAL_NUMBER, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_FACTORIAL_FAIL, payload: err.data });
      })
  }
}

export function fetchPrimeNumber() {
  return dispatch => {
    
    return axios.get(`${apiBaseURL}/prime`)
      .then(res => {
        dispatch({ type: FETCH_PRIME_NUMBER, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_PRIME_FAIL, payload: err.data });
      })
  }
}

export function fetchRangeNumber() {
  return dispatch => {
    
    return axios.get(`${apiBaseURL}/range`)
      .then(res => {
        dispatch({ type: FETCH_RANGE_NUMBER, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_RANGE_FAIL, payload: err.data });
      })
  }
}