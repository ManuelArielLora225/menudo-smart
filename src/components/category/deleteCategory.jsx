//Importar elementos
import { useDeleteCategory } from '../../services/categoryService'

//Crear componente del boton para eliminar la categoria
const DeleteCategory = ({ idCategory }) => {

    //Usar la funcion para eliminar las categorias 
    const { deleteCategory, data, error, loading } = useDeleteCategory(idCategory)

    //Hacer el useEfect para llamar la funcion de eliminar \
    const deleted = () => {
            deleteCategory()
    }

    return (

        <p className='buttom-delete' onClick={deleted}>
            {loading ? '⏳' : '🗑️​'}​
        </p>

    )


}

export default DeleteCategory //Exportar el componente del boton para eliminar la categoria
