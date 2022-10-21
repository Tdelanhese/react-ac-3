import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

function App() {
  const [ campeonatos, setCampeonatos ] = useState()

  function getAllCampeonatos() {
    const options = {
      method: 'GET',
      headers: {
        Authorization: " Bearer test_5482f1258626888a2131dd8683244c"
      }
    };
    
    fetch('https://api.api-futebol.com.br/v1/campeonatos', options)
      .then(response => response.json())
      .then(response => { console.log(response); setCampeonatos(response) })
      .catch(err => console.error(err));
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <button class="listar" onClick={getAllCampeonatos}>Listar campeonatos</button>

        <div class="campeonatos">
          {campeonatos && campeonatos.map((camp, index) => (
            <div className="item-container">
              <p>Campeonato: <span>{ camp.nome_popular }</span></p>
              <p>Status: <span>{ camp.status }</span></p>

              <img src={camp.logo}></img>
            </div>
          ))}
        </div>

      </header>
    </div>
  );
}

export default App;
