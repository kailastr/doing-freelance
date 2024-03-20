import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const FreelancerPageNav = () => {
    const navigation = useNavigate()
    const handleClick = () => {
        navigation("/freelacer/profile")
    }
    return (
        <>
            <div className='flex justify-between bg-red-500 text-white w-full py-6 px-20 sticky top-0 z-50'>
                <div className='font-semibold font-serif text-xl py-2'>
                    Hey Freelancer..
                </div>
                <div className='flex gap-10 px-5 py-2'>
                    <Link to={'/freelancer'} className='font-semibold hover:text-red-200'>New Gigs</Link>
                    <Link to={'/freelancer/appliedGig'} className='font-semibold hover:text-red-200'>Applied Gigs</Link>
                </div>
                <Link to={'/freelancer/profile'}>
                    <img
                        src="https://us.123rf.com/450wm/odkyrylov/odkyrylov2002/odkyrylov200200003/140021006-user-sign-icon-person-symbol-human-avatar-flat-style.jpg"
                        alt="profile icon"
                        className='rounded-full h-10 w-10 cursor-pointer hover:shadow-xl'
                    />
                </Link>
            </div>
        </>
    )
}

export default FreelancerPageNav