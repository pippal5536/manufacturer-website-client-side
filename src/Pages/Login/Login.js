import React,{useEffect} from 'react';
import { useForm } from 'react-hook-form';
import auth from './../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import bannerImage from "../../Assets/Images/banner-image.jpg"
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import Loading from './../../Shared/Loading';
import useToken from './../../Hooks/useToken';


const Login = () => {
    // protected route
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
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
        signInWithEmailAndPassword(data.email, data.password);
        
        
    }

    // google Sign in
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    // redirect to page
    const [token] = useToken(user || googleUser);
   useEffect((()=>{
       if(token){
        navigate(from, { replace: true });
      
       }
   }),[token,navigate,from])
    // loading spinner
    if (loading || googleLoading) {
        return <Loading ></Loading>
    }
   // firebase login error
   let firebaseRegistrationError;
   if (error || googleError ) {
       firebaseRegistrationError = <p className='text-red-500'><small> You have typed the wrong email or password. Please try again. </small></p>
   }



    return (

        <section className=" mx-8 min-h-screen">
            <h1 className='mt-4 text-center text-4xl'>Login Page</h1>
            <div className="  w-full mt-4">
                <div className=" grid sm:grid-cols-1 md:grid-cols-2 gap-y-4  ml-6">
                    <div className=" sm:hidden md:block">
                        <img src={bannerImage} className=" w-full h-full card shadow-2xl" />
                    </div>


                    <div className='bg-base-100 dark:bg-gray-800 dark:text-white card shadow   mx-8 grid grid-cols-1 justify-items-center '>
                        <form  onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control mt-1 ">
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



                            <input className='btn w-full  text-white    bg-gradient-to-r from-gray-500 hover:to-black mt-1' type="submit" value="Login" />
                            {firebaseRegistrationError}
                        </form>
                        <p className=' text-center mt-1'>New User? Register <Link className='text-blue-600' to="/register">here</Link>.</p>
                        <div className="divider mt-[-1px] ">----OR----</div>
                        {/* Sign in with google */}
                        <button onClick={() => signInWithGoogle()} className='  bg-gradient-to-r from-gray-500 hover:to-black btn mt-[-12px] '><span className='flex gap-2'><p>Sign In With Google</p><FcGoogle className='h-[14px] w-[14px]'></FcGoogle></span></button>

                    </div>
                </div>
            </div>
        </section>

    );
};

export default Login;