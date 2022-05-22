import React from 'react';
import Tool from './Tool';
import Loading from './../../Shared/Loading';
import { useQuery } from 'react-query';

const Tools = () => {
    // load tools from mongo db in ui
    const { data:tools,isLoading,refetch } = useQuery([], () =>
    fetch('http://localhost:4000/tool')
    .then(res => res.json() )
)
if(isLoading){
    return <Loading></Loading>
        }
    return (
        <div >
              <p className='text-center text-primary'>Tools </p>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-5'>
              {
                    tools.map((tool) => <Tool

                        key={tool._id}
                        tool={tool}
                        refetch={refetch}

                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;