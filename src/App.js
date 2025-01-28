import './App.css';
import './styles/base.css'
import locales from './locales/locales.json';
import image from './assets/goals.svg';
import Form from './components/organisms/forms/formLogin.js';

function App() {
  return (
    <main className="containerMain">
      <section className="containerApresentation shadowDefault">
        <section className="titleContentApresentation">
          <h1 className="title fontH1">
              {locales.headersApp.headerApresentationPartOne}<br />
              {locales.headersApp.headerApresentationPartTwo}<br />
              {locales.headersApp.headerApresentationPartThree}<br />
          </h1>
        </section>
        <section className="contentImageApresentation">
          <img className="imageApresentation" src={image} alt="Gráfico de metas"/>
        </section>
      </section>
      <section className="containerLogin">
        <Form />
      </section>
    </main>
  );
}

export default App;
