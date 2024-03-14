import React, { useState, useEffect } from 'react';

//dataTable 
import DataTable from 'react-data-table-component';

const FreelancerAppliedGig = () => {

    const [data, setData] = useState([
        {
            gigTitle: "Web 3 Project",
            status: "Pending",
            appliedDate: "12/01/2024",
        },
        {
            gigTitle: "Web 3 Project",
            status: "Approved",
            appliedDate: "12/01/2024",
        },
        {
            gigTitle: "Web 3 Project",
            status: "Approved",
            appliedDate: "12/01/2024",
        },
        {
            gigTitle: "Web 3 Project",
            status: "Completed",
            appliedDate: "12/01/2024",
        },
        {
            gigTitle: "Web 3 Project",
            status: "Rejected",
            appliedDate: "12/01/2024",
        }
    ]);

    const columns = [
        {
            name: "Project Title",
            selector: row => row.gigTitle,
            sortable: true,
            fixed: true,
        },
        {
            name: "Gig Status",
            selector: row => row.status,
            sortable: true,
            fixed: true
        },
        {
            name: "Applied Date",
            selector: row => row.appliedDate,
            sortable: true,
            fixed: true
        }
    ];

    const conditionalRowStyles = [
        {
            when: row => row.status === "Rejected",
            style: {
                backgroundColor: 'rgba(242, 38, 19, 0.9)',
                color: 'white',
                '&:hover': {
                    cursor: 'pointer',
                },
            },
        },
        {
            when: row => row.status === "Approved",
            style: {
                backgroundColor: 'rgba(0, 140, 255, 0.9)',
                color: 'white',
                '&:hover': {
                    cursor: 'pointer',
                },
            },
        },
        {
            when: row => row.status === "Completed",
            style: {
                backgroundColor: 'rgba(63, 195, 128, 0.9)',
                color: 'white',
                '&:hover': {
                    cursor: 'pointer',
                },
            },
        },
        {
            when: row => row.status === "Pending",
            style: {
                backgroundColor: 'rgba(248, 148, 6, 0.9)',
                color: 'white',
                '&:hover': {
                    cursor: 'pointer',
                },
            },
        },
    ];

    return (
        <>
            <div>
                <div className='flex justify-center'>
                    <div className=' w-11/12 my-10'>
                        <div className='flex justify-center'>
                            <h1 className='text-2xl font-semibold'>View Status of applied <span className='text-red-600'>Gigs</span></h1>
                        </div>
                        <div className='flex justify-center  gap-3 my-5'>
                            <div className='flex gap-2'>
                                <div className='h-5 w-5 bg-blue-500 my-auto' />
                                <h2 className='text-md'>Gig applied status is Approved</h2>
                            </div>
                            <div className='flex gap-2'>
                                <div className='h-5 w-5 bg-green-500 my-auto' />
                                <h2 className='text-md'>Gig is Completed</h2>
                            </div>
                            <div className='flex gap-2'>
                                <div className='h-5 w-5 bg-orange-500 my-auto' />
                                <h2 className='text-md'>Gig applied status is pending</h2>
                            </div>
                            <div className='flex gap-2'>
                                <div className='h-5 w-5 bg-red-500 my-auto' />
                                <h2 className='text-md'>Gig applied status is Rejected</h2>
                            </div>
                        </div>
                        <div className='my-5'>
                            <DataTable
                                columns={columns}
                                data={data}
                                conditionalRowStyles={conditionalRowStyles}
                                pagination
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FreelancerAppliedGig;