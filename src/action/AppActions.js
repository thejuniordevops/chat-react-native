import firebase from 'firebase';
import b64 from 'base-64';
import _ from 'lodash';

import { 
    MODIFICA_ADICIONA_CONTATO_EMAIL, 
    ADICIONA_CONTATOS_ERRO,
    ADICIONA_CONTATOS_SUCESSO,
    LISTA_CONTATO_USUARIO,
    MODIFICA_MENSAGEM
} from './types';

export const modificaAdicionaContatoEmail = texto => {
    return {
        type: MODIFICA_ADICIONA_CONTATO_EMAIL,
        payload: texto
    }
}

export const adicionaContato = email => {
    return dispatch => {
        let emailB64 = b64.encode(email);
        firebase.database().ref(`/contatos/${emailB64}`)
            .once('value')
            .then(snapshot => {
                if (snapshot.val()) {

                    //email sendo cadastrado
                    //console.warn("Cadastrando: ",email);
                    const dadosUsuario = _.first(_.values(snapshot.val()));

                    //recuperando email do usuario logado
                    //console.warn("logado: ", firebase.auth().currentUser.email);
                    const { currentUser } = firebase.auth();
                    let emailUsuarioB64 = b64.encode(currentUser.email);

                    firebase.database().ref(`/usuario_contatos/${emailUsuarioB64}`)
                        .push({ email, nome: dadosUsuario.nome })
                        .then(() => adicionaContatoSucesso(dispatch))
                        .catch(erro => adicionaContatoErro(erro.message, dispatch))

                } else {
                    dispatch({
                        type: ADICIONA_CONTATOS_ERRO,
                        payload: 'E-mail não cadastrado'
                    })
                }
            })
    }
}

const adicionaContatoErro = (erro, dispatch) => (
    dispatch({
        type: ADICIONA_CONTATOS_ERRO,
        payload: erro
    })    
)

const adicionaContatoSucesso = dispatch => (
    dispatch({
        type: ADICIONA_CONTATOS_SUCESSO,
        payload: true
    })        
)

export const habilitaInclusaoContato = () => (
    {
        type: ADICIONA_CONTATOS_SUCESSO,
        payload: false
    }    
)

export const contatosUsuarioFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        let emailUsuarioB64 = b64.encode(currentUser.email);

        firebase.database().ref(`/usuario_contatos/${emailUsuarioB64}`)
            .on("value", snapshot => {
                dispatch({ type: LISTA_CONTATO_USUARIO, payload: snapshot.val() })
            })
    }
}

export const modificaMensagem = texto => {
    return ({
        type: MODIFICA_MENSAGEM,
        payload: texto
    })
}

export const enviaMensagem = (mensagem, contatoNome, contatoEmail) => {
    console.warn(mensagem);
    console.warn(contatoNome);
    console.warn(contatoEmail);
    return ({
        type: 'xyz'
    })
}