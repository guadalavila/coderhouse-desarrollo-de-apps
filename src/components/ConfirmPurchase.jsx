import React from 'react'
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import { Colors } from '../utils/colors'

const ConfirmPurchase = ({id, onConfirm}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={true}>
    <View style={styles.centeredView}>
        <View style={styles.modalView}>
            <Text style={styles.modalText}>Orden Confirmada!</Text>
            <Text style={styles.message}>Número de orden generado: {id}</Text>
            <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={onConfirm}
            >
                <Text style={styles.textStyle}>ACEPTAR</Text>
            </Pressable>
        </View>
    </View>
</Modal>
  )
}

export default ConfirmPurchase


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 30,
        elevation: 2,
        marginTop: 20,
    },
    buttonClose: {
        backgroundColor: Colors.primary,
    },
    textStyle: {
        color: "#000",
        fontWeight: "bold",
        textAlign: "center",
        fontSize:16
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20,
    },
    message: {
        fontSize:16,
    }
});