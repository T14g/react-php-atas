import React from 'react';
import { connect } from 'react-redux';
import { setSetor } from '../../redux/ata/ata.actions';

const Setores = ({setSetorAta}) => {

    return(
        < >
            <label className="small"><strong>Setor</strong></label>
            <select
            onChange={(e) => setSetorAta(e.target.value)}
            required className="form-control"
            data-setor>
                <option defaultValue>SELECIONE UM SETOR</option>
                <option value="COMERCIAL">COMERCIAL</option>
                <option value="CONTABILIDADE">CONTABILIDADE</option>
                <option value="DESENVOLVIMENTO">DESENVOLVIMENTO</option>
                <option value="DIRETORIA">DIRETORIA</option>
                <option value="FINANCEIRO">FINANCEIRO</option>
                <option value="INDUSTRIAL">INDUSTRIAL</option>
                <option value="PLANEJAMENTO">PLANEJAMENTO</option>
                <option value="RIFOR">RIFOR</option>
                <option value="RH">RH</option>
                <option value="COMITES">COMITES</option>
            </select>
        </>
    );
}

const mapDispatchToProps = dispatch => ({
    setSetorAta : setor => dispatch(setSetor(setor))
})

export default connect(null ,mapDispatchToProps)(Setores);