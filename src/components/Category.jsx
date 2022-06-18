import React from "react";
import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { Colors } from "../utils/colors";

const Category = ({ name, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.7}
            onPress={onPress}
        >
            <Text style={styles.text}>{name.category}</Text>
        </TouchableOpacity>
    );
};

export default Category;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.greyLight,
        height: 160,
        margin: 20,
        width: Dimensions.get("screen").width * 0.4,
        borderRadius: 10,
        borderColor: Colors.primary,
        borderWidth: 2,
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    text: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18,
    },
});
