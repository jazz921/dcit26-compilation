// BSCS 3-2
// Neil Joshua C. Villanueva
// Justine Dave A. Joaquin

import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  ScrollView,
  ImageBackground,
  StyleSheet
} from 'react-native';

export default function App() {
const [enteredGoal, setEnteredGoal] = useState('');
const [courseGoals, setCourseGoals] = useState([]);


const goalInputHandler = (enteredText) => {
  setEnteredGoal(enteredText);
};

const addGoalHandler = () => {
  setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
  setEnteredGoal("")
};

  return(
    <ScrollView style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add Items"     
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button color="#69655e" title="ADD" onPress={addGoalHandler}/>
      </View>
      <View>
        {courseGoals.map((goal) => <View><Text style={styles.items} key={goal}>{goal}</Text></View>)}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 30,
    backgroundColor: '#f7ebd7'
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    marginBottom: 3,
  },
  input: {
    borderWidth: 1,
    width: '80%',
    padding: 10,
    borderColor: 'black',
  },
  items: {
    padding: 10,
    marginVertical: 3,
    backgroundColor: '#6a7d7d',
    color: 'white',
    borderRadius: 3,
    fontSize: 15,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: 'black'
  }
});