//Importar elementos
import { useEffect, useState } from "react"; //Usar el useState de react
import { useGetCurrecy } from "../services/dashboardService"; //Funcion para obtener el valor de la moneda por defecto del usuario
import { useChangeCurrency } from "../services/dashboardService"; //Funcion para cambiar el valor de la moneda por defecto del usuario
import { currencies } from "../utils/currencies"; //Importar el objeto con todos los tipos de monedas
import '../../src/styles/currencySelectorComponet.css' //Importar sus estilos de la hoja css

const CurrencySelector = () => {

    const { getCurrency, data, loading } = useGetCurrecy(); //Usar la funcion para obtener la moneda por defecto del usuario

    const [selectedCurrency, setSelectedCurrency] = useState("") //setear el valor state nulo para la la moneda seleccionada

    //Obtener la moneda inicial
    useEffect(() => {
        getCurrency();
    },[])

    //Setear la moneda cuando se obtenga la data 
    useEffect(() => {
        if(data?.default_currency) {
            setSelectedCurrency(data.default_currency)
        }
    }, [data]) //cambiar el valor de la moneda por defecto cada que la data de la moneda por defecto se actualice


    // Preparar la funcion hook de cambio de moneda con otro alias para no confundirse
    const { changeCurrency: sendCurrencyChange } = useChangeCurrency(selectedCurrency)

    //Enviar el cambio a la base de datos usando la funcion de cambio de moneda
    useEffect(() => {
        if(selectedCurrency) sendCurrencyChange();
    }, [selectedCurrency]) //Se ejecute cada que cambie el valor de la moneda

    const handleCurrencyChange = (e) => {
        e.preventDefault();
        setSelectedCurrency(e.target.value)
    }


    return (

        <div className="change-currency-general-container">

            <p className="tittle-currency">Moneda</p> 

            <div className="change-currency-container">

                 <select id="currency" value={selectedCurrency} onChange={handleCurrencyChange}> {/* Crear el select del currency con el valor de la moneda seleccionada por defecto y cada que cambie usar la funcion para cambiar ese valor */}

                    {currencies.map((currency) => ( /* Hacer un map al objeto con todos los currency */

                    <option key={currency.code} value={currency.code}>  {/* Crear las opciones con el valor del codigo de moneda y que aparesca el codigo de la moneda y el nombre  */}
                        {`${currency.code} - ${currency.name}`}
                    </option>

                    ))}

                </select>

            </div>

        </div>

    )


}


export default CurrencySelector //Exportar el componente de selector de moneda

