import React, { Fragment, useState } from 'react'

//headless ui modal
import { Dialog, Transition } from '@headlessui/react';


const CreateEscrow = ({ isOpen, setIsOpen, userId }) => {

    const [expandModal, setExpandModal] = useState(false);

    const [escrowDeadline, setEscrowDeadline] = useState('');
    const [createEscrowId, setCreateEscrowId] = useState('');
    const [escrowAmount, setEscrowAmount] = useState('');
    const [depositEscrowId, setDeopiteEscrowId] = useState('');

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const escrowSubmit = (e) => {
        e.preventDefault();
        console.log(userId, createEscrowId, escrowAmount, depositEscrowId);
        closeModal();
        alert("Escrow Successfully created");
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
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900 text-center"
                                    >
                                        Create an escrow
                                    </Dialog.Title>

                                    <form onSubmit={escrowSubmit}>
                                        <div className='flex flex-col'>
                                            <p className='text-lg font-semibold my-3 text-center'>{`User Id : ${userId}`}</p>
                                            <div className='flex gap-5 items-center my-3'>
                                                <label htmlFor="escrowDeadline" className='text-lg w-5/12 font-semibold'>Escrow Deadline</label>
                                                <input
                                                    type="date"
                                                    name="escrowDeadline"
                                                    id="escrowDeadline"
                                                    className='border border-blue-600 rounded-md py-1 px-2'
                                                    onChange={(e) => setEscrowDeadline(e.target.value)}
                                                />
                                            </div>
                                            <div className='flex gap-5 items-center my-3'>
                                                <label htmlFor="CreateEscrowId" className='text-lg w-5/12 font-semibold'>Create Escrow Id : </label>
                                                <input
                                                    type="text"
                                                    name="CreateEscrowId"
                                                    id="CreateEscrowId"
                                                    className='border border-blue-600 rounded-md py-1 px-2'
                                                    onChange={(e) => setCreateEscrowId(e.target.value)}
                                                    placeholder='Enter your escrow Id'
                                                />
                                            </div>
                                            <div className='flex gap-5 items-center my-3'>
                                                <label htmlFor="escrowAmount" className='text-lg w-5/12 font-semibold'>Escrow Amount : </label>
                                                <input
                                                    type="text"
                                                    name="escrowAmount"
                                                    id="escrowAmount"
                                                    className='border border-blue-600 rounded-md px-2 py-1'
                                                    placeholder='In USDT'
                                                    onChange={(e) => setEscrowAmount(e.target.value)}
                                                />
                                            </div>
                                            <div className='my-3'>
                                                <div className='text-lg text-center font-semibold border border-blue-600 w-full py-2 rounded-md bg-blue-100 hover:bg-blue-200 cursor-pointer' onClick={() => setExpandModal(true)}>Send Confirmation</div>
                                            </div>
                                            {expandModal && (
                                                <div className='my-3'>
                                                    <p className='my-3 text-lg font-semibold text-center'>Create Escrow Id : {createEscrowId}</p>
                                                    <div className='flex items-center gap-5'>
                                                        <label htmlFor="depositeEscrowId" className='text-lg w-5/12 font-semibold'>Create Escrow Id : </label>
                                                        <input
                                                            type="text"
                                                            name="depositeEscrowId"
                                                            id="depositeEscrowId"
                                                            className='border border-blue-600 rounded-md py-1 px-2 my-3'
                                                            onChange={(e) => setDeopiteEscrowId(e.target.value)}
                                                            placeholder='Enter your escrow Id'
                                                        />
                                                    </div>
                                                    <button type='submit' className='text-lg font-semibold border border-blue-600 w-full py-2 rounded-md bg-blue-100 hover:bg-blue-200'>Send Confirmation</button>
                                                </div>
                                            )}
                                        </div>
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
};

export default CreateEscrow