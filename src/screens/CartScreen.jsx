import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import ButtonCustom from '../components/ButtonCustom'
import ItemCart from '../components/ItemCart'
import { CART } from '../mock/cart'

const CartScreen = () => {
  const getTotal = () =>{
    let value = 0;
    CART.forEach(element => {
      value = value + (element.price * element.quantity);
    });
    return value;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={CART}
        renderItem={(item) => (<ItemCart item={item.item}/>)}
        keyExtractor={(item) => item.id}/>
      <View style={styles.bottom}>
        <ButtonCustom
          label={`Total:  $${getTotal()}`}
          onPress={() => {}}/>
      </View>
      
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  container:{
    flex:1, 
    backgroundColor: "white"
  },
  bottom:{
    position:'absolute',
    bottom: 120,
    right:'25%'
  } 
})