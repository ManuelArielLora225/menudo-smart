//Impostar elementos
import { useState } from 'react' //Usar el useState de react
import { useAddCategory } from '../../services/categoryService'; //IMportar la funcion para aderir una nueva categoria
import '../../styles/addCategoryModal.css' //importar el estilo del componente

import { useContext } from 'react' //Usar el useContext para usar el contexto del valor de value
import { UpdateContext } from '../../providers/updateProvider' //Importar el provider para actualizar el provider



//Crear componente del modal para agregar nueva categoria, con el parametro para mostrarlo, 
//para cerrarlo y el tipo de categoria a la que se le anadira

const CategoryModal = ({ show, onClose, type }) => {

    const [categoryName, setCategoryName] = useState('') //Delcarar el nombre de la categoria

    const { addCategory, loading, error} = useAddCategory(categoryName, type) //usar el nombre el tipo de categoria correspondiente

    const { value, updatevalue } = useContext(UpdateContext) //Usar la funcion y el valor para actualizar el useEfect


    
    //Guardar la categoria y cerrar el modal y reiniciar el valor 
    const saveCategory = async () => {
        await addCategory();
        setCategoryName('');
        updatevalue();
    }

    return(

        <div className="modal-container">

            <div className="modal-info-container">

                <h3 className='Titulo-modal-addCateogry'>Añadir una nueva categoria</h3>

                <input type="text" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} placeholder='Nombre de la categoria'/>

                    <div className='contenedor-botones'>

                        <button onClick={saveCategory} disabled={loading}> {/* Boton de con la funcionnde guardar y si carga muestra cargando */}
                            {loading ? 'Guardando...' : 'Guardar'}
                        </button>

                        <button onClick={onClose}>Cerrar</button> {/* boton para cerrarlo con la funcion definida en el container*/}
                        
                    </div>

            </div>

            {error && <div className='container-error'><h2>{`Error: ${error}`}</h2></div>}

        </div>
    )

}

export default CategoryModal //Exportar el Modal