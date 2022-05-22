import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Pages/Blog';
import Navbar from './Shared/Navbar';


function App() {
 
  return (
   <div>
     <Navbar></Navbar>
     <Routes>
       <Route path="/blog" element={<Blog/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
