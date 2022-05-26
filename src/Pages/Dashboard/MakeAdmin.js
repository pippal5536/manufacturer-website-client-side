import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import MakeAdminRow from './MakeAdminRow';

const MakeAdmin = () => {
    const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch(' https://rocky-depths-16422.herokuapp.com/user', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res=>res.json())
    .then(data=>{
        setUsers(data)
    })

  },[users])

  return (
        <div>
            <h2 className="text-2xl text-center">All Users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full ">
                    <thead>
                        <tr >
                            <th className='dark:bg-gray-800 mx-4 dark:border'>Index</th>
                            <th className='dark:bg-gray-800 mx-4 dark:border'>User Email</th>
                            <th className='dark:bg-gray-800 mx-4 dark:border'>Admin Operation</th>
                        </tr>
                    </thead>
                    
                      <tbody>
                      {
                            users.map((user,index) => <MakeAdminRow
                                key={user._id}
                                user={user}
                                index={index}
                            >
                              

                            </MakeAdminRow>)
                        }
                      </tbody>
                   
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;