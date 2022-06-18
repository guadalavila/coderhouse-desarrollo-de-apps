import React from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from "react-native";
import { Colors } from "../utils/colors";

const ButtonCustom = ({ label, onPress, disabled = false , loading = false, color = "#000" }) => {
    return (
        <TouchableOpacity
            disabled={disabled}
            activeOpacity={0.7}
            onPress={onPress}
            style={[styles.button, disabled ? styles.disabled : {}, color? {backgroundColor: color} : {backgroundColor:'#000'}]}
        >
            <View>
                {loading ?
                    <ActivityIndicator size={'large'} color={Colors.primary} /> 
                    :
                    <Text style={[styles.textButton]}>{label}</Text>
                }
            </View>
            
        </TouchableOpacity>
    );
};

export default ButtonCustom;

const styles = StyleSheet.create({
    button: {
        width: Dimensions.get("screen").width * 0.7,
        alignSelf: "center",
        paddingVertical: 20,
        borderRadius: 40,
        alignItems: "center",
        marginBottom:4,
    },
    textButton: {
        fontWeight: "700",
        fontSize: 18,
        color: "white",
    },
    disabled: {
        backgroundColor: "#000",
        opacity: 0.7,
    },
});
