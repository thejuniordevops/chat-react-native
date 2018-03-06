import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Image } from 'react-native';

import navigation from '../../Navigator';
import { modificaMensagem, enviaMensagem } from '../action/AppActions';

class Conversa extends Component {

    _enviaMensagem() {
        const { mensagem, contatoNome, contatoEmail } = this.props;

        this.props.enviaMensagem(mensagem, contatoNome, contatoEmail)
    }

    //escreve nome do contato no titulo ou da erro
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return {
            title: params ? params.title : 'Erro',
        }
    };

    render() {
        return (
            <View style={style.viewContainer}>
                <View style={style.viewConversa}></View>
                <View style={style.viewMensagem}>
                    <TextInput 
                        style={style.textInput}
                        value={this.props.mensagem}
                        onChangeText={texto => this.props.modificaMensagem(texto)}
                    />
                    <TouchableHighlight 
                        onPress={this._enviaMensagem.bind(this)}
                        underlayColor='#FFF'
                    >
                        <Image source={require('../img/enviar_mensagem.png')} />
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

mapStateToProps = state => {
    return ({
        mensagem: state.AppReducer.mensagem
    })
}
export default connect(mapStateToProps, { modificaMensagem, enviaMensagem })(Conversa)

const style = StyleSheet.create({
    viewContainer: {
        flex: 1,
        marginTop: 80,
        backgroundColor: '#eee4dc',
        padding: 10
    },
    viewConversa: {
        flex: 1,
        paddingBottom: 20
    },
    viewMensagem: {
        flexDirection: 'row',
        height: 60
    },
    textInput: {
        flex: 4,
        backgroundColor: '#FFF',
        fontSize: 18
    }
}) 