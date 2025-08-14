//Importar elementos
import { useEffect, useState } from 'react' //Importar el useEfect para renderizar las funciones de llamdas a la api y el useState
import { useGetCategoryIncome } from '../../services/categoryService' //Importar la funcion para obtener la categoria de gastos
import '../../styles/categoryPrevew.css' //Importar el estilo  
import { useContext } from 'react' //Usar el useContext para usar el contexto del valor de value
import { UpdateContext } from '../../providers/updateProvider' //Importar el provider para actualizar el provider
import DeleteCategoryModal from '../modals/deleteCategoryModal' //Importar el modal para eliminar la categoria
import AddTransactionForm from '../transactions/addNewTransaction' //Importar formulario para anadir el formulario par anadir transacciones
import Transactions from '../transactions/transactions' //Importar el copmponente para ver las transacciones

//Crear componente de la categoria de gastos
const CategoryExpense = () => {

    //Usar la funcion para obtener la categoria ingresos con alias en las variables 
    const { getCategoryIncome, data :dataIncome, error: errorIncome, loading: loadingIncome } = useGetCategoryIncome()

   const {value } = useContext(UpdateContext) //USar el valor de value para actualizar las llamadas del useEffect

   const [showModal, setShowModal] = useState(false) //setear el valor para mostrar el modal
   const [idCategory, setIdCategory] = useState('') //Setear el valor de la cateogira a eliminar

   const [showTransactions, setShowTransactions] = useState({}) //Setear el valor para mostrar el contenedor de transacciones siendo un objeto para controlar cada categoria individual


    //Hacer la funcion de llamada a la api en useaEffect de los gastos para que no se renderice junto a la pagina
    useEffect(() => {
        getCategoryIncome()
    }, [value]) 

   //Pendiente a sacar el total de transacciones
    const categoryTotal = '0'

    //Funcion para abrir el modal y dar el valor del id al idCategory
    const openModal = (id, e) => {
        e.stopPropagation() // Prevenir que se ejecute el toggle de transacciones
        setIdCategory(id)
        setShowModal(true)
    }

    //Crear funcion para cerrar el modal y poner el valor de idCategory Vacio
    const closeModal = () => {
        setShowModal(false)
        setIdCategory('')
    }

    //Crear la funcion para mostrar el contenedor de transacciones
    const HandleshowTransactions = (categoryId) => {
     setShowTransactions(prev => ({
        ...prev,
        [categoryId]: !prev[categoryId] // Solo afecta la categoría específica
        }))
    }
    
    return (

        
            <div className='container'>

                {dataIncome && //Mostrando las categorias solo cuando hayan datos

                    dataIncome.map(category => ( //Hacer un map para todas las categorias

                        <div className={`container-category-info ${showTransactions[category.id] ? 'expanded' : ''}`} key={category.id}
                        onClick={() => HandleshowTransactions(category.id)}>

                            {/* Header de la categoría */}

                            <div className='category-header'>

                                <div className='category-main-info'>

                                    <h2 className='tittle-category'>{category.name}</h2
                                    >
                                    <h2 className='total-category'>{categoryTotal}</h2>

                                </div>

                                <div className='category-actions'>

                                    <p className='buton-showMOdal' onClick={(e) => openModal(category.id, e)}>🗑️</p>

                                </div>

                            </div>

                            {showTransactions[category.id] && (

                                <div className='transactions-container'>

                                    <Transactions categoryId={category.id} />

                                    
                                    <AddTransactionForm categoryId={category.id}/>
                                </div>
                            )}
                        </div> 
                    ))
                }

                {loadingIncome && //Pantalla cuando esta cargando
                    <div className='container-loading'>
                        
                        <h1 className='loading-titlle'>Cargando...</h1>

                    </div>
                }

                
                {errorIncome && //Pantalla cuando da error
                    <div className='container-error'>
                        
                        <h1 className='loading-titlle'>{`Error: ${errorIncome}`}</h1>
                        
                    </div>
                }


            {showModal && (

            
                <DeleteCategoryModal show={showModal} onClose={closeModal} idCategory={idCategory} /> /* Anadir el prop de la funcion para cerrarlo y anadir el tipo de categoria */

            )}


            </div>


    )

}

export default CategoryExpense //Exportar el componente de category