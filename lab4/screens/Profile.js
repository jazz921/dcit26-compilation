import React from 'react';
import {
    View,
    Text,
    Button,
    ImageBackground,
    StyleSheet
} from 'react-native';

const Profile = ({navigation}) => {
    return(
        <ImageBackground source={require('../assets/road.gif')} style={{ flex: 1}}>
            <View style={styles.TextContainer}>
              <Text style={styles.text}>
                Neil Joshua C. Villanueva {'\n'} <Text style={styles.smallText}>BSCS 3-2</Text> {'\n\n'}
                Justine Dave A. Joaquin {'\n'} <Text style={styles.smallText}>BSCS 3-2</Text>{'\n\n'}
                Arvin Julius Gamo {'\n'} <Text style={styles.smallText}>BSCS 3-2</Text> {'\n\n'}
              </Text>
            </View>
            <View style={styles.BtnContainer}>
            <Button color="darkslategrey" title="Go back Home" onPress={() => navigation.navigate('Home')}/>
            </View>
        </ImageBackground>
    );
}

export default Profile;

const styles = StyleSheet.create({
    TextContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 65,
        padding: 5,
        borderRadius: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.4)'
    },
    text: {
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 15
    },
    smallText: {
      fontSize: 12
    },
    BtnContainer: {
      position: 'absolute',
      alignSelf: 'center',
      bottom: 15
    }
});