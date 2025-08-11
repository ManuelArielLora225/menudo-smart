//Importar elementos
import { useFetchApi } from "../hooks/useFetchApi"; //Usar el hook para manejar solicitudes de la api


//Crear la funcion para sumar el total de una categoria usando el id de categoria traido por el padre como prop
export function useSumTransactions(idCategory) {
    
    //Importar las variables del useFetchApi usando el url y poniendo el id de la categoria como parametro
    const {data, error, loading, request } = useFetchApi(`http://localhost:4000/api/transactions/totalTransactions/${idCategory}`)


    //Funcion con el request para obtener el total de la categoria
    const getCategoryTotal = async () => {

        const response = await request({
            method: "GET" //Utilizar el metodo get
        })

        return response //retornar la respuesta
    }

    return { getCategoryTotal, data, error, loading } //retornar los valoresde la funcion seteados por el etCategoryTotal que serian data, error y loading

}