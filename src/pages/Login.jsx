//Importar elementos
import { GoogleLogin } from "@react-oauth/google"; //Usar el componente de react de autenticacion de google
import { useAuthService } from "../services/authService"; //Usar la llamada de la api de autenticacion de usuario
import { useNavigate } from "react-router-dom"; //Usar un useNavigate que es para redireccionar a otra pagina
import Header from "../components/header"; //Usar la cabecera de la app
import '../styles/loginPage.css' //Importar el estilo de la pagina de login

const LoginPage = () => { //Hace la pagina de Login

    //Importar las variables del useAthService y la funcion de logearse con google con la solicitud
    const { loginWhithGoogle, data, error, loading } = useAuthService();
    
    const navigate = useNavigate() //crear una funcion del useNavigate para redireccionar a otra pagina cuando pase algo

    const loginSucces = async (credentialResponse) => { //crear la funcion para el boton de loguearse tomando la credencial de google como parametro

       const idToken = credentialResponse.credential //Extraer el idToken de la credencial de google
       const res = await loginWhithGoogle(idToken) //Ejecutar la funcion de loguearse con google con la credencial que da google y decodificarlo

       localStorage.setItem("token", res.token) //Guardar el token en la memoria local para reutilizarlo

       navigate('/dashboard') //LLevar a la pagina del dashboard una vez se inicie la sesion
    
    }

     return (

    
            
        <div className="login-whit-google">
            
        <Header /> {/* Usar la cabecera */}

            <div className="login-whit-google">

                <div className="login-card">

                    <h1 className="login-title">¡Bienvenido!</h1>
                    <p className="login-subtitle">Inicia sesión para acceder a Menudo Smart</p>

                    <div className="google-login-container">

                        {/* Usar el componente de google de cuando sea exitoso se ejecute el login de google */}
                        <GoogleLogin onSuccess={loginSucces} onError={() => console.log('Error')} />

                    </div>
                            
                    {/* Mostrar cargando cuando este cargando */}
                    {loading && <p className="loading">Cargando...</p>}

                    {/* Mostrar error cuando de error */}
                    {error && <p className="error">Error: {error}</p>}

                </div>
                        
            </div>

        </div>


        )

}

export default LoginPage  //Exportar la pagina de login con google