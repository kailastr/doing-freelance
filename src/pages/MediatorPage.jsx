import React from 'react';

import { useNavigate } from 'react-router-dom';

//datatable
import MediatorDataTable from '../components/DataTable/MediatorDataTable';

//navbar
import MediatorNavbar from '../components/Navbar/MediatorNavbar';

const MediatorPage = () => {
    const navigate = useNavigate();
    const SignOut = () => {
        localStorage.clear();
        navigate('/');
    }
    return (
        <>
            <MediatorNavbar />
            <div>
                <MediatorDataTable />
            </div>
        </>
    )
}

export default MediatorPage