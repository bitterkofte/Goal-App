import { StyleSheet, View, Text, Pressable } from "react-native";

function GItem(props) {
    return (
        <View style={styles.items}>
            <Pressable onPress={props.delete.bind(this, props.id)}
            android_ripple={{color:"red"}}>
                <Text style={styles.matter}>{props.package}</Text>
            </Pressable>
        </View>
    );
};

export default GItem;

const styles = StyleSheet.create({
    items: {
        backgroundColor: "white",
        margin: 5,
        borderRadius: 6,
        backgroundColor: "#221c40",
    },

    matter: {
        padding: 5,
        paddingLeft: 10,
        color: "white",
      }
});