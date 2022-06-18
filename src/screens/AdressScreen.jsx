import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '../utils/colors';
import { useSelector } from 'react-redux';
import AddressItem from '../components/AddressItem';

const AdressScreen = () => {
    const { address } = useSelector((state) => state.address.value);

    console.log({ address });

    return (
        <View style={styles.container}>
            {address && address.length > 0 ? (
              <FlatList
                  style={{height: Dimensions.get('screen').height * 0.5}}
                  data={address}
                  renderItem={(item) => <AddressItem key={item.item.currentAdress} item={item.item} />}
                  keyExtractor={(item) => item.id}
              />
            ) : (
                <View style={styles.emptyState}>
                    <Image
                        style={{ width: 300, height: 250 }}
                        source={require('../../assets/images/empty_address.png')}
                    />
                    <Text style={styles.textEmptyState}>No tenés direcciones agregadas</Text>
                </View>
            )}
        </View>
    );
};

export default AdressScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    textEmptyState: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 40,
        color: Colors.greyDark,
    },
    emptyState: {
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        height: '100%',
    },
});
