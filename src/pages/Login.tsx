import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { Container, Input} from '../styles/Container';
import { SafeAreaView } from 'react-native';
import { Card } from 'react-native-paper';

export default function Login() {
    const navigation = useNavigation();

    function handleInicial(){
        navigation.navigate("Inicial")
    }
    function handleCriarConta(){
        navigation.navigate("CriarConta")
    }
    return (
        <SafeAreaView>
            <Card>
                <Card.Title title="LOGIN"></Card.Title>
            </Card>
        </SafeAreaView>
    );
};