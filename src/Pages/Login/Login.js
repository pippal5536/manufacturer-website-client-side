import React from 'react';
import { useForm } from 'react-hook-form';
import auth from './../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import toolsPic from "../../Assets/Images/tools-login.png"
import { FcGoogle } from 'react-icons/fc';


const Login = () => {
    // Form
    const { register, formState: { errors }, handleSubmit } = useForm();
    // Sign In
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    // On Submit For Sign In
    const onSubmit = data => {
        // console.log(data,'came from onSubmit => Login Component')
        signInWithEmailAndPassword(data.email, data.password);
    }



    return (

        <section className=" mx-8 min-h-screen">
            <h1 className='mt-4 text-center text-4xl'>Login Page</h1>
            <div class="  w-full mt-4">
                <div class=" grid sm:grid-cols-1 md:grid-cols-2 gap-y-4  ml-6">
                   <div class=" sm:hidden md:block">
                   <img src={toolsPic} class=" w-full card shadow-2xl" />
                   </div>


                    <div className='bg-base-100 dark:bg-gray-800 dark:text-white card shadow  p-16 mx-8 grid grid-cols-1 gap-8'>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control  max-w-xs">
                                <label className="label ">
                                    <span className="dark:text-white label-text">Enter Your Email:</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="input input-bordered w-full max-w-xs dark:bg-gray-900 dark:text-white"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid Email'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className=" dark:text-white label-text">Enter Your Password:</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="input dark:bg-gray-900 dark:text-white input-bordered w-full max-w-xs"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters or longer'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                </label>
                            </div>
                          
                           

                            <input className='btn w-full max-w-xs text-white    bg-gradient-to-r from-gray-500 hover:to-black' type="submit" value="Login" />
                        </form>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Login;