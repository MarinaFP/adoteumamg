import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import {CriarConta, Login} from "../pages";


const Stack = createStackNavigator();

export default function App (){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Criar Conta" component={CriarConta} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
}