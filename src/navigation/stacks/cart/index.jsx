import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from '../../../screens/CartScreen';
import { customTabHeader } from '../../../utils/styles';

const Stack = createNativeStackNavigator();

const CartStack = () => {
  
  return (
    <Stack.Navigator initialRouteName="" screenOptions={{...customTabHeader}}>
      <Stack.Screen
          name= "CartScreen"
          component={CartScreen}
          options={{title: "Carrito de Compras"}}
        >
        </Stack.Screen> 
    
    </Stack.Navigator>
  )
}

export default CartStack
