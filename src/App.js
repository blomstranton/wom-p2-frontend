import React, {useEffect, useState} from 'react';
import Login from './components/login';
import './App.css';

function App() {
  const baseURL = "https://node-backend-blomstra.herokuapp.com"
  const [jwt, setJwt] = useState()

  return (
    <div className="App">
      <header className="App-header">
        <h1>
         Bookings Program
        </h1>
        <Login baseURL={baseURL}></Login>
      </header>
    </div>
  );
}

export default App;
