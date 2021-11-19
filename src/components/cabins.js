import React, {useEffect, useState, useRef} from 'react';
import axios from 'axios';
import LogoutBtn from './logoutBtn';
function Login(props) {

  const buff = new Buffer(props.jwt.split(".")[1], 'base64');
  const jwt = buff.toString('ascii');
  const [cabins,setCabins] = useState()


  useEffect(()=> {
    const jwtString = 'Authorization: Bearer ' + props.jwt  
    const config = {
            headers: {
              "Content-Type": "application/json",
              'Access-Control-Allow-Origin': '*',
              'Authorization' : "Bearer " +  props.jwt 
              }
            }
    axios.get(props.baseUrl + "/cabins/", config).then(res=>setCabins(res))
  },[])

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
