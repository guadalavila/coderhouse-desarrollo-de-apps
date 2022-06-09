import React from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";

const ButtonCustom = ({ label, onPress, disabled,color }) => {
    return (
        <TouchableOpacity
            disabled={disabled}
            activeOpacity={0.7}
            onPress={onPress}
            style={[styles.button, disabled ? styles.disabled : {}, color? {backgroundColor: color} : {backgroundColor:'#000'}]}
        >
            <Text style={styles.textButton}>{label}</Text>
        </TouchableOpacity>
    );
};

export default ButtonCustom;

const styles = StyleSheet.create({
    button: {
        width: Dimensions.get("screen").width * 0.5,
        // backgroundColor: "#000",
        alignSelf: "center",
        paddingVertical: 20,
        borderRadius: 40,
        alignItems: "center",
        marginBottom:4,
    },
    textButton: {
        fontWeight: "700",
        color: "white",
    },
    disabled: {
        backgroundColor: "#000",
        opacity: 0.7,
    },
});
