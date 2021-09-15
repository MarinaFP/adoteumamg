import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import stack from "./stack.routes";
import loginCriar from "./login-criar";


const Tab = createBottomTabNavigator();

export default function App (){
    return (
        <Tab.Navigator>
            <Tab.Screen name="stackd" component={stack} />
            <Tab.Screen name="logincriars" component={loginCriar} />
        </Tab.Navigator>
    );
}