import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from './../../Hooks/useAdmin';
import Footer from './../../Shared/Footer';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile ">
            <input id="sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                {/* Main Body */}
                <Outlet></Outlet>
            </div>
            <div className="drawer-side ">
                <label htmlFor="sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48  text-base-content bg-base-100 dark:bg-gray-800 dark:text-white shadow">
                    {/* <!-- Sidebar content here --> */}
                    {
                      !admin&&  <>
                          <li><Link className=' hover:bg-gray-200 hover:text-black dark:hover:text-black ' to="/dashboard">My Orders</Link></li>
                    <li><Link className=' hover:bg-gray-200 hover:text-black dark:hover:text-black ' to="/dashboard/review">Add A review</Link></li>
                        </>
                    }
                    <li><Link className=' hover:bg-gray-200 hover:text-black dark:hover:text-black ' to="/dashboard/myprofile">My Profile</Link></li>
                    {admin && <>
                        <li><Link to="/dashboard/manageorder">Manage All Orders</Link></li>
                        <li><Link to="/dashboard">Add A Tool</Link></li>
                        <li><Link to="/dashboard/makeadmin">Make Admin</Link></li>
                        <li><Link to="/dashboard/manageproduct">Manage Products</Link></li>
                    </>}
                </ul>
            </div>
            
        </div>
    );
};

export default Dashboard;