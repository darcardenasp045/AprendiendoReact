
import FormularioBasico from "./Formulario"
import ObjetoUseState from "./ObjetosUseState"

function MainContainer (){
    return(
        <div className="w-auto mx-auto m-4 p-4 bg-gray-700 rounded-lg flex">
            <FormularioBasico/>
            <ObjetoUseState/>
        </div>
    )
}

export default MainContainer