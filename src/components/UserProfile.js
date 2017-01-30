import React from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { Button, CardSection, Card } from './common';

class UserProfile extends React.Component {

    onPressButton() {
        console.log('Logout !');
        Actions.auth({ type: 'reset' });
    }

    render() {
        console.log('USER PROFILE PAGE PROPS: ', this.props);
        const { user } = this.props;
        return (
          <Card>
              <CardSection>
                  <View style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
                      <Text>Pseudo: </Text>
                      <Text>Email: </Text>
                      <Text>Name: </Text>
                      <Text>Firstname: </Text>
                      <Text>Departement: </Text>
                  </View>

                  <View style={{ flexDirection: 'column' }}>
                      <Text>{user.pseudo}</Text>
                      <Text>{user.email}</Text>
                      <Text>{user.name}</Text>
                      <Text>{user.firstname}</Text>
                      <Text>{user.department}</Text>
                  </View>
              </CardSection>
              <CardSection>
                  <Button onPress={this.onPressButton.bind(this)}>
                      Logout
                  </Button>
              </CardSection>
          </Card>

        );
    }
};

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};

const styles = {

};

export default connect(mapStateToProps)(UserProfile);