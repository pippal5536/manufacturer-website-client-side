import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Blog from './Pages/Blog';
import Navbar from './Shared/Navbar';
import Home from './Pages/Home/Home';




function App() {
  const [darkMode, setDarkMode] = useState(false);  

  return (
    <div className={  `font-mono ${ darkMode && "dark" }`} >
     
       
      <div className='text-black  dark:bg-gray-900 dark:text-white '>
        
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} ></Navbar>

        <Routes>

          <Route path="/home" element={<Home darkMode={darkMode} setDarkMode={setDarkMode} ></Home>}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          
          
        </Routes>
        <ToastContainer />
      </div>

    </div>
  );
}

export default App;
