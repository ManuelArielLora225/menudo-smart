// Importar elementos 
import CategoryIncome from './categoryIncome' //Importar el componente de categoria de ingresos
import CategoryExpense from './categoryExpense' //Importar el componente de categoria de gastos
import '../../styles/categoryContainerComponent.css'


//Crear Componente donde iran las categorias
const CategoryContainer = () => {


    return (
        
        <div className='categories-container'>

            {/* Ingresos */}

            <div className='container-category-income'>

                <div className='header'>

                    <h2 className='tittle'>Ingresos</h2>

                    <button className='add-category'>Añadir Categoria</button>

                </div>

                <CategoryIncome /> {/* usar el componente de la lista de categorias de ingresos */}


            </div>

            {/* Gastos */}


            <div className='container-category-expense'>

                <div className='header'>

                    <h2 className='tittle'>Gastos</h2>

                    <button className='add-category'>Añadir Categoria</button>

                </div>

                <CategoryExpense /> {/* usar el componente de la lista de categorias de ingresos */}


            </div>

        </div>
    )
}

export default CategoryContainer //Exportar el contenedor de las categorias