import React,{useState, useEffect} from 'react';
import { connect } from 'react-redux';
import './emailList.style.scss';

import { saveNewPendencias } from '../../redux/pendencias/pendencias.actions';

const EmailList = ({
    responsaveis, 
    novasPendencias, 
    saveNewPendencias, 
    numero, 
    listaEmails, 
    chave,
    editando = false
    }) => {
    
    console.log(responsaveis);

    return null;
    // const [emailList, setEmailList] = useState({emailsState : [], searching: '', selectedEmails : [], usuarios:[]});

    // useEffect(() => {
    //     if(responsaveis.length > 0 && editando){
    //         setEmailList({...emailList, selectedEmails: responsaveis});
    //     }
    // }, [setEmailList,editando, emailList, responsaveis]);
    
    // const emails = [...listaEmails,emailList, responsaveis,editando];

    // const updatePendencia = responsavel => {
    //     let nomeResponsavel   = responsavel.nome;
    //     let idResponsavel     = responsavel.id;
    //     let novoResponsavel = {'id': idResponsavel, 'nome' : nomeResponsavel };

    //     const newArray = novasPendencias.map(pendencia => {
    //         if(pendencia.numeroPendencia === numero){
    //             if(pendencia['responsavel'].indexOf(novoResponsavel) === -1){
    //                 pendencia['responsavel'] = [...pendencia['responsavel'],novoResponsavel];
    //             }
    //         }
    //         return pendencia;
    //         }
    //     )
        
    //     //Limpa o campo de busca
    //     document.querySelector(`[name="busca-${chave}"]`).value = "";
    //     saveNewPendencias(newArray);
    // }

    // const deleteEmail = email => {

    //     const newArray = novasPendencias.map(pendencia => {
    //         if(pendencia.numeroPendencia === numero){
    //             let responsaveis = pendencia['responsavel'];
    //             let responsaveisFiltered = responsaveis.filter(r=> r !== email);
    //             pendencia['responsavel'] = responsaveisFiltered;
    //         }
    //         return pendencia;
    //         }
    //     )
    //     saveNewPendencias(newArray);
    // }

    // //Filter emails by typed characters
    // const filterEmail = typed => {
    //     let filteredEmails;

    //     if(typed.length > 0){
    //         filteredEmails = emails.filter(email => email.nome && email.nome.toLowerCase().includes(typed.toLowerCase()));
    //     }else{
    //         filteredEmails = [];
    //     }
        
    //     setEmailList({...emailList ,emailsState : filteredEmails});
        
    // }

    // //Clean the search input
    // const cleanSearch = () => {
    //     document.querySelector(`[name="busca-${chave}"]`).value = "";
    //     setEmailList({...emailList, emails: []})
    // }

    // return(
    //     <div className="emailList">
    //         <input className="campoBusca form-control" name={`busca-${chave}`} placeholder="Digite um nome" onChange={(e) => filterEmail(e.target.value)}/>
    //         {
    //             emailList.emailsState.length > 0  && document.querySelector(`[name="busca-${chave}"]`).value ? (
    //                 <React.Fragment>
    //                     <button className="fecharBusca" onClick={() => cleanSearch()}>X</button>
    //                     <ul className="foundEmails">
    //                         {emailList.emailsState.map(email=>
    //                         <li key={email.id} ><span>{email.nome}</span><button 
    //                         className="btnSave"
    //                         onClick={() => updatePendencia(email)}
    //                         >+</button>
    //                         </li>)}
    //                     </ul>
    //                 </React.Fragment>
    //             ) : null
    //         }
    //         <ul className="savedEmails">
    //             {
    //                 responsaveis.length > 0 && !editando ? (
    //                     responsaveis.map(responsavel=>
    //                     <li key={responsavel.id}>
    //                     <span>{responsavel.nome}</span><button 
    //                     className="btnDelete"
    //                     onClick={() => deleteEmail(responsavel)}
    //                     >X</button>
    //                     </li>)
    //                 ) : emailList.selectedEmails.length > 0 && editando  ? (
    //                     emailList.selectedEmails.map(responsavel=>
    //                         <li key={responsavel.id}>
    //                         <span>{responsavel.nome}</span><button 
    //                         className="btnDelete"
    //                         onClick={() => deleteEmail(responsavel)}
    //                         >X</button>
    //                         </li>)
    //                 ) : null
    //             }
    //         </ul>
    //     </div>
        
    // );
}

const mapStateToProps = state => ({
    novasPendencias: state.pendencias.novasPendencias,
    listaEmails : state.pendencias.emailList
});

const mapDispatchToProps = dispatch => ({
    saveNewPendencias: pendencia => dispatch(saveNewPendencias(pendencia))
});

export default connect(mapStateToProps, mapDispatchToProps)(EmailList);