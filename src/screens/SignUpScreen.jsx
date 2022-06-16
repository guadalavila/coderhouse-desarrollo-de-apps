import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ButtonCustom from "../components/ButtonCustom";
import Input from "../components/Input";
import Modal from "../components/Modal";
import Loading from "../components/Loading";
import { Colors } from "../utils/colors";
import { useDispatch } from 'react-redux'
import { signUp } from "../features/auth";

const SignUpScreen = ({navigation}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleSignup = () => {
        if(email === "" || password === ""){
            setShowModal(true);
            setError('Debes completar todos los datos');
            return;
        }
        if(password.length < 6){
            setShowModal(true);
            setError('La contraseña debe tener como mínimo 6 caracteres');
        }
        setLoading(true);
        dispatch(signUp({ email: email, password: password }))

    } 
 
  return (
    <View style={styles.container}>
        <View >
            <Input
                label={"E-mail"}
                value={email}
                onChangeText={(value) => setEmail(value)}
            />
            <Input
                label={"Password"}
                value={password}
                password
                onChangeText={(value) => setPassword(value)}
            />
        </View>
        <View style={styles.containerButton}>
            <ButtonCustom
                label={"Registrarse"}
                onPress={handleSignup}
            />
            <TouchableOpacity style={styles.outline} activeOpacity={0.7} onPress={() =>navigation.goBack()}>
                <Text style={styles.textButton}>Cancelar</Text>
            </TouchableOpacity>
        </View>
        {
            showModal && <Modal title={"Registro"} message={error} onCancel={() => setShowModal(!showModal)} />
        }
    </View>
  )
}

export default SignUpScreen

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