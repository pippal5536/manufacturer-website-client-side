import React from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';


const DarkMode = ({ darkMode, setDarkMode }) => {


    return (
        <div className='mt-[14px] mx-12 indicator w-auto '>

          
          <div>
               <span className=" indicator-item badge badge-secondary ">new</span>
               <div className="hero card   bg-base-100 place-items-center shadow  dark:text-white dark:bg-gray-800">
                <div className="hero-content text-center">
                    <div>
                        <h1 className="text-5xl font-bold mt-4">Introducing to DARK MODE!</h1>
                        <p className="py-6 text-left leading-loose">Dark mode is a low-light user interface (UI) that uses a dark color—usually black or a shade of gray—as the primary background color.You can toogle dark mode or light mode from below or directly from the navbar.</p>

                        <label className="swap swap-rotate ">

                            {
                                darkMode ? <> <input type="checkbox" onClick={() => setDarkMode(!darkMode)} /><SunIcon className='swap-off h-10 w-10' ></SunIcon>
                                    <MoonIcon className='swap-on h-10 w-10'></MoonIcon></>
                                    : <><input type="checkbox" onClick={() => setDarkMode(!darkMode)} /><SunIcon className='swap-on h-10 w-10' ></SunIcon>
                                        <MoonIcon className='swap-off h-10 w-10'></MoonIcon></>
                            }
                        </label>
                    </div>
                </div>
            </div>
          </div>
       

           

        </div>
    );
};

export default DarkMode;