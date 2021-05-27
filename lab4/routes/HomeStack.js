import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { Easing } from 'react-native';
import { Ionicons, Fontisto } from '@expo/vector-icons';
import { Image } from 'react-native';

import Home from '../screens/Home';
import Profile from '../screens/Profile';

const IconHome = () => {
  return (
    <Image
      source={require('../assets/homeIconTransparent.png')}
      style={{ 
        width: 25, 
        height: 25, 
        marginLeft: 25 
        }}
    />
  );
}

const IconProfile = () => {
  return (
    <Image
      source={require('../assets/personIconTransparent.png')}
        style={{ 
          width: 40,
          height: 40,
          marginRight: 20 
        }}
    />
  );
}

const Stack = createStackNavigator();

const closeConfig = {
  animation: 'timing',
  config: {
    duration: 500,
    easing: Easing.linear,
  },
};
const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        ...TransitionPresets.FadeFromBottomAndroid,
        transitionSpec: {
          open: closeConfig,
          close: closeConfig,
        },
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#25a1e8',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: (props) => <IconHome />,
        }}
      />

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
          headerStyle: {
            backgroundColor: 'darkslategrey',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: (props) => <IconProfile />,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
