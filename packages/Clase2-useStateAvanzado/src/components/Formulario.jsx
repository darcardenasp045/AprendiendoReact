import { useState } from "react";

function FormularioBasico () {

    const [nombre, setNombre] = useState('')
    const [apellido, serApellido] = useState('')

    const handleName = (e) =>{
        
        e.preventDefault()
        alert(`Hola ${nombre} ${apellido}`)
        setNombre('')

        
    }

    return (
        <div
            className="w-1/2 mx-auto m-4 p-4 bg-gray-700 rounded-lg"
        >
            <h2>FORMUALRIO BASICO CON USESTATE</h2>
            <form 
                onSubmit={handleName}
                className="flex flex-col p-5"
            >
                <label>Nombre:</label>
                <input 
                    type="text"
                    value={nombre}
                    className=""
                    onChange={(e)=>setNombre(e.target.value)}
                />
                <label> Apellido:</label>
                <input 
                    type="text"
                    value={apellido}
                    onChange={(e) => serApellido(e.target.value)}
                />
            
            <button type="submit">enviar</button>
            </form>
        
        </div>
        
    )
}

export default FormularioBasico