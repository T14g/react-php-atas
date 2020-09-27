import PendenciasTypes from './pendencias.types';

const INITIAL_STATE = {
    pendenciasAntigas : [],
    novasPendencias   : [],
    emailList         : []
};

const pendenciasReducer  = (state = INITIAL_STATE, action) =>{
    switch(action.type) {
        case PendenciasTypes.LOAD_OLD_PENDENCIAS:
            return {
                ...state,
                pendenciasAntigas: action.payload
            }

        case PendenciasTypes.DELETE_ALL_NEW_PENDENCIAS:
            return {
                ...state,
                novasPendencias : []
            }
        
        case PendenciasTypes.SAVE_NEW_PENDENCIAS:
            return {
                ...state,
                novasPendencias: action.payload
            }

        case PendenciasTypes.SET_NEW_PENDENCIAS:
            return {
                ...state,
                novasPendencias: action.payload
            }

        case PendenciasTypes.LOAD_USERS_EMAILS:
            return {
                ...state,
                emailList: action.payload
        }

        case PendenciasTypes.ADD_NEW_PENDENCIA:
            return {
                ...state,
                novasPendencias: [...state.novasPendencias, action.payload]
            }    
        default:
            return state;
    }
}

export default pendenciasReducer;