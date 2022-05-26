import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { customHeader, customTabHeader } from '../../../utils/styles';
import DashboardScreen from '../../../screens/DashboardScreen';
import DetailCategoryScreen from '../../../screens/DetailCategoryScreen';

const Stack = createNativeStackNavigator();

const ShopStack = () => {
  return (
    <Stack.Navigator initialRouteName="DashboardScreen" screenOptions={{...customTabHeader}}>
      <Stack.Screen name="DashboardScreen" component={DashboardScreen} options={{ title: 'Categorias', ...customHeader}}   />        
      <Stack.Screen name="DetailCategoryScreen" component={DetailCategoryScreen} options={{title: '', ...customHeader}} />
    </Stack.Navigator>
  )
}

export default ShopStack

const styles = StyleSheet.create({})