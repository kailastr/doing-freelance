import React from 'react';
import { useNavigate } from 'react-router-dom'

//icons
import { RiLogoutCircleLine } from "react-icons/ri";

const MediatorNavbar = () => {
    const navigate = useNavigate();
    const SignOut = () => {
        localStorage.clear();
        navigate('/');
    }
    return (
        <>
            <div className='flex justify-between bg-red-500 text-white w-full py-6 px-20 sticky top-0'>
                <div className='font-semibold font-serif text-xl py-2'>
                    Mediator Page
                </div>
                <div className='flex gap-10 px-5 py-2'>
                    <p className='font-semibold '>View Dispute Requests</p>
                </div>
                <button onClick={SignOut} className=' flex  items-center justify-center gap-2 px-4 py-2 rounded-full border-2 border-white hover:bg-red-400 duration-200 ease-out'>
                    <RiLogoutCircleLine />Sign Out
                </button>
            </div>
        </>
    )
}

export default MediatorNavbar