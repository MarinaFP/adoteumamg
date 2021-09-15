import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { Container, Input} from '../styles/Container'
import { Image, StyleSheet, View, TextInput, Button } from 'react-native';

export default function CriarConta() {
    const navigation = useNavigation();

    function handleInicial(){
        navigation.navigate("Inicial")
    }
    return (
        <Container>
            <View>
                <Image source={{ uri: "https://i.ibb.co/6sQbRFv/Criar-Conta-APP-1.png" }}  style={styles.image}/> 
            </View>

            <TextInput
                style={styles.input}
                placeholder="Email"
            />
            <TextInput secureTextEntry={true} style={styles.input} placeholder="Senha" value="Senha" />
            <TextInput secureTextEntry={true} style={styles.input} placeholder="Confirmar Senha" value="ConfirmarSenha" />
        <Button
             title="Criar Conta"
             onPress={handleInicial}
        />
        </Container>
    )
}
const styles = StyleSheet.create({
    image: {
      width: 375,
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    loginForm: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
  });