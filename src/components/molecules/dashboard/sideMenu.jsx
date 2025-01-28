import './sideMenu.css'; 
import '../../../styles/base.css';
import text from '../../../locales/locales.json';
import { Link } from 'react-router-dom';

export default function Menu(){
    const dadosMenu = ["Mercado"];
    const dados = dadosMenu.map((dado)=> <li className="fontH2"><Link className="itemMenu" to="/dashboard">{dado}</Link></li>);
    return (
        <nav className="containerSideMenu shadowDefault">

            <section className="containerTitleZyron">
                <h1 className="titleZyron fontH1">{text.sideMenu.title}</h1>
            </section>{/*Fim da section titleZyron */}

            <ul className="containerItemsMenu">
                <li className="fontH2"><Link className="itemMenu" to="/dashboard">{text.sideMenu.dashboard}</Link></li>
                {dados}
            </ul>
            
        </nav>
    );
}