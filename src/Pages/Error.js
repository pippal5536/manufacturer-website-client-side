import React from 'react';
import { Link } from 'react-router-dom';
import errorImage from '../Assets/Images/errorImage.png'
import Footer from './../Shared/Footer';

const Error = () => {
    return (
        <div className=' mt-4'>
            <div className='justify-center'>
                <h1 className='text-center text-4xl font-bold'>OOPS!!</h1>
                <div className='text-center'>
                    <img className="w-50 h-80  p-8 inline " src={errorImage} alt="" />
                </div>
                <div className='font-mono '>
                    <h1 className='text-6xl font-extrabold   text-center'>404 </h1>
                    <h1 className='text-4xl text-center'> Page not found! </h1>
                    <h1 className=' mt-4 text-center '>The resource requested could not be found on this server!</h1>
                    <div className='text-center m-4'>
                        <button className='btn  '><Link to='/'>Go To Home</Link></button>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Error;