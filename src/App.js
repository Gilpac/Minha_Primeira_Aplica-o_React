import logo from './logo.svg';
import './App.css';


function Login() {
  return(
    <p>Bem-vindo ao Sistema</p>
  );
}

function LoginErro() {
  return(
    <p>Erro de Login</p>
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

function App() {
  return (
    <div>
      <h1 className='texto'>Gilson Sebatião</h1>
      <MyButton/>
      <Sobre/>
      <img
        className="avatar"
        src={user.imageUrl}/>

      <h1 className='text'>{user.name}</h1>
      
    </div>
  );
}

export default App;
