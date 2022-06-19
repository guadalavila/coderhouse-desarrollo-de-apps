import React, { useEffect } from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../utils/colors';
import { useDispatch, useSelector } from 'react-redux';
import AddressItem from '../components/AddressItem';
import { getAllAddress } from '../features/address';

const AdressScreen = () => {
    const dispatch = useDispatch();
    const { address, loading } = useSelector((state) => state.address.value);

    useEffect(() => {
        dispatch(getAllAddress())
      }, [])

    return (
        <View style={styles.container}>
            {address && address.length > 0 ? (
              <FlatList
                  style={{height: Dimensions.get('screen').height * 0.5}}
                  data={address}
                  renderItem={(item) => <AddressItem key={item.item.id} item={item.item} />}
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
