import React from 'react'
import './App.css';
import Bienvenida from './components/Bienvenida'
import Cards from './components/Cards'

function App() { 
  return (
    <div className="App">
      <h1 className="mt-4">Propiedades de los componentes</h1>
      <Bienvenida 

      />
      <hr/>
      <div className="row">
        <div className="col d-flex justify-content-around mt-5">
          <Cards
            imagen='https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            titulo="Título card 1"
            texto="Texto card 1"
            />
        </div>
        <div className="col d-flex justify-content-around mt-5">
          <Cards
            imagen="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            titulo="Título card 2"
            texto="Texto card 2"
            />
        </div>
        <div className="col d-flex justify-content-around mt-5">
          <Cards
            imagen="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            titulo="Título card 3"
            texto="Texto card 3"
            />
        </div>
      </div>
    </div>
  );
}

export default App;
