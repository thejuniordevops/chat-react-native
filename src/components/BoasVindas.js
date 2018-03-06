import React from 'react';
import { View, Text, Button, Image, ImageBackground, StyleSheet } from 'react-native';

export default props => (
    <ImageBackground source={require('../img/bg.jpg')} style={styles.background} >
        <View style={styles.containerBoasVindas}>
            <View style={styles.viewMsgBoasVindas}>
                <Text style={styles.msgWhisper}>Whisper</Text>
                <Image style={styles.imagemLogo} source={require('../img/logo.png')} />
                <Text style={styles.msgBoasVindas}>Bem-Vindo</Text>
            </View>
            <View style={styles.btnLogin}>
                <Button title="Acessar" color="#FFF" onPress={() => props.navigation.navigate('Login')} />
            </View>
        </View>
    </ ImageBackground>
);

const styles = StyleSheet.create({
    background: {
        flex: 1, 
        width: null
    },
    containerBoasVindas: {
        flex: 1,
        padding: 15
    },
    viewMsgBoasVindas: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    msgWhisper: {
        fontSize: 30,
        color: '#FFF'
    },
    msgBoasVindas: {
        fontSize: 30,
        color: '#FFF'
    },
    imagemLogo: {
        width: 100, 
        height: 100
    },
    btnLogin: {        
        backgroundColor: '#115E54',
        width: 350
    }
})
