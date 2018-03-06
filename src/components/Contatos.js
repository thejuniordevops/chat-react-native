import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

import navigation from '../../Navigator';
import { contatosUsuarioFetch } from '../action/AppActions';

class Contatos extends Component {

    componentWillMount(){
        this.props.contatosUsuarioFetch();
        this.criaFonteDeDados( this.props.contatos )
    }

    componentWillReceiveProps(nextProps){
        this.criaFonteDeDados( nextProps.contatos )
    }

    criaFonteDeDados( contatos ){
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

        this.fonteDeDados = ds.cloneWithRows(contatos)
    }

    renderRow(contato) {
        return (
            <TouchableHighlight
                underlayColor="#CCC"
                onPress={() => 
                { navigation.navigate('Conversa', { title: contato.nome, contatoNome: contato.nome, contatoEmail: contato.email }); }}
            >
                <View style={style.viewContainer}>
                    <Text style={style.textNome}>{contato.nome}</Text>
                    <Text style={style.textEmail}>{contato.email}</Text>
                </View>
            </TouchableHighlight>
        )
    }

    render() {
        return (
            <ListView
                enableEmptySections
                dataSource={this.fonteDeDados}
                renderRow={this.renderRow}
            />
        )
    }
}

mapStateToProps = state => {
    const contatos = _.map(state.ListaContatosReducer, (val, uid) => {
        return { ...val, uid }
    })
    return{ contatos }
}

export default connect(mapStateToProps, { contatosUsuarioFetch })(Contatos);

const style = StyleSheet.create({
    viewContainer: {
        flex: 1,
        padding: 20,
        borderBottomWidth: 1,
        borderColor: "#CCC"        
    },
    textNome: {
        fontSize: 25
    },
    textEmail: {
        fontSize: 18
    }
})