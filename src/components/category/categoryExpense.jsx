//Importar elementos
import { useEffect, useState } from 'react' //Importar el useEfect para renderizar las funciones de llamdas a la api y el useState
import { useGetCategoryExpense } from '../../services/categoryService' //Importar la funcion para obtener la categoria de gastos
import '../../styles/categoryPrevew.css' //Importar el estilo  
import { useContext } from 'react' //Usar el useContext para usar el contexto del valor de value
import { UpdateContext } from '../../providers/updateProvider' //Importar el provider para actualizar el provider
import DeleteCategoryModal from '../modals/deleteCategoryModal' //Importar el modal para eliminar la categoria


//Crear componente de la categoria de gastos
const CategoryExpense = () => {

    //Usar la funcion para obtener la categoria ingresos con alias en las variables 
    const { getCategoryExpense, data :dataExpense, error: errorExpense, loading: loadingExpense } = useGetCategoryExpense()

   const {value } = useContext(UpdateContext) //USar el valor de value para actualizar las llamadas del useEffect

   const [showModal, setShowModal] = useState(false) //setear el valor para mostrar el modal
   const [idCategory, setIdCategory] = useState('') //Setear el valor de la cateogira a eliminar


    //Hacer la funcion de llamada a la api en useaEffect de los gastos para que no se renderice junto a la pagina
    useEffect(() => {
        getCategoryExpense()
    }, [value]) 

   //Pendiente a sacar el total de transacciones
    const categoryTotal = '0'

    //Funcion para abrir el modal y dar el valor del id al idCategory
    const openModal = (id) => {
        setIdCategory(id)
        setShowModal(true)
    }

    //Crear funcion para cerrar el modal y poner el valor de idCategory Vacio
    const closeModal = () => {
        setShowModal(false)
        setIdCategory('')
    }
    return (

        
            <div className='container'>

                {dataExpense && //Mostrando las categorias solo cuando hayan datos

                    dataExpense.map(category => ( //Hacer un map para todas las categorias

                        <div className='container-category-info' key={category.id}>

                            <h2 className='tittle-category'>{category.name}</h2>

                            <h2 className='total-category'>{categoryTotal}</h2> {/* Mostrar el total de las transacciones de la categoria */}

                            <p className='buton-showMOdal' onClick={() => openModal(category.id)}>🗑️</p>
                        </div>

                    ))
                
                }

                {loadingExpense && //Pantalla cuando esta cargando
                    <div className='container-loading'>
                        
                        <h1 className='loading-titlle'>Cargando...</h1>

                    </div>
                }

                
                {errorExpense && //Pantalla cuando da error
                    <div className='container-error'>
                        
                        <h1 className='loading-titlle'>{`Error: ${errorExpense}`}</h1>
                        
                    </div>
                }


            {showModal && (

            
                <DeleteCategoryModal show={showModal} onClose={closeModal} idCategory={idCategory} /> /* Anadir el prop de la funcion para cerrarlo y anadir el tipo de categoria */

            )}

            </div>


    )

}

export default CategoryExpense //Exportar el componente de category