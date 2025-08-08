// Importar elementos 
import Category from './category' //Importar el componente con las categorias


//Crear Componente donde iran las categorias
const CategoryContainer = () => {

     const income = 'income' //Variable con valor de income o ingreso
     const expense = 'expense' //Variable con valor expense o gasto

    return (
        /* Contenedor de ingresos */

    <div className="category-container-container">

        <div className="categories-container">

            <div className="tittles-container">

                <h1 className="titlle">Ingresos</h1>

                {/* Poner componente para anadir categorias */}

                <Category type={income} /> {/* Poner categorias de ingresos */}

            </div>
    </div>

        {/* Contenedor de gastos */}

    <div className="category-container-container">


            <div className="tittles-container">

                <h1 className="titlle">Gastos</h1>

                {/* Poner componente para anadir categorias */}

                <Category type={expense} /> {/* Poner categorias de gastos */}


            </div>

        </div>

     </div>
    )
}

export default CategoryContainer //Exportar el contenedor de las categorias