import React from 'react';
import './App.scss';
import LoginFrom from './components/LoginForm';
import RegistrationFrom from './components/RegistrationForm';

const App = () =>(
  <div className="App">
    <h1>Ready for a great User experience?</h1>
    <p>Bring your media to the next level!</p>

    <RegistrationFrom />
    <br />
    <LoginFrom />
  </div>
);

export default App;
