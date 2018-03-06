import { 
    MODIFICA_ADICIONA_CONTATO_EMAIL,
    ADICIONA_CONTATOS_ERRO,
    ADICIONA_CONTATOS_SUCESSO,
    MODIFICA_MENSAGEM
} from '../action/types';

const INITIAL_STATE = {
    adiciona_contato_email: '',
    cadastro_resultado_txt_erro: '',
    cadastro_resultado_inclusao: false,
    mensagem: ''
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case MODIFICA_ADICIONA_CONTATO_EMAIL:
            return { ...state, adiciona_contato_email: action.payload }
        case ADICIONA_CONTATOS_ERRO:
            return { ...state, cadastro_resultado_txt_erro: action.payload }
        case ADICIONA_CONTATOS_SUCESSO:
            return { ...state, cadastro_resultado_inclusao: action.payload, adiciona_contato_email: '' }
        case MODIFICA_MENSAGEM:
            return { ...state, mensagem: action.payload }
        default:
            return state;
    }
}