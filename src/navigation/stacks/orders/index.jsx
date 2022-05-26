import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from '../../../utils/colors';
import CartScreen from '../../../screens/CartScreen';
import OrdersScreen from '../../../screens/OrdersScreen';
import { customTabHeader } from '../../../utils/styles';

const Stack = createNativeStackNavigator();

const OrdersStack = () => {
  return (
      <Stack.Navigator initialRouteName="" screenOptions={{...customTabHeader}}>
        <Stack.Screen
          name= "OrdersScreen"
          component={OrdersScreen}
          options={{
            title: "Ordenes"
          }}
        >
        </Stack.Screen> 
    </Stack.Navigator>
  )
}

export default OrdersStack

const styles = StyleSheet.create({})