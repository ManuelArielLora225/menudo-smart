//Importar elementos
import { useContext } from 'react' //Usar el useContext de ract para el contexto de actualizar los useEffects
import { useDeleteCategory } from '../../services/categoryService' // Hook para eliminar categoría
import { UpdateContext } from '../../providers/updateProvider' // Contexto para actualizar
import '../../styles/deleteCategoryModal.css'

//Crear componente del modal para= eliminar categoria, con el parametro para mostrarlo, 
//para cerrarlo y el id de categoria de categoria a la que se le anadira
const DeleteCategoryModal = ({ show, onClose, idCategory }) => {
  
  const { deleteCategory, loading, error } = useDeleteCategory(idCategory) //Usar funcion para eliminar la categoria
  const { updatevalue } = useContext(UpdateContext) //USar funcion para cambiar el valor del provider


  //Funcion para eliminar la categoria
  const handleDelete = async () => {

        await deleteCategory();
        updatevalue();

  }


  return (
    <div className="modal-container">

      <div className="modal-info-container">

        <h2 className='Titulo-modal-addCateogry'>¿Estás seguro de que deseas eliminar esta categoría?</h2>

        <div className='contenedor-botones'>

            <button onClick={handleDelete} disabled={loading}> {/* Boton de con la funcionnde guardar y si carga muestra cargando */}
                {loading ? 'Eliminando...' : 'Eliminar'}
            </button>

         <button className='cancel-butom' onClick={onClose}>Cancelar</button>

        </div>

        {error && <div className='container-error'><h2>{`Error: ${error}`}</h2></div>}

      </div>
    </div>
  )
}

export default DeleteCategoryModal //Exportar el deleteCategoruModal
