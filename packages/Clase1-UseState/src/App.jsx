import { useState } from 'react'
import './App.css'

function App({nombre, estilo}) {

const [contador, setContador] = useState(0);

const incrementarContador = () =>{
  setContador((prevContador) => prevContador + 1)
}

const reiniciarContador = () =>{
  setContador(0)
  
}

const decrementarContador = () =>{
  setContador((prevContador) => prevContador - 1)
}

  return (
    <>
      <div style={estilo}>
        <h1>{nombre}</h1>
        
        <button onClick={incrementarContador}>Contar</button>
        <button onClick={reiniciarContador}>Reiniciar</button>
        <button onClick={decrementarContador}>Restar</button>
        <p>{contador === 0
          ?'no has hecho click aun, ¡animate!'
          :`haz hecho esta cantidad de clicks ${contador}`}</p>
      </div>

      
    </>
  )
}

export default App
