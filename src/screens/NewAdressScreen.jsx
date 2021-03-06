import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, ScrollView, Image, TouchableOpacity } from "react-native";
import ButtonCustom from "../components/ButtonCustom";
import useCamera from "../hooks/useCamera";
import { Colors } from "../utils/colors";
import { Entypo } from '@expo/vector-icons';
import { useDispatch } from "react-redux";
import { addAddress, addAddressDB } from "../features/address";
import Modal from "../components/Modal";

const NewAdressScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const [adress, setAdress] = useState({
        currentAdress: '',
        image: undefined,
    })
    const [showModal, setShowModal] = useState(false);
    const { getPermissionCamera, launchCamera, launchGallery } = useCamera();

    const openCamera = async () =>{
        const havePermission = await getPermissionCamera()
        // if(!havePermission) return;
        const image= await launchCamera();
        setAdress({...adress, image: image})
    }

    const selectImageFromGallery = async () =>{
        const image= await launchGallery();
        setAdress({...adress, image: image})
    }

    const addNewAddress = () => {
        dispatch(addAddressDB({id:Date.now(), address: adress.currentAdress.toUpperCase(), image: adress.image}))
        dispatch(addAddress({id:Date.now(), address: adress.currentAdress.toUpperCase(), image: adress.image}))
        setShowModal(true);
    }

    return (
        <ScrollView style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Ingresá la dirección"
                onChangeText={(text) => setAdress({...adress, currentAdress: text})}
            />
            {adress?.image &&
            <>
                    <View style={styles.trash}>
                        <TouchableOpacity  activeOpacity={0.7} onPress={()=>setAdress({...adress, image: undefined})}>
                            <Entypo name="trash" size={24} color={"black"} />
                        </TouchableOpacity>
                    </View>
                    <View style={{alignItems:'center', marginVertical:10}}>
                        <Image source={{ uri: adress.image }} style={styles.image} />
                    </View>
            </>
            }
            <ButtonCustom disabled={adress.image} label={"TOMAR FOTO"} onPress={() =>openCamera()} />
            <ButtonCustom disabled={adress.image} label={"SELECCIONAR IMAGEN"} onPress={() => selectImageFromGallery() } />
            {/* <ButtonCustom label={"OBTENER UBICACIÓN"} onPress={() =>{}} /> */}
            <View style={styles.containerButton}>
                <ButtonCustom disabled={!adress.image || adress.currentAdress === ''} color={Colors.primary} label={"CONFIRMAR"} onPress={() => addNewAddress()} />
            </View>
            {showModal && <Modal title={"Direcciones"} message={"Dirección agregada correctamente!"} onCancel={() => navigation.goBack()} />}
        </ScrollView>
    );
};

export default NewAdressScreen;

const styles = StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor: "white"
      },
      title:{
          fontWeight:'bold',
          fontSize:20,
          textAlign:'center',
          marginBottom:4,
      },
      containerButton:{
         marginTop: 50,
      },
      input:{
        borderBottomColor: Colors.primary,
        borderBottomWidth: 4,
        paddingVertical: 10,
        marginVertical: 30,
        marginHorizontal: 20,
        fontSize: 16,
      },
      trash:{
          marginRight:20,
          alignItems:'flex-end'
      },
      image:{
        width: 200, 
        height: 200, 
        borderRadius:10,
      }
});
