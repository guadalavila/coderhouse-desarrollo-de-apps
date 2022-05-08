import React from "react";
import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
} from "react-native";
import { Colors } from "../utils/colors";

const Header = ({ title, onPress }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{title}</Text>
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.moreOpts}
                onPress={onPress}
            >
                <Image
                    style={{ width: 20, height: 40 }}
                    source={require("../../assets/images/more.png")}
                />
            </TouchableOpacity>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.primary,
        height: 50,
        width: Dimensions.get("screen").width,
        justifyContent: "center",
    },
    text: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18,
    },
    moreOpts: {
        right: 10,
        position: "absolute",
    },
});
