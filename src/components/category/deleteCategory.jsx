//Importar elementos
import { useDeleteCategory } from '../../services/categoryService' //Usar el service para eliminar la categoria


//Crear componente del boton para eliminar la categoria
const DeleteCategory = ({ idCategory }) => {

    //Usar la funcion para eliminar las categorias 
    const { deleteCategory, data, error, loading } = useDeleteCategory(idCategory)

    //Hacer el useEfect para llamar la funcion de eliminar \
    const deleted = () => {

        //Hacer confirmacion para eliminar la categoria
        const confirm = window.confirm('Seguro de que quieres eliminar la categoria?')

        //Hacer un if si se confirma se elimina y si no. no.
        if(confirm){
            alert('Categoria eliminada')
            deleteCategory()
        } else {
            return;
        }

    }

    return (

        <p className='buttom-delete' onClick={deleted}>
            {loading ? '⏳' : '🗑️​'}​
        </p>

    )


}

export default DeleteCategory //Exportar el componente del boton para eliminar la categoria
