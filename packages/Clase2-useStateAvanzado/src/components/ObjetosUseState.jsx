import { useState } from "react";

function ObjetoUseState (){
    const [persona, setPersona] = useState({
        nombre: '',
        apellido: '',
        edad:''
    })

    const handleName = (e) =>{
        const {name, value}=e.target
        setPersona((prevPersona)=>({
            ...prevPersona,
            [name]:value
        }))

    }
    return(
        <div className="flex flex-col">
            <label>Nombre:</label>
            <input 
                type="text"
                name="nombre"
                value={persona.nombre}
                onChange={handleName} 
            />
            <label>Apellido:</label>
            <input 
                type="text"
                name="apellido"
                value={persona.apellido}
                onChange={handleName}
            />
            <label>Edad:</label>
            <input 
                type="number"
                name="edad"
                value={persona.edad}
                onChange={handleName}
            />
            <p>
                {`Hola ${persona.nombre} ${persona.apellido} tienes ${persona.edad} años`}
            </p>
        </div>
    )
}
export default ObjetoUseState