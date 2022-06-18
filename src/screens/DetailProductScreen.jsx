import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ButtonCustom from '../components/ButtonCustom';
import Loading from '../components/Loading';
import Modal from '../components/Modal';
import { addProduct } from '../features/cart';
import { Colors } from '../utils/colors';

const DetailProductScreen = ({ route }) => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const { cart } = useSelector((state) => state.cart.value);

    useEffect(() => {
        setProduct(route.params?.product);
        setLoading(false);
    }, []);


    const handleAddProduct = () => {
        setShowModal(true);
        dispatch(addProduct(product))
    };

    if  (loading) {
        return <Loading />;;
    }

  return (
        <ScrollView style={styles.container}>
            <Image style={styles.image} source={{ uri: product?.image }} />
            <View style={styles.product}>
                <View style={styles.flexRow}>
                    <Text style={styles.description}>{product?.description}</Text>
                    <Text style={styles.price}>$ {product.price}</Text>
                </View>
                <View style={styles.containerDescription}>
                    <Text style={styles.textDescription}>
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                        sheets containing Lorem Ipsum passages.
                    </Text>
                </View>
                <ButtonCustom label={'Agregar al Carrito'} onPress={() => handleAddProduct()} />
            </View>
            {showModal && <Modal title={"Carrito"} message={'Producto Agregado correctamente'} onCancel={() => setShowModal(false)} />}
        </ScrollView>
    );
};

export default DetailProductScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 20,
        alignSelf: 'center',
        marginVertical: 20,
    },
    product: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    description: {
        fontWeight: 'bold',
        fontSize: 22,
        marginBottom: 20,
    },
    price: {
        color: Colors.greyDark,
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'right',
    },
    containerDescription: {
        marginVertical: 20,
    },
    textDescription: {
        color: Colors.greyDark,
    },
    flexRow: {
        flexDirection: 'row', 
        justifyContent: 'space-between'
    }
});
