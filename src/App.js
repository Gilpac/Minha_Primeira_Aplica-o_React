import logo from './logo.svg';
import './App.css';

function MyButton() {
  return (
    <button className='botao'>Clica-me</button>
  );
}

function Imagem(){
  return(
    <image className='imagem' src="../public/Gil.png"/>
  );
}

function App() {
  return (
    <div>
      <h1 className='texto'>Gilson Sebatião</h1>
      <Imagem/>
      <MyButton/>
    </div>
  );
}

export default App;
