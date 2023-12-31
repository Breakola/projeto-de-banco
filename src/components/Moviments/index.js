import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { MotiView, MotiText, AnimatePresence, } from "moti";

export default function Moviments({data}) {
    const [showValue, setShowValue] = useState(false)
 return (
   <TouchableOpacity style={styles.container } onPress={ ()=> setShowValue(!showValue)} >
    <Text style={styles.date}>{data.date}</Text>

    <View style={styles.content}>
        <Text style={styles.label}>{data.label}</Text>

       {showValue ? (
        <AnimatePresence exitBeforeEnter>
         <MotiText style={data.type  === 1 ? styles.value : styles.gastos}
            from={{
                translateX: 100,
            }}
            animate={{
                translateX: 0,
            }}
            transition={{
                type: 'spring',
                duration: 500,
            }}
         >
            R${data.type === 1 ? `R$ ${data.value}` :
         `-R$ ${data.value}` }
         </MotiText>
         </AnimatePresence>
       ) : (
        <AnimatePresence exitBeforeEnter>
        <MotiView style={styles.skeleton}
            from={{opacity: 0 }}
            animate={{opacity: 1}}
            transition={{type: 'timing'}}
        >
         </MotiView>
         </AnimatePresence>
       )}
    </View>
   </TouchableOpacity >
  );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: '#DADADA'
    },
    date: {
        color: '#DADADA',
        fontWeight: 'bold'
    },
    content :{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
        marginTop: 2,
    }, 
    label: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    value: {
        fontSize:16,
        color: '#2ecc71',
        fontWeight: 'bold'
    },
    gastos: {
        color: '#e74c3c',
        fontSize: 16,
        fontWeight: 'bold'
    },
    skeleton: {
        marginTop:6,
        width: 80,
        height: 10,
        backgroundColor: '#DADADA',
        borderRadius: 8
    }
})