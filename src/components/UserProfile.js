import React from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { Button, CardSection } from './common';

class UserProfile extends React.Component {

    onPressButton() {
        console.log('Logout !');
        Actions.auth();
    }

    render() {
        console.log('USER PROFILE PAGE PROPS: ', this.props);
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

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};

export default connect(mapStateToProps)(UserProfile);