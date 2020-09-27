import React,{useState } from 'react';
import { connect } from 'react-redux';
import Pendencias from '../pendencias/pendencias.component';
import Areas from '../areas/areas.component';
import Setores from '../setores/setores.component';
import UltimoNumero from '../ultimoNumero/ultimoNumero.component';
import './formularioAta.styles.scss';

const FormularioAta = ({setor,pendenciasAntigas ,novasPendencias,ultimaAta,areaSelecionada,idArea}) => {

const defaultState = {
    localReuniao: "SALA REUNIÃO",
    dataReuniao : "",
    responsavelAta: "",
    responsavelReuniao: "",
    participantes: "",
    ausentes: "",
    convidados: "",
    duracao: "",
    arquivo: "",
    pauta: "",
    objetivo: "",
};

const [useDadosAta,  setDadosAta] = useState(defaultState);


//Envia tudo para o back-end e atualiza a página
const salvarTUDO = () =>{
    const path = "http://localhost/react-php-app/services/salvarTUDO.php";
    const novasSalvas = novasPendencias.filter(pendencia => pendencia.salva === true);
    const pendenciasAta = [...novasSalvas, ...pendenciasAntigas];

        const {
        localReuniao,
        dataReuniao,
        responsavelAta,
        responsavelReuniao,
        participantes,
        ausentes,
        convidados,
        duracao,
        arquivo,
        pauta,
        objetivo,
        } = useDadosAta;

        fetch(path, {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'POST',
        body: JSON.stringify({
            setor: setor,
            areaSelecionada : areaSelecionada,
            localReuniao : localReuniao,
            dataReuniao : dataReuniao,
            responsavelAta : responsavelAta,
            responsavelReuniao : responsavelReuniao,
            participantes : participantes,
            ausentes : ausentes,
            convidados : convidados,
            duracao : duracao,
            arquivo : arquivo,
            pauta : pauta,
            objetivo : objetivo,
            numero : ultimaAta,
            idArea : idArea,
            pendencias : pendenciasAta,
        })
        }).then(() => {
            // //Atualiza a página
            console.log("foi");
            // window.location.reload(false);
        })
}


return(
        <div className="formulario">
            <div className="row">
                <div className="col-md-12">
                    <h2>Digite os dados da nova ata:</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <label className="small">Data</label>
                    <input type="date" className="form-control" required
                    onChange={(e) => setDadosAta({...useDadosAta, dataReuniao : e.target.value})}
                    />
                </div>

                <div className="col-md-4">
                    <Setores />
                </div>

                <div className="col-md-4">
                <label className="small">Local</label>
                <select required className="form-control"
                onChange={(e) => setDadosAta({...useDadosAta, localReuniao : e.target.value})}>
                    <option value="Sala Reunião">SALA REUNIÃO</option>
                    <option value="Sala VIP">SALA VIP</option>
                    <option value="Sala Conhecimento">SALA CONHECIMENTO</option>
                    <option value="Auditório">AUDITÓRIO</option>
                    <option value="Setor">SETOR</option>
                </select>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-md-8"><Areas/></div>
                        <div className="col-md-4"><UltimoNumero/></div>
                    </div>
                </div>

                <div className="col-md-4">
                    <label  className="small">Reponsável da ata:</label>
                    <input type="text" className="form-control" required  
                    onChange={(e) => setDadosAta({...useDadosAta, responsavelAta : e.target.value})}/>
                </div>

                <div className="col-md-4">
                    <label  className="small">Reponsável da reunião:</label>
                    <input type="text" className="form-control" required  
                    onChange={(e) => setDadosAta({...useDadosAta, responsavelReuniao : e.target.value})}/>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <label  className="small">Participantes:</label>
                    <textarea name="participantes" type="text" 
                    cols="20" required rows="3" className="form-control"
                    onChange={(e) => setDadosAta({...useDadosAta, participantes : e.target.value})}
                    ></textarea>
                </div>

                <div className="col-md-4">
                    <label  className="small">Ausentes:</label>
                    <textarea name="participantes" type="text" 
                    cols="20" required rows="3" className="form-control"
                    onChange={(e) => setDadosAta({...useDadosAta, ausentes : e.target.value})}
                    ></textarea>
                </div>

                <div className="col-md-4">
                    <label  className="small">Convidados:</label>
                    <textarea name="participantes" type="text" 
                    cols="20" required rows="3" className="form-control"
                    onChange={(e) => setDadosAta({...useDadosAta, convidados : e.target.value})}
                    ></textarea>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <label className="small">Duração:</label>
                    <input type="text" className="form-control" 
                    onChange={(e) => setDadosAta({...useDadosAta, duracao : e.target.value})}
                    required />
                </div>

                <div className="col-md-8">
                    <label className="small">Arquivo:</label>
                    <input type="text" className="form-control" 
                    onChange={(e) => setDadosAta({...useDadosAta, arquivo : e.target.value})}
                    required  />
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                <table className="table table-bordered" >
                    <tbody>
                        <tr>
                            <td style={{width: "8%"}} className="pauta" type="text" cols="80" > Pauta:</td>
                            <td> <textarea onChange={(e) => setDadosAta({...useDadosAta, pauta : e.target.value})} className="form-control" required></textarea> </td>
                        </tr>
                    </tbody>
                </table>

                <table className="table table-bordered" >
                    <tbody>
                        <tr>
                            <td style={{width: "7%"}} className="pauta" type="text" cols="80"> Objetivo:</td>
                            <td> <textarea onChange={(e) => setDadosAta({...useDadosAta, objetivo : e.target.value})} className="form-control" required ></textarea> </td>
                        </tr>
                    </tbody>
                </table>

                </div>
            </div>

            <div className="row">
                <div className="col-md-12"><Pendencias /></div>
            </div>

            <button className="btn btn-primary" onClick={salvarTUDO}>Salvar Tudo</button> 
        </div>
    );
}

const mapStateToProps = state => ({
    pendenciasAntigas: state.pendencias.pendenciasAntigas,
    novasPendencias :  state.pendencias.novasPendencias, 
    setor: state.ata.setor,
    areaSelecionada : state.ata.areaSelecionada,
    areasSetor: state.ata.areasSetor,
    idArea : state.ata.idArea,
    ultimaAta: state.ata.ultimaAta
});

export default connect(mapStateToProps)(FormularioAta);