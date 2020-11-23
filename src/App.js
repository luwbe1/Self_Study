import React from 'react';
import { Route } from 'react-router-dom';
import Login from './Login';
import Noticeboard from './Noticeboard';
import Navbar from './Navbar';
import SignUp from './SignUp';
import Home from './Home';

const App = () => {
    return (
      <div>
      <Navbar />
        <Route component={Home} path="/" exact />
        <Route component={Login} path="/login" />
        <Route component={SignUp} path="/signup" />
        <Route component={Noticeboard} path="/noticeboard" />
      </div>
    );
  };
  
  export default App;