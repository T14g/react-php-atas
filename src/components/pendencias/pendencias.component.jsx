import React,{ useEffect } from 'react';
import { connect } from 'react-redux';
import { 
    loadOldPendencias, 
    addNovaPendencia, 
    setNewPendencias, 
    deleteAllNovasPendencias,
    saveNewPendencias,
    loadEmails
 } from '../../redux/pendencias/pendencias.actions';

import EmailList from '../emailList/emailList.component';

import './pendencias.styles.scss';

const Pendencias = ({
    area,
    areaID, 
    ultimaAta, 
    novasPendencias, 
    pendenciasAntigas, 
    addNovaPendencia, 
    loadOldPendencias,
    setNewPendencias,
    clearNewPendencias,
    saveNewPendencias,
    listaEmail,
    loadEmails
}) => {

    useEffect(() => {
        console.log("loading Emails...");

        const path = "http://localhost/react-php-app/services/getUsers.php";
        
        fetch(path, {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'POST',
        }).then(response => {
            return response.json();
        }).then(usuarios => {
            loadEmails(usuarios);
        })
    }, [loadEmails]);
    
    useEffect(() => {
        ((id)=>{
            const pathPendencias = "http://localhost/react-php-app/services/getPendencias.php";
 
            fetch(pathPendencias, {
                headers: { "Content-Type": "application/json; charset=utf-8" },
                method: 'POST',
                body: JSON.stringify({
                    area: id
                })
                }).then(response => {
                    return response.json();
                }).then(result => {
                    console.log(result);
                    let pendencias = result.filter(pendencia => pendencia.status === "PENDENTE");
                    clearNewPendencias();
                    loadOldPendencias(pendencias);
                })
        })(areaID);
    },[areaID,loadOldPendencias, clearNewPendencias]);
    
    
    const novaPendencia = () => {
        const tamanho =  novasPendencias.length;

        const idPendencia = tamanho === 0 
            ? `${ultimaAta}.1` 
            : `${ultimaAta + "." +(parseInt(tamanho) + 1 )}`;
    
        let nova = {numeroPendencia : idPendencia, responsavel : "", prazo : "", pendencia : "", status : "", salva: false};
        addNovaPendencia(nova);
    }

    const handleChange = (id, el) =>{
        const name = el.name;
        const value = el.value;

        const newArray = novasPendencias.map(pendencia => {
            if(pendencia.numeroPendencia === id){
                pendencia[name] = value;
            }
            return pendencia;
            }
        )
       setNewPendencias(newArray);
    }

    const salvar = id => {
        const newArray = novasPendencias.map(pendencia => {
                if(pendencia.numeroPendencia === id){
                    if(pendencia.pendencia && pendencia.responsavel){
                        pendencia.salva = true;
                    }else{
                        alert("Vai ti fude o merda");
                    }

                    if(!pendencia.status){
                        pendencia.status = "PENDENTE";
                    }   
                }
            return pendencia;
            }     
        );
        saveNewPendencias(newArray);
    }

    //Cancela uma pendência removendo-a do state
    const cancelar = id => {
        const newArray = novasPendencias.filter(pendencia => pendencia.numeroPendencia !== id);

        console.log(newArray);
        setNewPendencias(newArray);
    }

    return(
        < >
            <h3 className="mb-3">Pendências da área {area} <small style={{fontSize:"14x",fontWeight:"bold",color:"red"}}>(preencha os campos e aperte Validar)</small></h3>

            <table className="table table-bordered" >
                <thead>
                    <tr className="borda">
                    <th scope="col" style={{width: "6%"}}>Número</th>
                    <th scope="col" style={{width: "18%"}}>Assuntos Discutidos</th>
                    <th scope="col" style={{width: "10%"}}>Responsável</th>
                    <th scope="col" style={{width: "13%"}}>Prazo</th>
                    <th scope="col" style={{width: "8%"}}>Status</th>
                    <th style={{width: "4%"}} >Action</th>
                    </tr>
                </thead>
                <tbody id="tabela-body">
                    {   
                        pendenciasAntigas.map((pendencia, i) => 
                            pendencia.status === 'PENDENTE' ? (
                                <tr key={i}>
                                    <td>{pendencia.numeroPendencia}</td>
                                    <td>{pendencia.pendencia}</td>
                                    <td>{pendencia.responsavel}</td>
                                    <td>{pendencia.prazo}</td>
                                    <td>{pendencia.status}</td>
                                    <td></td>
                                </tr>
                            ) : null
                        )
                    }

                    {

                    novasPendencias.map((pendencia, i) => 
                            <tr key={i}>
                                <td>{pendencia.numeroPendencia}</td>
                                <td><textarea onChange={e => handleChange(pendencia.numeroPendencia, e.target)} name="pendencia" className="form-control" required style={{width: '100%'}} defaultValue={pendencia.pendencia}></textarea></td>
                                {/* <td><input onChange={e => handleChange(pendencia.numeroPendencia, e.target)} name="responsavel" type="text"  className="form-control" required defaultValue={pendencia.responsavel} /></td> */}
                                <td><EmailList chave={i} responsaveis={pendencia.responsavel} pendencia = {pendencia} numero = {pendencia.numeroPendencia} /></td>
                                <td><input onChange={e => handleChange(pendencia.numeroPendencia, e.target)} name="prazo"  className="form-control" required type="date" defaultValue={pendencia.prazo}/></td>
                                <td>
                                    <select required className="form-control"
                                    onChange={e => handleChange(pendencia.numeroPendencia, e.target)} 
                                    name="status"  
                                    >
                                        <option value="PENDENTE">PENDENTE</option>
                                        <option value="REGISTRO">REGISTRO</option>
                                    </select>
                                </td>
                                <td>
                                    {
                                        pendencia.salva ? 
                                        (
                                            <button className="btn btn-danger w-100" onClick={() => cancelar(pendencia.numeroPendencia)}>Cancelar</button>
                                        ) : (
                                            
                                            <button className="btn btn-success w-100" onClick={() => salvar(pendencia.numeroPendencia)}>Validar</button>
                                        )
                                    }
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={() => novaPendencia()}>Nova pendência</button>
        </>
    );
}

const mapStateToProps = state => ({
    novasPendencias: state.pendencias.novasPendencias,
    pendenciasAntigas: state.pendencias.pendenciasAntigas,
    areaID : state.ata.idArea,
    ultimaAta: state.ata.ultimaAta,
    area : state.ata.areaSelecionada,
    listaEmail : state.pendencias.emailList
});

const mapDispatchToProps = dispatch => ({
    loadOldPendencias : pendencias => dispatch(loadOldPendencias(pendencias)),
    addNovaPendencia : pendencia => dispatch(addNovaPendencia(pendencia)),
    setNewPendencias : pendencias => dispatch(setNewPendencias(pendencias)),
    clearNewPendencias : () => dispatch(deleteAllNovasPendencias()),
    saveNewPendencias: pendencia => dispatch(saveNewPendencias(pendencia)),
    loadEmails : emails => dispatch(loadEmails(emails))
});

export default connect(mapStateToProps,mapDispatchToProps)(Pendencias);