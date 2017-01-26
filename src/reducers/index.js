/**
 * Created by clementtailleur on 26/01/2017.
 */

import { combineReducers } from 'redux';
import authReducer from './auth';

const rootReducer = combineReducers({
  user: authReducer
});

export default rootReducer;