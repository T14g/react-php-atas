import React from 'react';
import './closeButton.styles.scss';


const CloseButton = ({ onClick }) => (
    <button className="closeButton" onClick={onClick}>X</button>
)

export default CloseButton;