import logo from './logo.svg';
import './App.css';

function MyButton() {
  return (
    <button className='botao'>Clica-me</button>
  );
}
function App() {
  return (
    <div>
      <h1 className='texto'>Gilson Sebatião</h1>
      <MyButton/>
    </div>
  );
}

export default App;
