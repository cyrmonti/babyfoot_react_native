/**
 * Created by clementtailleur on 26/01/2017.
 */

const authReducer = (state = null, action) => {
  switch(action.type) {
    case 'LOGIN_USER':
      return action.payload.user;
    case 'LOGOUT_USER':
      return null;
    default:
      return state;

  }
};

export default authReducer;