import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
         data = {
            email: user.email,
            username: user.displayName,
            education: data.education,
            location: data.location,
            phone: data.phone,
            linkedInProfile: data.linkedInProfile
        }
        fetch(` https://rocky-depths-16422.herokuapp.com/userProfile/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
               if(data){
                   toast.success("Your Profile has been updated!")
               }
             
            })

    }
    return (
        <div>
            <h1 className='mt-4 text-center text-4xl'>My Profile Page</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mt-1 ">
                    <label className="label ">
                        <span className="dark:text-white label-text mx-4"> Your Name:</span>
                    </label>

                    <input  {...register("username")} type="text"  disabled value={user?.displayName || ''} className="input dark:bg-gray-900 dark:text-white input-bordered mx-4" />

                </div>

                <div className="form-control mt-1 ">
                    <label className="label ">
                        <span className="dark:text-white label-text mx-4"> Your Email:</span>
                    </label>

                    <input  {...register("email")} type="email"  disabled value={user?.email || ''} className="input dark:bg-gray-900 dark:text-white input-bordered mx-4" />

                </div>
                <div className="form-control mt-1 ">
                    <label className="label ">
                        <span className="dark:text-white label-text mx-4" required> Your Education:</span>
                    </label>

                    <input  {...register("education")} type="text"  className="input dark:bg-gray-900 dark:text-white input-bordered mx-4 dark:border dark:border-white"  />

                </div>
                <div className="form-control mt-1 ">
                    <label className="label ">
                        <span className="dark:text-white label-text mx-4"> Your location:</span>
                    </label>

                    <input  {...register("location")} required type="text"  className="input dark:border dark:border-white dark:bg-gray-900 dark:text-white input-bordered mx-4" />

                </div>
                <div className="form-control mt-1 ">
                    <label className="label ">
                        <span className="dark:text-white label-text mx-4 "> Your Phone Number:</span>
                    </label>

                    <input  {...register("phone")} required type="number"  className="input dark:bg-gray-900 dark:text-white input-bordered mx-4 dark:border dark:border-white" />

                </div>
                <div className="form-control mt-1 ">
                    <label className="label ">
                        <span className="dark:text-white label-text mx-4 "> Your Linked In Profile:</span>
                    </label>

                    <input  {...register("linkedInProfile")} required type="url"  className="input dark:bg-gray-900 dark:text-white input-bordered mx-4 dark:border dark:border-white" />

                </div>
               
              
                <input type="submit" value="Update your profile" className='btn  bg-gradient-to-r from-gray-500 hover:to-black m-4' />

            </form>

        </div>
    );
};

export default MyProfile;