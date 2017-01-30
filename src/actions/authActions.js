import { DEFAULT_USER } from '../config';
import { saveUser, saveToken, deleteToken, deleteUser } from '../localStorage';
import { Actions } from 'react-native-router-flux';

const generateToken = () => {
    return Math.random().toString(36).substring(7);
};

//fake login, use the default user
export const loginUser = () => {
    saveUser(DEFAULT_USER);
    saveToken(generateToken());
    Actions.tabbar({ type: 'reset' });
    return {
        type: 'LOGIN_USER',
        payload: {
            user: DEFAULT_USER
        }
    }
};

//does not save the user
export const createUser = (user) => {
    saveUser(user);
    saveToken(generateToken());
    Actions.tabbar({ type: 'reset' });
    return {
        type: 'CREATE_USER',
        payload: {
            user: user
        }
    }
};

export const logoutUser = () => {
    deleteToken();
    deleteUser();
    Actions.auth({ type: 'reset' });
    return {
        type: 'LOGOUT_USER',
        payload: {}
    }
};
