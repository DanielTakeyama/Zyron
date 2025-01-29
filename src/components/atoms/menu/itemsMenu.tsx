import '../../../styles/base.css';
import React from 'react';
import { Link } from 'react-router-dom';
import iconList from '../../../assets/icons/icon_list.svg';

interface itemsMenuProps{
    param: string;
}

export default function ItemsMenu({param}:itemsMenuProps){
    const dadosMenu = ["Mercado", "Lembretes", "Faculdade", "Tarefas", "Pesquisas", "testes", "projetos", "Analise"];
    const dados = dadosMenu.map((dado) => 
        <li className={param === dado ? "fontMenu active" : "fontMenu"}>
            <img className="iconList" src={iconList} alt="icon list" width="30" height="30"/>
            <Link className="itemMenu" to={"?list=" + dado}>{dado}</Link>
        </li>
    );
    return (<>{dados}</>);

}

/*O ARQUIVO CSS PARA ESTILIZAR OS ELEMENTOS DO MENU ESTA DENTRO DA PASTA MOLECULES/sideMenu/sideMenu.css*/