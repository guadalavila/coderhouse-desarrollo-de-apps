import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { customHeader, customTabHeader } from '../../../utils/styles';
import DashboardScreen from '../../../screens/DashboardScreen';
import DetailCategoryScreen from '../../../screens/DetailCategoryScreen';
import DetailProductScreen from '../../../screens/DetailProductScreen';

const Stack = createNativeStackNavigator();

const ShopStack = () => {
  return (
    <Stack.Navigator initialRouteName="DashboardScreen" screenOptions={{...customTabHeader}}>
      <Stack.Screen name="DashboardScreen" component={DashboardScreen} options={{ title: 'Categorias', ...customHeader}}   />        
      <Stack.Screen name="DetailCategoryScreen" component={DetailCategoryScreen} options={{title: '', ...customHeader}} />
      <Stack.Screen name="DetailProductScreen" component={DetailProductScreen} options={{title: '', ...customHeader}} />
    </Stack.Navigator>
  )
}

export default ShopStack
