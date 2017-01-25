import React from 'react';
import { View, Text } from 'react-native';

import { Header, Card, CardSection } from './common';

class App extends  React.Component {
    render() {
        return (
            <View>
                <Header headerText={'Authentification'} />
                <Card>
                    <CardSection>

                    </CardSection>
                </Card>
            </View>
        );
    }
}

export default App;