import './buttonFilter.css';
import '../../../styles/base.css'
import React from 'react';
import { Link } from 'react-router-dom';
import text from '../../../locales/locales.json';
import iconFilter from '../../../assets/icons/filter.svg';


interface ButtonAddProps{
    list: string | null;
}

export default function ButtonAdd( {list}:ButtonAddProps ){
    return (
            <Link className="filterButton" to={"?list=" + list + "&filterItem=" + list}><img className="iconFilter" src={iconFilter} alt="Icone Add"/>{text.buttons.filterButton}</Link>
    );
}