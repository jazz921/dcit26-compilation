import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import { FontAwesome5 } from '@expo/vector-icons';
import About from '../screens/About';
import { Image } from 'react-native';

const IconAbout = () => {
  return (
    <Image source={require('../assets/aboutIconTransparent.png')}
      style={{ width: 40, height: 40, marginLeft: 15 }}
    />    
  );
}

const Stack = createStackNavigator();

const AboutStack = () => {
    return(
        <Stack.Navigator>
          <Stack.Screen name="About" component={About}
          options={{
            headerStyle: {
              backgroundColor: 'teal', 
            },
            headerTintColor: 'black', 
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
            headerLeft: props => <IconAbout />
      
  }}
           />
          </Stack.Navigator>
    );
}

export default AboutStack;