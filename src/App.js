import logo from './logo.svg';
import './App.css';


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


function App() {
  return (
    <div>
      <h1 className='texto'>Gilson Sebatião</h1>
      <MyButton/>

      <img
        className="avatar"
        src={user.imageUrl}/>

      <h1 className='text'>{user.name}</h1>
      
    </div>
  );
}

export default App;
