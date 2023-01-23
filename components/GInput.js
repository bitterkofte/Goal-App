import { StyleSheet, View, Text, TextInput, Button, Modal, Image } from "react-native";
import { useState } from "react";

function GInput(props) {
    const [goalText, setGoalText] = useState("");

    function goalInputHandler(enteredText) {
      setGoalText(enteredText);               //Sets the input text
    };

    function girdiHandler() {
        props.ekleme(goalText); //Manually setted and packed the goal text
        setGoalText('');        //Resets the input text 
    };

    return (
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
            <Image style={styles.image} source={require('../assets/atom.png')} />
            <TextInput  style={styles.textInput}
                        placeholder="Course goal!"
                        placeholderTextColor= "#666666" 
                        onChangeText={goalInputHandler}
                        value={goalText} //To modify the input text exteriorly
                        />
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button title="Add Goal" onPress={girdiHandler} color="#372d66" />{/* Goal text package recieved */}
              </View>

              <View style={styles.button}>
                <Button title="Cancel" onPress={props.canceled} color="red"/>
              </View>
            </View>
        </View>
      </Modal>
    );
};

export default GInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1a1a1a',
      },

      image: {
        width: 150,
        height: 150,
        margin: 20,
      },
      
      textInput: {
        width: '75%',
        marginRight: 6,
        padding: 8,
        borderWidth: 2,
        borderColor: '#017ED8',
        borderRadius: 6,
        color: "white",
      },

      buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
      },

      button: {
        width: 100,
        marginHorizontal: 8
      }
});