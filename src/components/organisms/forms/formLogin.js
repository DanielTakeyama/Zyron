import './formLogin.css';
import '../../../styles/base.css';
import text from '../../../locales/locales.json';
import Button from '../../atoms/buttons/buttonDefault.tsx';

export default function Form(){
    return (
        <form className="containerForm shadowDefault">
            <h2 className="headingForm fontH2">{text.form.formLogin.heading}</h2>
            <p className="fontP">{text.form.formLogin.enterText}</p>
            <Button onClick="teste" text={text.form.formLogin.buttonText}/>
        </form>
    );
}