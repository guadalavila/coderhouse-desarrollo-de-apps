import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import Loading from '../components/Loading';
import Product from '../components/Product';
import { useSelector } from 'react-redux';

const DetailCategoryScreen = ({ navigation }) => {
    const [loading, setLoading] = useState(true);
    const { categorySelected } = useSelector((state) => state.categories.value);
    const { productsByCategory } = useSelector((state) => state.products.value);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: categorySelected.category,
        });
    }, [navigation]);

    useEffect(() => {
        setTimeout(() => setLoading(false), 500);
    }, []);

    if (loading) {
        return (
            <View style={styles.loading}>
                <Loading />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {productsByCategory?.length > 0 ? (
                <FlatList
                    data={productsByCategory}
                    renderItem={(item) => (
                        <Product
                            item={item.item}
                            onPress={() => {
                                navigation.navigate('DetailProductScreen', { product: item.item });
                            }}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                />
            ) : (
                <View style={styles.emptyState}>
                    <Text style={styles.textEmptyState}>Sin productos en la categoria seleccionada</Text>
                    <Image
                        style={{ width: 250, height: 250 }}
                        source={require('../../assets/images/empty_products.png')}
                    />
                </View>
            )}
        </View>
    );
};

export default DetailCategoryScreen;

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    textEmptyState: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 40,
    },
    emptyState: {
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        height: '100%',
    },
});
