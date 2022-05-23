import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Blog from './Pages/Blog';
import Navbar from './Shared/Navbar';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Portfolio from './Pages/Portfolio/Portfolio';
import Register from './Pages/Login/Register';
import Dashboard from './Pages/Dashboard/Dashboard';




function App() {
  const [darkMode, setDarkMode] = useState(false);  

  return (
    <div className={  `font-mono bg-base-300 ${ darkMode && "dark" }`} >
     
       
      <div className=' dark:bg-gray-900 dark:text-white '>
        
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} ></Navbar>

        <Routes>

          <Route path="/" element={<Home darkMode={darkMode} setDarkMode={setDarkMode} ></Home>}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          
          
        </Routes>
        <ToastContainer />
      </div>

    </div>
  );
}

export default App;
