import React from "react";
import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import ItemTodo from "./ItemTodo";

const ListTodo = ({ list, onHandleDelete, onHandleComplete }) => {
    return (
        <View style={styles.container}>
            {list.length >= 1 ? (
                <FlatList
                    data={list}
                    renderItem={(item) => (
                        <ItemTodo
                            item={item}
                            onHandleComplete={onHandleComplete}
                            onHandleDelete={onHandleDelete}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                />
            ) : (
                <View style={styles.emptyState}>
                    <Text style={styles.textEmptyState}>Sin tareas</Text>
                    <Image
                        style={{ width: 250, height: 250 }}
                        source={require("../../assets/images/empty_state.png")}
                    />
                </View>
            )}
        </View>
    );
};

export default ListTodo;

const styles = StyleSheet.create({
    container: {
        height: "60%",
        marginHorizontal: 20,
        marginBottom: 30,
    },
    emptyState: {
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        height: "100%",
    },
    textEmptyState: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 40,
    },
});
