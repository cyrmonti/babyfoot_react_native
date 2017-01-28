/**
 * Created by clementtailleur on 28/01/2017.
 */

import { DEFAULT_USER } from '../config';

//fake login, use the default user
export const loginUser = () => {
  return {
    type: 'LOGIN_USER',
    payload: {
      user: DEFAULT_USER
    }
  }
};