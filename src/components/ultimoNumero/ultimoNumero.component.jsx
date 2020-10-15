import React,{ useEffect} from 'react';
import { connect } from 'react-redux';
import { setUltima } from '../../redux/ata/ata.actions';

const UltimaNumero = ({area, ultimaAta, setUltimaAta}) => {

    useEffect(() => {

    const path = "http://localhost/react-php-app/services/ultimoID.php";
    fetch(path, {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'POST',
        body: JSON.stringify({
            area: area
        })
        }).then(response => {
            return response.json();
        }).then(result => {
            let ultima = parseInt(result[0]['MaiorID']) + 1;
            console.log(ultima);

            if(!ultima){
                ultima = 1;
            }
            setUltimaAta(ultima);
        })
    },[area, setUltimaAta]);

    //Exibe o número da nova ata caso uma área esteja selecionada
    return(
        < >
            <label className="small" ><strong>Número da ata</strong></label>
            <input type="text" value={area !== "" ? ultimaAta : ""} className="form-control" readOnly/>
        </>
        );
}

const mapStateToProps = state => ({
    area : state.ata.idArea,
    ultimaAta: state.ata.ultimaAta
});

const mapDispatchToProps = dispatch => ({
    setUltimaAta : ata => dispatch(setUltima(ata))
})

export default connect(mapStateToProps, mapDispatchToProps)(UltimaNumero);