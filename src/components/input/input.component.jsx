import React from 'react';

const Input = ({placeholder ,onChange}) => 
    <input placeholder={placeholder} onChange={(e) => onChange(e)} type="text" className="form-control"/>

export default Input;