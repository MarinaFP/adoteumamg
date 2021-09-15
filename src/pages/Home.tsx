import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { Container} from '../styles/Container'
import { Image, StyleSheet, View, Text, Button } from 'react-native';

export default function Home() {
    const navigation = useNavigation();
    function handleLogin(){
        navigation.navigate("Login")
    }
    return (
        <Container>
            <View>
                <Image source={{ uri: "https://i.ibb.co/gmvJrVy/P-gina-Inicial-APP.png" }}  style={styles.image}/> 
            </View>
        <Button
             title="COMEÇAR"
             onPress={handleLogin}
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
  });