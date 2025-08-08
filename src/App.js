//Importar pantallas o elementos
import { Routes, Route } from 'react-router-dom' //Importar los routes y los route para asignar las rutas desde la app

import Login from '../src/pages/Login' //Importar la pagina de login 
import Dashboard from './pages/dashboard'; //Importar la pagina del Dashboard

function App() {

  return (

    <div className="App">

      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>


    </div>

  );
  
}

export default App;
