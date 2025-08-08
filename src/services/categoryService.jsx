//importar los elementos
import { useFetchApi } from "../hooks/useFetchApi"; //Usar el hook para manejar solicitudes de la api

//Crear las funcio para solicitar las categorias de ingresos del usuario 
export function useGetCategoryIncome() {

    const token = localStorage.getItem("token") //Obtener el token del usuario 

    //Importar las variables del useFetchApi usando el url y el token y poniendo la categoria de intresos
    const {data, error, loading, request } = useFetchApi(`http://localhost:4000/api/categories/income`, token)


    //Funcion con el request para obtener las categorias por su tipo
    const getCategoryIncome = async () => {

        const response = await request({
            method: "GET" //Utilizar el metodo get
        })

        return response //retornar la respuesta
    }


    return { getCategoryIncome, data, error, loading } //retornar los valoresde la funcion seteados por el getCategory que serian data, error y loading

}

//Crear las funcio para solicitar las categorias de ingresos del usuario 
export function useGetCategoryExpense() {

    const token = localStorage.getItem("token") //Obtener el token del usuario 

    //Importar las variables del useFetchApi usando el url y el token y poniendo la categoria de gastos
    const {data, error, loading, request } = useFetchApi(`http://localhost:4000/api/categories/expense`, token)


    //Funcion con el request para obtener las categorias por su tipo
    const getCategoryExpense = async () => {

        const response = await request({
            method: "GET" //Utilizar el metodo get
        })

        return response //retornar la respuesta
    }


    return { getCategoryExpense, data, error, loading } //retornar los valoresde la funcion seteados por el getCategory que serian data, error y loading

}


//Crear las funcio para aderir una nueva categoria al usuario por tipo y su nombre
export function useAddCategory(name, type) {

    const token = localStorage.getItem("token") //Obtener el token del usuario 

    //Importar las variables del useFetchApi usando el url y el token 
    const {data, error, loading, request } = useFetchApi(`http://localhost:4000/api/categories/addCategory`, token)

    //Funcion con el request para aderir una nueva categoria al usuario
    const addCategory = async () => {

        const response = await request({
            method: "POST", //Usar el metodo post
            body: {
                name: name, //usar el nombre del parametro 
                type: type //usar el type debe ser income o expense
            }
        })

        return response //Retornar la respuesta
    }

    return { addCategory, data, error, loading } //retornar los valoresde la funcion seteados por el addCategory que serian data, error y loading

}

//Crear las funcion para eliminar la categor3ia del usuario usando el id de la categoria como parametro
export function useDeleteCategory(idCategory) {

    const token = localStorage.getItem("token") //Obtener el token del usuario 

    //Importar las variables del useFetchApi usando el url y el token y el id de categoria del parametro
    const {data, error, loading, request } = useFetchApi(`http://localhost:4000/api/categories/deleteCategory/${idCategory}`, token)

    //Funcion con el request para eliminar la categoria
    const deleteCategory = async() => {

        const response = await request({
            method: "DELETE",
        })

        return response //Retornar la respuesta

    }  

    return { deleteCategory, data, error, loading } //retornar los valores de la funcion seteados por el deleteCategory que serian data, error y loading
}
