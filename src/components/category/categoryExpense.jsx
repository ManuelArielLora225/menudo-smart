//Importar elementos
import { useEffect } from 'react' //Importar el useEfect para renderizar las funciones de llamdas a la api
import { useGetCategoryExpense } from '../../services/categoryService' //Importar la funcion para obtener la categoria de gastos
import '../../styles/categoryPrevew.css' //Importar el estilo 


import DeleteCategory from './deleteCategory' //Importar componente para eliminar la categoria

//Crear componente de la categoria de gastos
const CategoryExpense = () => {

    //Usar la funcion para obtener la categoria ingresos con alias en las variables 
    const { getCategoryExpense, data :dataExpense, error: errorExpense, loading: loadingExpense } = useGetCategoryExpense()

    //Hacer la funcion de llamada a la api en useaEffect de los gastos para que no se renderice junto a la pagina
    useEffect(() => {
        getCategoryExpense()
    }, []) 

   //Pendiente a sacar el total de transacciones
    const categoryTotal = '0'

    return (

        
            <div className='container'>

                {dataExpense && //Mostrando las categorias solo cuando hayan datos

                    dataExpense.map(category => ( //Hacer un map para todas las categorias

                        <div className='container-category-info' key={category.id}>

                            <h2 className='tittle-category'>{category.name}</h2>

                            <h2 className='total-category'>{categoryTotal}</h2> {/* Mostrar el total de las transacciones de la categoria */}

                            <DeleteCategory  idCategory={category.id}/> {/* LLamar al componente de boton eliminar categorias con el categoryId */}

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

            </div>


    )

}

export default CategoryExpense //Exportar el componente de category