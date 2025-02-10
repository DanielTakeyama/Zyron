import './sideMenu.css'; 
import '../../../styles/base.css';
import iconList from '../../../assets/icons/icon_list.svg';
import text from '../../../locales/locales.json';
import { Link, useSearchParams } from 'react-router-dom';
import ItemsMenu from '../../atoms/sideMenu/itemsMenu.tsx';
import ButtonCreateList from '../../atoms/buttons/buttonCreateList.tsx';

export default function Menu(){
    const [searchParams] = useSearchParams();
    const list = searchParams.get("list");
    return (
        <nav className="containerSideMenu shadowDefault">

            <section className="containerTitleZyron">
                <h1 className="titleZyron fontH1">{text.sideMenu.title}</h1>
            </section>{/*Fim da section titleZyron */}

            <ul className="containerItemsMenu scrollBar">
                <li className={!list ? "fontMenu active" : "fontMenu"}><img className="iconList" src={iconList} alt="icon list" width="30" height="30"/><Link className="itemMenu" to="/dashboard">{text.sideMenu.dashboard}</Link></li>
                <ItemsMenu param={list}/>
            </ul>

            <section className="ctCreateList">
                <ButtonCreateList />
            </section>
            
        </nav>
    );
}