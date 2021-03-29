import React,{useState} from 'react';

import EmailList from '../emailList/emailList.component';

const Pendencia = objeto => {

    const { key, numeroPendencia, pendencia, responsavel, prazo, status } = objeto.objeto;
    const [ pendenciaState, setPendenciaState ] = useState({editando: false});
    const { editando }  = pendenciaState;
    console.log(objeto);
    // const responsaveisArray = []; 

    // if(ids !== "" && responsavel !== ""){

    //     let idsArray = ids.split(";");
    //     let nomesArray = responsavel.split(", ");

    //     const sizeArrays = idsArray.length;

    //     for(var i = 0 ; i < sizeArrays; i++){
    //         let id   = idsArray[i];
    //         let nome = nomesArray[i];
    //         let objetoResponsavel = {"id" : id, "nome" : nome};

    //         responsaveisArray.push(objetoResponsavel);
    //     }

    // }

    return(
        <>
            <tr key={key}>
                <td>{numeroPendencia}</td>
                <td>{pendencia}</td>
                <td>{responsavel}</td>
                <td>{prazo}</td>
                <td>{status}</td>
                <td><button className="btn btn-success w-100" onClick={() => setPendenciaState({editando: true})} >OK</button></td>
                <td><button className="btn btn-info w-100" onClick={() => setPendenciaState({editando: true})} >Comentários</button></td>
            </tr>
        </>
    )
}

export default Pendencia;