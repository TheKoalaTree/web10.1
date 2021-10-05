import React from 'react';
import './CSS/App.css';
import Greeting from './Greeting';
import Login from './Login'
const isLoggedin = false
const time = new Date().getHours()

function App() {
  return (
    <div className="App">
    {
      isLoggedin === false && time > 18 && time <24 ? <Greeting text= "Good night"/> : <Login />
    }
    </div>
  );
}

export default App;
