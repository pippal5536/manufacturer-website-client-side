import React from 'react';

const Portfolio = () => {
    return (
        <div className=' m-4'>
            <h1 className='text-center text-4xl font-bold'>My Portfolio</h1>

            <div className='m-4 p-4'>
                <p >First Name: Oishik </p>
                <p > Last Name: Biswas</p>
                <p >NickName/ Known As: Pippal</p>
                <p >Email Address: pippal5536@gmail.com</p>
            </div>
            <div className='m-4 p-4'>
                <h3 className='text-center text-2xl'>Educational Background:  </h3>
                <p>SSC:<br /> Passyear: 2018 from Chittagong Cantonment Public College .<br /> HSC: <br />Passyear: 2020/ 2021(For corona situation exam was prosponed) from  Chittagong Cantonment Public College. <br /> Bsc:<br /> Currently enrolling in the University of the west of england, bristol. Expected pass year: 2025 </p>
            </div>
            <div className='m-4 p-4'>
                <h3 className='text-center text-2xl'>Skills:</h3>
                <p>Intermidiate Html, Intermidiate Css, Beginner Javascript, Beginner React, Beginner Node.js  </p>
            </div>
            <div className='m-4 p-4'>
                <h3 className='text-center text-2xl'>My three projects</h3>
                <p>1. <span>https://strong-kitsune-ec2605.netlify.app/</span></p>
                <p>2. <span>https://assignment-3-miamiconvention-pippal5536.netlify.app/</span></p>
                <p>3. <span>https://pippal5536.github.io/Assignment-1/index.html</span></p>
            </div>


        </div>
    );
};

export default Portfolio;