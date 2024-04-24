import React, { useState,useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes ,Navigate} from 'react-router-dom';
import { Login, Register } from './Components/Login&Register/Login&Register';
import Home from './Components/Login&Register/Home-Screen';
import HomePage from './Components/Home/Home/Home';

const App:React.FC=()=> {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const userLoggedIn = localStorage.getItem('userData') !== null;
    setLoggedIn(userLoggedIn);
  }, []);
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/login' Component={Login}/>
        <Route path='/register' Component={Register}/>
        <Route path='/home' element={loggedIn ? <HomePage /> : <Navigate to="/login" />}/>
      </Routes>
    </Router>
  );
}

export default App;
