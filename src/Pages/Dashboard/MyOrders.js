import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';


const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const [cancelTool, setCancelTool] = useState(null);
    const navigate = useNavigate()
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:4000/purchase?user=${user.email}`, {
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
    }, [user])

  
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
                                <td className='dark:bg-gray-800 dark:border'></td>
                               

                                {/* <!-- The button to open modal --> */}
                                <td className='dark:bg-gray-800 dark:border text-center'><label for="my-modal-4"
                                onClick={() => setCancelTool(order)}
                                className='btn bg-red-600  modal-button '>
                                    cancel order
                                </label></td>





                                {/* <!-- Put this part before </body> tag-- > */}
                                <input type="checkbox" id="my-modal-4" class="modal-toggle" />
                                <label for="my-modal-4" class="modal cursor-pointer">
                                <div className='modal-box p-8 text-left'>
                                     
                                   <label class="modal-box relative" for="">
                                        <h3 class="text-4xl font-extrabold m-4 p-4">Order Cancelation Message</h3>
                                        <p className='m-4 p-4'>Do you want to cancel the order?</p>
                                    </label>
                               
                                    <label onClick={() => handleDelete(order._id)} for="my-modal-4" class="btn bg-red-600">Confirm Cancel</label>
                                </div>
                                </label>

                         




                                {/* <td>
                                    {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                                    {(a.price && a.paid) && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        <p>Transaction id: <span className='text-success'>{a.transactionId}</span></p>
                                    </div>}
                                </td> */}

                            </tr>)
                        }


                </tbody>

            </table>

        </div>
        </div >
    );
};

export default MyOrders;