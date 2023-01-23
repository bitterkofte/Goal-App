import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GItem from './components/GItem';
import GInput from './components/GInput';

export default function App() {
  // const [goalsArray, setGoalsArray] = useState([]);
  const [secArray, setSecArray] = useState([]);
  const [ modalIsVisible, setModalIsVisible] = useState(false);

  function addGoalHandler(goalText) {
    setSecArray((currentGoalsArray) => [    //Array for FlatList
      ...currentGoalsArray, 
      { text: goalText, id: Math.random().toString() }, //goalText is in GInput.js
    ]);                                                 //so we need to set it as a parameter
    hideModal();
  }

  function deleteGoalHandler(id) {
    // console.log("Deleted");
    setSecArray(currentGoalsArray => {
      return currentGoalsArray.filter((goal) => goal.id !== id); //Old - New (array)
    });
  }

  function seeModal() {
    setModalIsVisible(true);
  }

  function hideModal() {
    setModalIsVisible(false);
  }

  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <Button title="ADD MORE" onPress={seeModal}/>
      <GInput visible={modalIsVisible} ekleme={addGoalHandler} canceled={hideModal}/>

      <View style={styles.goalsContainer}>
        <Text style={styles.header}>Goal List</Text>

        {/* ----------FlatList---------- */}
        {/* <Text style={styles.header2}>FlatList</Text> */}
        <View style={styles.flatList}>
          <FlatList
            data={secArray}
            renderItem={(itemData) => {
              return (
                <GItem package={itemData.item.text} id={itemData.item.id} delete={deleteGoalHandler}/>
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
        {/* ----------FlatList---------- */}

      </View>

    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    paddingBottom: 18,
    backgroundColor: '#1a1a1a',
  },

  goalsContainer: {
    flex: 5,
    backgroundColor: '#372d66',
    marginTop: 15,
    borderRadius: 6,
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
    borderRadius: 15,
    padding: 8,
  },

  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: "white",
  },

  // header2: {
  //   fontSize: 14,
  //   fontWeight: 'bold',
  //   textAlign: 'left',
  //   marginBottom: 7,
  //   color: "seagreen",
  // },

  // list: {
  //   height: "35%",
  //   borderWidth: 2,
  //   borderColor: "black",
  //   borderRadius: 6,
  //   marginBottom: 20,
  // },

  // flatList: {
  //   height: "35%",
  //   borderWidth: 2,
  //   borderColor: "slateblue",
  //   borderRadius: 6,
  // },


});