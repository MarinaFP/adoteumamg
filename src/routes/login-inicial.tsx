import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from "../pages";
import {Inicial} from "../pages";


const Stack = createStackNavigator();

export default function App (){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Inicial" component={Inicial} />
        </Stack.Navigator>
    );
}