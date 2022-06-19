import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Colors } from '../utils/colors'

const AddressItem = ({ item: { address, image } }) => {
  return (
    <View style={styles.container}>
        <View style={styles.flexRow}>
            <Image style={styles.image} source={{uri: image}} />
            <Text style={styles.textStyle}>{address}</Text>
        </View>
    </View>
  )
}

export default AddressItem;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        borderBottomColor: Colors.greyLight,
        borderBottomWidth: 1,
        marginHorizontal: 20,
        paddingVertical: 20,
        flexDirection: 'row',
    },
    image: {
        borderRadius:10,
        width:85,
        height:85, 
        marginRight: 10
    },
    textStyle: {
        alignSelf: 'center',
        fontWeight: '700',
        fontSize:16
    },
    flexRow: {
        flexDirection: 'row'
    }
})