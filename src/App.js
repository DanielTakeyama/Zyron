import './App.css';
import image from './assets/goals.svg'

function App() {
  return (
    <main className="containerMain">
      <section className="containerApresentation">
        <h1 className="title">
          Maximize sua produtividade, <br />
          organize seu tempo e<br />
          conquiste suas metas com Zyron.<br />
        </h1>
        <image src={image} alt="teste" width="800" height="800" />
      </section>
      <section className="containerLogin"></section>
    </main>
  );
}

export default App;
