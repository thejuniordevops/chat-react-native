import {
    MODIFICA_EMAIL,
    MODIFICA_SENHA,
    MODIFICA_NOME,
    CADASTRO_USUARIO_SUCESSO,
    CADASTRO_USUARIO_ERRO,
    LOGIN_USUARIO_SUCESSO,
    LOGIN_USUARIO_ERRO,
    LOGIN_EM_ANDAMENTO,
    CADASTRO_EM_ANDAMENTO
} from '../action/types';

const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    erroCadastro: '',
    erroLogin: '',
    loading_login: false,
    loading_cadastro: false
}

export default (state = INITIAL_STATE, action) => {
    if (action.type == MODIFICA_EMAIL) {
        return { ...state, email: action.payload }
    }
    if (action.type == MODIFICA_SENHA) {
        return { ...state, senha: action.payload }
    }
    if (action.type == MODIFICA_NOME) {
        return { ...state, nome: action.payload }
    }
    if (action.type == CADASTRO_USUARIO_ERRO){
        switch (action.payload){
            case 'auth/email-already-in-use':
                return ({ ...state, erroCadastro: 'E-mail já existe', loading_cadastro: false });
            case 'auth/invalid-email':
                return ({ ...state, erroCadastro: 'E-mail inválido', loading_cadastro: false });
            case 'auth/weak-password':
                return ({ ...state, erroCadastro: 'A senha deve ter mais de 5 caracteres', loading_cadastro: false });
            default:
                return ({ ...state, erroCadastro: action.payload, loading_cadastro: false });
        }
    }

    if (action.type == LOGIN_USUARIO_ERRO) {
        return ({ ...state, erroLogin: 'Usuário não encontrado. Verifique se digitou tudo corretamente.', loading_login: false });
    }
    if (action.type == LOGIN_EM_ANDAMENTO) {
        return ({ ...state, loading_login: true })
    }
    if (action.type == CADASTRO_EM_ANDAMENTO) {
        return ({ ...state, loading_cadastro: true })
    }
    return state;
}