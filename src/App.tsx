import { FC } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import LoginComponent from './modules/login/login';

const App: FC = () => {
  return (
        <Route path="/login" >
        <LoginComponent/>
        </Route>

  );
}

export default App;
