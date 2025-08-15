//importar elementos de React    
import '../../styles/archivesButomComponet.css' //Importar estilo

//Crear componente botón para ir a la página de los reportes archivados
const ArchivedReports = () => {
    return (
        <button 
            className='archived-reports-btn' >
            <span className='icono'>🗄️</span>
            <span className='titulo'>Archivos</span>
        </button>
    )
}

export default ArchivedReports; //Exportar el componente boton para ir a la pagina de archivados