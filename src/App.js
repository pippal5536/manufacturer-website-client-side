import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Blog from './Pages/Blog';
import Navbar from './Shared/Navbar';
import Home from './Pages/Home/Home';


function App() {
 
  return (
   <div>
     <Navbar></Navbar>
     <Routes>

       <Route path="/" element={<Home/>}></Route>
       <Route path="/blog" element={<Blog/>}></Route>
     </Routes>
     <ToastContainer />

    </div>
  );
}

export default App;
