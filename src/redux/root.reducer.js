import { combineReducers } from 'redux';

import pendenciasReducer from './pendencias/pendencias.reducer';
import ataReducer from './ata/ata.reducer';


const rootReducer = combineReducers({
    pendencias: pendenciasReducer,
    ata: ataReducer
});

export default rootReducer;