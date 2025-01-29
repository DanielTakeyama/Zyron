import './sideMenu.css'; 
import '../../../styles/base.css';
import iconList from '../../../assets/icons/icon_list.svg';
import iconAdd from '../../../assets/icons/add_box.svg';
import text from '../../../locales/locales.json';
import { Link, useSearchParams } from 'react-router-dom';

export default function Menu(){
    const [searchParams] = useSearchParams();
    const list = searchParams.get("list");
    const dadosMenu = ["Mercado", "AniversariantesJann", "Lembretes", "Faculdade", "Tarefas", "Pesquisas", "testes", "projetos", "Analise"];
    const dados = dadosMenu.map((dado) => <li className={list === dado ? "fontMenu active" : "fontMenu"}><img className="iconList" src={iconList} alt="icon list" width="30" height="30"/><Link className="itemMenu" to={"?list=" + dado}>{dado}</Link></li>);
    return (
        <nav className="containerSideMenu shadowDefault">

            <section className="containerTitleZyron">
                <h1 className="titleZyron fontH1">{text.sideMenu.title}</h1>
            </section>{/*Fim da section titleZyron */}

            <ul className="containerItemsMenu">
                <li className={!list ? "fontMenu active" : "fontMenu"}><img className="iconList" src={iconList} alt="icon list" width="30" height="30"/><Link className="itemMenu" to="/dashboard">{text.sideMenu.dashboard}</Link></li>
                {dados}
            </ul>

            <section className="containerCreateList">
                <h3 className="fontMenu createList"><Link className="itemMenu" to="?createList"><img className="iconAdd" src={iconAdd} alt="icon list" width="20" height="20"/>Criar Tarefa</Link></h3>
            </section>
            
        </nav>
    );
}