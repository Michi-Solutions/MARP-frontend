import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './screens/Login';
import Register from './screens/Register';
import ResetPassword from './screens/ResetPassword';
import ResetPasswordToken from './screens/ResetPasswordToken';

function App() {
  return (
    <>
      <BrowserRouter>
          <Switch>
            <Route path='/user/login' component={Login} />
            <Route path='/user/register' component={Register} />
            <Route path='/user/resetpassword' component={ResetPassword} />
            <Route path="/user/resetpasswordtoken/:token" component={ResetPasswordToken}/>
          </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
