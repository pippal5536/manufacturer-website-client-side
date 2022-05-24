import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import usePurchase from '../../Hooks/usePurchase';
import auth from './../../firebase.init';
import { toast } from 'react-toastify';


const Purchase = () => {
    const { purchaseId } = useParams();
    const [purchase] = usePurchase(purchaseId);
    const [user] = useAuthState(auth);
    const { _id, name, quantity, price } = purchase;
//     let q = parseInt(quantity * (25 / 100))
// const [minQty,setMinQty] = useState(q);  
   
//     const increase = () => {
//         minQty= setMinQty(minQty+1);
//     }
//        const decrease = () => {
//           minQty= setMinQty(minQty - 1);
//        }
 
    const handlePurchase = event => {
     
       
        event.preventDefault();
        const userOrder = {
            toolId: _id,
            tool: name,
            quantity, price,
            user: user.email,
            userName: user.displayName,
            address: event.target.address.value,
            phone: event.target.phone.value,
        }
        fetch('http://localhost:4000/purchase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userOrder)
        })
            .then(res => res.json())
            .then(data => {
              console.log(data);
               if(data){
                   toast.success("Your tool has been purchased!")
               }
            })

    }


    return (
        <section className=" mx-8 ">
            <div className=" dark:bg-gray-900 ">
                <div className="  w-full mt-4">
                    <div className='bg-base-100 dark:bg-gray-800 dark:text-white card shadow   mx-8 grid grid-cols-1 justify-items-center '>
                        <h1 className='mt-4 text-center text-4xl'>Purchase Page</h1>
                        <form
                            onSubmit={handlePurchase}
                        >

                            <div className="form-control w-full mt-1 ">
                                <label className="label ">
                                    <span className="dark:text-white label-text mx-4"> Your Name:</span>
                                </label>

                                <input type="text" name="name" disabled value={user?.displayName || ''} className="input dark:bg-gray-900 dark:text-white input-bordered mx-4" />

                            </div>

                            <div className="form-control mt-1 ">
                                <label className="label ">
                                    <span className="dark:text-white label-text mx-4"> Your Email:</span>
                                </label>

                                <input type="email" name="email" disabled value={user?.email || ''} className="input dark:bg-gray-900 dark:text-white input-bordered mx-4" />

                            </div>
                            <div className="form-control mt-1 ">
                                <label className="label ">
                                    <span className="dark:text-white label-text mx-4" required> Your Address:</span>
                                </label>

                                <input type="name" name="address" className="input dark:bg-gray-900 dark:text-white input-bordered mx-4" />

                            </div>
                            <div className="form-control mt-1 ">
                                <label className="label ">
                                    <span className="dark:text-white label-text mx-4"> Your Phone:</span>
                                </label>

                                <input required type="tel" name="phone" className="input dark:bg-gray-900 dark:text-white input-bordered mx-4" />

                            </div>
                            <div className="form-control mt-1 ">
                                <label className="label ">
                                    <span className="dark:text-white label-text mx-4"> Your item:</span>
                                </label>

                                <input type="text" name="tool" disabled value={name} className="input dark:bg-gray-900 dark:text-white input-bordered mx-4" />

                            </div>
                            {/* <div className='my-4'>
                                <label className="label ">
                                    <span className="dark:text-white label-text mx-4"> Your Quantity:</span>
                                </label>
                                <div className='flex mx-4'>
                                    {
                                        minQty < quantity || minQty === quantity ? <button onClick={() => increase()} >Increase</button> : <button disabled className="cursor-not-allowed">Increase</button>
                                    }
                                    <input className='text-center dark:bg-gray-900 dark:text-white input input-bordered ' type="number" name="minQty" value={minQty} />
                                    {
                                        minQty > q || minQty === q ? <button onClick={decrease} >decrease</button> : <button disabled className="cursor-not-allowed">decrease</button>
                                    }

                                </div>
                                <div className='m-4'>
                                    {
                                        minQty > q || minQty === q ? "" : <p className='text-sm  text-red-600'> Your quantity can not be lesser than the minimum order quantity</p>
                                    }
                                    {
                                        minQty < quantity || minQty === quantity ? "" : <p className='text-sm  text-red-600'> Your quantity can not be greater than the available order quantity</p>
                                    }
                                </div>
                                <div className=' mt-4 mx-4' >
                                    {
                                        minQty >= q && minQty <= quantity ? <input type="submit" value="submit" className="btn w-full  text-white    bg-gradient-to-r from-gray-500 hover:to-black " /> : <input type="submit"
                                            disabled className="btn w-full  text-white    bg-gradient-to-r from-gray-500 hover:to-black " value="submit" />
                                    }
                                </div>

                            </div> */}
                            <input type="submit" value="submit" className='btn btn-primary' />

                        </form>


                    </div>

                </div>
            </div>



        </section>


    );
};

export default Purchase;