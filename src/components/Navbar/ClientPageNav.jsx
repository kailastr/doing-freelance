import React from 'react'
import { Link } from 'react-router-dom'

const ClientPageNav = () => {
    return (
        <>
            <div className='flex justify-between bg-red-500 text-white w-full py-6 px-20 sticky top-0'>
                <div className='font-semibold font-serif text-xl py-2'>
                    Hey Client..
                </div>
                <div className='flex gap-10 px-5 py-2'>
                    <Link to={'/client'} className='font-semibold hover:text-red-200'>Add Gig</Link>
                    <Link to={'/client/gigs'} className='font-semibold hover:text-red-200'>View Your Gigs</Link>
                    <Link to={'/client/gigrequest'} className='font-semibold hover:text-red-200'>View Gig Requests</Link>
                </div>
                <Link to={'/client/profile'}>
                    <img src="https://us.123rf.com/450wm/odkyrylov/odkyrylov2002/odkyrylov200200003/140021006-user-sign-icon-person-symbol-human-avatar-flat-style.jpg" alt="profile icon" className='rounded-full h-10 w-10 cursor-pointer hover:shadow-xl' />
                </Link>
            </div>
        </>
    )
}

export default ClientPageNav