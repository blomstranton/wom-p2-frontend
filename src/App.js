import React, {useEffect, useState} from 'react';
import Login from './components/login';
import Cabins from './components/cabins'
import './App.css';

function App() {
  const baseURL = "https://node-backend-blomstra.herokuapp.com"
  const [jwt, setJwt] = useState("")

  return (
    <div className="App">
      <header className="App-header">
        <h1>
         Bookings Program
        </h1>
        {
          jwt == "" ? <Login baseURL={baseURL} setJwt={setJwt}></Login> : <Cabins jwt={jwt} setJwt={setJwt}></Cabins>
        }
        
      </header>
    </div>
  );
}

export default App;
