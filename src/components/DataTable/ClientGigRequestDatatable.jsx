import React, { useState, useEffect, useRef } from 'react';

//primereact
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { Toast } from 'primereact/toast';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';

//escrow modal component
import CreateEscrow from '../Modal/CreateEscrowModal';

const ClientGigRequestDatatable = () => {

    const [isEscrowOpen, setIsEscrowOpen] = useState(false);

    const [escrowUserId, setEscrowUserId] = useState("");

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
        },
        {
            project: "Static web",
            name: "Allen",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore architecto culpa ab, expedita alias dolores tenetur perferendis deleniti voluptas fugiat ut ipsa? Deleniti culpa quibusdam nemo itaque eveniet neque reprehenderit.",
            badgeCoins: 650,
            languagesKnown: ["English", "Malayalam", "Hindi"],
            skills: ["Web Development", "PhotoGraphy", "Photoshop"],
            ExperienceLevel: "Expert",
            walletAddress: "369#2255",
            rating: 3,
            appliedGigStatus: "Accepted"
        },
        {
            project: "Python Project",
            name: "Allen",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore architecto culpa ab, expedita alias dolores tenetur perferendis deleniti voluptas fugiat ut ipsa? Deleniti culpa quibusdam nemo itaque eveniet neque reprehenderit.",
            badgeCoins: 650,
            languagesKnown: ["English", "Malayalam", "Hindi"],
            skills: ["Web Development", "PhotoGraphy", "Photoshop"],
            ExperienceLevel: "Expert",
            walletAddress: "369#2255",
            rating: 5,
            appliedGigStatus: "Rejected"
        },
        {
            project: "Embedded Programmer",
            name: "Allen",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore architecto culpa ab, expedita alias dolores tenetur perferendis deleniti voluptas fugiat ut ipsa? Deleniti culpa quibusdam nemo itaque eveniet neque reprehenderit.",
            badgeCoins: 650,
            languagesKnown: ["English", "Malayalam", "Hindi"],
            skills: ["Web Development", "PhotoGraphy", "Photoshop"],
            ExperienceLevel: "Expert",
            walletAddress: "369#2255",
            rating: 4,
            appliedGigStatus: "Pending"
        },
        {
            project: "Flutter app",
            name: "Allen",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore architecto culpa ab, expedita alias dolores tenetur perferendis deleniti voluptas fugiat ut ipsa? Deleniti culpa quibusdam nemo itaque eveniet neque reprehenderit.",
            badgeCoins: 650,
            languagesKnown: ["English", "Malayalam", "Hindi"],
            skills: ["Web Development", "PhotoGraphy", "Photoshop"],
            ExperienceLevel: "Expert",
            walletAddress: "369#2255",
            rating: 4,
            appliedGigStatus: "Completed"
        },
        {
            project: "Blockchain Dev",
            name: "Allen",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore architecto culpa ab, expedita alias dolores tenetur perferendis deleniti voluptas fugiat ut ipsa? Deleniti culpa quibusdam nemo itaque eveniet neque reprehenderit.",
            badgeCoins: 650,
            languagesKnown: ["English", "Malayalam", "Hindi"],
            skills: ["Web Development", "PhotoGraphy", "Photoshop"],
            ExperienceLevel: "Expert",
            walletAddress: "369#2255",
            rating: 4,
            appliedGigStatus: "Pending"
        },
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
        },
        {
            project: "Static web",
            name: "Allen",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore architecto culpa ab, expedita alias dolores tenetur perferendis deleniti voluptas fugiat ut ipsa? Deleniti culpa quibusdam nemo itaque eveniet neque reprehenderit.",
            badgeCoins: 650,
            languagesKnown: ["English", "Malayalam", "Hindi"],
            skills: ["Web Development", "PhotoGraphy", "Photoshop"],
            ExperienceLevel: "Expert",
            walletAddress: "369#2255",
            rating: 4,
            appliedGigStatus: "Pending"
        },
        {
            project: "Python Project",
            name: "Allen",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore architecto culpa ab, expedita alias dolores tenetur perferendis deleniti voluptas fugiat ut ipsa? Deleniti culpa quibusdam nemo itaque eveniet neque reprehenderit.",
            badgeCoins: 650,
            languagesKnown: ["English", "Malayalam", "Hindi"],
            skills: ["Web Development", "PhotoGraphy", "Photoshop"],
            ExperienceLevel: "Expert",
            walletAddress: "369#2255",
            rating: 4,
            appliedGigStatus: "Pending"
        },
        {
            project: "Embedded Programmer",
            name: "Allen",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore architecto culpa ab, expedita alias dolores tenetur perferendis deleniti voluptas fugiat ut ipsa? Deleniti culpa quibusdam nemo itaque eveniet neque reprehenderit.",
            badgeCoins: 650,
            languagesKnown: ["English", "Malayalam", "Hindi"],
            skills: ["Web Development", "PhotoGraphy", "Photoshop"],
            ExperienceLevel: "Expert",
            walletAddress: "369#2255",
            rating: 4,
            appliedGigStatus: "Pending"
        },
        {
            project: "Flutter app",
            name: "Allen",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore architecto culpa ab, expedita alias dolores tenetur perferendis deleniti voluptas fugiat ut ipsa? Deleniti culpa quibusdam nemo itaque eveniet neque reprehenderit.",
            badgeCoins: 650,
            languagesKnown: ["English", "Malayalam", "Hindi"],
            skills: ["Web Development", "PhotoGraphy", "Photoshop"],
            ExperienceLevel: "Expert",
            walletAddress: "369#2255",
            rating: 4,
            appliedGigStatus: "Pending"
        },
        {
            project: "Blockchain Dev",
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

    const [expandedRows, setExpandedRows] = useState(null);
    const toast = useRef(null);

    const AcceptGig = (rowData) => {
        const confirmation = window.confirm("Are you sure you want to accept this gig request ?");
        if (confirmation) {
            setIsEscrowOpen(true);
            setEscrowUserId(rowData.name);
            setExpandedRows(null);
            updateGigStatus(rowData, "Accepted");
        }
    };

    const RejectGig = (rowData) => {
        const confirmation = window.confirm("Are you sure you want to reject this gig request?");
        if (confirmation) {
            setExpandedRows(null);
            updateGigStatus(rowData, "Rejected");
        }
    };

    const updateGigStatus = (rowData, status) => {
        const updatedData = gigRequestData.map(item =>
            item === rowData ? { ...item, appliedGigStatus: status } : item
        );
        setGigRequestData(updatedData);
    };

    const rowExpansionTemplate = (data) => {
        return (
            <div className="p-3 text-black">
                <h5 className='font-semibold text-lg'>{data.project} Application</h5>
                <div>Project Description: {data.description}</div>
                <div className='font-semibold text-normal'>Languages Known by the user : {data.languagesKnown.join(', ')}</div>
                <div className='font-semibold text-normal'>User's Skills : {data.skills.join(', ')}</div>
                <div className='text-semibold flex gap-3'>User Rating: <Rating value={data.rating} readOnly cancel={false} /></div>
                <div className='text-semibold'>Applied Gig Status: <Tag value={data.appliedGigStatus} severity="info" /></div>
                {data.appliedGigStatus === "Pending" &&
                    (
                        <div className='flex gap-3 mt-2'>
                            <button className='bg-blue-300 hover:bg-blue-400 border-2 hover:border-blue-500 hover:shadow-md px-3 py-1 rounded-md' onClick={() => AcceptGig(data)}>Accept</button>
                            <button className='bg-red-300 hover:bg-red-400 border-2 hover:border-red-500 hover:shadow-md px-3 py-1 rounded-md' onClick={RejectGig}>Reject</button>
                        </div>
                    )
                }
                {data.appliedGigStatus === "Accepted" &&
                    (
                        <div className='flex gap-3 mt-2'>
                            <button className='bg-red-300 hover:bg-red-400 border-2 hover:border-red-500 hover:shadow-md px-3 py-1 rounded-md' onClick={RejectGig}>Reject</button>
                        </div>
                    )
                }
                {data.appliedGigStatus === "Rejected" &&
                    (
                        <div className='flex gap-3 mt-2'>
                            <button className='bg-blue-300 hover:bg-blue-400 border-2 hover:border-blue-500 hover:shadow-md px-3 py-1 rounded-md' onClick={() => AcceptGig(data)}>Accept</button>
                        </div>
                    )
                }
            </div>
        );
    };

    const header = (
        <div className="text-xl text-center my-5">
            Gig Request Details
        </div>
    );

    return (
        <div className="card">
            <Toast ref={toast} />
            <DataTable value={gigRequestData} expandedRows={expandedRows} header={header} rowExpansionTemplate={rowExpansionTemplate} onRowToggle={(e) => setExpandedRows(e.data)}>
                <Column expander style={{ width: '3rem' }} />
                <Column field="project" header="Project" />
                <Column field="name" header="Name" />
                <Column field="badgeCoins" header="Badge Coins" />
                <Column field="ExperienceLevel" header="Experience Level" />
                <Column field="appliedGigStatus" header="Application Status" />
            </DataTable>
            <CreateEscrow isOpen={isEscrowOpen} setIsOpen={setIsEscrowOpen} userId={escrowUserId} />
        </div>
    );
}

export default ClientGigRequestDatatable