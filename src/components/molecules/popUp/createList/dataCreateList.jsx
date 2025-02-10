import './dataCreateList.css';
import '../../../../styles/base.css';
import jsonText from '../../../../locales/locales.json';

export default function DataCreateList(){
    return (
        <main className="containerDataCreateList">
            <section className="containerTitleCreateList">
                <h2 className="fontH2 colorDefaultText">{jsonText.createList.title}</h2>
            </section>
            <hr/>
            <form className="containerContentCreateList" method="POST" action="">  
                <h3 className="fontH3 colorDefaultText">Nome</h3>
                <input className="inputTextFormCreateList inputNameList" type="text" id="nameList" name="nameList" placeholder="Ex: Mercado.." required></input>

                <h3 className="fontH3 colorDefaultText">Tipo</h3>
                <input className="inputTextFormCreateList inputNameList" type="text" id="nameList" name="nameList" placeholder="Ex: Pública - Somente eu posso ver" required></input>

                <h3 className="fontH3 colorDefaultText">Compartilhar com</h3>
                <input className="inputTextFormCreateList inputNameList" type="text" id="nameList" name="nameList" placeholder="Ex: DanielTakeyama" required></input>
            </form>
        </main>
    );
}