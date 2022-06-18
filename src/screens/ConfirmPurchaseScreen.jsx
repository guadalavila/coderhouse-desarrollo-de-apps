import React, { useState } from 'react';
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import AddressItemSelector from '../components/AddressItemSelector';
import ButtonCustom from '../components/ButtonCustom';
import useTotalCart from '../hooks/useTotalCart';
import { Colors } from '../utils/colors';

const ConfirmPurchaseScreen = () => {
    const [addressSelect, setAddressSelect] = useState(undefined);
    const { address } = useSelector((state) => state.address.value);
    const { getTotal } = useTotalCart()

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
             {
               addressSelect && <ButtonCustom label={"PAGAR"} onPress={() => console.log("")}/>
             }
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
