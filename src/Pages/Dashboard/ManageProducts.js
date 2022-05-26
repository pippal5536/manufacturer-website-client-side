import React, { useState,useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import useAdmin from './../../Hooks/useAdmin';

const ManageProducts = () => {
    const [tools, setTools] = useState([]);
    const [cancelTool, setCancelTool] = useState(null);
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    useEffect(() => {
        fetch(' https://rocky-depths-16422.herokuapp.com/tool', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setTools(data);
            })

    }, [admin])
    const handleDelete = id => {
        fetch(` https://rocky-depths-16422.herokuapp.com/tool/${id}`, {
            method: 'DELETE'

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCancelTool(null)
                const remaining = tools.filter(tool => tool._id !== id);
                setTools(remaining);
            })
    }
    return (
        <div>
            <h1 className='text-4xl text-center'>Manage Products</h1>
            <div className="overflow-x-auto">
                <table className="table w-full mx-4 ">
                    <thead>
                        <tr className='bg-base-100   dark:text-white'>
                            <th className='dark:bg-gray-800 mx-4 dark:border'></th>
                            <th className='dark:bg-gray-800 mx-4 dark:border'>Tool</th>
                            <th className='dark:bg-gray-800 mx-4 dark:border'>Image</th>
                            <th className='dark:bg-gray-800 mx-4 dark:border'>description</th>
                            <th className='dark:bg-gray-800 mx-4 dark:border'>quantity</th>
                            <th className='dark:bg-gray-800 mx-4 dark:border'>price per unit ($)</th>
                            <th className='dark:bg-gray-800 mx-4 dark:border'>Delete Tool</th>

                        </tr>
                    </thead>
                    <tbody className='m-8 '>
                        {
                            tools.map((tool, index) => <tr key={tool._id}>
                                <th className='dark:bg-gray-800 dark:border'>{index + 1}</th>
                                <td className='dark:bg-gray-800 dark:border'>{tool.name}</td>
                                <td className='dark:bg-gray-800 dark:border'><img src={tool.image} alt={tool.name} /></td>
                                <td className='dark:bg-gray-800 dark:border'>{tool.description}</td>
                                <td className='dark:bg-gray-800 dark:border text-center'>{tool.quantity}</td>
                                <td className='dark:bg-gray-800 dark:border text-center'>{tool.price}</td>
                                {/* <!-- The button to open modal --> */}
                                <td className='dark:bg-gray-800 dark:border text-center'>
                                    
                                       <label
                                            htmlFor="my-modal-4"
                                            onClick={() => setCancelTool(tool)}
                                            className='btn bg-red-600  modal-button '>
                                            delete tool
                                        </label>
                                    
                                </td>
                                {/* <!-- Put this part before </body> tag-- > */}
                                <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                                <label htmlFor="my-modal-4" className="modal cursor-pointer">
                                    <div className='modal-box p-8 text-left dark:bg-gray-800'>

                                        <label className="modal-box relative dark:bg-gray-800 " htmlFor="">
                                            <h3 className="text-4xl font-extrabold m-4 p-4">Tool deletion Message</h3>
                                            <p className='m-4 p-4'>Do you want to delete the tool?</p>
                                        </label>

                                        <label onClick={() => handleDelete(tool._id)} htmlFor="my-modal-4" className="btn bg-red-600">Confirm Delete</label>
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

export default ManageProducts;