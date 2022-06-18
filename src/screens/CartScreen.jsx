import React from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import ButtonCustom from '../components/ButtonCustom';
import ItemCart from '../components/ItemCart';
import Loading from '../components/Loading';
import { Colors } from '../utils/colors';

const CartScreen = () => {
    const { cart } = useSelector((state) => state.cart.value);

    const getTotal = () => {
        let value = 0;
        if (cart) {
            cart.forEach((element) => {
                value = value + element.price * element.quantity;
            });
        }
        return value;
    };

    if (!cart) {
        return <Loading />;
    }

    return (
        <View style={styles.container}>
            {cart && cart.length > 0 ? (
                <View>
                    <FlatList
                        style={{height: Dimensions.get('screen').height * 0.5}}
                        data={cart}
                        renderItem={(item) => <ItemCart key={item.item.id} item={item.item} />}
                        keyExtractor={(item) => item.id}
                    />
                    <View style={styles.containerSummary}>
                        <Text style={styles.totalText}>{`Total:  $${getTotal()}`}</Text>
                        <ButtonCustom label={"Finalizar compra"} onPress={() => {}} />
                    </View>
                        
                </View>
            ) : (
                <View style={styles.emptyState}>
                    <Image
                        style={{ width: 300, height: 250 }}
                        source={require('../../assets/images/empty_cart.png')}
                    />
                    <Text style={styles.textEmptyState}>No tenés productos en el carrito</Text>
                </View>
            )}
        </View>
    );
};

export default CartScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    bottom: {
        position: 'absolute',
        bottom: 20,
        right: '25%',
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
    containerSummary: {
        marginVertical: 14,
        borderTopColor: Colors.greyLight,
        borderTopWidth:2
    },
    totalText:{
        fontSize:20,
        textAlign: 'center',
        marginVertical:10,
    }
});
