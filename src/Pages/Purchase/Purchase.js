import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import usePurchase from '../../Hooks/usePurchase';
import auth from './../../firebase.init';
import { toast } from 'react-toastify';
import { useEffect } from 'react';


const Purchase = () => {
    const { purchaseId } = useParams();
    const [tool, setTool] = useState([]);
    useEffect(() => {
        fetch(` https://rocky-depths-16422.herokuapp.com/tool/${purchaseId}`)
            .then(res => res.json())
            .then(data => {
                setTool(data)
            });
    }, [])
    const [user] = useAuthState(auth);
    const { _id, name, quantity, price } = tool;

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
        fetch(' https://rocky-depths-16422.herokuapp.com/purchase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userOrder)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data) {
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

                                <input type="text" name="tool" value={name} disabled className="input dark:bg-gray-900 dark:text-white input-bordered mx-4" />

                            </div>

                            <input type="submit" value="submit" className='btn  bg-gradient-to-r from-gray-500 hover:to-black m-8' />

                        </form>


                    </div>

                </div>
            </div>



        </section>


    );
};

export default Purchase;