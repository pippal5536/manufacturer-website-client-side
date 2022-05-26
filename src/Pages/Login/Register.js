import React,{useEffect} from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from './../../firebase.init';
import Loading from './../../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';
import registerImage from '../../Assets/Images/register-image.jpg'
import useToken from './../../Hooks/useToken';

const Register = () => {
    const navigate = useNavigate();
    // register
    const { register, formState: { errors }, handleSubmit } = useForm();
    // firebase hook- create user
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    // firebase hook- create user with name
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [token] = useToken(user );
     // redirect to page
     useEffect(()=>{
        if(token){
            navigate('/dashboard');
         }
     },[token,navigate])
   
    
    // loading spinner
    if (loading || updating) {
        return <Loading></Loading>
    }
    // firebase user registration error
    let firebaseRegistrationError;
    if (error ||   updateError) {
        firebaseRegistrationError = <p className='text-red-500'><small>The email is already registered. Please login.</small></p>
    }
    // register submit
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });


    }


    return (
        <section className=" mx-8 min-h-screen">
            <h1 className='mt-4 text-center text-4xl font-bold text-blue-600'><span className='text-cyan-600'>Registration</span>  Page</h1>
            <div className="  w-full mt-4">
                <div className=" grid sm:grid-cols-1 md:grid-cols-2 gap-y-4  ml-6">
                    <div className=" sm:hidden md:block">
                        <img src={registerImage} className=" w-full card shadow-2xl" />
                    </div>


                    <div className='bg-base-100 dark:bg-gray-800 dark:text-white card shadow   mx-8 grid grid-cols-1 justify-items-center '>
                        <form  onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full  mt-1 ">
                                <label className="label">
                                    <span className="dark:text-white label-text">Enter Your Name: </span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="input input-bordered w-full  dark:bg-gray-900 dark:text-white mt-[-1px]"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>

                            <div className="form-control mt-[-3px] ">
                                <label className="label ">
                                    <span className="dark:text-white label-text">Enter Your Email:</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="input input-bordered w-full  dark:bg-gray-900 dark:text-white mt-[-1px]"
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
                            <div className="form-control w-full ">
                                <label className="label mt-[-10px]">
                                    <span className=" dark:text-white label-text">Enter Your Password:</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="input dark:bg-gray-900 dark:text-white input-bordered w-full "
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



                            <input className=' w-full  text-white    btn bg-gradient-to-r from-cyan-500 to-blue-500  hover:to-blue-600 mt-[5px] mb-4' type="submit" value="Register" />
                            {firebaseRegistrationError}
                        </form>
                        <p className=' text-center mt-1 mb-1'>Already An User? Login <Link className='text-blue-600' to="/login">here</Link>.</p>
                     
                    </div>
                   
                </div>
            </div>
        </section>
    );
};

export default Register;