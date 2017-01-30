/**
 * Created by clementtailleur on 30/01/2017.
 */

import React from 'react';
import { Text } from 'react-native';
import { createUser } from '../actions'
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { CardSection, Card, Input, Button } from './common'

class CreateUserForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      pseudo: '',
      name: '',
      firstname: '',
      department: null,
      error: ''
    }
  }

  updateEmailState(email) {
    //remove extra start or end spaces
    email = email.trim();
    this.setState({ email });
  }

  onPressButton() {
    this.setState({ error: '' });
    let { email, password, pseudo, name, firstname, department } = this.state;
    department = parseInt(department);

    if (email == '' || password == '' || pseudo == '' || name == '' || firstname == '' || !department) {
      console.log(this.state);
      this.setState({ error: 'Empty field(s)' })
    }
    else {
      this.props.createUser({ email, password, pseudo, name, firstname, department });
      Actions.tabbar({ type: 'reset' });
    }

  }

  renderError() {
    return (
      <Text style={styles.errorTextStyle}>
        {this.state.error}
      </Text>
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
            placeholder={'enter your password'}
            isNumeric={false}
            secureTextEntry
          />
        </CardSection>

        <CardSection>
          <Input
            label={'Pseudo'}
            value={this.state.pseudo}
            onChangeText={pseudo => this.setState({ pseudo })}
            placeholder={'enter pseudo'}
            isNumeric={false}
          />
        </CardSection>

        <CardSection>
          <Input
            label={'Name'}
            value={this.state.name}
            onChangeText={name => this.setState({ name })}
            placeholder={'enter your name'}
            isNumeric={false}
          />
        </CardSection>

        <CardSection>
          <Input
            label={'Firstname'}
            value={this.state.firstname}
            onChangeText={firstname => this.setState({ firstname })}
            placeholder={'enter your firstname'}
            isNumeric={false}
          />
        </CardSection>

        <CardSection>
          <Input
            label={'Department'}
            value={this.state.department}
            onChangeText={department => this.setState({ department })}
            placeholder={'enter your department'}
            isNumeric={true}
          />
        </CardSection>

        {this.renderError()}

        <CardSection>
          <Button onPress={this.onPressButton.bind(this)}>
            Create
          </Button>
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

export default connect(null, { createUser })(CreateUserForm);