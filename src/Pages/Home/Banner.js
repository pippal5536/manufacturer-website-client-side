import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='mx-12 my-8 card shadow'>
            <div class="hero  bg-base-100 dark:bg-gray-800 dark:text-white ">
                <div class="hero-content text-center">
                    <div class="max-w-md">
                        <h1 class="text-5xl font-bold ">Welcome To Tool World!</h1>
                        <p class="py-6">Here you can buy tools like hammer, drill machine, screw driver , wrench etc. </p>
                        <Link to="/login" class=" btn  bg-gradient-to-r from-gray-500 hover:to-black ">Get Started</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;