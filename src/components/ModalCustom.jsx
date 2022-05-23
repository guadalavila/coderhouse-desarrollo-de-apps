import React from "react";
import { StyleSheet, Text, View, Modal, Pressable } from "react-native";
import { Colors } from "../utils/colors";

const ModalCustom = ({ onCancel, totalTask }) => {
    return (
        <Modal animationType="slide" transparent={true} visible={true}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>INFO!</Text>
                    <Text>Cantidad de Tareas: {totalTask}</Text>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={onCancel}
                    >
                        <Text style={styles.textStyle}>Cerrar</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
};

export default ModalCustom;

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
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontWeight: "bold",
    },
});
