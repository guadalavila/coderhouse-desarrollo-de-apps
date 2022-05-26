import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import ItemOrder from '../components/ItemOrder'
import { ORDERS } from '../mock/orders'

const OrdersScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList 
      data={ORDERS}
      renderItem={(item) => (<ItemOrder item={item.item} />)}
      keyExtractor={(item) => item.id}/>
    </View>
  )
}

export default OrdersScreen

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#fff',
    flex:1,
  }
})