import React from 'react';
import { Outlet } from 'react-router-dom';

//component
import ClientPageNav from '../components/Navbar/ClientPageNav'

const Client = () => {
    return (
        <>
            <ClientPageNav />
            <Outlet />
        </>
    )
}

export default Client