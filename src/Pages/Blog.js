import React from 'react';

const Blog = () => {

    return (
        <div>
            <div className='m-8'>
                <h1 className='text-blue-600'>How will you improve the performance of a React Application?</h1>
                <p>Using production build is one of the ways to improve performance of react app. I will keep components states in local if necessary. Re-renders affects react performance so memorize react components. </p>
            </div>
            <div className='m-8'>
                <h1 className='text-blue-600'>What are the different ways to manage a state in a React App?</h1>
                <p>To manage local state, we use useState, useReducer. To manage global global state, we use Context API. To manage server state, we use SWR library, and React Query . To manage URL state, we use custom hooks like react router. In conclusion, the different ways to manage a state are using useState , useReducer, etc ;using  context api; using third party library like SWR or REACT QUERY; using custom hooks.</p>
            </div>
            <div className="m-8">
                <h1 className='text-blue-600'>How does prototypical inheritance work?</h1>
                <p></p>
            </div>
            <div className="m-8">
                <h1 className='text-blue-600'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?</h1>
                <p>Setting the state directly causes odd bugs. Also it hampers component optimization as setting a state directly increases re-renders.</p>
            </div>
            <div className="m-8">
                <h1 className='text-blue-600'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                <p>I can use filter function to implement a search to find products by name. For example, if an array has products that has same name, using array.filter() function will return all the products that had same name. 
                
                </p>
            </div>
            <div className="m-8">
                <h1 className='text-blue-600'>What is a unit test? Why should write unit tests?</h1>
                <p>Unit testing is to validate each unit of a software code to see if it runs as expected. We write unit tests to fix bugs as early as possible.</p>
            </div>
        </div>
    );
};

export default Blog;