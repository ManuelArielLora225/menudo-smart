//importar elementos
import { useEffect } from 'react' //Usar el useState de react
import { useFinanceResum } from "../services/dashboardService" //Usar la funcion de llamada a la api para obtener el gasto total, ingreso total y balance
import Cards from './cards/cards' //Usar el componente de las cartas para los valores de los resumenes
import { useContext } from 'react' //Usar el useContext para usar el contexto del valor de value
import { UpdateContext } from '../providers/updateProvider' //Importar el provider para actualizar el provider
 
const FinanceResum = () => {

    const { getResum, data, error, loading } = useFinanceResum(); //Obtener los valores y funciones del useFinanceResum
    const {value } = useContext(UpdateContext) //Usar el valor del contexto para cambiar actualizar el useEffect

    //realizar un useEffect para que se renderice por debajo la funcion de la consulta
    useEffect(() => {

        //Traer los datos iniciales
        getResum();

    }, [value])  // Actualizar cada que el valor del provider cambie

    //Funcion para cambiar el tipo de negativo o positivo segun sea el balance negativo o positivo
    const formatStyleType = (value) => {

        if(value < 0 ) return "negative" //Si el valor es menor a 0 es tipo negative
        else if (value === 0) return "neutral" //Si el valor es igual a 0 es tipo neutral
        return "positive" //Si el valor es mayor a 0 es tipo positive
        
    }

    return (

        <div className="general-container">

        {data && //Mostras los datos cuando hayan datos
        
            <div className="cards-container">

                {/* Utilizar el componente de Cards para mostrar los resumenes */}

                <Cards tittle="Total de ingresos"
                 value={data.total_income} 
                 type={formatStyleType(data.total_income || 0)} //Utilizar la funcion para asignar la clase con el estilo especifico
                 currency={data.default_currency}/> {/* Utilizar el tipo de moneda */}

                <Cards tittle="Total de Gastos" 
                value={data.total_expense} 
                type={formatStyleType(data.total_expense || 0)} //Utilizar la funcion para asignar la clase con el estilo especifico
                 currency={data.default_currency}/> {/* Utilizar el tipo de moneda */}

                <Cards tittle="Balance" 
                value={data.balance} 
                type={formatStyleType(data.balance || 0)} //Utilizar la funcion para asignar la clase con el estilo especifico
                 currency={data.default_currency}/> {/* Utilizar el tipo de moneda */}

            </div>
        
        }
        
        
            {/* Mostrar cargando cuando este cargando */}
            {loading && <p className="loading">Cargando...</p>}

            {/* Mostrar error cuando de error */}
            {error && <p className="error">Error: {error}</p>}

        </div>

    )

}

export default FinanceResum //Exportar el componente de FinanceResum