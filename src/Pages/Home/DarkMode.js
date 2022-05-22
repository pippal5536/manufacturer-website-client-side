import React from 'react';
import {MoonIcon, SunIcon} from '@heroicons/react/solid';


const DarkMode = ({ darkMode, setDarkMode }) => {


    return (
        <div >
            <p>Introducing To dark Mode!</p>
            <label className="swap swap-rotate">
           
           {
                darkMode?<> <input type="checkbox"  onClick={()=> setDarkMode(!darkMode)}/><SunIcon className='swap-off h-5 w-5' ></SunIcon> 
              <MoonIcon className='swap-on h-5 w-5'></MoonIcon></>
                :<><input type="checkbox"  onClick={()=> setDarkMode(!darkMode)}/><SunIcon className='swap-on h-5 w-5' ></SunIcon> 
                <MoonIcon className='swap-off h-5 w-5'></MoonIcon></>
           }
               </label>

        </div>
    );
};

export default DarkMode;