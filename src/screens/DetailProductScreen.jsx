import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import ButtonCustom from '../components/ButtonCustom';
import Loading from '../components/Loading';
import ModalCustom from '../components/ModalCustom';
import { addProduct } from '../features/cart';
import { Colors } from '../utils/colors';

const DetailProductScreen = ({route}) => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch();
    const {cart} = useSelector(state => state.cart.value);

    useEffect(() => {
        setProduct(route.params?.product);
        setLoading(false);
    }, [])

    const handleAddProduct = () => {
        const modifyQuantity = cart.find(x=>x.id===product.id);
        console.log({modifyQuantity})
        if(modifyQuantity){
            // dispatch(addProduct({...product, quantity:1 }))
            return;
        }else{
            dispatch(addProduct({...product, quantity:1 }))
        }
        setShowModal(true);
    }

    if(loading){
        return <Loading/>
    }
    
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: product?.image}} />
      <View style={styles.product}>
          <Text style={styles.description}>{product?.description}</Text>
          <Text style={styles.price}>$ {product.price}</Text>
          <ButtonCustom
           label={"Agregar al Carrito"}
           onPress={() => handleAddProduct()}/>
      </View>
         {showModal && (
            <ModalCustom
                message={""}
                onCancel={() => setShowModal(false)}
            />
        )}
    </View>
  )
}

export default DetailProductScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1
    },
    image:{
        width:200,
        height:200,
        borderRadius:20,
        alignSelf:'center',
        marginVertical:20,
    },
    product:{
        marginTop:20,
        paddingHorizontal:20
    },
    description:{
        fontWeight:'bold',
        fontSize:22,
        marginBottom:20
    },
    price:{
        color: Colors.secondary,
        fontWeight:'bold',
        fontSize:20,
        marginBottom:20,
        textAlign: 'right'
    }
})