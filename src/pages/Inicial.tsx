import React from 'react'
import { Container} from '../styles/Container'
import { Image, StyleSheet, View, TextInput, Button, Alert } from 'react-native';

export default function Inicial() {
    return (
        <Container>
            <View>
                <Image source={{ uri: "https://i.ibb.co/4SsW4fP/Lista-de-M-sicas-APP.png" }}  style={styles.image}/> 
            </View>

            <TextInput
                style={styles.input}
                placeholder="Nome da Música"
            />
            <TextInput
                style={styles.input}
                placeholder="Artista"
            />
            <TextInput
                style={styles.input}
                placeholder="Álbum"
            />
        <Button
             title="Fazer Upload"
             onPress={() => Alert.alert('Ainda a ser configurado! 4 páginas prontas!')}
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