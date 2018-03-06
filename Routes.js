import React from 'react';
import { StackNavigator, NavigationActions } from 'react-navigation';

import FormLogin from './src/components/FormLogin';
import FormCadastro from './src/components/FormCadastro';
import BoasVindas from './src/components/BoasVindas';
import Principal from './src/components/Principal';
import AddContato from './src/components/AdicionarContato';
import Conversa from './src/components/Conversa';

const Routes = StackNavigator({
    Login: {
        screen: FormLogin,
        navigationOptions: {
            header: null,
        },
    },
    Cadastro: {
        screen: FormCadastro,
        navigationOptions: {
            headerTitle: 'Cadastro',
            headerTitleStyle: { textAlign: 'center', alignSelf: 'center', fontWeight: 'normal', fontSize: 20, color: '#FFF' },
            headerStyle: { backgroundColor: '#115E54' }
        }
    },
    BoasVindas: {
        screen: BoasVindas,
        navigationOptions: {
            header: null,
        },
    },    
    Principal: {
        screen: Principal,
        navigationOptions: {
            header: null
        }
    },
    AddContato: {
        screen: AddContato,
        navigationOptions: {
            headerTitle: 'AddContato'
        }
    },
    Conversa: {
        screen: Conversa

    },
}, 
{ 
    initialRouteName: 'Login', 
})

export default Routes;
