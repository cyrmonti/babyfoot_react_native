import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Text } from 'react-native';

import LoginForm from './components/LoginForm';
import UserProfile from './components/UserProfile';
import ListBabyfoots from './components/ListBabyfoots';
import CreateBabyfoot from './components/CreateBabyfoot';
import CreateUserForm from './components/CreateUserForm';

const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
  );
};

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="auth" >
        <Scene key="login"
               title="Login"
               component={LoginForm}
               onRight={() => Actions.createUser()}
               rightTitle="New User"
               sceneStyle={{ marginTop: 65 }}
               initial />
        <Scene key="createUser" title="Create User" component={CreateUserForm}  sceneStyle={{ marginTop: 65 }} />
      </Scene>

      <Scene key="tabbar" tabs={true} tabBarStyle={{ backgroundColor: '#FFFFFF', borderColor: '#BEBEBE', borderTopWidth: 1}}>
        <Scene
          key="babyfoot"
          icon={TabIcon}
          title="Babyfoot">

          <Scene
            key="listBabyfoot"
            title="List babyfoot(s)"
            component={ListBabyfoots}
            sceneStyle={{ marginTop: 65 }}
            onRight={() => Actions.createBabyfoot()}
            rightTitle="Add" />

          <Scene
            sceneStyle={{ marginTop: 65 }}
            key="createBabyfoot"
            component={CreateBabyfoot}
            title="Add a babyfoot"
            direction="vertical"
          />
        </Scene>
        <Scene key="userProfile" title="Profile" icon={TabIcon} component={UserProfile}  sceneStyle={{ marginTop: 65 }} />
      </Scene>

    </Router>
  );
};

export default RouterComponent;