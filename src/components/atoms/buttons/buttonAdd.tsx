import './buttonAdd.css';
import '../../../styles/base.css'
import React from 'react';
import { Link } from 'react-router-dom';
import text from '../../../locales/locales.json';
import iconAdd from '../../../assets/icons/add_2.svg';

interface ButtonAddProps{
    list: string | null;
}

export default function ButtonAdd( {list}:ButtonAddProps ){
    return (
            <Link className="addButton" to={"?list=" + list + "&addItem=" + list}><img className="iconAdd" src={iconAdd} alt="Icone Add"/>{text.buttons.addButton}</Link>
    );
}