import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Colors } from '../utils/colors'


const Input = ({ label, password = false, onChangeText, value, error = null}) => {
  return (
    <View style={styles.container}>
        <TextInput
            style={styles.input}
            placeholder={label}
            onChangeText={onChangeText}
            secureTextEntry={password}
            value={value}
        />
        {error && <Text style={styles.error}>{error}</Text>}
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    container:{
        marginVertical:10,
        marginHorizontal:20,
    },
    input:{
        paddingHorizontal:10,
        paddingVertical:14,
        borderRadius:10,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        borderColor: Colors.primary,
        borderBottomWidth: 2,
    },
    error: {
        color: Colors.danger,
        fontSize:15,
        fontWeight: 'bold',
        marginVertical:5,
        marginHorizontal:10,
    }
})