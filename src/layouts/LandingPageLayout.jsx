import React from 'react'

//components
import LandingPageNav from '../components/Navbar/LandingPageNav'

const LandingPageLayout = (Components) => ({ ...props }) => {

    return (
        <div>
            <LandingPageNav />
            <Components {...props} />
        </div>
    )
}

export default LandingPageLayout