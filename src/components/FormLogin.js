import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    ImageBackground,
    ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, autenticarUsuario } from '../action/AutenticacaoActions';


class formLogin extends Component {    

    _autenticarUsuario(){
        const  { email, senha } = this.props;
        this.props.autenticarUsuario({ email, senha });
    }

    renderBtnAcessar() {
        if(this.props.loading_login){
            return (
                <ActivityIndicator size="large" />
            )
        }
        return (
            <Button title="Acessar" color="#FFF" onPress={() => this._autenticarUsuario()} />
        )
    }

    render() {
        return (
            <ImageBackground source={require('../img/bg.jpg')} style={{ flex: 1, width: null }} >
                <View style={styles.container}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>Whisper</Text>
                    </View>
                    <View style={styles.inputs}>
                        <Text style={styles.txtErroLogin}> {this.props.erroLogin} </Text>                                            
                        <TextInput value={this.props.email} style={styles.input} placeholder="E-mail" placeholderTextColor="#FFF" onChangeText={texto => this.props.modificaEmail(texto)} />
                        <TextInput value={this.props.senha} style={styles.input} placeholder="Senha" placeholderTextColor="#FFF" onChangeText={texto => this.props.modificaSenha(texto)} secureTextEntry />
                        <TouchableHighlight
                            onPress={() => this.props.navigation.navigate('Cadastro')} >
                            <Text style={styles.txtCadstro} >Ainda não tem cadastro? Cadastre-se</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.containerButton}>
                        <View style={styles.button}>
                            { this.renderBtnAcessar() }
                        </View>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroLogin: state.AutenticacaoReducer.erroLogin,
        loading_login: state.AutenticacaoReducer.loading_login
    }
)

export default connect(mapStateToProps, {modificaEmail, modificaSenha, autenticarUsuario})(formLogin);


/*
export default class App extends Component<{}> {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.titleText}>App teste</Text>
                </View>
                <View style={styles.inputs}>
                    <TextInput style={styles.input} placeholder="E-mail" />
                    <TextInput style={styles.input} placeholder="Senha" />
                    <TouchableHighlight
                        onPress={() => navigate('Cadastro') } >
                        <Text>Ainda não tem cadastro? Cadastre-se</Text>
                    </TouchableHighlight>                    
                </View>
                <View style={styles.containerButton}>
                    <View style={styles.button}>
                        <Button title="Acessar" color="#FFF" onPress={() => false} />
                    </View>
                </View>
            </View>
        );
    }
}
*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        flex: 1
    },
    titleText: {
        color: '#FFF',
        fontSize: 25,
        backgroundColor: 'transparent'
    },
    txtCadstro: {
        color: '#FFF',
        fontSize: 15
    },
    inputs: {
        flex: 2
    },
    input: {
        backgroundColor: '#000',
        color: '#FFF',
        fontSize: 20,
        height: 45,
        borderColor: '#FFF',
        borderWidth: 1
    },
    containerButton: {
        flex: 2,
    },
    button: {
        backgroundColor: '#115E54',
        width: 350
    },
    txtErroLogin: {
        color: "#FFF",
        fontSize: 20
    }
});



