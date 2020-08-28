import AtaTypes from './ata.types.js';

const INITIAL_STATE = {
    setor: "",
    areaSelecionada : "",
    areasSetor: [],
    idArea : "",
    ultimaAta: 1,
}

const ataReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case AtaTypes.SET_SETOR_ATA:
            return {
                ...state,
                setor: action.payload
            }

        case AtaTypes.SET_ULTIMA_ATA:
            return {
                ...state,
                ultimaAta: action.payload
            }
        
        case AtaTypes.SET_AREAS_SETOR:
            return {
                ...state,
                areasSetor: action.payload
            }
        
        case AtaTypes.SET_SELECTED_AREA:
            console.log(action.payload);
            return {
                ...state,
                areaSelecionada: action.payload.areaName,
                idArea: action.payload.id
            }

        default:
            return state;
    }
}

export default ataReducer;