import React from 'react';

//components
import ClientPageNav from '../components/Navbar/ClientPageNav'

const ClientPageLayout = (Components) => ({ props }) => {

    return (
        <>
            <ClientPageNav />
            <Components {...props} />
        </>
    )
}

export default ClientPageLayout