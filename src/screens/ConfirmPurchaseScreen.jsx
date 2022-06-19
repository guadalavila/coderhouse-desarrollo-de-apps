import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AddressItemSelector from '../components/AddressItemSelector';
import ButtonCustom from '../components/ButtonCustom';
import useTotalCart from '../hooks/useTotalCart';
import { Colors } from '../utils/colors';
import { confirmPurchase, removeCart } from '../features/cart';
import ConfirmPurchase from '../components/ConfirmPurchase';


const ConfirmPurchaseScreen = ({navigation}) => {
    const [addressSelect, setAddressSelect] = useState(undefined);
    const [orderConfirm, setOrderConfirm] = useState(false)
    const { address } = useSelector((state) => state.address.value);
    const { cart, loading, response } = useSelector((state) => state.cart.value);
    const { getTotal } = useTotalCart();
    const dispatch = useDispatch();

    useEffect(() => {
        if(response?.name && !loading){
            setOrderConfirm(true);
            console.log("se realizo la compre con id: "+ response?.name)

        }
    }, [response])

    const resetCart = () => {
        dispatch(removeCart())
        navigation.goBack();
    }
    
    const confirmPurchase_ = () => {
        dispatch(confirmPurchase({cart: cart, total: getTotal()}))
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.selectAddress}>Selecciona una dirección</Text>
                <FlatList
                    style={{ height: Dimensions.get('screen').height * 0.4 }}
                    data={address}
                    renderItem={(item) => (
                        <AddressItemSelector
                            isSelect={item.item.id === addressSelect}
                            key={item.item.id}
                            item={item.item}
                            callback={(address_) => setAddressSelect(address_)}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <View style={styles.containerTotal}>
                <Text style={styles.labelTotal}>Total: </Text>
                <Text style={styles.total}>$ {getTotal()}</Text>
            </View>
             { addressSelect && <ButtonCustom loading={loading} label={"PAGAR"} onPress={() => confirmPurchase_()}/>}
             { orderConfirm && <ConfirmPurchase id={response?.name} onConfirm={() => resetCart()} /> }
           
        </View>
    );
};

export default ConfirmPurchaseScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    selectAddress: {
        color: Colors.black,
        fontSize: 16,
        margin: 14,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    containerTotal: {
      marginHorizontal:20,
      marginVertical:10,
      flexDirection: 'row',
    },
    labelTotal: {
      fontWeight: 'bold',
      fontSize: 20,
      textDecorationLine: 'underline',
    },
    total: {
      fontWeight: 'bold',
      fontSize: 22
    }
});
