//importar los elementos
import { useFetchApi } from "../hooks/useFetchApi"; //Usar el hook para manejar solicitudes de la api

//Crear funcion para autenticarse
export function useAuthService() {

    //Importar las variables del useFetchApi usando el url
    const {data, error, loading, request } = useFetchApi("http://localhost:4000/api/users/Google-Login")

    //Crear la funcion usando el request para hacer la solicitud de iniciar sesion
    const loginWhithGoogle = async (idToken) => { 
        const response = await request ({
            method: "POST", // usar metodo POST
            body: { idToken } // usar el idToken como cuerpo
        })
        
        return response //retornar la respuesta
    }

    return { loginWhithGoogle, data, error, loading} //Retornar los valores de la funcion loginwhithgoogle y a partir de eso los valores seteados de data, error y loading
}