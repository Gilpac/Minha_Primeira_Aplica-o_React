import logo from './logo.svg';
import './App.css';


function Login() {
  return(
    <p className='text'>Bem-vindo ao Sistema</p>
  );
}

function LoginErro() {
  return(
    <p className='text'>Erro de Login</p>
  );
}


function MyButton() {
  return (
    <button className='botao'>Clica-me</button>
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
  { title: 'Tomate', id: 1 },
  { title: 'Cebola', id: 2 },
  { title: 'Alho', id: 3 },
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
      {
        isLoggedIn ? <Login/> : <LoginErro/>
      }
      <h1 className='texto'>Gilson Sebatião</h1>
      <MyButton/>
      <ul className='produto'>{lista}</ul>
      <Sobre/>
      <img
        className="avatar"
        src={user.imageUrl}/>

      <h1 className='text'>{user.name}</h1>
      
    </div>
  );
}

export default App;
