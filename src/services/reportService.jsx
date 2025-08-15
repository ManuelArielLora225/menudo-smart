//Importar elementos
import { useFetchApi } from "../hooks/useFetchApi"; //Usar el hook para manejar solicitudes de la api

//Crear funcion para generar el reporte
export function useGenerateReport() {

    const token = localStorage.getItem("token") //Obtener el token del usuario 

    //Importar las variables del useFetchApi usando el url y el token y poniendo la categoria de intresos
    const {data, error, loading, request } = useFetchApi(`http://localhost:4000/api/reports/generate`, token)

    //Crear funcion para generar el reporte con el request
    const generateReport = async () => {
        
        const response = await request({
            method: 'POST' //Usar el metodo post
        })

        return response
    }

    return { generateReport, data, error, loading } //retornar los valoresde la funcion seteados por el generateReport que serian data, error y loading

}