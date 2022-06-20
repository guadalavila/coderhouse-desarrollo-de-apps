import React, { useState } from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors } from '../utils/colors'

const ItemOrder = ({item: {date, items}}) => {
    const [showDetail, setShowDetail] = useState(false);
  return (
    <View style={styles.item}>
        <View>
            <Text>{date}</Text>
            <View style={styles.itemRow}>
                <Text>Dirección  </Text>
                <Text style={{fontWeight:'bold'}}>{items.address ?? ''}</Text>
            </View>
            <Text style={styles.textTotal}>TOTAL ${items.total}</Text>
            {showDetail &&
                <View>
                {items.cart.map(({ description, id, price, quantity }) => (
                    <View key={id} style={styles.containerItem}>
                        <Text>{description}</Text>
                        <Text style={{marginBottom:20}}>{quantity} x {price}</Text>
                    </View>
                ))}
                </View>
            }
        </View>
        <View style={styles.containerDetail}>
            <TouchableOpacity activeOpacity={0.7} onPress={() => setShowDetail(!showDetail)}>
                {!showDetail ? 
                    <Text style={styles.buttonDetail}>Ver detalle</Text> :
                    <Text style={styles.buttonDetail}>Ocultar detalle</Text>
                }
            </TouchableOpacity>
        </View>
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
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    textTotal:{
        fontWeight:'bold',
        fontSize:16
    },
    containerDetail:{
        alignSelf: 'center'
    },
    buttonDetail:{
        color: Colors.green,
        textDecorationLine: 'underline'
    },
    containerItem:{
        borderTopColor: Colors.primary,
        borderTopWidth:2,
        paddingTop:6,
        marginTop:6,
        width: Dimensions.get('screen').width * 0.4,
    },
    itemRow:{
        flexDirection:'row',
        justifyContent: 'space-between',
        marginVertical:4
    }
})