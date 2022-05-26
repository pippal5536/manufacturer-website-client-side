import React from 'react';
import { toast } from 'react-toastify';

const MakeAdminRow = ({user,index}) => {
    const handleAdmin = () => {
        const {email} = user;
        fetch(` https://rocky-depths-16422.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Making an admin Failed');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success(`Successfully made an admin`);
                    console.log(data)
                }

            })

    }
    return (
        <tr>
            <td className='dark:bg-gray-800 mx-4 dark:border'>{index + 1}</td>
            <td className='dark:bg-gray-800 mx-4 dark:border'>{user.email}</td>
            {/* <td className='dark:bg-gray-800 mx-4 dark:border'>{user.role !== 'admin' && <button onClick={handleAdmin} className="btn btn-xs">Make Admin</button>}</td> */}
            <td className='dark:bg-gray-800 mx-4 dark:border dark:text-white'>{user.role==="admin"?<p>Admin</p>: <button onClick={handleAdmin} className="btn btn-xs">Make Admin</button>}</td>
        </tr>
    );
};

export default MakeAdminRow;