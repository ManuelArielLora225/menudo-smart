//Importar elementos
import { useFetchApi } from "../hooks/useFetchApi"; //Usar el hook para manejar solicitudes de la api


//Crear la funcion para ver las transacciones, poniendo el id de la categoria como parametro
export function useGetTransaction(categoryId) {

    const token = localStorage.getItem("token") //Obtener el token del usuario 

    //Importar las variables del useFetchApi usando el url y el token y poniendo la categoria de intresos
    const {data, error, loading, request } = useFetchApi(`http://localhost:4000/api/transactions/${categoryId}`, token)

    //Funcion para obtener las transacciones por categorias
    const getTransaction =  async ()  => {

        const response = await request({
            method:'GET' //Utilizar el metodo get
        })

        return response
    }

    return { getTransaction, data, error, loading } //retornar los valoresde la funcion seteados por el getTransaction que serian data, error y loading

}

//Crear la funcion para anadir una nueva transaccion
export function useAddTransaction(categoryId, description, amount) {


    //Importar las variables del useFetchApi usando el url y el token y poniendo la categoria de intresos
    const {data, error, loading, request } = useFetchApi(`http://localhost:4000/api/transactions/addTransaction`)

    //Funcion para añadir nueva transaccion 
    const addTransaction = async() => {

        //Funcion para agregar nueva categoria
        const response = await request({
            method: 'POST', //Usar metodo post
            body: {
              category_id: categoryId,
              description: description,
              amount: amount
            }
        })

        return response
    }


    return { addTransaction, data, error, loading } //retornar los valoresde la funcion seteados por el addTransaction que serian data, error y loading


}

//Crear la funcion para eliminar las transacciones

export function useDeleteTransaction(categoryId) {

    const token = localStorage.getItem("token") //Obtener el token del usuario 

    //Importar las variables del useFetchApi usando el url y el token y poniendo la categoria de intresos
    const {data, error, loading, request } = useFetchApi(`http://localhost:4000/api/transactions/deleteTransaction/${categoryId}`, token)

    //Funcion para eliminar la nueva categoria
    const deleteTransaction = async () => {

        const response = await request({
            method: 'DELETE'
        })

        return response
    }

    return {data, error, loading, deleteTransaction } 


}