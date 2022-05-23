import React from 'react';
import { Link } from 'react-router-dom';
import { SunIcon, MoonIcon, MenuAlt4Icon } from '@heroicons/react/solid';
import auth from './../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import gear from '../Assets/Images/title-image.png'
import { BsLayoutTextSidebar } from 'react-icons/bs'



const Navbar = ({ darkMode, setDarkMode }) => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);

    };
    const menuItems = <>
        <li><Link className=' hover:bg-gray-200 hover:text-black dark:hover:text-black ' to="/" >Home</Link></li>
        {
            user && <li><Link className=' hover:bg-gray-200 hover:text-black dark:hover:text-black ' to="/dashboard">Dashboard</Link></li>
        }
        <li><Link className=' hover:bg-gray-200 hover:text-black dark:hover:text-black ' to="/blog">Blog</Link></li>
        <li><Link className=' hover:bg-gray-200 hover:text-black dark:hover:text-black ' to="/portfolio">My Portfolio</Link></li>

        <li>{user ? <button className=' hover:bg-gray-200 hover:text-black dark:hover:text-black ' onClick={logout} >Log Out</button> : <Link className=' hover:bg-gray-200 hover:text-black dark:hover:text-black ' to="/login">Login</Link>}</li>
        <li>{user ? <p>{user?.displayName}</p> : ""}</li>


        <label className="swap swap-rotate">

            {
                darkMode ? <> <input type="checkbox" onClick={() => setDarkMode(!darkMode)} /><SunIcon className='swap-off h-5 w-5' ></SunIcon>
                    <MoonIcon className='swap-on h-5 w-5'></MoonIcon></>
                    : <><input type="checkbox" onClick={() => setDarkMode(!darkMode)} /><SunIcon className='swap-on h-5 w-5' ></SunIcon>
                        <MoonIcon className='swap-off h-5 w-5'></MoonIcon></>
            }
        </label>

    </>

    return (
        <div className="navbar bg-base-100 dark:bg-gray-800 shadow">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <MenuAlt4Icon className='h-5 w-5'></MenuAlt4Icon>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact  dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 dark:bg-gray-800 dark:text-white">
                        {menuItems}
                    </ul>

                </div>
                <div className='flex flex-row items-center justify-center hover:bg-gray-200 hover:text-black dark:hover:text-black text-xl rounded p-2'>
                    <figure>
                        <img className='w-[20px] h-[20px] cursor-pointer' src={gear} alt="gear" />
                    </figure>
                    <Link to="/">Tool World</Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>

            <div className="navbar-end">
                <label tabIndex="1" htmlFor="sidebar" className="btn btn-ghost lg:hidden swap ">
              <BsLayoutTextSidebar></BsLayoutTextSidebar>
            
               
                </label>
                
            </div>

        </div>
    );
};

export default Navbar;