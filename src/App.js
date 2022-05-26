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
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import RequireAuth from './Pages/Login/RequireAuth';
import Purchase from './Pages/Purchase/Purchase';
import Payment from './Pages/Dashboard/Payment';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';
import AddProduct from './Pages/Dashboard/AddProduct';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import RequireAdmin from './Pages/Login/RequireAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import useAdmin from './Hooks/useAdmin';
import Error from './Pages/Error';
import Footer from './Shared/Footer';




function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div className={`font-mono bg-base-300 ${darkMode && "dark"}`} >
      <div className=' dark:bg-gray-900 dark:text-white '>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} ></Navbar>
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} setDarkMode={setDarkMode} ></Home>}>
          </Route>
          <Route path="/purchase/:purchaseId" element={<RequireAuth><Purchase /></RequireAuth>}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}>
            {!admin ? <Route index element={<MyOrders></MyOrders>}></Route> : <Route index element={<RequireAdmin><AddProduct /></RequireAdmin>}></Route>
            }            <Route path="review" element={<AddReview></AddReview>}></Route>
            <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>
            <Route path="payment/:id" element={<Payment></Payment>}></Route>
            <Route path="manageorder" element={<RequireAdmin><ManageAllOrders /></RequireAdmin>}></Route>
            <Route path="makeadmin" element={<RequireAdmin><MakeAdmin /></RequireAdmin>}></Route>
            <Route path="manageproduct" element={<RequireAdmin><ManageProducts /></RequireAdmin>}></Route>
          </Route>
          <Route path="*" element={<Error/>}></Route>
        </Routes>
        <ToastContainer />
        <Footer></Footer>
      </div>
     
    </div>
  );
}

export default App;
