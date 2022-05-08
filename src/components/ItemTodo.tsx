import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../utils/colors";

const ItemTodo = ({ item, onHandleDelete, onHandleComplete }) => {
    return (
        <View style={styles.containerItem}>
            <Text
                style={[styles.item, item.item.todo ? styles.itemComplete : {}]}
            >
                {item.item.task}
            </Text>
            <View style={styles.flexRow}>
                <TouchableOpacity
                    style={styles.containerBtn}
                    activeOpacity={0.7}
                    onPress={() => onHandleDelete(item.item.id)}
                >
                    <Text style={styles.textDelete}>X</Text>
                </TouchableOpacity>
                {!item?.item.todo && (
                    <TouchableOpacity
                        style={styles.containerBtn}
                        activeOpacity={0.7}
                        onPress={() => onHandleComplete(item.item)}
                    >
                        <Text style={styles.textComplete}>✓</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default ItemTodo;

const styles = StyleSheet.create({
    containerItem: {
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    item: {
        fontWeight: "bold",
        fontSize: 20,
    },
    itemComplete: {
        textDecorationLine: "line-through",
        color: Colors.grey,
    },
    textDelete: {
        color: Colors.danger,
        fontWeight: "bold",
        fontSize: 26,
    },
    textComplete: {
        color: Colors.success,
        fontWeight: "bold",
        fontSize: 26,
    },
    flexRow: {
        flexDirection: "row",
    },
    containerBtn: {
        paddingLeft: 10,
        marginLeft: 10,
    },
});
