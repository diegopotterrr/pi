import {FiSearch} from 'react-icons/fi';
import './styles.css';

function App() {
  return (
    <div className="container">
    <h1 className='title'>Buscador CEP</h1>
    <div className='containerInput'>
      <input 
      type="text"
      placeholder='digite seu cep...'
      />
      <button className='buttonSearch'>
        <FiSearch sizer={25} color='#fff' />
      </button>
      </div>

      <main className='main'>
        <h2>CEP: 700208706</h2>

        <span>Rua Jose Dutra</span>
        <span>Complemento: algum complemento</span>
        <span>Gramado</span>
        <span>Patos De Minas - MG</span>
      </main>

    </div>
  );
}

export default App;
