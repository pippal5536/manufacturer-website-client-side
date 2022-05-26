import React, { useState } from 'react';
import Tool from './Tool';
import Loading from './../../Shared/Loading';
import { useQuery } from 'react-query';

const Tools = () => {
    // load tools from mongo db in ui
    const { data: tools, isLoading } = useQuery([], () =>
        fetch(' https://rocky-depths-16422.herokuapp.com/tool')
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div >
            <p className='text-center text-blue-600 text-4xl font-bold mt-[14px]'>Tools </p>
            <div className='min-h-screen grid grid-cols-1 md:grid-cols-3 gap-x-8 p-8 gap-y-[22px] mt-[-14px]  '>
                {
                    tools.map((tool) => <Tool

                        key={tool._id}
                        tool={tool}
                    ></Tool>)
                }
            </div>
           
        </div>
    );
};

export default Tools;