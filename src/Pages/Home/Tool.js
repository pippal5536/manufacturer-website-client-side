import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import useAdmin from './../../Hooks/useAdmin';





const Tool = ({ tool }) => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const navigate = useNavigate();
  const { _id, name, image, description, quantity, price } = tool;
  const minimumOrderQuantity = parseInt(quantity * (25 / 100))
  const purchasePage = id => {
    navigate(`/purchase/${id}`);
    console.log(id)
  }


  return (
    <div className=" bg-base-100 shadow-xl text-black  dark:bg-gray-900 shadow  dark:text-white dark:bg-gray-800 w-[100%] h-[100%] card">
      <figure className="px-10 pt-10 ">
        <img src={image} alt={name} className="rounded-xl shadow lg:w-[350px] lg:h-[200px] " />
      </figure>
      <div className="card-body sm:mx-14    text-start ">
        <h2 className=" text-4xl card-title uppercase  ">{name}</h2>
        <h2 className=" text-lg ">Minimum Order Quantity: {minimumOrderQuantity}</h2>
        <h2 className=" text-lg tracking-tight leading-loose">Total Quantity: {quantity}</h2>

        <h2 className=" text-lg tracking-tight leading-loose">Price Per Unit:{price}</h2>
        <p className='text-xl text-base tracking-tight leading-loose'>{description}</p>
        <div className="card-actions ">

          {!admin?<button onClick={() => purchasePage(_id)} className='btn  bg-gradient-to-r from-gray-500 hover:to-black'>Purchase</button>:<button disabled className='btn  bg-gradient-to-r from-gray-500 hover:to-black'>Purchase</button>}
        </div>
      </div>
    </div>
  );
};

export default Tool;