import React from 'react';
import { View, Text, StyleSheet, Image, TextInput} from 'react-native';
import { useState } from 'react';

export default function Perfil() {

     const [Nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
 return (
   <View style={styles.container} >
    <Image style={{width:200, height: 100}} source={require('../../assets/R.jpg')}/>

    <TextInput style={styles.textInput}  placeholder="Seu Email"/>
    <TextInput style={styles.textInput}   placeholder="Senha"/>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#27282D',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    textInput: {
        width: '80%',
        height: 40,
        backgroundColor: 'white',
        padding: 10,
        marginTop: 30,
        borderRadius: 40/2,
        paddingLeft: 10,
    }
})