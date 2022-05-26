import React from 'react';

const Shipped = ({order}) => {
    const {_id,approved} = order;
    const handleStatus = () => {
        fetch(`http://localhost:4000/allorders/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        }).then(res => res.json())
            .then(data => {window.location.reload(false);})
    }
    return (
        <>
          {/* <button onClick={handleStatus} className='btn bg-blue-600 w-full  modal-button'>Pending</button> */}
          {
              approved?<button onClick={handleStatus} className='btn bg-blue-600 w-full dark:text-white modal-button' disabled>Shipped</button>:<button onClick={handleStatus} className='btn bg-blue-600 w-full  modal-button'>Pending</button>
          }
        </>
    );
};

export default Shipped;