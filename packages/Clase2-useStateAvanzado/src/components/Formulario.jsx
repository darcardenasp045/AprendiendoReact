import { useState } from "react";

function FormularioBasico() {
  const [nombre, setNombre] = useState("");
  const [apellido, serApellido] = useState("");

  const handleName = (e) => {
    if (!nombre) {
      alert("El nombre es requerido");
      return;
    } else {
      e.preventDefault();
      alert(`Hola ${nombre} ${apellido}`);
      setNombre("");
    }
  };

  return (
    <form onSubmit={handleName} className="flex flex-col p-5">
      <h2>FORMUALRIO BASICO CON USESTATE</h2>
      <label>Nombre:</label>
      <input
        type="text"
        value={nombre}
        className=""
        onChange={(e) => setNombre(e.target.value)}
      />
      <label> Apellido:</label>
      <input
        type="text"
        value={apellido}
        onChange={(e) => serApellido(e.target.value)}
      />

      <button type="submit">enviar</button>
    </form>
  );
}

export default FormularioBasico;
