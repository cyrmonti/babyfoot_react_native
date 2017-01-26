import React from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Button, CardSection } from './common';

class UserProfile extends React.Component {

    onPressButton() {
        console.log('Logout !');
        Actions.auth();
    }

    render() {
        return (
            <View>
                <CardSection>
                    <Button onPress={this.onPressButton.bind(this)}>
                        Logout
                    </Button>
                </CardSection>
            </View>

        );
    }
};

export default UserProfile;