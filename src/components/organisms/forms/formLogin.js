import './formLogin.css';
import '../../../styles/base.css';
import text from '../../../locales/locales.json';
import Button from '../../atoms/buttons/buttonDefault.tsx';

export default function Form(){
    return (
        <form className="containerForm shadowDefault" action="" method="">
            <section className="contentData">
                <h2 className="fontH2 headingForm">{text.form.formLogin.heading}</h2>

                <p className="fontPBold">{text.form.formLogin.enterText}</p>
                <input className="inputDefault" type="text" name="email" placeholder="Digite o seu e-mail aqui"/>
        
                <p className="fontPBold">{text.form.formLogin.passwordText}</p>
                <input className="inputDefault" type="password" name="password" placeholder="Digite a sua senha aqui"/>

                <Button onClick="teste" text={text.form.formLogin.buttonText}/>
                <a className="fontPDefault forgetPassword" href="/">Esqueci minha senha</a>
                <p className="fontPDefault registerUser">Não tem uma conta ? <a href="/" className="fontPBold registerUserLink">Clique Aqui</a> e crie uma agora mesmo!</p>
            </section>
        </form>
    );
}