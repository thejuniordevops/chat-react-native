import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';

import { modificaAdicionaContatoEmail, adicionaContato } from '../action/AppActions';

//const AdicionarContato = props => (
class AdicionarContato extends Component {

    renderAdicionarContato() {
        if(!this.props.cadastro_resultado_inclusao){

            return (
                <View style={style.viewAdicionaContato}>
                    <View style={style.viewInput}>
                        <TextInput
                            placeholder='E-mail'
                            style={style.txtInput}
                            onChangeText={(texto) => this.props.modificaAdicionaContatoEmail(texto)}
                            value={this.props.adiciona_contato_email}
                        />
                    </View>
                    <View>
                        <Text style={style.txtErro}>
                            {this.props.cadastro_resultado_txt_erro}
                        </Text>
                    </View>
                    <View style={style.viewButton}>
                        <Button
                            title="Adicionar"
                            color="#FFF"
                            onPress={() => this.props.adicionaContato(this.props.adiciona_contato_email)}
                        />
                    </View>
                </View>
            )

        }else{
            return (
                <View>
                    <Text style={style.txtCadastroSucesso}>Cadastro realizado com sucesso</Text>
                </View>
            )
        }
    }

    render() {
        return (
            <View style={style.container}>
                { this.renderAdicionarContato() }
            </View>

        )
    }
}

const mapStateToProps = state => ({
    adiciona_contato_email: state.AppReducer.adiciona_contato_email,
    cadastro_resultado_txt_erro: state.AppReducer.cadastro_resultado_txt_erro,
    cadastro_resultado_inclusao: state.AppReducer.cadastro_resultado_inclusao
})

export default connect(mapStateToProps, { modificaAdicionaContatoEmail, adicionaContato })(AdicionarContato);

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center'
    },
    viewAdicionaContato: {
        flex: 1
    },
    txtCadastroSucesso: {
        fontSize: 20
    },
    viewInput: {
        flex: 1,
        justifyContent: 'center'
    },
    txtErro: {
        color: '#ff0000',
        fontSize: 20
    },
    txtInput: {
        fontSize: 20,
        height: 45
    },
    viewButton: {
        backgroundColor: '#115E54',
        width: 350
    }

})