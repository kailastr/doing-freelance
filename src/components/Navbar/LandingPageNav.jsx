import React from 'react'

const LandingPageNav = () => {
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
                <button className='border px-5 py-2 bg-white text-red-600 hover:bg-red-100 rounded-md font-semibold'>
                    Join us
                </button>
            </div>
        </>
    )
}

export default LandingPageNav