//Importar elementos
import ReactDOM from 'react-dom'; // Usar ReactDOM para renderizar el modal fuera del árbol principal (Portal)
import { useContext } from 'react'; //Usar el useContext para usar el contexto del valor de value
import { UpdateContext } from '../../providers/updateProvider'; //Importar el provider para actualizar el provider 
import { useGenerateReport } from '../../services/reportService'; //Importar la función para generar reportes  
import '../../styles/generateReportModal.css' //Importar estilos


//Crear componente modal para ver si se debe empezar el periodo
const GenerateReportModal = ({ show, onClose }) => {
  
    const { generateReport, data, error, loading } = useGenerateReport(); //Extraer los datos para usar la función de generar reporte      
    const { updatevalue } = useContext(UpdateContext); //Usar la función para actualizar los useEffect       

    const generate = async() => {

        await generateReport();
        updatevalue(); //Actualizar el value al ejecutar    
        onClose(); //Cerrar el modal al terminar       
        
    }

// Usar React Portal para renderizar el modal directamente en el <body>,
  // asegurando que el fondo cubra toda la pantalla y no dependa del contenedor padre
  return ReactDOM.createPortal(

    <div className="modal-container">

      <div className="modal-info-container">

        <h2 className='Titulo-modal-GenrateReport'>¿Estás seguro de que quieres finalizar este periodo?</h2>

        <p className='descripcion-Modal'>Esta acción guardará los datos del periodo actual como un archivo y reiniciará el tablero para el próximo. Esta acción no se puede deshacer.</p>

        <div className='contenedor-botones'>

            <button onClick={generate} disabled={loading}> {/* Boton de con la funcionnde guardar y si carga muestra cargando */}
                {loading ? 'Guardando....' : 'Si, Finalizar'}
            </button>

         <button className='cancel-butom' onClick={onClose}>Cancelar</button>

        </div>

        {error && <div className='container-error'><h2>{`Error: ${error}`}</h2></div>}

      </div>
    </div>, //Importante la coma
    document.body //Montar el modal directamente en el body
  )
}

export default GenerateReportModal //Exportar el GenerateReportModal
