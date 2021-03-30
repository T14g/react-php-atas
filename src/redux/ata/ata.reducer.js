import AtaTypes from './ata.types.js';

const INITIAL_STATE = {
    setor: "",
    areaSelecionada : "",
    areasSetor: [],
    idArea : "",
    ultimaAta: 1,
    showModal: false,
    modalData: []
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
            return {
                ...state,
                areaSelecionada: action.payload.areaName,
                idArea: action.payload.id
            }

        case AtaTypes.TOGGLE_MODAL:
            return {
                ...state,
                showModal: !state.showModal,
                modalData: action.payload
            }

        default:
            return state;
    }
}

export default ataReducer;