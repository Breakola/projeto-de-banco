import 'react-native-reanimated'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/pages/home';
import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
   <NavigationContainer>
    <Routes />
   </NavigationContainer>
  );
}

