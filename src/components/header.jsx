//Importar la imagen del icono
import logo from '../assets/icono.png'
import '../styles/headerComponet.css'//importar el css del componente

//Crear la cabecera para la app y tenerla en todas las paginas
const Header = () => {

    return (

      <div className="header-container">
  
      <img src={logo} className='imagen logo' /> {/* Usar imagen de icono */}

      <h1 className='titulo-aplicacion'>Menudo Smart</h1> {/* Escribir el titulo */}

      </div>
    )
}

export default Header //Exportar la cabecera