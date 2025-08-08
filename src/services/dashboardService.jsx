//importar los elementos
import { useFetchApi } from "../hooks/useFetchApi"; //Usar el hook para manejar solicitudes de la api

//Crear la funcion de la llamada para obtener el resumen financiero (total de ingreso, total de gastos y balance)
export function useFinanceResum() {

    const token = localStorage.getItem("token") //Obtener el token del usuario 

    //Importar las variables del useFetchApi usando el url y el token
    const {data, error, loading, request } = useFetchApi("http://localhost:4000/api/dashboard", token)

    //Funcion con el request para obtener la respuesta json del total de ingreso, total de gastos y balance
    const getResum = async () => {

        const response = await request({
            method: 'GET' //Utilizar el metodo get
        })

        return response //retornar la respuesta
    }

    
    return { getResum, data, error, loading } //retornar los valoresde la funcion seteados por el getResum que serian data, error y loading

    
}

//Crear la funcion de la llamada para obtener la moneda por defecto del usuario
export function useGetCurrecy() {

    const token = localStorage.getItem("token") //Obtener el token del usuario 

    //Importar las variables del useFetchApi usando el url y el token
    const {data, error, loading, request } = useFetchApi("http://localhost:4000/api/dashboard/getCurrency", token)

    //Funcion con el request para obtener la respuesta json de la moneda por defecto del usuario
    const getCurrency = async () => {
         
        const response = await request({
            method: 'GET' //Utilizar el metodo get
        })

        return response //retornar la respuesta
    }

    return { getCurrency, data, error, loading } //retornar el valor del tipo de moneda del usuario de la funcion getCurrency 

}

//Crear la funcion de la llamada para cambiar el tipo de moneda por defecto del usuario usando el valor como parametro para cambiarlo
export function useChangeCurrency(currency) {

    const token = localStorage.getItem("token") //Obtener el token del usuario 

    //Importar las variables del useFetchApi usando el url y el token
    const {data, error, loading, request } = useFetchApi("http://localhost:4000/api/dashboard/changeCurrency", token)

    //Funcion con el request para cambiar el tipo de moneda del usuario
    const changeCurrency = async () => {

        const response = await request({
            method: "POST",
            body: {
                currency: currency
            }
        })

        return response //retornar la respuesta
    }

    return { changeCurrency, data, error, loading } //retornar el mensaje de exito o error de cuando se cambie 

}