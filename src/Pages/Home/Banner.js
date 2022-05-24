import React from 'react';
import { Link } from 'react-router-dom';
import auth from './../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import toolsPic from "../../Assets/Images/tools-login.png"


const Banner = () => {
    const [user, loading] = useAuthState(auth); 
    return (
        <div className='mx-12 mt-6 card shadow min-h-screen bg-base-100 flex justify-center items-center dark:bg-gray-800 dark:text-white'>
            <div className="hero  bg-base-100  dark:bg-gray-800 dark:text-white">
                
                <div className="hero-content   flex-col lg:flex-row-reverse p-8 " >
                <img src={toolsPic} className=" h-[20rem] w-full rounded-lg shadow-2xl " />
                    <div className="max-w-md mr-[8rem] text-left">
                        <h1 className="text-5xl font-bold   ">Welcome To Tool World!</h1>
                        <p className="py-6 ">Here you can buy tools like hammer, drill machine, screw driver , wrench etc. </p>
                       {
                           user?<Link className=" btn   bg-gradient-to-r from-gray-500 hover:to-black " to="/dashboard">Get Started</Link>: <Link to="/login" className=" btn   bg-gradient-to-r from-gray-500 hover:to-black ">Get Started</Link>
                       }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;