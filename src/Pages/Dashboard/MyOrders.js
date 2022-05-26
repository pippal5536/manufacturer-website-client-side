import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate, Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import useAdmin from './../../Hooks/useAdmin';


const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const [cancelTool, setCancelTool] = useState(null);
    const navigate = useNavigate()
    useEffect(() => {
        if (user) {
            fetch(` https://rocky-depths-16422.herokuapp.com/purchase?user=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    {
                        if (res.status === 401 || res.status === 403) {
                            signOut(auth);
                            localStorage.removeItem('accessToken');
                            navigate('/')

                        }
                        return res.json()
                    }
                })
                .then(data => {
                    console.log(data)
                    setOrders(data)
                });
        }
    }, [user, navigate])


    const handleDelete = id => {
        fetch(` https://rocky-depths-16422.herokuapp.com/purchase/${id}`, {
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
        <h1 className='text-4xl text-center'>My Orders</h1>
        <h1 className='text-center m-8'>{orders.length === 0 ? "You have not placed any others yet " : `Order List:${orders.length}`}</h1>
        <div className="overflow-x-auto">
            <table className="table w-full mx-4 ">
                <thead>
                    <tr className='bg-base-100   dark:text-white'>
                        <th className='dark:bg-gray-800 mx-4 dark:border'></th>
                        <th className='dark:bg-gray-800 mx-4 dark:border'>Tool</th>
                        <th className='dark:bg-gray-800 mx-4 dark:border'>Price Per Unit</th>
                        <th className='dark:bg-gray-800 mx-4 dark:border'>Quantity</th>
                        <th className='dark:bg-gray-800 mx-4 dark:border'>User Adress</th>
                        <th className='dark:bg-gray-800 mx-4 dark:border'>User Phone</th>
                        <th className='dark:bg-gray-800 mx-4 dark:border'>Payment Status</th>
                        <th className='dark:bg-gray-800 mx-4 dark:border'>Cancel Order</th>

                    </tr>
                </thead>
                <tbody className='m-8 '>
                    {
                        orders.map((order, index) => <tr key={order._id}>
                            <th className='dark:bg-gray-800 dark:border'>{index + 1}</th>
                            <td className='dark:bg-gray-800 dark:border'>{order.tool}</td>
                            <td className='dark:bg-gray-800 dark:border'>{order.price}</td>
                            <td className='dark:bg-gray-800 dark:border'>{order.quantity}</td>
                            <td className='dark:bg-gray-800 dark:border'>{order.address}</td>
                            <td className='dark:bg-gray-800 dark:border'>{order.phone}</td>
                            <td className='dark:bg-gray-800 dark:border'>
                                {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn bg-green-600 w-full  modal-button'>pay</button></Link>}
                                {(order.price && order.paid) && <div>
                                    <p><span className='text-success'>Paid</span></p>
                                    <p>Transaction id: <span className='text-success'>{order.transactionId}</span></p>
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
                                    <label  htmlFor="my-modal-4" className="btn bg-green-600 right-16 absolute w-[140px]">Go Back</label>
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

export default MyOrders;