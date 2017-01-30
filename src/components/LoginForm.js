import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { loginUser, resetBabyfootList, createUser } from '../actions';
import { DEFAULT_USER } from '../config';
import { checkTokenExists, getUser } from '../localStorage';

import { Card, CardSection, Input, Button } from './common';

class LoginForm extends  React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            error: ''
        };

        //if token already exists, login with default user
        checkTokenExists().then(exists => {
            if (exists) {
                //check if default user was connected
                console.log('Token already exists, login..');
                getUser().then(user => {
                   if (user.email == 'root@babyfoot.com')
                       this.props.loginUser();
                   else
                       this.props.createUser(user);
                });
            }
            else {
                console.log('Token does not exists');
            }
        })
    }

    updateEmailState(email) {
        //remove extra start or end spaces
        email = email.trim();
        this.setState({ email });
    }

    onPressButton() {
        const { email, password } = this.state;
        this.setState({ error: '' });
        console.log('Login press: ', email, password);
        if (email == DEFAULT_USER.email && password == DEFAULT_USER.password) {
            this.props.resetBabyfootList();
            this.props.loginUser();
        }
        else if (email == '' || password == '')
            this.setState({ error: 'Empty field(s)' });
        else
            this.setState({ error: 'Credentials incorrect'})


    }

    renderError() {
        return (
            <Text style={styles.errorTextStyle}>
                {this.state.error}
            </Text>
        );
    }

    renderButton() {
        return (
            <Button onPress={this.onPressButton.bind(this)}>
                Login
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label={'Email'}
                        value={this.state.email}
                        onChangeText={this.updateEmailState.bind(this)}
                        placeholder={'user@gmail.com'}
                        isNumeric={false}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label={'Password'}
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                        placeholder={'enter password'}
                        isNumeric={false}
                        secureTextEntry
                    />
                </CardSection>

                {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}


const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default connect(null, { loginUser, resetBabyfootList, createUser })(LoginForm);