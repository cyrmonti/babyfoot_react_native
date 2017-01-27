/**
 * Created by clementtailleur on 26/01/2017.
 */

import { combineReducers } from 'redux';
import authReducer from './authReducer';
import babyfootReducer from './babyfootReducer';

const rootReducer = combineReducers({

  user: authReducer,
  babyfoots: babyfootReducer
});

export default rootReducer;