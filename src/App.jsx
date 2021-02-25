import React from 'react'
import './App.css';
import Bienvenida from './components/Bienvenida'

function App() {
  return (
    <div className="App">
      <h1>Propiedades de los componentes</h1>
      <hr/>
      <div className="row">
        <div className="col">
          <Cards
            imagen="https://lorempixel.com/150/150"
            titulo="Título card 1"
            texto="Texto card 1"
            />
        </div>
        <div className="col">
          <Cards
            imagen="https://lorempixel.com/150/150"
            titulo="Título card 2"
            texto="Texto card 2"
            />
        </div>
        <div className="col">
          <Cards
            imagen="https://lorempixel.com/150/150"
            titulo="Título card 3"
            texto="Texto card 3"
            />
        </div>
      </div>
    </div>
  );
}

export default App;
