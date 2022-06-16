import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from '../../../screens/CartScreen';
import { customTabHeader } from '../../../utils/styles';
import LoginScreen from '../../../screens/LoginScreen';
import SignUpScreen from '../../../screens/SignUpScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  
  return (
    <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{...customTabHeader}}>
      <Stack.Screen
          name= "LoginScreen"
          component={LoginScreen}
          options={{title: "LOGIN"}}
        >
        </Stack.Screen> 
        <Stack.Screen
          name= "SignUpScreen"
          component={SignUpScreen}
          options={{title: "REGISTRARSE"}}
        >
        </Stack.Screen> 
    </Stack.Navigator>
  )
}

export default AuthStack
