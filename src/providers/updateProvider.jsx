//Importar elementos
import { createContext, useState } from "react"; //USar create context y useState

//Crear el contexto
export const UpdateContext = createContext();

//Crear el provider
export  const UpdateProvider = ({ children }) => { //Exportar el provider para actualizar en los services

    const [value, setValue] = useState(false) //Crear valor para actualizarlo

    //Funcion para actualizar el value
    const updatevalue = () => {
        setValue(!value)
    }

    return (

        <UpdateContext.Provider value={{value, updatevalue }}> {/* Hacer el provider con los valores */}
            {children}
        </UpdateContext.Provider>

    )
}
