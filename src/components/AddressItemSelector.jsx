import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors } from '../utils/colors'
import { Entypo } from '@expo/vector-icons';

const AddressItemSelector = ({ item: { currentAdress, image, id }, isSelect, callback }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container} onPress={() => callback(id) }>
        <View style={styles.flexRow}>
            <Image style={styles.image} source={{uri: image}} />
            <Text style={styles.textStyle}>{currentAdress}</Text>
        </View>
        <View style={styles.selectButton}>
            {isSelect &&<Entypo name="check" size={24} color={Colors.success} />}
        </View>
    </TouchableOpacity>
  )
}

export default AddressItemSelector;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        borderBottomColor: Colors.greyLight,
        borderBottomWidth: 1,
        marginHorizontal: 20,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    image: {
        borderRadius:10,
        width:50,
        height:50, 
        marginRight: 10
    },
    textStyle: {
        alignSelf: 'center',
        fontWeight: '700',
        fontSize:16
    },
    flexRow: {
        flexDirection: 'row'
    },
    selectButton: {
        alignSelf: 'center'
    }
})