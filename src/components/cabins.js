import React, {useEffect, useState, useRef} from 'react';
import LogoutBtn from './logoutBtn';
function Login(props) {
  return (
      <>
    <div className="CabinsPage">
        
    </div>
    <LogoutBtn setJwt={props.setJwt}></LogoutBtn>
    </>
  );
}

export default Login;
