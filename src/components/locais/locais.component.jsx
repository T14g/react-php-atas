import React from 'react';

const Locais = ({onChange}) =>
    <React.Fragment>
        <label className="small">Local</label>
            <select required className="form-control"
            onChange={onChange}>
                <option value="Sala Reunião">SALA REUNIÃO</option>
                <option value="Sala VIP">SALA VIP</option>
                <option value="Sala Conhecimento">SALA CONHECIMENTO</option>
                <option value="Auditório">AUDITÓRIO</option>
                <option value="Setor">SETOR</option>
            </select>
    </React.Fragment>

export default Locais;