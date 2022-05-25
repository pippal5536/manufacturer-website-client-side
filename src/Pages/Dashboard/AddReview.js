import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddReview = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [user] = useAuthState(auth)
    const onSubmit = data => {
        data ={
            username: user.displayName,
            rating: data.rating,
            review: data.review
        }
        console.log(data)
        fetch('http://localhost:4000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data) {
                    toast.success("Your review has been placed!")
                }
            })


    }
    return (
        <div className='mx-32'>
            <h1 className='text-center text-4xl m-4 font-bold'>Add A Review!</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className="label ">
                        <span className="dark:text-white label-text">User Name:</span>
                    </label>
                    <input   {...register("username")}
                         value={user?.displayName} disabled className="input input-bordered w-full  dark:bg-gray-800 dark:text-white mt-[-1px]" />
                </div>
                <div>
                    <label className="label ">
                        <span className="dark:text-white label-text">Please rate your user experience:(Rate from number 1 to 5)</span>
                    </label>
                    <input
                        required
                        type="number"
                        placeholder="rating"
                        className="input input-bordered w-full  dark:bg-gray-800 dark:text-white mt-[-1px]"
                        {...register("rating", {
                            min: {
                                value: 1,
                                message: 'Please enter a number from 1 to 5'
                            },
                            max: {
                                value: 5,
                                message: 'Please enter a number from 1 to 5'
                            }
                        })}
                    />
                    {errors.rating ? <span className="label-text-alt text-red-500">{errors.rating.message}</span> : ""
                    }
                </div>
                <div>
                    <label className="label ">
                        <span className="dark:text-white label-text">Type Your Review:</span>
                    </label>
                    <input
                        className="input input-bordered w-full text-black  dark:bg-gray-800 dark:text-white textarea textarea-bordered mt-[-1px]" required placeholder="Review"
                        {...register("review", {
                            required: true
                        })}
                    />
                </div>
                <input className='btn w-full  text-white    bg-gradient-to-r from-gray-500 hover:to-black mt-8' type="submit" value="Add Review" />
            </form>
        </div>
    );
};

export default AddReview;