//Importar pantallas o elementos
import { Routes, Route } from 'react-router-dom' //Importar los routes y los route para asignar las rutas desde la app
import  { UpdateProvider }  from './providers/updateProvider' //Importar el provider para usar en todo el programa

import Login from '../src/pages/Login' //Importar la pagina de login 
import Dashboard from './pages/dashboard'; //Importar la pagina del Dashboard

function App() {

  return (

    <div className="App">

    <UpdateProvider>

        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />

        </Routes>

    </UpdateProvider>

    </div>

  );
  
}

export default App;
