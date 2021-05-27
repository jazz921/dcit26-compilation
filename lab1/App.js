// BSCS 3-2
// Villanueva, Joshua Neil
// Joaquin, Justine Dave
import * as React from 'react';
import { Text, View, ImageBackground } from 'react-native';


export default function App() {
  return (
    <ImageBackground source={require('./assets/bg.jpg')} style={{
      flex: 1,
    }}>
      <View style={{
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        padding: 20,
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        bottom: 0,
      }}>
         <Text style={{
           fontWeight: 'bold',
           color: 'white',
           fontSize: 35 
          }}>
          HELLO WORLD!
          </Text>
          <Text style={{
            alignItems: 'center',
            color: 'white',
          }}>
          Photo Grabbed from Google.</Text>
      </View>
    </ImageBackground>  
  );
}


