import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

//signUp & signIn modal
import SignUpModal from '../Modal/SignUpModal';
import SignInModal from '../Modal/SignInModal';
import MediatorSignInModal from '../Modal/MediatorSignInModal';


const LandingPageNav = () => {

    const [isDropDownOpen, setIsDropDownOpen] = useState(false);

    const [isSignUpOpen, setIsSignUpOpen] = useState(false);

    const openSignUp = () => {
        setIsSignUpOpen(true);
        setIsDropDownOpen(false);
    }

    const [isSignInOpen, setIsSignInOpen] = useState(false);

    const openSignIn = () => {
        setIsSignInOpen(true);
        setIsDropDownOpen(false);
    }

    const [isMediatorModalOpen, setIsMediatorModalOpen] = useState(false);

    const openMediatorModal = () => {
        setIsMediatorModalOpen(true);
        setIsDropDownOpen(false);
    }

    return (
        <>
            <div>
                <SignUpModal isOpen={isSignUpOpen} setIsOpen={setIsSignUpOpen} />
                <SignInModal isOpen={isSignInOpen} setIsOpen={setIsSignInOpen} />
                <MediatorSignInModal isOpen={isMediatorModalOpen} setIsOpen={setIsMediatorModalOpen} />
            </div>

            <div className='flex justify-between bg-red-600 text-white w-full py-6 px-20 sticky top-0 z-50'>
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
                            <h3 className='mx-auto py-2 text-lg font-semibold cursor-pointer hover:text-red-400' onClick={openSignUp}>Sign Up</h3>
                            <hr className='mx-auto border-1 border-red-300 w-28' />
                            <h3 className='mx-auto py-2 text-lg font-semibold cursor-pointer hover:text-red-400' onClick={openSignIn}>Sign In</h3>
                            <hr className='mx-auto border-1 border-red-300 w-28' />
                            <h3 className='mx-auto py-2 text-lg font-semibold cursor-pointer hover:text-red-400' onClick={openMediatorModal}>Mediator</h3>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default LandingPageNav