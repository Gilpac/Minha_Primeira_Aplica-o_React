import logo from './logo.svg';
import { useState } from 'react';
import './App.css';


function Login() {
  return(
    <p className='textL'>Bem-vindo ao Sistema</p>
  );
}

function LoginErro() {
  return(
    <p className='textL'>Erro de Login</p>
  );
}


function MyButton() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <button className='botao' onClick={handleClick}>{count} Clicks Feito</button>
  );
}

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function Sobre() {
  return (
    <>
      <h1 className='text'>Sobre</h1>
      <p className='text'>Olá.<br />Como estás?</p>
    </>
  );
}

const produtos = [
  { title: 'Programador Web', id: 1 },
  { title: 'Técnico de Hardware/Software', id: 2 },
  { title: 'Desenhista', id: 3 },
];

function App() {
  // Para controlar o Login/LoginErro
  let isLoggedIn = true;
  // Lista de itens colocados dentro da função map ()
    const lista = produtos.map(produtos =>
    <li key={produtos.id}>
      {produtos.title}
    </li>
  );
  return (
    <div>
     
      <h1 className='texto'>Gilson Sebatião</h1>
      {
        isLoggedIn ? <Login/> : <LoginErro/>
      }
      <MyButton/>
      <Sobre/>
      <h1 className='produto'>Meus Serviços</h1>
      <ul className='produto'>{lista}</ul>
      <img
        className="avatar"
        src={user.imageUrl}/>

      <h1 className='text'>{user.name}</h1>
      
    </div>
  );
}

export default App;
