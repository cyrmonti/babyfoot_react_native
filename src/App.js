import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import uuid from 'react-native-uuid';
import { saveGUID, checkGUIDExists } from './localStorage';


import Router from './Router';

class App extends  React.Component {
    constructor() {
        super();

        //create and save guid if not exists
        checkGUIDExists().then(exists => {
            if (!exists) {
                const key = uuid.v1();
                console.log('Creating and saving GUID (' + key + ')...');
                saveGUID(key);
            }
            else
                console.log('GUID already exists');
        });
    }

    render() {
        const store = createStore(reducers);

        store.subscribe(() => {
            console.log(store.getState());
        });

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;