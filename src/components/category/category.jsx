//Importar elementos
import { useEffect } from 'react' //Importar el useEfect para renderizar las funciones de llamdas a la api
import { useGetCategoryIncome } from '../../services/categoryService' //Importar la funcion para obtener la categoria de ingresos
import { useGetCategoryExpense } from '../../services/categoryService' //Importar la funcion para obtener la categoria de gastos

import DeleteCategory from './deleteCategory' //Importar componente para eliminar la categoria
import TotalCategory from './getTotalCategory' //Importar el componente para obtener la categoria

//Crear componente de la categoria usando el tipo de categoria que traia el padre como prop
const Category = ({ type }) => {

    //Usar la funcion para obtener la categoria ingresos con alias en las variables para no confundirse
    const { getCategoryIncome, data :dataIncome, error: errorIncome, loading: loadingIncome } = useGetCategoryIncome()

    //Usar la funcion para obtener la categoria ingresos con alias en las variables para no confundirse
    const { getCategoryExpense, data :dataExpense, error: errorExpense, loading: loadingExpense } = useGetCategoryExpense()

   console.log(dataIncome)

    //Hacer la funcion de llamada a la api en useaEffect de los ingresos para que no se renderice junto a la pagina
    useEffect(() => {
        getCategoryIncome()
    }, []) 

    //Hacer la funcion de llamada a la api en useaEffect de los gastos para que no se renderice junto a la pagina
    useEffect(() => {
        getCategoryExpense()
    }, []) 


    return (

        <div className='containter-category'>

            <div className='container-income'>

                {dataIncome && //Mostrando las categorias solo cuando hayan datos

                    dataIncome.map(category => ( //Hacer un map para todas las categorias

                        <div className='container-category-info' key={category.id}>

                            <h2 className='tittle-category'>{category.name}</h2>

                            <TotalCategory idCategory={category.id} /> {/* LLamar al componente de categorias con el categoryId */}

                            <DeleteCategory  idCategory={category.id}/> {/* LLamar al componente de boton eliminar categorias con el categoryId */}

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

            </div>


        
            <div className='container-income'>

                {dataExpense && //Mostrando las categorias solo cuando hayan datos

                    dataExpense.map(category => ( //Hacer un map para todas las categorias

                        <div className='container-category-info' key={category.id}>

                            <h2 className='tittle-category'>{category.name}</h2>

                            <TotalCategory idCategory={category.id} /> {/* LLamar al componente de categorias con el categoryId */}

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
                        
                        <h1 className='loading-titlle'>{`Error: ${dataExpense}`}</h1>
                        
                    </div>
                }

            </div>

        </div>

    )

}

export default Category //Exportar el componente de category