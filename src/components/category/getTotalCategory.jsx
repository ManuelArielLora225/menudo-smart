//Importar elementos 
import { useEffect } from 'react'
import { useSumTransactions } from '../../services/transactionService'

//Crear componente para mostrar el total de la categoria
const TotalCategory = ({ idCategory }) => {

    //Usar la funcion para obtener el total de 
    const { getCategoryTotal, data, error, loading } = useSumTransactions(idCategory)

    //Hacer el useEffect para ue se renderice o se llame a la funcion cada que cambie su data osea cada que cambie el valor total
    useEffect(() => {
            getCategoryTotal()
    },[idCategory])

    console.log(data)

    return(

        <div className='container-total-category'>

            <h2 className='total-category'>{data.total}</h2> {/* Mostrar el total cuando haya datos */}

            {loading && <h2 className='total-category'>...</h2>} {/* Mostrar puntos de cargando cuando este cargando */}

            {error && <h2 className='total-category'>⚠️</h2>} {/* Mostrar emoji de cuidado cuando haya un error */}

        </div>
    )

}

export default TotalCategory //Exportar el componente de total categoria