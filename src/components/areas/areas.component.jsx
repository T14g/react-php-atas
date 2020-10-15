import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import { setAreas, setSelectedArea } from '../../redux/ata/ata.actions';

const Areas = ({setor, areas, setAreas, setSelectedArea}) => {
    
    useEffect(() => {
        const path = "http://localhost/react-php-app/services/getAreas.php";
        
        fetch(path, {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'POST',
        body: JSON.stringify({
            setor: setor
        })
        }).then(response => {
            return response.json();
        }).then(areasResult => {
            setAreas(areasResult);
        })
    },[setAreas,setor]);

    useEffect(() => {
        if(areas.length > 0) {
            const id = areas[0].idarea;
            const areaName = areas[0].descricaoarea;
            setSelectedArea(id, areaName);
        }
    },[areas, setSelectedArea]);  

    const areaSelected = id => {
        const selectedArea = areas.filter(area => area.idarea === id);
        const { descricaoarea } = selectedArea[0];
        setSelectedArea(id, descricaoarea);
    }

    return(
        < >
            <label className="small" ><strong>Área</strong></label>
            <select required 
                onChange={(e) => areaSelected(e.target.value)}
                className="form-control">
                    {
                        areas.map(area => 
                            <option key={area.idarea} value={area.idarea}>{area.descricaoarea}</option>
                        )
                    }
            </select>
        </>
    );
}

const mapStateToProps = state => ({
    setor: state.ata.setor,
    areas : state.ata.areasSetor 
})

const mapDispatchToProps = dispatch => ({
    setAreas : areas => dispatch(setAreas(areas)),
    setSelectedArea: (id, area) => dispatch(setSelectedArea(id, area))
})

export default connect(mapStateToProps, mapDispatchToProps)(Areas);