import React, {useEffect, useState, useRef} from 'react';
import axios from 'axios';
function LogoutBtn(props) {
  return (
    <div className="LogoutBtn">
        <button onClick={()=> props.setJwt("")}>Logga ut</button>
    </div>
  );
}

export default LogoutBtn;
