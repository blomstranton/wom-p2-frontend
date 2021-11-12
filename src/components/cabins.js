import React, {useEffect, useState, useRef} from 'react';
import LogoutBtn from './logoutBtn';
function Login(props) {

  const buff = new Buffer(props.jwt.split(".")[1], 'base64');
  const jwt = buff.toString('ascii');

  return (
      <>
    <div className="CabinsPage">
        
    </div>
    <p>
      {jwt}
    </p>
    <LogoutBtn setJwt={props.setJwt}></LogoutBtn>
    </>
  );
}

export default Login;
