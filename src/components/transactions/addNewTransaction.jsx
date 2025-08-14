//Importar elemento
import { useState, useEffect } from "react" //usar el useState y el useEffect
import { useAddTransaction } from "../../services/transactionService" //Usar la funcion para anadir transacciones
import '../../styles/AddTransactionForm.css'

import { useContext } from 'react' //Usar el useContext para usar el contexto del valor de value
import { UpdateContext } from "../../providers/updateProvider" //Importar el provider para actualizar el provider



//Crear componente para agregar una nueva transaccion y usar la categoria de donde esta como parametro
const AddTransactionForm = ({ categoryId }) => {

    const [description, setDescription] = useState('') //Setear el valor de la descripcion
    const [amount, setAmount] = useState('') //Setear el valor del monto

    const {updatevalue } = useContext(UpdateContext) //Usar la funcion para actualizar el valor para actualizar las consultas

    //Funcion para llenar el valor de descripcion
    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    //Funcion para llenar el valor de monto
    const handleAmount = (e) => {
        setAmount(e.target.value)
    }

    const { addTransaction, error, loading } = useAddTransaction(categoryId, description, amount) //LLamar la funcion usando los parametros debidos para agregarlo

    //Funcion para guardar la transaccion y resetear los valores
    const saveTransaction = async() => {

        //Un condicional para que no haya valores negativos ni valores vacios
        if(description === '' || amount === '' || amount <= 0){
            alert('No pueden haber campos vacios y el numero debe ser positivo')
            return;
        }

        await addTransaction();
        setDescription('');
        setAmount('')
        updatevalue(); //Ejecutar funcion para actualizar las consultas
    }


    return (

        <div className="container-form">

            <input type="text" id='descripcion' value={description} onChange={handleDescription}  placeholder="Descripcion"
            onClick={(e) => e.stopPropagation()}/> {/* Evita que se propague el click */}

            <input type="number" id='monto' value={amount} onChange={handleAmount} placeholder="monto"
            onClick={(e) => e.stopPropagation()}/> {/* Evita que se propague el click */}

            <button className="anadir" 
            onClick={(e) => { e.stopPropagation(); saveTransaction()}}>{loading ? 'Añadiendo...' : 'Añadir'}</button>

            {error &&  (

                <div className="contenedor-error">

                    <p>{`Error: ${error}`}</p>

                </div>
            )}

        </div>

    )

}

export default AddTransactionForm //Exportar el componente del formulario