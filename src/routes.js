import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './screens/Login';
import Register from './screens/Register';
import ResetPassword from './screens/ResetPassword';
import ResetPasswordToken from './screens/ResetPasswordToken';

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/register' element={<Register/>} />
        <Route exact path='/resetpassword' element={<ResetPassword/>} />
        <Route exact path='/resetpasswordtoken' element={<ResetPasswordToken/>} />
      </Routes>
    </BrowserRouter>
  );
}
 
export default Rotas;