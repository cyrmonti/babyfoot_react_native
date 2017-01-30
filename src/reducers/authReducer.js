/**
 * Created by clementtailleur on 26/01/2017.
 */

const authReducer = (state = null, action) => {
  switch(action.type) {
    case 'CREATE_USER':
      let { email, password, pseudo, name, firstname, department } = action.payload.user;
      return  { email, password, pseudo, name, firstname, department };
    case 'LOGIN_USER':
      return action.payload.user;
    case 'LOGOUT_USER':
      return null;
    default:
      return state;
  }
};

export default authReducer;