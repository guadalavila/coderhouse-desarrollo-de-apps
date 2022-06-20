import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ItemOrder from '../components/ItemOrder';
import Loading from '../components/Loading';
import {  getOrders } from '../features/orders';
import { Colors } from '../utils/colors';

const OrdersScreen = () => {
    const dispatch = useDispatch();
    const { orders, loading } = useSelector((state) => state.orders.value);

    useEffect(() => {
      dispatch(getOrders())
    }, [])

    if(loading){
        return(
        <View style={styles.container}>
            <Loading/>
        </View>)
    }
    
    return (
        <View style={styles.container}>
            {orders && orders.length > 0 ? (
                <FlatList
                    data={orders}
                    renderItem={(item) => <ItemOrder item={item.item} />}
                    keyExtractor={(item) => item.id}
                />
            ) : (
                <View style={styles.emptyState}>
                    <Image style={{ width: 300, height: 250 }} source={require('../../assets/images/empty_orders.png')} />
                    <Text style={styles.textEmptyState}>No tenés ordenes generadas</Text>
                </View>
            )}
        </View>
    );
};

export default OrdersScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    textEmptyState: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 40,
        color: Colors.greyDark,
    },
    emptyState: {
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        height: '100%',
    },
});
