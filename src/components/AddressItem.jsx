import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Colors } from '../utils/colors';
import { Entypo } from '@expo/vector-icons';
import { removeAddressDB } from '../features/address';
import { useDispatch } from 'react-redux';
import Modal from './Modal';

const AddressItem = ({ item: { address, image, id } }) => {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    
    return (
        <View style={styles.container}>
            <View style={[styles.item]}>
                <View style={[styles.flexRow, { width: '90%' }]}>
                    <Image style={styles.image} source={{ uri: image }} />
                    <Text style={styles.textStyle}>{address}</Text>
                </View>
                <TouchableOpacity style={styles.trash} onPress={() => setShowModal(true)}>
                    <Entypo name='trash' size={22} color={Colors.greyDark} />
                </TouchableOpacity>
            </View>
            {showModal &&
                <Modal title={"Direcciones"} message={"¿Estás seguro que queres eliminar la dirección?"} onCancel={() => setShowModal(false)} onConfirm={() => dispatch(removeAddressDB(id)) } />
            }
        </View>
    );;
};

export default AddressItem;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        borderBottomColor: Colors.greyLight,
        borderBottomWidth: 1,
        marginHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row',
    },
    image: {
        borderRadius: 10,
        width: 55,
        height: 55,
        marginRight: 10,
    },
    textStyle: {
        alignSelf: 'center',
        fontWeight: '700',
        fontSize: 16,
    },
    flexRow: {
        flexDirection: 'row',
    },
    trash: {
        alignSelf: 'center',
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
