import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Colors } from "../utils/colors";

const InputTodo = ({ task, setTask }) => {
    return (
        <View>
            <TextInput
                style={styles.input}
                numberOfLines={1}
                placeholder="Escrbí tu tarea"
                onChangeText={(text) => setTask(text)}
                value={task}
            />
        </View>
    );
};

export default InputTodo;

const styles = StyleSheet.create({
    input: {
        borderBottomColor: Colors.primary,
        borderBottomWidth: 4,
        paddingVertical: 10,
        marginVertical: 30,
        marginHorizontal: 20,
        fontSize: 16,
    },
});
