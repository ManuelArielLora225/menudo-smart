import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//Importar el googleAuthProvider en toda la app para que lo reconoscan todos los componetes y paginas
import { GoogleOAuthProvider } from '@react-oauth/google';
//Importar el react router para poder usar las rutas
import { BrowserRouter } from 'react-router-dom' 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter> {/* Enbolver todo en el browser router para que funcione en todas las paginas */}

    {/* Usar el provider de google con mi clienteId */}
    <GoogleOAuthProvider clientId='541388453636-rdle0ibdnie5h0matdf02nhqjhapf6mk.apps.googleusercontent.com'>
  
      <React.StrictMode>
        <App />
      </React.StrictMode>
      
    </GoogleOAuthProvider>

  </BrowserRouter>
);

