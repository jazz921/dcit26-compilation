import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Image
} from "react-native";


const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  function fetchRandomData() {
    setLoading(true);
    fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    .then((json) => {
      setData(json.results[0])
      console.log(json.results[0])
    })
    .catch((error) => console.log(error))
    .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchRandomData();
  }, [])

  return (
    <View style={styles.container}>
      { isLoading ? <ActivityIndicator size='large' color='#0000ff' /> : (
        <TouchableOpacity onPress={() => navigation.navigate('Profile', data)}>
          <Image style={{ width: 150, height: 150}} source={{ uri: data.picture.large }} />
          <Text style={styles.text}>{data.name.first} {data.name.last}</Text>
        </TouchableOpacity>
      )}
     
      <Button title="Random User" onPress={() => fetchRandomData()} />

    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    padding: 10,
    fontWeight: 'bold'
  },

});
