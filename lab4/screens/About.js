import React from 'react';
import { View, Text, ImageBackground, Button, StyleSheet } from 'react-native';

const About = ({ navigation }) => {
  return (
    // <View style={styles.container}>
    //     <Button title="Home" onPress={() => navigation.navigate('Home')}

    //     />

    // </View>
    <ImageBackground
      source={require('../assets/inAbout.gif')}
      style={{ flex: 1 }}>
      <View style={styles.TextContainer}>
        <Text style={styles.text}>
          Navigating through different Screen using Drawer Navigator and Stack
          Navigator
        </Text>
      </View>
      <View style={styles.BtnContainer}>
        <Button
          color="teal"
          title="Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </ImageBackground>
  );
};

export default About;

const styles = StyleSheet.create({
  BtnContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 30,
  },
  TextContainer: {
    position: 'absolute',
    bottom: 150,
    alignSelf: 'center',
    padding: 10,
    margin: 30,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
