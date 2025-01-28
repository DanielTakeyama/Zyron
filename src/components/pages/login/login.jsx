import './login.css';
import '../../../styles/base.css'
import locales from '../../../locales/locales.json';
import image from '../../../assets/goals.svg';
import Form from '../../organisms/forms/formLogin';

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
        </section>{/*Fim do titleContentApresentation*/}

        <section className="contentImageApresentation">
          <img className="imageApresentation" src={image} alt="Gráfico de metas"/>
        </section>{/*Fim do contentImageApresentation*/}

      </section>{/*Fim do containerApresentation*/}

      <section className="containerLogin">
        <Form />
      </section>{/*Fim do containerLogin*/}

    </main>//Fim do containerMain
  );
}

export default App;
