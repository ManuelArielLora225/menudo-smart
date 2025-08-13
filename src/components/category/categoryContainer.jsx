// Importar elementos 
import CategoryIncome from './categoryIncome' //Importar el componente de categoria de ingresos
import CategoryExpense from './categoryExpense' //Importar el componente de categoria de gastos
import CategoryModal from '../modals/addCategoryModal' //Importar la pantalla de confirmacion de modal para anadir la categoria
import '../../styles/categoryContainerComponent.css' //Importar el estilo del componente
import { useState } from 'react' //Usar el useState



//Crear Componente donde iran las categorias
const CategoryContainer = () => { 

    const [showModal, setShowModal] = useState(false) //Setear el valor para mostrar el modal
    const [categoryType, setCategoryType] =  useState('') //Setear el valor del tipo de categoria


    //Crear funcion para abrir el modal y configurar el tipo de categoria
    const openModal = (type) => {
        setCategoryType(type)
        setShowModal(true)
    }

    //Crear funcion para cerrar el modal
    const closeModal = () => {
        setShowModal(false)
    }


    return (
        
        <div className='categories-container'>

            {/* Ingresos */}

            <div className='container-category-income'>

                <div className='header'>

                    <h2 className='tittle'>Ingresos</h2>

                    <button className='add-category' onClick={() => openModal('income')}>Añadir Categoria</button>

                </div>

                <CategoryIncome /> {/* usar el componente de la lista de categorias de ingresos */}


            </div>

            {/* Gastos */}


            <div className='container-category-expense'>

                <div className='header'>

                    <h2 className='tittle'>Gastos</h2>

                    <button className='add-category' onClick={() => openModal('expense')}>Añadir Categoria</button>

                </div>

                <CategoryExpense /> {/* usar el componente de la lista de categorias de ingresos */}

            </div>

            {/* Mostrar Modal */}


            {showModal && (

                <CategoryModal show={showModal} onClose={closeModal} type={categoryType} /> /* Anadir el prop de la funcion para cerrarlo y anadir el tipo de categoria */

            )}




        </div>
    )
}

export default CategoryContainer //Exportar el contenedor de las categorias