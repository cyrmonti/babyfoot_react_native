import React from 'react';
import { View, Text } from 'react-native';

import { Header } from './common';

class App extends  React.Component {
    render() {
        return (
            <View>
                <Header headerText={'Authentification'} />
            </View>
        );
    }
}

export default App;