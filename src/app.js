import React from 'react';
import { View, Text } from 'react-native';

import { Header, Card, CardSection, Input } from './common';

class App extends  React.Component {
    constructor() {
        super();
        this.state = {
            email: ''
        };
    }

    updateEmailState(email) {
        console.log(email);

        //remove extra start or end spaces
        email = email.trim();
        this.setState({ email });
    }

    render() {
        return (
            <View>
                <Header headerText={'Authentification'} />
                <Card>
                    <CardSection>
                        <Input
                            label={'Email'}
                            value={this.state.email}
                            onChangeText={this.updateEmailState.bind(this)}
                            placeholder={'user@gmail.com'}
                        />
                    </CardSection>
                </Card>
            </View>
        );
    }
}

export default App;