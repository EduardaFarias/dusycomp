import './App.css';
import SuperBar from './components/superBar/SuperBar';
function App() {
  return (
    <div>
      <SuperBar></SuperBar>
      <header className="App-header">          
        <div className="title">
          Dusycomp
        </div>
        <div className="text-description">
            O Dusycomp é um site para armazenar e organizar minhas anotações e matereiais produzidos durante minha graduação, incluindo, resumos, provas, listas de exercícios resolvidas e etc.
        </div>
      </header>
    </div>
  );
}

export default App;
