import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, ScrollView, Image, TouchableOpacity } from "react-native";
import ButtonCustom from "../components/ButtonCustom";
import useCamera from "../hooks/useCamera";
import { Colors } from "../utils/colors";
import { Entypo } from '@expo/vector-icons';

const NewAdressScreen = () => {
    const [adress, setAdress] = useState({
        currentAdress: '',
        image: undefined
    })
    const { getPermissionCamera, launchCamera, launchGallery } = useCamera()

    useEffect(() => {
      console.log({adress})
    }, [adress])
    

    const openCamera = async () =>{
        const havePermission = await getPermissionCamera()
        // if(!havePermission) return;
        const image= await launchCamera();
        console.log({image})
        setAdress({...adress, image: image})
    }

    const selectImageFromGallery = async () =>{
        const image= await launchGallery();
        console.log(image)
        setAdress({...adress, image: image})
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
                    <View style={{alignItems:'center'}}>
                        <Image source={{ uri: adress.image }} style={{ width: 200, height: 200, }} />
                    </View>
            </>
            }
            <ButtonCustom disabled={adress.image} label={"TOMAR FOTO"} onPress={() =>openCamera()} />
            <ButtonCustom disabled={adress.image} label={"SELECCIONAR IMAGEN"} onPress={() => selectImageFromGallery() } />
            <ButtonCustom label={"OBTENER UBICACIÓN"} onPress={() =>{}} />
            <View style={styles.containerButton}>
                <ButtonCustom disabled={!adress.image || adress.currentAdress === ''} color={Colors.primary} label={"CONFIRMAR"} onPress={() =>{}} />
            </View>
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
      }
});
