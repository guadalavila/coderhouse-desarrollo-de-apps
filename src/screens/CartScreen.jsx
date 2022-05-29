import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import ButtonCustom from '../components/ButtonCustom'
import ItemCart from '../components/ItemCart'
import Loading from '../components/Loading'

const CartScreen = () => {
  const { cart }  = useSelector(state => state.cart.value);

  const getTotal = () => {
    let value = 0;
    if(cart) { 
      cart.forEach(element => {
        value = value + (element.price * element.quantity);
      });
    }
    return value;
  }

  if(!cart){
    return (
      <Loading/>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
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