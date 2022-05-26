import React from 'react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
     
       fetch(' https://rocky-depths-16422.herokuapp.com/tool', {
           method: 'POST',
           headers: {
               'content-type': 'application/json'
           },
           body: JSON.stringify(data)
       })
           .then(res => res.json())
           .then(data => {
              if(data){
                  toast.success("tool  has been added.")
              }
            
           })

   }
    return (
        <div>
            <h1 className='text-center'>Add A Tool Page</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mt-1 ">
                    <label className="label ">
                        <span className="dark:text-white label-text mx-4"> Tool Name:</span>
                    </label>
                    <input  {...register("name")} required type="text"  className="input dark:bg-gray-900 dark:text-white dark:border-white input-bordered mx-4" />
                </div>
                <div className="form-control mt-1 ">
                    <label className="label ">
                        <span className="dark:text-white label-text mx-4"> Tool Image (must be an url):</span>
                    </label>

                    <input  {...register("image")} type="url" required className="input dark:border-white dark:bg-gray-900 dark:text-white input-bordered mx-4" />

                </div>
                <div className="form-control mt-1 ">
                    <label className="label ">
                        <span className="dark:text-white label-text mx-4" required> Tool Description:</span>
                    </label>

                    <input  {...register("description")} type="text" className="input dark:bg-gray-900 dark:text-white input-bordered mx-4 dark:border dark:border-white" />

                </div>
                <div className="form-control mt-1 ">
                    <label className="label ">
                        <span className="dark:text-white label-text mx-4">Tool Quantity:</span>
                    </label>

                    <input  {...register("quantity")} required type="number" className="input dark:border dark:border-white dark:bg-gray-900 dark:text-white input-bordered mx-4" />

                </div>
                <div className="form-control mt-1 ">
                    <label className="label ">
                        <span className="dark:text-white label-text mx-4 "> Tool Price (in $):</span>
                    </label>

                    <input  {...register("price")} required type="number" className="input dark:bg-gray-900 dark:text-white input-bordered mx-4 dark:border dark:border-white" />

                </div>
               
               <div className='text-center'>
               <input type="submit" value="Add a tool" className='btn bg-gradient-to-r from-cyan-500 to-blue-500  hover:to-blue-600  mt-8 ml-4 ' />
               </div>

            </form>
        </div>
    );
};

export default AddProduct;