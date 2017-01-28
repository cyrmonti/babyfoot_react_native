import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { loginUser, resetBabyfootList } from '../actions';

import { Card, CardSection, Input, Button } from './common';
import { Actions } from 'react-native-router-flux';
import { DEFAULT_USER } from '../config';

class LoginForm extends  React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            error: ''
        };
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
            Actions.tabbar();
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
                  />
              </CardSection>

              <CardSection>
                  <Input
                    label={'Password'}
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                    placeholder={'enter password'}
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

export default connect(null, { loginUser, resetBabyfootList })(LoginForm);