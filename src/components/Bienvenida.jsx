import React from 'react'

function Bienvenida(props) {
  const {nombre} = props
  return (
    <div>
      <h2 className="mb-3">Bienvenido {nombre}</h2>
    </div>
  )
}

export default Bienvenida
