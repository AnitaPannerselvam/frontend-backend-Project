import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import SignIn from './SignIn';
import Signup from './components/Signup';
import Home from './components/Home'; 
import About from './components/About'; 
import Contact from './components/Contact'; 
import Tasks from './components/Tasks';
import Admin from './components/Admin';
import AdminPage from './components/AdminPage';
import User from './components/User';
import Settings from './components/Settings';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/adminpage" element={<AdminPage />}/>
        <Route path="/user" element={<User />}/>
        <Route path="/user/settings" element={<Settings />}/>
      </Routes>
    </Router>
  );
};

export default App;
