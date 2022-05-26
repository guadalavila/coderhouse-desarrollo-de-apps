import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Colors } from '../utils/colors'

const ItemCart = ({item:{ description, price, quantity, image}}) => {
  return (
    <View style={styles.item}>
        <Image
            style={styles.image}
            source={{uri: image}}
        />
        <View>
            <Text style={styles.textBold}>{description}</Text>
            <Text>Cantidad: {quantity}</Text>
            <Text>$ {price}</Text>
        </View>

    </View>
  )
}

export default ItemCart

const styles = StyleSheet.create({
    item:{
        paddingHorizontal:10,
        borderBottomColor: Colors.greyLight,
        borderBottomWidth: 1,
        marginHorizontal:20,
        paddingVertical:20,
        flexDirection:'row',
    },
    image:{
        width: 70,
        height: 70,
        marginRight:20,
    },
    textBold:{
        fontWeight: 'bold',
        fontSize:16
    }
})