import React, { Fragment, useEffect, useState } from 'react';

//modal
import { Dialog, Transition } from '@headlessui/react';

// icons
import { IoAlertCircleOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const SignUpModal = ({ isOpen, setIsOpen }) => {

    const navigate = useNavigate();

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const [signUpDetails, setSignUpDetails] = useState({});

    const [userType, setUserType] = useState('');

    const signUpSubmit = (e) => {
        e.preventDefault();

        const signUpData = new FormData(e.target);

        const newData = {
            ...signUpDetails,
            fullName: signUpData.get('fullName'),
            mailId: signUpData.get(''),
            bio: signUpData.get('bio'),
            location: signUpData.get('location'),
            walletId: signUpData.get('walletId'),
            userType: signUpData.get('userType'),
            userPassword: signUpData.get('userPassword'),
        };

        setSignUpDetails(newData);

        alert(JSON.stringify(newData));

        if (userType === 'freelancer') {
            navigate("/freelancer");
        } else if (userType === 'client') {
            navigate("/client");
        }



    }


    return (
        <div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    {/* <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Payment successful
                                    </Dialog.Title> */}
                                    <form onSubmit={signUpSubmit}>
                                        <div className='flex flex-col'>
                                            <label htmlFor="fullName" className='text-lg font-semibold mt-3'>Full Name : </label>
                                            <input type="text" id='fullName' name='fullName' className='mt-2 py-1 px-1 border-2 border-blue-400 rounded-md focus:outline-none focus:border-blue-700' placeholder='Enter your full name' />
                                            <label htmlFor="mailId" className='text-lg font-semibold mt-3'>Mail id : </label>
                                            <input type="email" id='mailId' name='mailId' className='mt-2 py-1 px-1 border-2 border-blue-400 rounded-md focus:outline-none focus:border-blue-700' placeholder='usermail@gmail.com' />
                                            <label htmlFor="bio" className='text-lg font-semibold mt-3'>Bio : </label>
                                            <textarea name="bio" id="bio" cols="30" rows="3" className='mt-2 py-1 px-1 border-2 border-blue-400 rounded-md focus:outline-none focus:border-blue-700' placeholder='Completed engineering and doing freelance web 3 developement ...'></textarea>
                                            <label htmlFor="location" className='text-lg font-semibold mt-3'>Current location : </label>
                                            <input type="text" id='location' name='location' className='mt-2 py-1 px-1 border-2 border-blue-400 rounded-md focus:outline-none focus:border-blue-700' placeholder='Country-State-City' />
                                            <label htmlFor="walletId" className='text-lg font-semibold mt-3'>Wallet id : </label>
                                            <input type="text" id='walletId' name='walletId' className='mt-2 py-1 px-1 border-2 border-blue-400 rounded-md focus:outline-none focus:border-blue-700' placeholder='Crypto wallet id' />
                                            <div className='flex flex-col mt-3'>
                                                <div className='flex gap-2'>
                                                    <IoAlertCircleOutline className='my-auto text-lg' title='Freelancer : Those who are skilled to work,  Client : Those who posts works' />
                                                    <h3 className='text-lg font-semibold'>User Type</h3>
                                                </div>
                                                <div className='mt-2 flex gap-5'>
                                                    <div className='flex gap-2'>
                                                        <label htmlFor="freelancer" className='text-lg font-semibold'>Freelancer</label>
                                                        <input type='radio' id='freelancer' name='userType' value="freelancer" onChange={(e) => setUserType(e.target.value)} />
                                                    </div>
                                                    <div className='flex gap-2'>
                                                        <label htmlFor="client" className='text-lg font-semibold'>Client</label>
                                                        <input type='radio' id='client' name='userType' value="client" onChange={(e) => setUserType(e.target.value)} />
                                                    </div>
                                                </div>
                                            </div>
                                            <label htmlFor="userPassword" className='text-lg font-semibold mt-3'>Password : </label>
                                            <input type="password" id='userPassword' name='userPassword' className='mt-2 py-1 px-1 border-2 border-blue-400 rounded-md focus:outline-none focus:border-blue-700' placeholder='************' />
                                            <div className="mt-4">
                                                <button
                                                    type="submit"
                                                    className="w-full inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                    onClick={closeModal}
                                                >
                                                    Sign Up
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                    <div className='my-5'>
                                        <p className='text-center'>or</p>
                                        <div className="mt-4">
                                            <button
                                                type="button"
                                                className="w-full inline-flex justify-center items-center gap-2 rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                onClick={closeModal}
                                            >
                                                Sign Up with
                                                <img src="https://www.transparentpng.com/thumb/google-logo/google-logo-png-icon-free-download-SUF63j.png" alt="Google logo" className='w-7 h-7' />
                                            </button>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}

export default SignUpModal;