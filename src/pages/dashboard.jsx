//Importar elementos y componentes
import Header from "../components/header" //Importar la el componente de la cabecera
import FinanceResum from "../components/financeResum" //Importar el componente de los resumenes de total de gastos, total de ingresos y balance
import CurrencySelector from "../components/currencySelector" //Importar el componente para ver y seleccionar el cambio de moneda que se usara
import CategoryContainer from "../components/category/categoryContainer" //Importar el componente del contenedor de las categorias

//Crear pagina de dashboard
const Dashboard = () => {

    return (

       <>

        <Header /> {/* Usar el componete de la cabecera */}

        <FinanceResum /> {/* Usar el componente del resumen de finanzas */}

        <CurrencySelector /> {/* Usar el componente para ver y seleccionar el tipo de moneda */}

        {/* Poner los componentes de ver historial de reportes y generador de reportes */}

        <CategoryContainer />

      </>
    )

}

export default Dashboard //Exportar la pagina del dashboard
