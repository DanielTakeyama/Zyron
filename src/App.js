import './App.css';
import locales from './locales/locales.json';
import image from './assets/goals.svg';

function App() {
  return (
    <main className="containerMain">
      <section className="containerApresentation">
        <h1 className="title">
            {locales.headersApp.headerApresentationPartOne}<br />
            {locales.headersApp.headerApresentationPartTwo}<br />
            {locales.headersApp.headerApresentationPartThree}<br />
        </h1>
        <img className="imageApresentation" src={image} alt="teste" width="730" height="650" />
      </section>
      <section className="containerLogin"></section>
    </main>
  );
}

export default App;
