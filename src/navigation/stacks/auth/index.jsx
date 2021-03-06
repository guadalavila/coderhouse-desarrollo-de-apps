import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from '../../../screens/CartScreen';
import { customTabHeader } from '../../../utils/styles';
import LoginScreen from '../../../screens/LoginScreen';
import SignInScreen from '../../../screens/SignInScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  
  return (
    <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{...customTabHeader}}>
      <Stack.Screen
          name= "LoginScreen"
          component={LoginScreen}
          options={{title: ""}}
        >
        </Stack.Screen> 
        <Stack.Screen
          name= "SignInScreen"
          component={SignInScreen}
          options={{title: "REGISTRATE"}}
        >
        </Stack.Screen> 
    </Stack.Navigator>
  )
}

export default AuthStack;
