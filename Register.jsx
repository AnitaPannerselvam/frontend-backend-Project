import React, { useRef } from 'react';
import { Box, Typography } from '@mui/material';

function Register() {
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name.current.value);
    console.log(email.current.value);
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
      if(name.current.value && password.current.value && confirmpassword.current.value && email.current.value && phonenumber.current.value){
        if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.current.value)){
            setError((prev)=>{
                return{...prev,name:false,password:false,confirmpassword:false,email:true,phonenumber:false}
            })
        }
        else{

            console.log(name.current.value)
            console.log(email.current.value)
            console.log(password.current.value)
}
}
    }
  };

  return (
    <Box component="form"
    sx={{
 '&>:not(style)':{m:1,width:'25ch'},
   display:"flex",
   justifyContent:"center",
   alignItems:"center",
   flexDirection:"column",
   width:'100%',
   height:'100vh'
    }}  onSubmit={handleSubmit}>
        <h2>Register</h2>
        <label htmlFor="name">Username:</label>
        <input ref={name} type="text" id="name" name="name" autoComplete="username" required />
        <Typography color={"red"} fontSize={"10px"}>
          Fill the name
        </Typography>
        <br /><br />
        <label htmlFor="email">Email:</label>
        <input ref={email} type="text" id="name" name="name" autoComplete="email" required/>
        <Typography color={"red"} fontSize={"10px"}>
            Fill the emailid
        </Typography>
        <br></br>
        <label htmlFor="password">Password:</label>
        <input ref={password} type="password" id="password" name="password" autoComplete="current-password" required />
        <Typography color={"red"} fontSize={"10px"}>
          Fill the password
        </Typography>
        <br />
        <button type="submit">Register</button>
    </Box>
  );
}

export default Register;