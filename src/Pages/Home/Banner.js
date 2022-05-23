import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from "../../Assets/Images/banner-image.jpg"

const Banner = () => {
    return (
        <div className='mx-12 mt-6 card shadow min-h-screen bg-base-100 flex justify-center items-center dark:bg-gray-800 dark:text-white'>
            <div class="hero  bg-base-100  dark:bg-gray-800 dark:text-white">
                
                <div class="hero-content   flex-col lg:flex-row-reverse p-8 " >
                <img src={bannerImage} class=" h-[20rem] w-[20rem] rounded-lg shadow-2xl" />
                    <div class="max-w-md mr-[8rem] text-left">
                        <h1 class="text-5xl font-bold   ">Welcome To Tool World!</h1>
                        <p class="py-6 ">Here you can buy tools like hammer, drill machine, screw driver , wrench etc. </p>
                        <Link to="/login" class=" btn   bg-gradient-to-r from-gray-500 hover:to-black ">Get Started</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;