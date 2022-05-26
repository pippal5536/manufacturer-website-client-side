import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import useAdmin from './../../Hooks/useAdmin';
import Shipped from './Shipped';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [cancelTool, setCancelTool] = useState(null);
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    useEffect(() => {
        fetch('http://localhost:4000/allorders', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })

    }, [admin])
    const handleDelete = id => {
        fetch(`http://localhost:4000/purchase/${id}`, {
            method: 'DELETE'

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCancelTool(null)
                const remaining = orders.filter(order => order._id !== id);
                setOrders(remaining);
            })
    }
   
    return (
        <div>
            <h1 className='text-4xl text-center'>Manage All Orders</h1>
            <div className="overflow-x-auto">
                <table className="table w-full mx-4 ">
                    <thead>
                        <tr className='bg-base-100   dark:text-white'>
                            <th className='dark:bg-gray-800 mx-4 dark:border'></th>
                            <th className='dark:bg-gray-800 mx-4 dark:border'>Tool</th>
                            <th className='dark:bg-gray-800 mx-4 dark:border'>user name</th>
                            <th className='dark:bg-gray-800 mx-4 dark:border'>user email</th>
                            <th className='dark:bg-gray-800 mx-4 dark:border'>Transiction Id</th>
                            <th className='dark:bg-gray-800 mx-4 dark:border'>Payment Status</th>
                            <th className='dark:bg-gray-800 mx-4 dark:border'>Cancel Order</th>

                        </tr>
                    </thead>
                    <tbody className='m-8 '>
                        {
                            orders.map((order, index) => <tr key={order._id}>
                                <th className='dark:bg-gray-800 dark:border'>{index + 1}</th>
                                <td className='dark:bg-gray-800 dark:border'>{order.tool}</td>
                                <td className='dark:bg-gray-800 dark:border'>{order.userName}</td>
                                <td className='dark:bg-gray-800 dark:border'>{order.user}</td>
                                <td className='dark:bg-gray-800 dark:border'>{order.transactionId}</td>
                                <td className='dark:bg-gray-800 dark:border'>
                                    {(order.price && !order.paid) && <button className='btn bg-green-600 w-full  modal-button'>unpaid</button>}
                                    {(order.price && order.paid) && <div>
                                        <Shipped order={order}
                                        key={order._id}
                                        ></Shipped>
                                    </div>}
                                </td>
                                {/* <!-- The button to open modal --> */}
                                <td className='dark:bg-gray-800 dark:border text-center'>
                                    {
                                        (order.paid) ? <label
                                            disabled
                                            htmlFor="my-modal-4"
                                            onClick={() => setCancelTool(order)}
                                            className='btn bg-red-600  modal-button '>
                                            cancel order
                                        </label> : <label
                                            htmlFor="my-modal-4"
                                            onClick={() => setCancelTool(order)}
                                            className='btn bg-red-600  modal-button '>
                                            cancel order
                                        </label>
                                    }
                                </td>
                                {/* <!-- Put this part before </body> tag-- > */}
                                <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                                <label htmlFor="my-modal-4" className="modal cursor-pointer">
                                    <div className='modal-box p-8 text-left dark:bg-gray-800'>

                                        <label className="modal-box relative dark:bg-gray-800 " htmlFor="">
                                            <h3 className="text-4xl font-extrabold m-4 p-4">Order Cancelation Message</h3>
                                            <p className='m-4 p-4'>Do you want to cancel the order?</p>
                                        </label>

                                        <label onClick={() => handleDelete(order._id)} htmlFor="my-modal-4" className="btn bg-red-600">Confirm Cancel</label>
                                        <label htmlFor="my-modal-4" className="btn bg-green-600 right-16 absolute w-[140px]">Go Back</label>
                                    </div>
                                </label>
                            </tr>)
                        }
                    </tbody>
                </table>

            </div>
        </div >
    );
};

export default ManageAllOrders;