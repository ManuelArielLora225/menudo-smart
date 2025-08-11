//Importar elementos
import { useEffect } from 'react' //Importar el useEfect para renderizar las funciones de llamdas a la api
import { useGetCategoryIncome } from '../../services/categoryService' //Importar la funcion para obtener la categoria de ingresos
import '../../styles/categoryPrevew.css' //Importar el estilo 

import DeleteCategory from './deleteCategory' //Importar componente para eliminar la categoria
/* import TotalCategory from './getTotalCategory' //Importar el componente para obtener la categoria
 */
//Crear componente de la categoria usando el tipo de categoria que traia el padre como prop
const CategoryIncome = () => {

    //Usar la funcion para obtener la categoria ingresos con alias en las variables para no confundirse
    const { getCategoryIncome, data :dataIncome, error: errorIncome, loading: loadingIncome } = useGetCategoryIncome()

    //Hacer la funcion de llamada a la api en useaEffect de los ingresos para que no se renderice junto a la pagina
    useEffect(() => {
        getCategoryIncome()
    }, []) 


   //Pendiente a sacar el total de transacciones
    const categoryTotal = '0'


    return (

            <div className='container'>

                {dataIncome && //Mostrando las categorias solo cuando hayan datos

                    dataIncome.map(category => ( //Hacer un map para todas las categorias

                        <div className='container-category-info' key={category.id}>

                            <h2 className='tittle-category'>{category.name}</h2>

                            <h2 className='total-category'>{categoryTotal}</h2> {/* Mostrar el total de las transacciones de la categoria */}

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


    )

}

export default CategoryIncome //Exportar el componente de category