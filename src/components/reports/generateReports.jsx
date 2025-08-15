//Importar elementos
import { useState } from 'react'; //Usar el useState
import '../../styles/generateReports.css'  //Importar los estilos 
import GenerateReportModal from '../modals/generateReportModal'; //IMportar el modal para confirmar la generacion de reportes

//Crear componente de botón para generar reportes
const GenerateReports = () => {

    const [showModal, setShowModal] = useState(false)
    
    const openModal = () => {
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }
    

    return (

      <div className='buton-container'> 

        <button className='generate-reports-btn' onClick={openModal}>

            <span className='icono'>🗃️</span>

            <span className='titulo'>Finalizar Periodo</span>

        </button>

        {showModal && (

            <GenerateReportModal onClose={closeModal}/>

        )}

      </div> 
    )
}

export default GenerateReports; //Exportar el botón de generador de reportes