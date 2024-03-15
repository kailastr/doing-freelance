import React from 'react';

//component
import AddNewGigCard from '../../components/Cards/AddNewGigCard';

//layout

const ClientIndex = () => {
    return (
        <>
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
        </>
    )
}

export default ClientIndex;