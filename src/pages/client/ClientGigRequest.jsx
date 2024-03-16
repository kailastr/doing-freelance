import React, { useState, useEffect, useMemo, useCallback } from 'react';

import DataTable from 'react-data-table-component';

const ClientGigRequest = () => {

    const [gigRequestData, setGigRequestData] = useState([
        {
            project: "Web 3 project",
            name: "Allen",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore architecto culpa ab, expedita alias dolores tenetur perferendis deleniti voluptas fugiat ut ipsa? Deleniti culpa quibusdam nemo itaque eveniet neque reprehenderit.",
            badgeCoins: 650,
            languagesKnown: ["English", "Malayalam", "Hindi"],
            skills: ["Web Development", "PhotoGraphy", "Photoshop"],
            ExperienceLevel: "Expert",
            walletAddress: "369#2255",
            rating: 4,
            appliedGigStatus: "Pending"
        }
    ]);

    const [selectedRows, setSelectedRows] = useState([]);

    useEffect(() => {

        console.log('state', selectedRows);
    }, [selectedRows]);

    const acceptButtonClick = () => {
        alert("Accepted");
        console.log('clicked');
    };

    const rejectButtonClick = () => {
        alert("Rejected");
    }

    const handleChange = useCallback(state => {
        setSelectedRows(state.selectedRows);
    }, []);

    const columns = useMemo(
        () => [
            {

                cell: () => <button onClick={acceptButtonClick} className='px-2 py-2 bg-blue-300 rounded-md border-2 border-blue-500'>Accept</button>,
                ignoreRowClick: true,
                allowOverflow: true,
                button: true,
            },
            {
                cell: () => <button onClick={rejectButtonClick} className='px-2 py-2 bg-red-300 rounded-md border-2 border-red-500'>Reject</button>,
                ignoreRowClick: true,
                allowOverflow: true,
                button: true,
            },
            {
                name: 'Project',
                selector: row => row.project,
                sortable: true,
            },
            {
                name: 'Name',
                selector: row => row.name,
                sortable: true,
            },
            {
                name: 'Skills',
                selector: row => row.skills + ", ",
                sortable: true,
                grow: 3
            },
            {
                name: 'Rating (out of 5)',
                selector: row => row.rating,
                sortable: true,
            },
            {
                name: 'Badge Coins',
                selector: row => row.badgeCoins,
                sortable: true,
            },
            {
                name: 'Languages',
                selector: row => row.languagesKnown + " ",
                sortable: true,
                grow: 2
            },
            {
                name: "Status",
                selector: row => row.appliedGigStatus,
                sortable: true
            }
        ],
        [],
    );

    return (
        <div className='flex justify-center '>
            <div className='w-11/12 bg-slate-200'>
                <DataTable
                    title="Gig Requests"
                    data={gigRequestData}
                    columns={columns}
                    onSelectedRowsChange={handleChange}
                />
            </div>
        </div>
    )
}

export default ClientGigRequest