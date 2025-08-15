//Importar Elementos
import GenerateReports from "./reports/generateReports"; //Importar boton para Generar los reportes
import ArchivedReports from './reports/archives'; //Importar el boton para ver los archivados
import '../styles/reportsButtonsContainer.css'; //Importar estilos

const ReportsButomsContainer = () => {


    return (
        <div className="container">

            
                <ArchivedReports  />

            
                <GenerateReports />

        </div>
    )
}

export default ReportsButomsContainer; //Exportar el contenedor con los botones