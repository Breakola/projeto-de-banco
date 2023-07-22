import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header'
import Balance from '../../components/Balance';
import Moviments from '../../components/Moviments';
import Action from '../../components/Action';



const list =[
    {
        id: 1,
        label: 'Boleto internet',
        value: ' 140,00',
        date: '21/06/2022',
        type: 0 //gastos,
    },
  {
    id: 2,
    label: 'Pix cliente',
    value: ' 370,00',
    date: '19/06/2022',
    type: 1 //receita
  },
  {
    id: 3,
    label: 'Salário',
    value: '3.500,00',
    date: '05/07/2022',
    type: 1 // receita
  },
  
]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Alisson souza"/>
    <Balance saldo="44.000,00" gastos="-5.945,00" />

    <Action />

    <Text style={styles.title}>Movimentações</Text>

    <FlatList style={styles.list} 
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator ={false}
        renderItem={({item}) => <Moviments data={item}/>}
    />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  }

});
