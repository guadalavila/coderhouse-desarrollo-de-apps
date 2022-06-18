import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Colors } from '../utils/colors';
import { Entypo } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { removeProduct } from '../features/cart';

const ItemCart = ({ item: { description, price, quantity, image, id } }) => {
    const dispatch = useDispatch();
    return (
        <View style={styles.item}>
            <View style={styles.itemRow}>
                <Image style={styles.image} source={{ uri: image }} />
                <View>
                    <Text style={styles.textBold}>{description}</Text>
                    <Text>Cantidad: {quantity}</Text>
                    <Text>$ {price}</Text>
                </View>
            </View>
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.deleteButton}
                onPress={() => dispatch(removeProduct(id))}>
                <Entypo color={Colors.greyDark} name='trash' size={22} />
            </TouchableOpacity>
        </View>
    );;
};

export default ItemCart;

const styles = StyleSheet.create({
    itemRow: {
        flexDirection: 'row',
    },
    item: {
        paddingHorizontal: 10,
        borderBottomColor: Colors.greyLight,
        borderBottomWidth: 1,
        marginHorizontal: 20,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    image: {
        width: 70,
        height: 70,
        marginRight: 20,
    },
    textBold: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    deleteButton: {
        alignSelf: 'center',
    },
});
