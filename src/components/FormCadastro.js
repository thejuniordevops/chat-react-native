import React, { Component } from 'react';
import { 
    View, 
    TextInput, 
    Button, 
    Text,
    StyleSheet,
    ImageBackground,
    ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, modificaNome, cadastraUsuario } from '../action/AutenticacaoActions';

class formCadastro extends Component {

    _cadastraUsuario() {
        const {nome, email, senha} = this.props;
        this.props.cadastraUsuario({nome, email, senha});
    }

    renderBtnCadastro() {
        if (this.props.loading_cadastro){
            return (
                <ActivityIndicator size="large" />
            )
        }
        return (
            <Button title="Cadastro" color='#FFF' onPress={() => this._cadastraUsuario()} />
        )
    }


    render() {
        return (
            <ImageBackground source={require('../img/bg.jpg')} style={{ flex: 1, width: null }} >
                <View style={style.container}>
                    <View style={style.inputs}>
                        <TextInput value={this.props.nome} style={style.input} placeholder="Nome" placeholderTextColor="#FFF" onChangeText={texto => this.props.modificaNome(texto)} />
                        <TextInput value={this.props.email} style={style.input} placeholder="E-mail" placeholderTextColor="#FFF" onChangeText={texto => this.props.modificaEmail(texto)} />
                        <TextInput value={this.props.senha} style={style.input} placeholder="Senha" placeholderTextColor="#FFF" onChangeText={texto => this.props.modificaSenha(texto)} secureTextEntry />
                        <Text style={style.erroCadastro}> {this.props.erroCadastro} </Text>
                    </View>
                    <View style={style.button}>
                        {this.renderBtnCadastro()}
                    </View>
                    <View></View>
                </View>
            </ImageBackground>
        );
    }
}
/*
const formCadastro = props => (
    <ImageBackground source={require('../img/bg.png')} style={{ flex: 1, width: null }} >
        <View style={style.container}>
            <View style={style.inputs}>
                <TextInput value={ props.nome } style={style.input} placeholder="Nome" placeholderTextColor="#FFF" onChangeText={texto => props.modificaNome(texto)} />
                <TextInput value={props.email} style={style.input} placeholder="E-mail" placeholderTextColor="#FFF" onChangeText={texto => props.modificaEmail(texto)} />
                <TextInput value={props.senha} style={style.input} placeholder="Senha" placeholderTextColor="#FFF" onChangeText={texto => props.modificaSenha(texto)} secureTextEntry/>
            </View>
            <View style={style.button}>
                <Button title="Cadastro" color='#FFF' onPress={ () => false } />
            </View>
            <View></View>
        </View>
        </ImageBackground>
);
*/
const mapStateToProps = state => (
    {
        nome: state. AutenticacaoReducer.nome,
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroCadastro: state.AutenticacaoReducer.erroCadastro,
        loading_cadastro: state.AutenticacaoReducer.loading_cadastro
    }
)

export default connect(mapStateToProps, {modificaEmail, modificaSenha, modificaNome, cadastraUsuario})(formCadastro);

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    inputs: {
        flex: 4,
        justifyContent: 'center'
    },
    input: {
        fontSize: 20,
        height: 45
    },
    button: {
        backgroundColor: '#115E54',
        width: 350
    },
    erroCadastro: {
        color: '#ff0000',
        fontSize: 30
    }

})