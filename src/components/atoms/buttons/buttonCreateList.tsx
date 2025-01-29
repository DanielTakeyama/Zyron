import '../../../styles/base.css'
import './buttonCreateList.css';
import React from 'react';
import { Link } from 'react-router-dom';
import iconAdd from '../../../assets/icons/add_box.svg';
import text from '../../../locales/locales.json';

export default function ButtonCreateList(){
    return <h3 className="fontMenu createList"><Link className="textAdd" to="?createList"><img className="iconAdd" src={iconAdd} alt="Adicionar Tarefa" width="20" height="20"/>{text.sideMenu.createList}</Link></h3>
}

