//Importar los elementos
import { useEffect, useRef, useState } from "react";

//Funcion para manejar las solicitudes de la api
 export function useFetchApi(defaultUrl, token){ //usar la url ya sea puesta en la funcion o dentro del objeto de request y el token

    const [data, setData]  = useState(null) //variable de la data
    const [error, setError] = useState(null) //Variable del error
    const [loading,  setLoading] = useState(false) //Variable de cuanto esta cargando

    const abortController = useRef(null) // obtener la funcion de cuando se interumpa la llamada con useRef para evitar re-renderizados

    //Funcion que manejara la llamada a la api
    const request =  async ({url, method = "GET", body = null}) => { //Se le puede poner la url aca directamente, el metodo por defecto es GET y el cuerpo es null en caso de no haber
        
        const finalUrl = url || defaultUrl //Usar la url del request o la que esta puesta en la funcion directamente

        //Abortar la consulta en caso de ser interrumpida, el current es el que contiene la funcion en el useRef
        if(abortController.current){
            abortController.current.abort();
        }

        //llamar al objeto para abortar la consulta
        abortController.current = new AbortController()
        const signal = abortController.current.signal; //Llamar al signal para poner dentro del fecth y este lea esa señal para ejecutar el abort

        setLoading(true) //Empezar la pantalla cargando
        setError(null) //Poner null para que quitar errores anteriores en caso de tener

        //Empezar el try asinctrono
        try {
            
         // establecer la variable de respuesta con el fetvch
          const res = await fetch( finalUrl,{ //Usar la url seleccionada dentro del request o del useFetchApi
            method, //Utilizar el metodo
            headers: { //Utilizar las cabeceras, en caso de tener token este utilizara el token
                "Content-Type": "application/json",
                ...(token && {Authorization: `Bearer ${token}`})
            },
            ...(body && {body: JSON.stringify(body)}), //en caso de tener un body este utilizara el body
            signal //Poner la señal del abort en caso de que se ejecute
            });

            //Mensaje por si no hubo respuesta
            if(!res.ok) {
                const errorData = await res.json()
                throw new Error(errorData.message || "Error en la solicitud")
            }

            //Convertir la respuesta en json y retornar en json
            const json = await res.json()
            setData(json)
            return json
        
        } catch(err){ //Mostrar le mensaje de error en caso de haber un error y poner null la data
            
            setError(err.message)
            setData(null)

        } finally { //Al finalizar poner el valor de cargando en nulo
            setLoading(false)
        }
    }

        //USar el useEffect para poder renderizar en segundo plano el aborto de la solicitud una vez echa otra solicitud
          useEffect(() => {
            return () => {
                if(abortController.current){
                    abortController.current.abort()
                }
            }
        }, [])

    return { data, error, loading, request } //retornar los valores de data, error, loading y la funcion request para usarlos
}