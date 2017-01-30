import { AsyncStorage } from 'react-native';

export async function saveUser(user) {
    try {
        await AsyncStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
        console.log('Async storage not working..');
    }
}

export async function deleteUser() {
    try {
        await AsyncStorage.removeItem('user');
    } catch (error) {
        console.log('Async storage not working..');
    }
}

export async function getUser() {
    try {
        const user = await AsyncStorage.getItem('user');
        return JSON.parse(user);
    } catch (error) {
        console.log('Async storage not working..');
        return null;
    }
}

export async function saveGUID(guid) {
    try {
        await AsyncStorage.setItem('guid', guid);
    } catch (error) {
        console.log('Async storage not working..');
    }
}

export async function checkGUIDExists() {
    try {
        const value = await AsyncStorage.getItem('guid');
        return value !== null;
    } catch (error) {
        console.log('Async storage not working..');
        return false;
    }

}

export async function saveToken(token) {
    try {
        await AsyncStorage.setItem('token', token);
    } catch (error) {
        console.log('Async storage not working..');
    }
}

export async function deleteToken() {
    try {
        await AsyncStorage.removeItem('token');
    } catch (error) {
        console.log('Async storage not working..');
    }
}

export async function checkTokenExists() {
    try {
        const value = await AsyncStorage.getItem('token');
        return value !== null;
    } catch (error) {
        console.log('Async storage not working..');
        return false;
    }
}

export function getAllKeys(cb) {
    AsyncStorage.getAllKeys((error, keys) => cb(error, keys));
}




