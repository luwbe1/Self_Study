import React from 'react';
import SignUp from './SignUp.js';
import Login from './Login.js';
import Noticeboard from './Noticeboard.js'


class App extends React.Component {
  render() {
    return (
      <div>
        <SignUp />
        <Login />
        <Noticeboard />
      </div>
    );
  }
}



export default App;