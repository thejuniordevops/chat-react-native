import React from 'react';
import { View, Text, StatusBar, Image, StyleSheet, TouchableHighlight } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import { connect } from 'react-redux';

import navigation from '../../Navigator';
import { habilitaInclusaoContato, adicionaContato } from '../action/AppActions';

const TabBarMenu = props => (
    <View style={style.container}>
        <StatusBar style={style.barStatus} />

        <View style={style.viewTopo}>
            <View style={style.viewTitle}>
                <Text style={style.title}> Whisper </Text>
            </View>

            <View style={style.viewBtnSair}>
                <View style={style.viewImageSair}>
                    <TouchableHighlight underlayColor="#114D44" 
                        onPress={() => 
                            {navigation.navigate('AddContato'); props.habilitaInclusaoContato()}} 
                        >
                        <Image source={require('../img/adicionar-contato.png')} />
                    </TouchableHighlight>
                </View>
                <View style={style.viewTxtSair}>
                    <Text style={style.txtSair}>Sair</Text>
                </View>
            </View>
        </View>
        
        <TabBar style={style.tabBar} {...props} />
    </View>
);

export default connect(null, { habilitaInclusaoContato })(TabBarMenu);

const style = StyleSheet.create({
    container: {
        backgroundColor: '#115E54',
        elevation: 4,
        marginBottom: 6
    },
    viewTopo: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    barStatus: {
        backgroundColor: '#114D44'
    },
    viewTitle: {
        height: 50,
        justifyContent: 'center'
    },
    title: {
        color: '#fff',
        fontSize: 20,
        marginLeft: 20
    },
    tabBar: {
        backgroundColor: '#115E54',
        elevation: 0
    },
    viewBtnSair: {
        flexDirection: 'row',
        marginRight: 20
    },
    viewImageSair: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50
    },
    txtSair: {
        fontSize: 20,
        color: '#fff'
    },
    viewTxtSair: {
        justifyContent: 'center'
    }
})