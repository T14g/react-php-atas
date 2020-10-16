import React from 'react';
import EmailList from '../emailList/emailList.component';

const EditorPendencia = ({pendencia}) => {

    const arrayResponsaveis = [];

    if(pendencia.responsavel.length > 0 && pendencia.idusuario.length > 0){
        let nomes = pendencia.responsavel.split(", ");
        let ids   = pendencia.idusuario.split(";");

        for(let i = 0 ; i < ids.length; i++){
            let objetoResp = {"nome" : nomes[i], "id" : ids[i]};
            arrayResponsaveis.push(objetoResp);
        }
    }

    return(
        <tr key={pendencia.numeroPendencia}>
            <td>{pendencia.numeroPendencia}</td>
            <td>{pendencia.pendencia}</td>
            <td><EmailList responsaveis={arrayResponsaveis} editando={true} /></td>
            <td>{pendencia.prazo}</td>
            <td>{pendencia.status}</td>
            <td><button className="btn btn-success">Salvar</button></td>
        </tr>
    );
}

export default EditorPendencia;