import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ShopStack from '../stacks/shop';
import CartStack from '../stacks/cart';
import OrdersStack from '../stacks/orders';
import { Colors } from '../../utils/colors';
import AdressStack from '../stacks/adress';

const BottomTabs = createBottomTabNavigator()

const TabNavigatorLogged = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar
      }}
    >
      <BottomTabs.Screen
        name="ShopTab"
        component={ShopStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.item}>
                <Entypo name="shop" size={24} color={focused ? Colors.primary : "black"} />
                <Text style={styles.text}>Shop</Text>
              </View>
            )
          }
        }}
      />
      <BottomTabs.Screen
        name="CartTab"
        component={CartStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.item}>
                <Feather name="shopping-cart" size={24} color={focused ? Colors.primary : "black"} />
                <Text style={styles.text}>Carrito</Text>
              </View>
            )
          }
        }}
      />
      <BottomTabs.Screen
        name="OrdersTab"
        component={OrdersStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.item}>
                <Feather name="list" size={24} color={focused ? Colors.primary : "black"} />
                <Text style={styles.text}>Ordenes</Text>
              </View>
            )
          }
        }}
      />
       <BottomTabs.Screen
        name="AdressTab"
        component={AdressStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.item}>
                <Entypo name="location" size={24} color={focused ? Colors.primary : "black"} />
                <Text style={styles.text}>Direcciones</Text>
              </View>
            )
          }
        }}
      />
    </BottomTabs.Navigator>
  )
}

export default TabNavigatorLogged

const styles = StyleSheet.create({
    tabBar: {
        shadowRadius: 0.25,
        borderRadius: 15,
        height: 90,
      },
      item: {
        alignItems: 'center',
      },
      text:{
        paddingTop:10,
      }
})