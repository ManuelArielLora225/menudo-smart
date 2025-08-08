
//Importar elementos
import '../../styles/cardComponent.css' //IMportar el estilo de las cartas


//Hacer el componente de cards que servira para contenedores tipo cartas para no repetir en el financeResum
//POner tipo para cambiar el color de los valores segun sea positivo negatico o neutral

const Cards = ({tittle, value, type = "negative", currency}) => {

    const getCardClass = () => { //Funcion para cambiar el estilo segun el tipo
        switch(type) {
            case "positive":
                return "card-container positive"
            case "neutral":
                return "card-container neutral"
            default:
                return "card-container" //por defecto rojo
        }
    }

    return (

        <div className={getCardClass()}> {/* Adaptar el estilo segun el tipo */}

           <h3 className="tittle">{tittle}</h3>

           <div className="value-container">

             <h1 className="value">{value}</h1>
             <snap className="currency">{currency}</snap>

           </div>
           

        </div>
    )

    
}

export default Cards //Exportar el componente 