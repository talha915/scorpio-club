import { combineReducers } from 'redux';
import testReducer from './testReducer';

const rootReducers  = combineReducers({
  list: testtReducer
});

export default rootReducers;