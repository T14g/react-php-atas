import React from 'react';

const Input = ({label,type,handleChange}) => 
    <React.Fragment>
        <label className="small"><strong>{label}</strong></label>
        <input type={type} className="form-control" required onChange={handleChange}/>
    </React.Fragment>

export default Input;