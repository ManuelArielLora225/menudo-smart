//IMportar elementos
import { useEffect, useTransition } from "react"; //Importar el useEffect para usarlo
import { useGetTotalTransaction } from '../../services/transactionService'

import { useContext } from 'react' //Usar el useContext para usar el contexto del valor de value
import { UpdateContext } from "../../providers/updateProvider"; //Importar el provider para actualizar el provider\

import '../../styles/totalTransactions.css' //Importar el estilo del componente


//Crear el componente que muestre el resultado y el tipo de transaccion [income // expense] que dependera el color de los mismos
const TotalTransaction = ({ categoryId, type}) => {

    const { getTotalTransaction, data, error, loading} = useGetTotalTransaction(categoryId) //Usar los valores de la fincion para obtener el total de trasnacciones
    const { value } = useContext(UpdateContext) //Usar el valor value para actualizar la consulta

    useEffect(() => {
        getTotalTransaction();
    }, [value])

    // Evita error si data es null o array vacío
    const total = data?.[0]?.total ?? 0;  /* Como es un array de un solo objeto se especifica el [0] */
    const currency = data?.[0]?.default_currency ?? '';

    return (

    <div className="total-Container">

        <h2 className={type}>{total}</h2> 

        <h2 className={type}>{currency}</h2>

    </div>
    )

}

export default TotalTransaction //Exportar el componente con el tital de transacciones por categoria