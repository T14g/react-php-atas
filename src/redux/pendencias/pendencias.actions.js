import PendenciasTypes from './pendencias.types';

export const addNovaPendencia = pendencia => ({
    type: PendenciasTypes.ADD_NEW_PENDENCIA,
    payload: pendencia
});

export const setNewPendencias = pendencias => ({
    type: PendenciasTypes.SET_NEW_PENDENCIAS,
    payload: pendencias
});

export const deleteNovaPendencia = id =>({
    type: PendenciasTypes.DELETE_NEW_PENDENCIA,
    payload: id
});

export const deleteAllNovasPendencias = () => ({
    type: PendenciasTypes.DELETE_ALL_NEW_PENDENCIAS
});

export const deleteAllOldPendencias = () => ({
    type: PendenciasTypes.DELETE_ALL_OLD_PENDENCIAS
});

export const loadOldPendencias = pendencias => ({
    type: PendenciasTypes.LOAD_OLD_PENDENCIAS,
    payload: pendencias
});

export const saveNewPendencias = pendencias => ({
    type: PendenciasTypes.SAVE_NEW_PENDENCIAS,
    payload: pendencias
});

export const loadEmails = emails => ({
    type: PendenciasTypes.LOAD_USERS_EMAILS,
    payload: emails
})
