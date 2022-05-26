import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors } from '../utils/colors'

const formatDay = (time) => {
    const date = new Date(time)
    return date.toLocaleDateString();
}

const ItemOrder = ({item: {id, total,date}}) => {
    console.log(total)
  return (
    <View style={styles.item}>
        <Text>{formatDay(date)}</Text>
        <Text style={styles.textTotal}>${total}</Text>
    </View>
  )
}

export default ItemOrder

const styles = StyleSheet.create({
    item:{
        backgroundColor: Colors.greyLightSecondary,
        padding:20,
        marginVertical:10,
        marginHorizontal:20,
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    textTotal:{
        marginTop:10,
        fontWeight:'bold',
        fontSize:16

    }
})