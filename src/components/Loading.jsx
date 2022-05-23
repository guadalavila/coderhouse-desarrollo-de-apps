import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { Colors } from "../utils/colors";

const Loading = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={"large"} color={Colors.primary} />
        </View>
    );
};

export default Loading;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: "#fff",
        justifyContent:'center'
    },
});
