import React from 'react';
import { Link } from 'react-router-dom';

const Tool = ({tool,refetch}) => {
    const {name, image,description,quantity,price} = tool;
    return (
        <div className=" bg-base-100 shadow-xl text-black  dark:bg-gray-900 shadow  dark:text-white dark:bg-gray-800 w-[100%] h-[100%] card">
        <figure className="px-10 pt-10 ">
          <img src={image} alt={name}  className="rounded-xl shadow lg:w-[350px] lg:h-[200px] " />
        </figure>
        <div className="card-body sm:mx-14    text-start ">
          <h2 className=" text-4xl card-title uppercase  ">{name}</h2>
          <h2 className=" text-lg tracking-tight leading-loose">Minimum Order Quantity: {parseInt(quantity * (25/100)) }</h2>
          <h2 className=" text-lg tracking-tight leading-loose">Available Quantity: {quantity}</h2>
            
          <h2 className=" text-lg tracking-tight leading-loose">Price Per Unit:{price}</h2>
          <p className='text-xl text-base tracking-tight leading-loose'>{description}</p>
          <div className="card-actions ">
            <Link to="/purchase" className="btn  bg-gradient-to-r from-gray-500 hover:to-black">Purchase</Link>
          </div>
        </div>
      </div>
    );
};

export default Tool;