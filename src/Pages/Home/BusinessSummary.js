import { ChatAltIcon, CogIcon, CurrencyDollarIcon, UserGroupIcon } from '@heroicons/react/solid';
import React from 'react';

const BusinessSummary = () => {
    return (
       <div className='mx-12 mt-[-49px]'>
           <p className='text-center text-2xl dark:text-white  p-4 m-4 font-bold'>See Our Business Summary</p>
            <div className=' card shadow mt-[-14px]'>
            
            <div className="stats stats-vertical lg:stats-horizontal shadow w-full dark:bg-gray-800 dark:text-white ">

                <div className="stat shadow ">
                    <div className='flex justify-center items-center'>
                    <div className="stat-title">Customers</div>
                    <div className="stat-title"><UserGroupIcon className='h-4 w-4'></UserGroupIcon></div>

                    </div>
                    <div className="stat-value text-center">100+</div>
                </div>

                <div className="stat shadow ">
                   <div className='flex justify-center items-center'>
                   <div className="stat-title">Annual Revenue</div>
                   <div className="stat-title"><CurrencyDollarIcon className='h-4 w-4'></CurrencyDollarIcon></div>

                   </div>
                    <div className="stat-value text-center">120M+</div>
                    
                </div>

                <div className="stat shadow ">
                  <div className='flex justify-center items-center'>
                  <div className="stat-title">Reviews</div>
                    <div className="stat-title"><ChatAltIcon className='h-4 w-4'></ChatAltIcon></div>
                  </div>
                  <div className="stat-value text-center">33K+</div>
                    
                </div>
                <div className="stat shadow ">
                    <div className='flex justify-center items-center'>
                    <div className="stat-title">Tools</div>
                    <div className="stat-title"><CogIcon className='h-4 w-4'></CogIcon></div>
                    </div>
                    <div className="stat-value text-center">50+</div>
                    
                </div>

            </div>
        </div>
       </div>
    );
};

export default BusinessSummary;