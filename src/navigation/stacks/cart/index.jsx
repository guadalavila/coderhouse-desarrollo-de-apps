import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from '../../../screens/CartScreen';
import { customTabHeader } from '../../../utils/styles';
import { Entypo } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { removeCart } from '../../../features/cart';
import { TouchableOpacity } from 'react-native';

const Stack = createNativeStackNavigator();

const CartStack = () => {
  const { cart } = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  return (
    <Stack.Navigator initialRouteName="" screenOptions={{...customTabHeader}}>
      <Stack.Screen
          name= "CartScreen"
          component={CartScreen}
          options={{title: "Carrito de Compras",
          headerRight: () => (
            <TouchableOpacity style={cart?.length ===0 ? { display: 'none'}: null}  onPress={() => dispatch(removeCart())}>
              <Entypo name="trash" size={22} color={"black"} />
            </TouchableOpacity>
          )
        }}
        >
        </Stack.Screen> 
    
    </Stack.Navigator>
  )
}

export default CartStack
