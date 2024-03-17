import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const LandingPageNav = () => {

    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    console.log(isDropDownOpen);

    return (
        <>
            <div className='flex justify-between bg-red-500 text-white w-full py-6 px-20 sticky top-0'>
                <div className='font-semibold font-serif text-xl py-2'>
                    DoingFreelance
                </div>
                <div className='flex gap-10 px-5 py-2'>
                    <a href="/index#home" className='font-semibold hover:text-red-200'>Home</a>
                    <a href="/index#about" className='font-semibold hover:text-red-200'>About Us</a>
                    <a href="/index#working" className='font-semibold hover:text-red-200'>How it works</a>
                </div>
                <button onClick={() => { setIsDropDownOpen((prev) => !prev) }} className='border px-5 py-2 bg-white text-red-600 hover:bg-red-100 rounded-md font-semibold'>
                    Join us
                </button>
                {isDropDownOpen && (
                    <div className='absolute right-16 top-20'>
                        <div className=' bg-white text-red-600 flex flex-col px-5 rounded-lg shadow-lg'>
                            <h3 className='mx-auto py-2 text-lg font-semibold cursor-pointer hover:text-red-400'>Join as Freelancer</h3>
                            <hr className='mx-auto border-1 border-red-300 w-28' />
                            <h3 className='mx-auto py-2 text-lg font-semibold cursor-pointer hover:text-red-400'>Join as Client</h3>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default LandingPageNav