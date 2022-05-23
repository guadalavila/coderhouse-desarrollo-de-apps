import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Colors } from '../utils/colors'

const Product = (item) => {
    const {item:{ description, price, image}} = item

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{uri: image}}
            />
            <View>
                <Text style={styles.title}>{description}</Text>
                <Text style={styles.subtitle}>Precio: ${price}</Text>
            </View>
        </View>
    )
}

export default Product

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#F9F9F9", 
        marginHorizontal:20, 
        marginVertical:10, 
        paddingVertical:20, 
        paddingHorizontal:10,
        flexDirection:'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title:{
        fontWeight: 'bold',
        fontSize:18,
    },
    subtitle:{
        fontSize:16,
        color: Colors.greyDark,
        textAlign:'right'
    },
    image:{
        width: 70,
        height: 70,
        marginRight:20,
    }
})