import React, { useState, useEffect, useRef } from 'react';

//primereact
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import { Toast } from "primereact/toast";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";

import supabase from "../../config/supabaseConfig";

const MediatorDataTable = () => {
    const Email = localStorage.getItem("userEmail");
    const [isEscrowOpen, setIsEscrowOpen] = useState(false);

    const [escrowUserId, setEscrowUserId] = useState("");
    const [fetchError, setFetchError] = useState(null);
    const [gigData, setGigdata] = useState([]);
    useEffect(() => {
        const fetchGigs = async () => {
            //   const { data, error } = await supabase.from("DF-CreatedGig").select();
            const { data, error } = await supabase
                .from("users") // Replace 'users' with your table name
                .select("*") // Select the columns you want to fetch
                .eq("Email", Email) // Filter by the user ID
                .single();

            if (error) {
                setFetchError("could not fetch the existing gigs");
                console.log(error);
            }
            if (data) {
                setGigdata(data);
                setFetchError(null);
                console.log(data);
            }
        };
        debugger;
        fetchGigs();
    }, []);

    const [gigRequestData, setGigRequestData] = useState([
        {
            project: "Web 3 project",
            clientName: "Allen",
            freelancerName: "David",
            description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore architecto culpa ab, expedita alias dolores tenetur perferendis deleniti voluptas fugiat ut ipsa? Deleniti culpa quibusdam nemo itaque eveniet neque reprehenderit.",
            projectLink: "https:/github.com",
            escrowid: "345w9834",
            disputeStatus: "Pending",
        },
        {
            project: "Static web",
            clientName: "Allen",
            freelancerName: "David",
            description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore architecto culpa ab, expedita alias dolores tenetur perferendis deleniti voluptas fugiat ut ipsa? Deleniti culpa quibusdam nemo itaque eveniet neque reprehenderit.",
            projectLink: "https:/github.com",
            escrowid: "345w9834",
            disputeStatus: "Accepted",
        },
        {
            project: "Python Project",
            clientName: "Allen",
            freelancerName: "David",
            description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore architecto culpa ab, expedita alias dolores tenetur perferendis deleniti voluptas fugiat ut ipsa? Deleniti culpa quibusdam nemo itaque eveniet neque reprehenderit.",
            projectLink: "https:/github.com",
            escrowid: "345w9834",
            disputeStatus: "Rejected",
        },
        {
            project: "Embedded Programmer",
            clientName: "Allen",
            freelancerName: "David",
            description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore architecto culpa ab, expedita alias dolores tenetur perferendis deleniti voluptas fugiat ut ipsa? Deleniti culpa quibusdam nemo itaque eveniet neque reprehenderit.",
            projectLink: "https:/github.com",
            escrowid: "345w9834",
            disputeStatus: "Pending",
        },
        {
            project: "Flutter app",
            clientName: "Allen",
            freelancerName: "David",
            description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore architecto culpa ab, expedita alias dolores tenetur perferendis deleniti voluptas fugiat ut ipsa? Deleniti culpa quibusdam nemo itaque eveniet neque reprehenderit.",
            projectLink: "https:/github.com",
            escrowid: "345w9834",
            disputeStatus: "Completed",
        },
        {
            project: "Blockchain Dev",
            clientName: "Allen",
            freelancerName: "David",
            description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore architecto culpa ab, expedita alias dolores tenetur perferendis deleniti voluptas fugiat ut ipsa? Deleniti culpa quibusdam nemo itaque eveniet neque reprehenderit.",
            projectLink: "https:/github.com",
            escrowid: "345w9834",
            disputeStatus: "Pending",
        },
        {
            project: "Web 3 project",
            clientName: "Allen",
            freelancerName: "David",
            description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore architecto culpa ab, expedita alias dolores tenetur perferendis deleniti voluptas fugiat ut ipsa? Deleniti culpa quibusdam nemo itaque eveniet neque reprehenderit.",
            projectLink: "https:/github.com",
            escrowid: "345w9834",
            disputeStatus: "Pending",
        },
        {
            project: "Static web",
            clientName: "Allen",
            freelancerName: "David",
            description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore architecto culpa ab, expedita alias dolores tenetur perferendis deleniti voluptas fugiat ut ipsa? Deleniti culpa quibusdam nemo itaque eveniet neque reprehenderit.",
            projectLink: "https:/github.com",
            escrowid: "345w9834",
            disputeStatus: "Pending",
        },
        {
            project: "Python Project",
            clientName: "Allen",
            freelancerName: "David",
            description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore architecto culpa ab, expedita alias dolores tenetur perferendis deleniti voluptas fugiat ut ipsa? Deleniti culpa quibusdam nemo itaque eveniet neque reprehenderit.",
            projectLink: "https:/github.com",
            escrowid: "345w9834",
            disputeStatus: "Pending",
        },
        {
            project: "Embedded Programmer",
            clientName: "Allen",
            freelancerName: "David",
            description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore architecto culpa ab, expedita alias dolores tenetur perferendis deleniti voluptas fugiat ut ipsa? Deleniti culpa quibusdam nemo itaque eveniet neque reprehenderit.",
            projectLink: "https:/github.com",
            escrowid: "345w9834",
            disputeStatus: "Pending",
        },
        {
            project: "Flutter app",
            clientName: "Allen",
            freelancerName: "David",
            description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore architecto culpa ab, expedita alias dolores tenetur perferendis deleniti voluptas fugiat ut ipsa? Deleniti culpa quibusdam nemo itaque eveniet neque reprehenderit.",
            projectLink: "https:/github.com",
            escrowid: "345w9834",
            disputeStatus: "Pending",
        },
        {
            project: "Blockchain Dev",
            clientName: "Allen",
            freelancerName: "David",
            description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore architecto culpa ab, expedita alias dolores tenetur perferendis deleniti voluptas fugiat ut ipsa? Deleniti culpa quibusdam nemo itaque eveniet neque reprehenderit.",
            projectLink: "https:/github.com",
            escrowid: "345w9834",
            disputeStatus: "Pending",
        },
    ]);

    const [expandedRows, setExpandedRows] = useState(null);
    const toast = useRef(null);

    const AcceptGig = (rowData) => {
        const confirmation = window.confirm(
            "Are you sure you want to accept this gig request ?"
        );
        if (confirmation) {
            setIsEscrowOpen(true);
            setEscrowUserId(rowData.name);
            setExpandedRows(null);
            updateGigStatus(rowData, "Completed");
        }
    };

    const RejectGig = (rowData) => {
        const confirmation = window.confirm(
            "Are you sure you want to reject this gig request?"
        );
        if (confirmation) {
            setExpandedRows(null);
            updateGigStatus(rowData, "Rejected");
        }
    };

    const deposieEscrow = (rowData) => {
        alert("Escrow Amount Deposited");
        setExpandedRows(null);
        updateGigStatus(rowData, "Completed");
    };

    const updateGigStatus = (rowData, status) => {
        const updatedData = gigRequestData.map((item) =>
            item === rowData ? { ...item, disputeStatus: status } : item
        );
        setGigRequestData(updatedData);
    };

    const rowExpansionTemplate = (data) => {
        return (
            <div className="p-3 text-black mx-3 bg-red-100 rounded-md">
                <h5 className="font-semibold text-lg my-3">
                    {data.project} Application
                </h5>
                <div>
                    <a href={data.projectLink} target='_blank'>
                        <button className='bg-red-200 border-2 border-red-600 hover:bg-red-300 px-3 py-1 rounded-md'>
                            Project Link
                        </button>
                    </a>
                </div>
                <div className="my-2">
                    <span className="font-semibold">Project Description:</span>{" "}
                    {data.description}
                </div>
                <div className=" my-2">
                    Applied Gig Status:{" "}
                    <Tag value={data.disputeStatus} severity="info" />
                </div>
                {data.disputeStatus === "Pending" && (
                    <div className="flex gap-3 mt-2">
                        <button
                            className="bg-red-200 hover:bg-red-300 border-2 border-red-600 hover:border-red-500 hover:shadow-md px-3 py-1 rounded-md"
                            onClick={() => AcceptGig(data)}
                        >
                            Resolve Dispute
                        </button>
                    </div>
                )}
            </div>
        );
    };

    const header = (
        <div className="text-xl text-center my-5">Disputes</div>
    );

    return (
        <div className="card">
            <Toast ref={toast} />
            <DataTable
                value={gigRequestData}
                expandedRows={expandedRows}
                header={header}
                rowExpansionTemplate={rowExpansionTemplate}
                onRowToggle={(e) => setExpandedRows(e.data)}
            >
                <Column expander style={{ width: "3rem" }} />
                <Column field="project" header="Project" />
                <Column field="clientName" header="Client Name" />
                <Column field="freelancerName" header="Freelancer Name" />
                <Column field='escrowid' header="Escrow Id" />
                <Column field="disputeStatus" header="Dispute Status" />
            </DataTable>
        </div>
    );
};

export default MediatorDataTable