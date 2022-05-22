import React from 'react';

const Tool = ({tool,refetch}) => {
    const {name, image,description,quantity,price} = tool;
    return (
        <div className="card lg:w-96 bg-base-100 shadow-xl text-black  dark:bg-gray-900 dark:text-white dark:bg-gray-800">
        <figure className="px-10 pt-10">
          <img src={image} alt={name} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <h2 className="card-title">Minimum Order Quantity: {parseInt(quantity * (25/100)) }</h2>
          <h2 className="card-title">Available Quantity: {quantity}</h2>
            
          <h2 className="card-title">Price Per Unit:{price}</h2>
          <p className='text-xl'>{description}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Purchase</button>
          </div>
        </div>
      </div>
    );
};

export default Tool;