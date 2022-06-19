import React from 'react'
import { TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { customHeader, customTabHeader } from '../../../utils/styles';
import DashboardScreen from '../../../screens/DashboardScreen';
import DetailCategoryScreen from '../../../screens/DetailCategoryScreen';
import DetailProductScreen from '../../../screens/DetailProductScreen';
import { Entypo } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { logout } from '../../../features/auth';

const Stack = createNativeStackNavigator();

const ShopStack = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  }
  return (
    <Stack.Navigator initialRouteName="DashboardScreen" screenOptions={{...customTabHeader}}>
      <Stack.Screen name="DashboardScreen" component={DashboardScreen} options={{ title: 'Categorias', ...customHeader, 
        headerRight: () => (
          <TouchableOpacity onPress={() => handleLogout()}>
            <Entypo name="log-out" size={22} color={"black"} />
          </TouchableOpacity>)
      }}/>        
      <Stack.Screen name="DetailCategoryScreen" component={DetailCategoryScreen} options={{title: '', ...customHeader}} />
      <Stack.Screen name="DetailProductScreen" component={DetailProductScreen} options={{title: '', ...customHeader}} />
    </Stack.Navigator>
  )
}

export default ShopStack
