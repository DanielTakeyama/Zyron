import '../../../styles/base.css';
import './statusAtom.css';
import React from 'react';

interface StatusProps{
    text: string;
    className: string;
}

export default function Status( {text, className}:StatusProps ){
    return <p className={`fontPBold containerStatus ${className}`}>{text}</p>
}