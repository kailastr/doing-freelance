import React from 'react';
import { Outlet } from 'react-router-dom';

//navbar
import FreelancerPageNav from '../components/Navbar/FreelancerPageNav';

const Freelancer = () => {

    return (
        <>
            <FreelancerPageNav />
            <Outlet />
        </>
    )
}

export default Freelancer