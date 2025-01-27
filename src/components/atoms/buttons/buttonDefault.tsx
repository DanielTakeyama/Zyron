import React from 'react';
import './buttonDefault.css';

interface buttonInterface {
    text: string;
    onClick: () => void;
};

export default function Button({text, onClick}:buttonInterface){
    return (
        <button className="buttonDefault" onClick={onClick}>{text}</button>
    );
}