import React from 'react'

const GigCard = (props) => {
    return (
        <div className='bg-red-50 hover:bg-red-100 transition duration-300 ease-in-out my-2 mx-5 rounded-md overflow-hidden'>
            <div className='m-3'>
                <h2 className='font-semibold text-xl text-red-600'>{props.title}</h2>
                <p className='text-slate-600'>{props.describtion}</p>
                <div className='flex gap-3 my-3'>
                    {props.prerequisite.map((item, index) => (
                        <div className='bg-white px-2 py-1 text-xs rounded-xl my-auto' key={index}>
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex flex-col justify-center my-5'>
                <button className='border-2 border-blue-600 py-2 px-5 mx-auto rounded-md hover:bg-blue-100'>
                    Apply Gig
                </button>
                <p className='mx-auto my-2 text-red-400 text-sm'>Apply to connect with client</p>
            </div>
        </div>
    )
}

export default GigCard