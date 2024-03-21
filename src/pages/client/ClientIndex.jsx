import React from 'react';

//component
import AddNewGigCard from '../../components/Cards/AddNewGigCard';

//wallet
import { connectConfig } from "../../ConnectKit/Web3Provider";
import { BasicButton } from "../../ConnectKit/BasicButton";
import { getAccount } from "@wagmi/core";

const ClientIndex = () => {
    
    const account = getAccount(connectConfig);

    return (
        account.isConnected ?
            (
                <div className='w-full flex justify-center'>
                    <div className='w-11/12 my-10'>
                        <div className='flex justify-center my-5'>
                            <h1 className='text-3xl font-semibold'>Add New <span className='text-red-500'>Gig</span></h1>
                        </div>

                        <div className='flex justify-center'>
                            <AddNewGigCard />
                        </div>
                    </div>
                </div>
            )
            :
            (
                <div className="w-full flex justify-center">
                    <div
                        className="w-11/12  border-4 border-blue-400 flex items-center justify-center h-96 rounded-md mt-10"
                        style={{ backgroundImage: 'linear-gradient(to bottom right, #294a6b, #002447)' }}
                    >
                        <div className="flex flex-col">
                            <h3 className="text-xl text-white font-semibold my-8">
                                Connect Your wallet to Kickstart your Decentralised Freelancing
                                Journey
                            </h3>
                            <div className="mx-auto">
                                <BasicButton />
                            </div>
                        </div>
                    </div>
                </div>
            )

    )
}

export default ClientIndex;