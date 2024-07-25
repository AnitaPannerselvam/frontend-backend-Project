
import React, { useRef } from 'react';
import { Box, Typography } from '@mui/material';


function Login() {
  const name = useRef(null);
  const password = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name.current.value);
    console.log(password.current.value);
    if (name.current.value && password.current.value) {
      console.log(name.current.value);
      console.log(password.current.value);
    } else {
      if(name.current.value && !password.current.value){
        setError((prev)=>{
          return{...prev,name:true,password:false};
        })
      }else if(name,current.value ){
        setError((prev)=>{
          return{...prev,name:true,};
        })
      }else if(!password.current.value){
        setError((prev)=>{
          return{...prev,password:false};
        })
      }
    }
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor="name">Username:</label>
        <input ref={name} type="text" id="name" name="name" autoComplete="username" required />
        <Typography color={"red"} fontSize={"10px"}>
          Fill the name
        </Typography>
        <br /><br />
        <label htmlFor="password">Password:</label>
        <input ref={password} type="password" id="password" name="password" autoComplete="current-password" required />
        <Typography color={"red"} fontSize={"10px"}>
          Fill the password
        </Typography>
        <br />
        <button type="submit">Login</button>
      </form>
    </Box>
  );
}
 
export default Login;                        
