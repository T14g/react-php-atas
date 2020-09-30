import React,{useState } from 'react';
import { connect } from 'react-redux';
import Pendencias from '../pendencias/pendencias.component';
import Areas from '../areas/areas.component';
import Setores from '../setores/setores.component';
import Locais from '../locais/locais.component';
import UltimoNumero from '../ultimoNumero/ultimoNumero.component';
import Input from '../input/input.component';
import TextArea from '../textarea/textarea.component';
import './formulario.styles.scss';

const Formulario = ({setor,novasPendencias,ultimaAta,areaSelecionada,idArea}) => {

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

//Valida se campos importantes estão em branco antes do envio dos dados
const validarDados = () => {
    let validado = true ;

    const {
        responsavelAta,
        responsavelReuniao,
        } = useDadosAta;

    //Valida se não houver valores em branco
    const camposValidar = [responsavelAta, responsavelReuniao, setor,areaSelecionada];
    camposValidar.map(campo =>campo === "" ? validado = false : true);
    
    //Chama o método que envia tudo para o backend salvar
    if(validado){
        salvarTUDO();
    }else{
        alert("Verifique se selecinou o Setor, área e preencheu os responsáveis!");
    }
}


//Envia tudo para o back-end e atualiza a página
const salvarTUDO = () =>{
    const path = "http://localhost/react-php-app/services/salvarTUDO.php";
    const novasSalvas = novasPendencias.filter(pendencia => pendencia.salva === true);
    const pendenciasAta = [...novasSalvas];

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
            // window.location.reload(false);
        })
}


return(
        <div className="formulario">
            <div className="row">
                <div className="col-md-12">
                    <h2>Cadastro de atas com pendências</h2>
                    <p>Digite todos os dados da sua ata, adicione pendências em seguida aperta o botão <strong>Validar</strong>, e quando finalizar tudo aperte <strong>Salvar ATA</strong></p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4"><Setores/></div>

                <div className="col-md-4">
                    <Input label="Data" type="date"
                    handleChange={(e) => setDadosAta({...useDadosAta, dataReuniao : e.target.value})}/>
                </div>

                <div className="col-md-4">
                    <Locais onChange={(e) => setDadosAta({...useDadosAta, localReuniao : e.target.value})}/>
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
                    <Input label="Reponsável da ata" type="text"
                    handleChange={(e) => setDadosAta({...useDadosAta, responsavelAta : e.target.value})}/>
                </div>

                <div className="col-md-4">
                    <Input label="Reponsável da reunião" type="text"
                    handleChange={(e) => setDadosAta({...useDadosAta, responsavelReuniao : e.target.value})}/>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <TextArea label="Participantes" name="participantes" handleChange={(e) => setDadosAta({...useDadosAta, participantes : e.target.value})} />
                </div>

                <div className="col-md-4">
                    <TextArea label="Ausentes" name="ausentes" handleChange={(e) => setDadosAta({...useDadosAta, ausentes : e.target.value})} />
                </div>

                <div className="col-md-4">
                    <TextArea label="Convidados" name="convidados" handleChange={(e) => setDadosAta({...useDadosAta, convidados : e.target.value})} />
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <Input label="Duração" type="text"
                    handleChange={(e) => setDadosAta({...useDadosAta, duracao : e.target.value})}/>
                </div>

                <div className="col-md-4">
                    <Input label="Arquivo" type="text"
                    handleChange={(e) => setDadosAta({...useDadosAta, arquivo : e.target.value})}/>
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
                <div className="col-md-12"><Pendencias/></div>
            </div>

            <button className="btn btn-primary" onClick={validarDados}>Salvar Tudo</button> 
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

export default connect(mapStateToProps)(Formulario);