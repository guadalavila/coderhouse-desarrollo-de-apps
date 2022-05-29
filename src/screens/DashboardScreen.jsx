import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Category from "../components/Category";
import Loading from "../components/Loading";
import { selectCategory } from "../features/categories";
import { setProductsByCategory } from "../features/products";
import { SCREENS } from "../utils/screens";

const DashboardScreen = ({navigation}) => {
    const { categories } = useSelector(state => state.categories.value)
    const dispatch = useDispatch();

    if(!categories){
        return <Loading />
    }

    return (
        <View style={styles.container}>
            <FlatList
                numColumns={2}
                data={categories}
                renderItem={(item) => (
                    <Category
                        name={item.item}
                        onPress={() => {
                            dispatch(selectCategory(item.item.id));
                            dispatch(setProductsByCategory(item.item.id));
                            navigation.navigate(SCREENS.Detail.name)
                        }}
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
