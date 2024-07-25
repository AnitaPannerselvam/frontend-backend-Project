import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login/>} />
     <Route path='/registration' element={<Register/>} />
    </Routes>
  )
}

export default App;                                                                
