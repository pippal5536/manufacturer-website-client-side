import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import Loading from '../../Shared/Loading';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const stripePromise = loadStripe('pk_test_51H7P0cDtreSC9RW6cpFOC9Aj46NUX8rlpVqFcObf1gG3fr8Aae81UoiekUCaAY6ZZex1FcDPd7AjBXMQMVMsaFOe00KtwDVia9');
    console.log(stripePromise)
    const { id } = useParams();
    const url = `http://localhost:4000/purchase/${id}`;
    const { data: order, isLoading } = useQuery(['purchase', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
        console.log(order)
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className=' m-8'>
            <div class="card  lg:w-[1000px] bg-base-100 dark:bg-gray-800 shadow-xl my-12 ">
                <div class="card-body ">
                    <p className="text-success font-bold">Username:{order.userName}</p>
                    <p className="text-success font-bold">User Email:{order.user}</p>
                    <h2 class="card-title">Tool Name: {order.tool}</h2>
                    <p>Purchased Quantity:{order.quantity}</p>
                    <p>Price Per Unit:${order.price}</p>
                    <p>Total Price: ${order.price * order.quantity}</p>
                </div>
                <div class="card flex-shrink-0 m-4 shadow-2xl bg-base-100">
                    <div class="card-body">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm order={order} />
                        </Elements>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Payment;