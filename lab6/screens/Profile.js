import React from "react";
import { View, StyleSheet, Text, ScrollView, Image } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons'; 

const Profile = ({ route, navigation }) => {
  const data = route.params;

  return (
    <View style={styles.container}>
      <ScrollView>

        <View style={styles.forImage}>
          <Image
            style={{ width: 130, height: 130 }}
            source={{ uri: data.picture.large }}
          />
          <Text style={styles.text}>
            {data.name.first} {data.name.last}
          </Text>
        </View>

        <View style={styles.wrapTop}>
          <Fontisto name="person" size={24} color="black" />
          <Text style={styles.textHeader}> About</Text>
        </View>

        <View>
          <Text style={styles.content}>
            Age: {data.dob.age} {'\n'}
            Birthday: {data.dob.date} {'\n'}
            Gender: {data.gender} {'\n'}
            Address: {data.location.street.number} {data.location.street.name}, {data.location.state}, {data.location.country}
          </Text>
        </View>

        <View style={styles.wrapTop}>
          <Entypo name="mail" size={24} color="black" />
          <Text style={styles.textHeader}> Contact</Text>
        </View>
        
        <View>
          <Text style={styles.content}>
            Email: {data.email} {'\n'}
            Phone: {data.phone}
          </Text>
        </View>

        <View style={styles.wrapTop}>
          <Entypo name="dots-three-horizontal" size={24} color="black" />
          <Text style={styles.textHeader}> Other</Text>
        </View>

        <View>
          <Text style={styles.content}>
            Date Registered: {data.registered.date}
          </Text>
        </View>
        
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 20
  },
  forImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    fontSize: 15,
  },
  wrapTop: {
    paddingTop: 25,
    flexDirection: "row",
    borderBottomWidth: .5,
  },
  textHeader: {
    fontSize: 20,
  },
});
