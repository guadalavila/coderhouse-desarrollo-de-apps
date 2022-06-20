import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ButtonCustom from "../components/ButtonCustom";
import Input from "../components/Input";
import Modal from "../components/Modal";
import { useDispatch, useSelector } from 'react-redux'
import { login, resetDataUser } from "../features/auth";
import Loading from "../components/Loading";
import { Colors } from "../utils/colors";

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [errorLogin, setErrorLogin] = useState('');
    const dispatch = useDispatch();
    const {error, loading} = useSelector(state => state.auth.value);

    useEffect(() => {
        if(error === "EMAIL_NOT_FOUND"){
            setErrorLogin('Para ingresar debes crearte una cuenta');
            setShowModal(true);
            return;
        }else if(error === "INVALID_PASSWORD"){
            setErrorLogin('Contraseña incorrecta');
            setShowModal(true);
            return;
        }
    }, [error, loading])

    const closeModal = () => {
        setShowModal(false);
        dispatch(resetDataUser());
    }
   
    const handleLogin = () => {
        const reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
        if(email === "" || password === ""){
            setErrorLogin('Debes completar todos los datos');
            setShowModal(true);
            return;
        }
        if(!reg.test(email)){
            setErrorLogin('Debes ingresar un email válido');
            setShowModal(true);
            return;
        }
        if(password.length < 6 ){
            setErrorLogin('La contraseña debe tener como mínimo 6 caracteres');
            setShowModal(true);
            return;
        }
        dispatch(login({email, password}));
    } 
 

    return (
        <ScrollView style={{backgroundColor: '#fff'}}>
            <View style={styles.container}>
            <View >
                <Image resizeMode='center' style={{ width: 200, height: 200, alignSelf:'center' }} source={require('../../assets/images/login.png')} />
                <Input
                    label={"E-mail"}
                    value={email}
                    onChangeText={(value) => setEmail(value.replace(" ", ""))}
                />
                <Input
                    label={"Contraseña"}
                    value={password}
                    password
                    onChangeText={(value) => setPassword(value.replace(" ", ""))}
                />
            </View>
            <View style={styles.containerButton}>
                <ButtonCustom
                    loading={loading}
                    label={"Ingresar"}
                    onPress={handleLogin}
                />
                <TouchableOpacity style={styles.outline} activeOpacity={0.7} onPress={() =>navigation.navigate('SignInScreen')}>
                    <Text style={styles.textButton}>Registrarse</Text>
                </TouchableOpacity>
            </View>
            {
                showModal && <Modal title={"Login"} message={errorLogin} onCancel={() => closeModal()} />
            }
            </View>
        </ScrollView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent:'space-evenly',
    },
    containerButton: {
        marginTop: 20,
    },
    outline:{
        width:'70%',
        paddingHorizontal:20,
        paddingVertical:14,
        alignSelf:'center',
    },
    textButton: {
        color: "#000",
        textAlign: 'center',
        textDecorationLine:'underline',
        textDecorationColor: Colors.primary,
        fontSize:16,
        fontWeight:'bold'
    }
});
