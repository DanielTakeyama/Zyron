import './statusCompleted.css';
import React from 'react';
import Status from '../../atoms/status/statusAtom.tsx';

interface StatusCompletedProps{
    text: string;
}

export default function StatusCompleted( {text}:StatusCompletedProps ){
    return <Status text={text} className="statusCompleted"/>
}