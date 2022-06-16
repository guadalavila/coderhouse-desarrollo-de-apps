import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ButtonCustom from "../components/ButtonCustom";
import Input from "../components/Input";
import Modal from "../components/Modal";
import { useDispatch } from 'react-redux'
import { login } from "../features/auth";
import Loading from "../components/Loading";
import { Colors } from "../utils/colors";
// import { validateEmail, validatePassword } from "../utils/validates";

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch()

   
    const handleLogin = () => {
        if(email === "" || password === ""){
            setShowModal(true);
            return;
        }
        dispatch(login({ email: email, password: password }));
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
                    label={"Ingresar"}
                    onPress={handleLogin}
                />
                <TouchableOpacity style={styles.outline} activeOpacity={0.7} onPress={() =>navigation.navigate('SignUpScreen')}>
                    <Text style={styles.textButton}>Registrarse</Text>
                </TouchableOpacity>
            </View>
            {
                showModal && <Modal title={"Login"} message={"Debes completar todos los datos"} onCancel={() => setShowModal(!showModal)} />
            }
        </View>
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
