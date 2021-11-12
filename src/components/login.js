import React, {useEffect, useState, useRef} from 'react';
import axios from 'axios';
function Login(props) {
    
    const emailInput = useRef("")
    const passwordInput = useRef("")

    const login = async() => {
        const config = {
            headers: {
              "Content-Type": "application/json",
              'Access-Control-Allow-Origin': '*',
              }
            }
        const body = {
            "email": emailInput.current.value,
            "password": passwordInput.current.value
          }
          console.log(body)
        axios.post(props.baseURL + "/users/login/", body, config)
          .then(function (response) {
            console.log(response);
            props.setJwt(response.data["token"])
          })
          .catch(function (error) {
            console.log(error);
          });
    }

  return (
    <div className="LoginPage">
        <label>Email</label>
        <input ref={emailInput} typeof="email"></input>
        <br/>
        <label>Lösenord</label>
        <input ref={passwordInput} type="password"></input>
        <br/>
        <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
