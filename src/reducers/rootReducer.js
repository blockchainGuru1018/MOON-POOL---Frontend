import { combineReducers } from 'redux';

import userReducer from './userSlice';
import roomReducer from './roomSlice';


const rootReducer = combineReducers({
  user: userReducer,
  room: roomReducer
});

export default rootReducer;