import './dataCreateList.css';
import '../../../../styles/base.css';
import jsonText from '../../../../locales/locales.json';
import Button from '../../../atoms/buttons/buttonDefault.tsx';
import { useEffect } from 'react';

export default function DataCreateList(){
    useEffect(()=>{
        let closeBtn = document.getElementById("closeCreateList");
        if(closeBtn){
            closeBtn.addEventListener("click", ()=>{
                alert("Hello, world!");
            });
        }
    }, []);
    return (
        <main className="containerDataCreateList">
            <section className="containerTitleCreateList">
                <h2 className="fontH2 colorDefaultText">{jsonText.createList.title}</h2>
                <h2 className="fontH2" id="closeCreateList">X</h2>
            </section>
            <hr/>
            <form className="containerContentCreateList" method="POST" action="">  
                <section className="containerContentFormCreateList">
                    <h3 className="fontH3 colorDefaultText titleInputName">Nome</h3>
                    <input className="inputTextFormCreateList inputNameList shadowDefault" type="text" id="nameList" name="nameList" placeholder="Ex: Mercado.." required></input>
                    <Button onClick="" text="Cadastrar Lista"/>
                </section>
            </form> 
        </main>
    );
}