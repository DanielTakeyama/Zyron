import './statusPending.css';
import React from 'react';
import Status from '../../atoms/status/statusAtom.tsx';

interface StatusPendingProps{
    text: string;
}

export default function StatusPending( {text}:StatusPendingProps ){
    return <Status text={text} className="statusPending"/>
}