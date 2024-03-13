import React from 'react';

//components
import FreelancerPageNav from '../components/Navbar/FreelancerPageNav';

const FreelancerPageLayout = (Components) => ({ props }) => {
    return (
        <>
            <FreelancerPageNav />
            <Components {...props} />
        </>
    )
}

export default FreelancerPageLayout