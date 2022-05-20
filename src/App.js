import logo from './logo.svg';
import './App.css';

function MyButton() {
  return (
    <button>Clica-me</button>
  );
}
function App() {
  return (
    <div>
      <h1 className='texto'>Bem-vindo a minha Aplicação</h1>
      <MyButton/>
    </div>
  );
}

export default App;
