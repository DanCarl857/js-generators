// Import types
import {
  FETCH_RANGE_NUMBER,
  FETCH_RANGE_FAIL
} from '../utils/types';

const initialState = {
  isFetching: null,
  data: '',
  hasError: false,
  errorMessage: null
}

export default function(state = initialState, action) {
  switch(action.type) {
    
    case FETCH_RANGE_NUMBER:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.payload,
        hasError: false,
        errorMessage: null
      });

    case FETCH_RANGE_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.payload,
        hasError: true,
        errorMessage: action.err
      });

    default: 
      return state;
  }
}