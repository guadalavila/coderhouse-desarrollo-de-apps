import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
