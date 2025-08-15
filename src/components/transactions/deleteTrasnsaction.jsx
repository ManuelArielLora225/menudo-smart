//Importar Elementos
import { useDeleteTransaction } from '../../services/transactionService' //Importar la funcion para eliminar una transaccion

import { useContext } from 'react' //Usar el useContext para usar el contexto del valor de value
import { UpdateContext } from "../../providers/updateProvider" //Importar el provider para actualizar el provider

import '../../styles/deleteTransaction.css'


//Crear componente de boton para elinnar la transaccion
const DeleteTransaction = ({ transactionId }) => {

    const { deleteTransaction, data,  error, loading} = useDeleteTransaction(transactionId) //Extraer los valores de la fncio de useGet transaction usando el id de la categoria como parametro

    const {updatevalue } = useContext(UpdateContext) //Usar la funcion del contexto para cambiar actualizar el useEffect

    //Boton con la funcion para eliminar la categoria
   const handleDelete =  async(e) => {
        e.stopPropagation() // Prevenir que se ejecute el toggle de transacciones
        await deleteTransaction();
        updatevalue(); //Actualizar el valor para actualizar los useEffects
    
   }

   return (

    <button onClick={(e) => { handleDelete(e)}}
    className="boton-eliminar-transaccion">🗑️</button>

   )

}

export default  DeleteTransaction //Exportar el boton para eliminar transaccion