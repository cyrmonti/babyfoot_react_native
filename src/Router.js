import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Text } from 'react-native';

import LoginForm from './components/LoginForm';
import UserProfile from './components/UserProfile';
import ListBabyfoots from './components/ListBabyfoots';

const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
  );
};

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="auth" type="reset">
        <Scene key="login" title="Login" component={LoginForm} sceneStyle={{ marginTop: 65 }} initial />
      </Scene>

      <Scene key="tabbar" tabs={true} tabBarStyle={{ backgroundColor: '#FFFFFF' }} type="reset">
        <Scene key="babyfoot" icon={TabIcon} title="Babyfoot">
          <Scene key="listBabyfoot" title="List babyfoot(s)" component={ListBabyfoots} sceneStyle={{ marginTop: 65 }} />
        </Scene>
        <Scene key="userProfile" title="Profile" icon={TabIcon} component={UserProfile}  sceneStyle={{ marginTop: 65 }} />
      </Scene>
    </Router>
  );
};

export default RouterComponent;

