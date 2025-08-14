//Importar elementos
import { useGetTransaction } from "../../services/transactionService"; //importar la funcion para llamar las transacciones por categorias
import { useEffect } from "react"; //Use efect para mostrar las categorias
import { useContext } from 'react' //Usar el useContext para usar el contexto del valor de value
import { UpdateContext } from "../../providers/updateProvider"; //Importar el provider para actualizar el provider
import DeleteTransaction from "./deleteTrasnsaction"; //Importar el componente para eliminar la transaccion
import '../../styles/transactions.css' //Importar el estilo de transactions


//Crear componente de las transacciones usando el id de categoria como prop
const Transactions = ({ categoryId }) => {

    const { getTransaction, data: dataTransaction, error: errorTransaction, loading: loadingTransaction } = useGetTransaction(categoryId) //Extraer los valores de la fncio de useGet transaction usando el id de la categoria como parametro
    const {value } = useContext(UpdateContext) //Usar el valor del contexto para cambiar actualizar el useEffect

    //useEffect para mostrar las categorias
    useEffect(() => {
        getTransaction()
    }, [value]) //Que cambie cada que se ejecute la funcion para cambiar el valor

    return (

        <div className="container-transactions">

            <div className="container-transaction-transactions">

                {dataTransaction?.map(transaction => (

                        <div className="container-transaction" key={transaction.id}>

                            <div className="container-descripcion-date">

                                <p className="descripcion">{transaction.description}</p>
                                <p className="date">{transaction.transaction_date}</p>

                            </div>

                            <div className="container-amount-delete">
                                
                                <p className="amount">{transaction.amount}</p>
                                
                                <DeleteTransaction transactionId={transaction.id} />
            
                            </div>

                        </div>

                ))}

                    {loadingTransaction && (

                        <div className="container-loading">
                        
                            <p>Cargando...</p>

                        </div>

                    )}

            </div>

              
              {errorTransaction && (

                <div className="container-error">
                
                    <p>{errorTransaction}</p>

                </div>

              )}

        </div>
    )


}

export default Transactions //Exportar el componente que contiene las transacciones