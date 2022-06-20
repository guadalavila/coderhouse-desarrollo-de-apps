import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ButtonCustom from "../components/ButtonCustom";
import Input from "../components/Input";
import Modal from "../components/Modal";
import { Colors } from "../utils/colors";
import { useDispatch, useSelector } from 'react-redux'
import { resetDataUser, signUp } from "../features/auth";

const SignInScreen = ({navigation}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch()
    const [errorSignIn, setErrorSignIn] = useState('')
    const {error, loading} = useSelector(state => state.auth.value);

    useEffect(() => {
        if(error === "EMAIL_EXISTS"){
            setErrorSignIn(`${email} ya se encuentra registrado.`);
            setShowModal(true);
            return;
        }
    }, [error, loading])

    const closeModal = () => {
        setShowModal(false);
        dispatch(resetDataUser());
    }

    const handleSignup = () => {
        const reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
        if(email === "" || password === "" || passwordConfirm === ""){
            setErrorSignIn('Debes completar todos los datos');
            setShowModal(true);
            return;
        }
        if(!reg.test(email)){
            setErrorSignIn('Debes ingresar un email válido');
            setShowModal(true);
            return;
        }
        if(password.length < 6 || passwordConfirm.length < 6 ){
            setErrorSignIn('La contraseña debe tener como mínimo 6 caracteres');
            setShowModal(true);
            return;
        }
        if(password !== passwordConfirm){
            setErrorSignIn('Las contraseña y la confirmación deben ser iguales');
            setShowModal(true);
            return;
        }
        dispatch(signUp({email, password}))
    } 
 
  return (
    <View style={styles.container}>
        <View >
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
                <Input
                label={"Repetir Contraseña"}
                value={passwordConfirm}
                password
                onChangeText={(value) => setPasswordConfirm(value.replace(" ", ""))}
            />
        </View>
        <View style={styles.containerButton}>
            <ButtonCustom
                label={"Registrarse"}
                onPress={handleSignup}
                loading={loading}
            />
            <TouchableOpacity style={styles.outline} activeOpacity={0.7} onPress={() =>navigation.goBack()}>
                <Text style={styles.textButton}>Cancelar</Text>
            </TouchableOpacity>
        </View>
        {
            showModal && <Modal title={"Registro"} message={errorSignIn} onCancel={() => closeModal()} />
        }
    </View>
  )
}

export default SignInScreen

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
})