import AtaTypes from './ata.types';

export const setUltima = ultima => ({
    type: AtaTypes.SET_ULTIMA_ATA,
    payload: ultima
});

export const setSetor = setor => ({
    type: AtaTypes.SET_SETOR_ATA,
    payload: setor
});

export const setAreas = areas => ({
    type: AtaTypes.SET_AREAS_SETOR,
    payload: areas
});

export const setSelectedArea = (idArea,areaName) => ({
    type: AtaTypes.SET_SELECTED_AREA,
    payload: {id: idArea, areaName: areaName}
});

export const toggleModal = (data) => ({
    type: AtaTypes.TOGGLE_MODAL,
    payload: data
})