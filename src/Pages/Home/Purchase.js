import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from './../../firebase.init';


const Purchase = ({ purchase, setPurchase, refetch }) => {
    const [user] = useAuthState(auth);

    const { _id, name, quantity, price } = purchase;
    let q = parseInt(quantity * (25 / 100))
    const [minimumOrderQuantity, setMinimumOrderQuantity] = useState(q);

    const increase = () => {
        minimumOrderQuantity = setMinimumOrderQuantity(minimumOrderQuantity + 1);


    }
    const decrease = () => {
        setMinimumOrderQuantity(minimumOrderQuantity - 1);


    }
    const handlePurchase = event => {
        event.preventDefault();
        // const quantity = event.target.quantity.value;
        const userOrder = {
            toolId: _id,
            tool: name,
            quantity, price,
            user: user.email,
            userName: user.displayName,
            address: event.target.address.value,
            phone: event.target.phone.value,
            minimumOrderQuantity: minimumOrderQuantity
        }
        console.log(userOrder)
        fetch('http://localhost:4000/purchase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userOrder)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch();
                setPurchase(null);

            })

    }



    return (
        <section className=" mx-8 min-h-screen">
            <input type="checkbox" id="modal-1" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box ">
                    <label htmlFor="modal-1" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="  w-full mt-4">


                        <div className='bg-base-100 dark:bg-gray-800 dark:text-white card shadow   mx-8 grid grid-cols-1 justify-items-center '>
                            <h1 className='mt-4 text-center text-4xl'>Purchase Page</h1>
                            <form onSubmit={handlePurchase} >

                                <div className="form-control mt-1 ">
                                    <label className="label ">
                                        <span className="dark:text-white label-text"> Your Name:</span>
                                    </label>

                                    <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs  dark:text-white dark:bg-gray-900" />

                                </div>

                                <div className="form-control mt-1 ">
                                    <label className="label ">
                                        <span className="dark:text-white label-text"> Your Email:</span>
                                    </label>

                                    <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs  dark:text-white dark:bg-gray-900" />

                                </div>
                                <div className="form-control mt-1 ">
                                    <label className="label ">
                                        <span className="dark:text-white label-text"> Your Address:</span>
                                    </label>

                                    <input type="name" name="address" className="input dark:bg-gray-900 dark:text-white input-bordered w-full" />

                                </div>
                                <div className="form-control mt-1 ">
                                    <label className="label ">
                                        <span className="dark:text-white label-text"> Your Phone:</span>
                                    </label>

                                    <input type="tel" name="phone" className="input dark:bg-gray-900 dark:text-white input-bordered w-full" />

                                </div>
                                <div className="form-control mt-1 ">
                                    <label className="label ">
                                        <span className="dark:text-white label-text"> Your item:</span>
                                    </label>

                                    <input type="text" name="tool" disabled value={name} className="input input-bordered w-full max-w-xs  dark:text-white dark:bg-gray-900" />

                                </div>
                                <div className='my-4'>
                                    <label className="label ">
                                        <span className="dark:text-white label-text"> Your Quantity:</span>
                                    </label>
                                    <div className='flex'>
                                        {
                                            minimumOrderQuantity < quantity || minimumOrderQuantity === quantity?<button onClick={increase} >Increase</button>:<button onClick={increase} disabled className="cursor-not-allowed">Increase</button>
                                        }
                                        
                                        <input className='text-center' name="minimumOrderQuantity" value={minimumOrderQuantity} />
                                        {/* <button onClick={decrease}>Decrease</button> */}
                                        {
                                            minimumOrderQuantity > q || minimumOrderQuantity === q?<button onClick={decrease} >decrease</button>:<button onClick={decrease} disabled className="cursor-not-allowed">decrease</button>
                                        }
                                      
                                    </div>
                                    {
                                            minimumOrderQuantity > q || minimumOrderQuantity === q ? "" : <p className='text-sm  text-red-600'> Your quantity can not be lesser than the minimum order quantity</p>
                                        }
                                    {
                                            minimumOrderQuantity < quantity || minimumOrderQuantity === quantity ? "" : <p className='text-sm  text-red-600'> Your quantity can not be greater than the available order quantity</p>
                                        }
                                       
                                         {/* {
                                             minimumOrderQuantity > q || minimumOrderQuantity === q?  <input type="submit" value="submit"  className="input input-bordered w-full max-w-xs bg-primary " />: <input type="submit" value="submit" disabled className="input input-bordered w-full max-w-xs bg-primary " /> } */}
                                             
                                            {/* {  minimumOrderQuantity < quantity || minimumOrderQuantity === quantity ? <input type="submit" value="submit" className="input input-bordered w-full max-w-xs bg-primary " />:<input type="submit" value="submit" disabled className="input input-bordered w-full max-w-xs bg-primary " /> } */}


                                            {
                                                 minimumOrderQuantity >= q && minimumOrderQuantity <= quantity ? <input type="submit" value="submit"  className="input input-bordered w-full max-w-xs bg-primary " /> : <input type="submit" value="submit" disabled className="input input-bordered w-full max-w-xs bg-primary " />
                                            }
                                         
                                </div>


                            </form>


                        </div>

                    </div>
                </div>

            </div>


        </section>

    );
};

export default Purchase;