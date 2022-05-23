import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import Loading from "../components/Loading";
import Product from "../components/Product";
import { PRODUCTS } from "../mock/products";

const DetailCategoryScreen = ({route, navigation}) => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([]);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: route.params?.name 
        });
    }, [navigation]);
    

    useEffect(() => {
        const list = PRODUCTS.filter(x=> x.category === route.params?.id);
        setProducts(list);
        setTimeout(() => {
            setLoading(false)
        }, 1200);
    }, [])

    if(loading){
        return (
            <View style={styles.loading}>
                <Loading/>
            </View>
        )
    }

    return (
        <View style={styles.container}> 
            {products?.length > 0 ? 
                <FlatList
                    data={products}
                    renderItem={(item) => (
                        <Product item={item.item} />
                    )}
                    keyExtractor={(item) => item.id}
                /> :
                <View style={styles.emptyState}>
                    <Text style={styles.textEmptyState}>Sin productos en la categoria seleccionada</Text>
                    <Image
                        style={{ width: 250, height: 250 }}
                        source={require("../../assets/images/empty_products.png")}
                    />
                </View>
            }
        </View>
    );
};

export default DetailCategoryScreen;


const styles = StyleSheet.create({
    loading:{
        flex:1, 
        justifyContent:'center',
        backgroundColor: '#fff',
    },
    container: {
        backgroundColor: '#fff',
        flex: 1
    },
    textEmptyState: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 40,
    },
    emptyState: {
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        height: "100%",
    },
})