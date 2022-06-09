import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { customTabHeader } from '../../../utils/styles';
import AdressScreen from '../../../screens/AdressScreen';
import NewAdressScreen from '../../../screens/NewAdressScreen';
import { Button, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

const AdressStack = ({navigation}) => {
  
  return (
    <Stack.Navigator initialRouteName="" screenOptions={{...customTabHeader}}>
      <Stack.Screen
          name= "AdressScreen"
          component={AdressScreen}
          options={{title: "Direcciones",
          headerRight: () => (
            <TouchableOpacity onPress={() =>navigation.navigate('NewAdressScreen')}>
              <Entypo name="add-to-list" size={22} color={"black"} />
            </TouchableOpacity>
          )
        }}
        >
        </Stack.Screen> 
        <Stack.Screen
          name= "NewAdressScreen"
          component={NewAdressScreen}
          options={{
          title: "Nueva Dirección",  
          }}
          
        >
        </Stack.Screen> 
    </Stack.Navigator>
  )
}

export default AdressStack
