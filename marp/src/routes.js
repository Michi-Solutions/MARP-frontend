import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './screens/Login';
import Register from './screens/Register';

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/register' element={<Register/>} />
      </Routes>
    </BrowserRouter>
  );
}
 
export default Rotas;