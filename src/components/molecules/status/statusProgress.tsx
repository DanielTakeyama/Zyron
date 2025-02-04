import './statusProgress.css';
import React from 'react';
import Status from '../../atoms/status/statusAtom.tsx';

interface StatusProgressProps{
    text: string;
}

export default function StatusProgress( {text}:StatusProgressProps ){
    return <Status text={text} className="statusProgress"/>
}