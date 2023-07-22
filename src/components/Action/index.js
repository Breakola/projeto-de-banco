import React from 'react';
import { View, Text, TouchableOpacity,StyleSheet, ScrollView } from 'react-native';
import {AntDesign} from '@expo/vector-icons'

export default function Action() {
 return (
   <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.container}>

    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.area}>
            <AntDesign name= "addfolder" size={26} color={"#000"}/>
        </View>
        <Text style={styles.labelButton}>Depositos</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.area}>
            <AntDesign name= "tagso" size={26} color={"#000"}/>
        </View>
        <Text style={styles.labelButton}>Compras</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.area}>
            <AntDesign name= "creditcard" size={26} color={"#000"}/>
        </View>
        <Text style={styles.labelButton}>Cartão</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.area}>
            <AntDesign name= "barcode" size={26} color={"#000"}/>
        </View>
        <Text style={styles.labelButton}>Boletos</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.area}>
            <AntDesign name= "setting" size={26} color={"#000"}/>
        </View>
        <Text style={styles.labelButton}>Configurações</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.area}>
            <AntDesign name= "qrcode" size={26} color={"#000"}/>
        </View>
        <Text style={styles.labelButton}>Qrcode</Text>
    </TouchableOpacity>

   </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        maxHeight: 84,
        marginBottom:14,
        marginTop: 14,
        paddingEnd: 14,
        paddingStart: 14,
    },
    area: {
        backgroundColor: '#ecf0f1',
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionButton: {
        alignItems: 'center',
        marginRight: 32,
    },
    labelButton: {
        marginTop: 4,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})