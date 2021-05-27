import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FontAwesome5,Fontisto } from '@expo/vector-icons';

import HomeStack from './HomeStack';
import AboutStack from './AboutStack';

const Drawer = createDrawerNavigator();

const MainNavigator = () => {
    return(
        <NavigationContainer>
            <Drawer.Navigator>
              <Drawer.Screen name="Home" component={ HomeStack }
              options={{
                drawerIcon: config => 
                <Fontisto 
                  name="home" 
                  size={24} 
                  color="black" />,
              }} 
              />
              <Drawer.Screen name="About" component={ AboutStack }
              options={{
                drawerIcon: config => 
                <FontAwesome5 
                  name="info-circle" 
                  size={24} 
                  color="black" />
              }} 
              />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default MainNavigator;