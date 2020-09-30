import React from 'react';

const TextArea = ({label,name,handleChange}) => 
    <React.Fragment>
        <label  className="small">{label}</label>
        <textarea name={name} type="text" cols="20" required rows="3" className="form-control" onChange={handleChange} ></textarea>
    </React.Fragment>
export default TextArea;