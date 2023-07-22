import React from "react"; 
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from "./pages/home";
import Perfil from "./pages/perfil";


import Notifica from "./pages/Noticia";
import {MaterialIcons} from '@expo/vector-icons'

 

const Tab = createBottomTabNavigator();

export default function Routes() {
    return(
        <Tab.Navigator
         screenOptions={{
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#121212",
            tabBarStyle: {
                borderTopWidth: 0,
                backgroundColor: '#FFF',
              
                tabBarStyle: {
                    borderTopWidth: 0,
                    backgroundColor: "000"
                }
                
            }
         }}

        
        >
        <Tab.Screen  name="Home" component={Home} />
        <Tab.Screen  name="Perfil" component={Perfil}/>
         <Tab.Screen name="Lembrete" component={Notifica}/>
    </Tab.Navigator>
    )
}