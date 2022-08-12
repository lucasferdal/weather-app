import './App.css';
import Region from './components/Region.js';

const App = () => (
  <div>

    <header>
      <h1>Como esta el tiempo?</h1>
    </header>

    <div className='buscarRegion'>
      <input types="button" id='buscar' placeholder='Busca tu ciudad'/>
      <input type="submit" id='enviar' />
    </div>

      <h2>Asi se vera el tiempo en los proximos dias</h2>
      
    <div className='regiones'>

      <Region>
      </Region>
      
      <Region>
      </Region>

      <Region>
      </Region>

    </div>

  </div>
)

export default App;
