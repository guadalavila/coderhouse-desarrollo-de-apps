import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Category from "../components/Category";
import { CATEGORIES } from "../mock/categories";
import { SCREENS } from "../utils/screens";

const DashboardScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
            <FlatList
                numColumns={2}
                data={CATEGORIES}
                renderItem={(item) => (
                    <Category
                        name={item.item}
                        onPress={() => navigation.navigate(SCREENS.Detail.name, {name: item.item.category, id: item.item.id} )}
                    />
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default DashboardScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
});
