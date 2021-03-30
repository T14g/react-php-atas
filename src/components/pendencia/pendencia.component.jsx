import React, { useState } from 'react';

import EmailList from '../emailList/emailList.component';

const Pendencia = ({ objeto, toggleModal }) => {
    console.log(objeto);
    const { key, numeroPendencia, iditens, pendencia, responsavel, prazo, status } = objeto;
    const [pendenciaState, setPendenciaState] = useState({ editando: false });
    const { editando } = pendenciaState;
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

    const fetchComments = (id) => {
        const path = "http://localhost/react-php-app/services/getComments.php";

        fetch(path, {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'POST',
            body: JSON.stringify({
                id: id
            })
        }).then((response) => response.json())
            .then((result) => {
                console.log(result);
                toggleModal(result);
            })
    }

    return (
        <>
            <tr key={key}>
                <td>{numeroPendencia}</td>
                <td>{pendencia}</td>
                <td>{responsavel}</td>
                <td>{prazo}</td>
                <td>{status}</td>
                <td><button className="btn btn-success w-100" onClick={() => setPendenciaState({ editando: true })} >OK</button></td>
                <td><button className="btn btn-info w-100" onClick={() => fetchComments(iditens)} >Comentários</button></td>
            </tr>
        </>
    )
}

export default Pendencia;