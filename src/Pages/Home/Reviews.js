import React,{useState,useEffect} from 'react';


const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(' https://rocky-depths-16422.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div className='mt-[14px]'>
            <p className='text-center text-4xl text-blue-600   p-4 m-4 font-bold'>See What Our Reviewers say!</p>
            <div className='min-h-screen grid grid-cols-1 md:grid-cols-3 gap-x-8 p-8 gap-y-[22px] mt-[-14px]  '>
                {
                    reviews.map((review) => <div
                        className=" bg-base-100 shadow-xl text-black  dark:bg-gray-900 shadow  dark:text-white dark:bg-gray-800 w-[100%] h-[100%] card p-4"
                        key={review._id}
                        review={review}
                    >
                        <p>User Name:{review.username}</p>
                        <p>Rating:{review.rating}</p>
                        <p>Review:{review.review}</p>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Reviews;