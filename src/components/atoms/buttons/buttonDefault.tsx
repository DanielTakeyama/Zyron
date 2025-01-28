import React from 'react';
import './buttonDefault.css';
import '../../../styles/base.css'

interface buttonInterface {
    text: string;
    onClick: () => void;
};

export default function Button({text, onClick}:buttonInterface){
    return (
        <button className="buttonDefault shadowDefault" onClick={onClick}>{text}</button>
    );
}