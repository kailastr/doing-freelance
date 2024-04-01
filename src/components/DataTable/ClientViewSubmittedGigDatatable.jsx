import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

//primereact
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";
import { Toast } from "primereact/toast";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";

//escrow modal component
import RaiseDisputeModal from "../Modal/RaiseDisputeModal";

const ClientViewSubmittedGigDatatable = () => {
  const [isEscrowOpen, setIsEscrowOpen] = useState(false);

  const [escrowUserId, setEscrowUserId] = useState("");

  const [gigRequestData, setGigRequestData] = useState([
    {
      project: "Web 3 project",
      name: "Allen",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore architecto culpa ab, expedita alias dolores tenetur perferendis deleniti voluptas fugiat ut ipsa? Deleniti culpa quibusdam nemo itaque eveniet neque reprehenderit.",
      badgeCoins: 650,
      languagesKnown: ["English", "Malayalam", "Hindi"],
      skills: ["Web Development", "PhotoGraphy", "Photoshop"],
      ExperienceLevel: "Expert",
      walletAddress: "369#2255",
      rating: 4,
      projectUrl: "https://react.dev/",
      appliedGigStatus: "Pending",
    },
    {
      project: "Static web",
      name: "Allen",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore architecto culpa ab, expedita alias dolores tenetur perferendis deleniti voluptas fugiat ut ipsa? Deleniti culpa quibusdam nemo itaque eveniet neque reprehenderit.",
      badgeCoins: 650,
      languagesKnown: ["English", "Malayalam", "Hindi"],
      skills: ["Web Development", "PhotoGraphy", "Photoshop"],
      ExperienceLevel: "Expert",
      walletAddress: "369#2255",
      rating: 3,
      projectUrl: "https://react.dev/",
      appliedGigStatus: "Completed",
    },
    {
      project: "Python Project",
      name: "Allen",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore architecto culpa ab, expedita alias dolores tenetur perferendis deleniti voluptas fugiat ut ipsa? Deleniti culpa quibusdam nemo itaque eveniet neque reprehenderit.",
      badgeCoins: 650,
      languagesKnown: ["English", "Malayalam", "Hindi"],
      skills: ["Web Development", "PhotoGraphy", "Photoshop"],
      ExperienceLevel: "Expert",
      walletAddress: "369#2255",
      rating: 5,
      projectUrl: "https://react.dev/",
      appliedGigStatus: "Completed",
    },
    {
      project: "Embedded Programmer",
      name: "Allen",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore architecto culpa ab, expedita alias dolores tenetur perferendis deleniti voluptas fugiat ut ipsa? Deleniti culpa quibusdam nemo itaque eveniet neque reprehenderit.",
      badgeCoins: 650,
      languagesKnown: ["English", "Malayalam", "Hindi"],
      skills: ["Web Development", "PhotoGraphy", "Photoshop"],
      ExperienceLevel: "Expert",
      walletAddress: "369#2255",
      rating: 4,
      projectUrl: "https://react.dev/",
      appliedGigStatus: "Pending",
    },
    {
      project: "Flutter app",
      name: "Allen",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore architecto culpa ab, expedita alias dolores tenetur perferendis deleniti voluptas fugiat ut ipsa? Deleniti culpa quibusdam nemo itaque eveniet neque reprehenderit.",
      badgeCoins: 650,
      languagesKnown: ["English", "Malayalam", "Hindi"],
      skills: ["Web Development", "PhotoGraphy", "Photoshop"],
      ExperienceLevel: "Expert",
      walletAddress: "369#2255",
      rating: 4,
      projectUrl: "https://react.dev/",
      appliedGigStatus: "Completed",
    },
    {
      project: "Blockchain Dev",
      name: "Allen",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore architecto culpa ab, expedita alias dolores tenetur perferendis deleniti voluptas fugiat ut ipsa? Deleniti culpa quibusdam nemo itaque eveniet neque reprehenderit.",
      badgeCoins: 650,
      languagesKnown: ["English", "Malayalam", "Hindi"],
      skills: ["Web Development", "PhotoGraphy", "Photoshop"],
      ExperienceLevel: "Expert",
      walletAddress: "369#2255",
      rating: 4,
      projectUrl: "https://react.dev/",
      appliedGigStatus: "Pending",
    },
    {
      project: "Web 3 project",
      name: "Allen",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore architecto culpa ab, expedita alias dolores tenetur perferendis deleniti voluptas fugiat ut ipsa? Deleniti culpa quibusdam nemo itaque eveniet neque reprehenderit.",
      badgeCoins: 650,
      languagesKnown: ["English", "Malayalam", "Hindi"],
      skills: ["Web Development", "PhotoGraphy", "Photoshop"],
      ExperienceLevel: "Expert",
      walletAddress: "369#2255",
      rating: 4,
      projectUrl: "https://react.dev/",
      appliedGigStatus: "Pending",
    },
    {
      project: "Static web",
      name: "Allen",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore architecto culpa ab, expedita alias dolores tenetur perferendis deleniti voluptas fugiat ut ipsa? Deleniti culpa quibusdam nemo itaque eveniet neque reprehenderit.",
      badgeCoins: 650,
      languagesKnown: ["English", "Malayalam", "Hindi"],
      skills: ["Web Development", "PhotoGraphy", "Photoshop"],
      ExperienceLevel: "Expert",
      walletAddress: "369#2255",
      rating: 4,
      projectUrl: "https://react.dev/",
      appliedGigStatus: "Pending",
    },
    {
      project: "Python Project",
      name: "Allen",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore architecto culpa ab, expedita alias dolores tenetur perferendis deleniti voluptas fugiat ut ipsa? Deleniti culpa quibusdam nemo itaque eveniet neque reprehenderit.",
      badgeCoins: 650,
      languagesKnown: ["English", "Malayalam", "Hindi"],
      skills: ["Web Development", "PhotoGraphy", "Photoshop"],
      ExperienceLevel: "Expert",
      walletAddress: "369#2255",
      rating: 4,
      projectUrl: "https://react.dev/",
      appliedGigStatus: "Pending",
    },
    {
      project: "Embedded Programmer",
      name: "Allen",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore architecto culpa ab, expedita alias dolores tenetur perferendis deleniti voluptas fugiat ut ipsa? Deleniti culpa quibusdam nemo itaque eveniet neque reprehenderit.",
      badgeCoins: 650,
      languagesKnown: ["English", "Malayalam", "Hindi"],
      skills: ["Web Development", "PhotoGraphy", "Photoshop"],
      ExperienceLevel: "Expert",
      walletAddress: "369#2255",
      rating: 4,
      projectUrl: "https://react.dev/",
      appliedGigStatus: "Pending",
    },
    {
      project: "Flutter app",
      name: "Allen",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore architecto culpa ab, expedita alias dolores tenetur perferendis deleniti voluptas fugiat ut ipsa? Deleniti culpa quibusdam nemo itaque eveniet neque reprehenderit.",
      badgeCoins: 650,
      languagesKnown: ["English", "Malayalam", "Hindi"],
      skills: ["Web Development", "PhotoGraphy", "Photoshop"],
      ExperienceLevel: "Expert",
      walletAddress: "369#2255",
      rating: 4,
      projectUrl: "https://react.dev/",
      appliedGigStatus: "Pending",
    },
    {
      project: "Blockchain Dev",
      name: "Allen",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore architecto culpa ab, expedita alias dolores tenetur perferendis deleniti voluptas fugiat ut ipsa? Deleniti culpa quibusdam nemo itaque eveniet neque reprehenderit.",
      badgeCoins: 650,
      languagesKnown: ["English", "Malayalam", "Hindi"],
      skills: ["Web Development", "PhotoGraphy", "Photoshop"],
      ExperienceLevel: "Expert",
      walletAddress: "369#2255",
      rating: 4,
      projectUrl: "https://react.dev/",
      appliedGigStatus: "Pending",
    },
  ]);

  const [expandedRows, setExpandedRows] = useState(null);
  const toast = useRef(null);

  const releaseFund = (rowData) => {
    const confirmation = window.confirm(
      "Are you sure you want to release the escrow fund ?"
    );
    if (confirmation) {
      // setEscrowUserId(rowData.name);
      setExpandedRows(null);
      updateGigStatus(rowData, "Completed");
    }
  };

  const raiseDispute = (rowData) => {
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



  const updateGigStatus = (rowData, status) => {
    const updatedData = gigRequestData.map((item) =>
      item === rowData ? { ...item, appliedGigStatus: status } : item
    );
    setGigRequestData(updatedData);
  };

  const rowExpansionTemplate = (data) => {
    return (
      <div className="p-3 text-black mx-2 bg-red-100 rounded-md">
        <h5 className="font-semibold text-lg my-3">
          {data.project} Application
        </h5>
        <Link to={`${data.projectUrl}`} target="_blank" className="flex">
          <div className="px-2 text-green-700 py-1 rounded-md border-2 border-green-500 bg-green-100 hover:bg-green-200 hover:shadow-md">
            Project Link
          </div>
        </Link>
        <div className="text-semibold my-3">
          Transaction Status :{" "}
          <Tag value={data.appliedGigStatus} severity="info" />
        </div>
        {data.appliedGigStatus === "Pending" && (
          <div className="flex gap-3 mt-2">
            <button
              className="bg-red-200 hover:bg-red-300 border-2 border-red-400 hover:border-red-500 hover:shadow-md px-3 py-1 rounded-md"
              onClick={() => raiseDispute(data)}
            >
              Raise Dispute
            </button>
            <button
              className="bg-blue-200 hover:bg-blue-300 border-2 border-blue-400 hover:border-blue-500 hover:shadow-md px-3 py-1 rounded-md"
              onClick={() => releaseFund(data)}
            >
              Release Fund
            </button>
          </div>
        )}
      </div>
    );
  };

  const header = (
    <div className="text-xl text-center my-5">Submitted Gig Details</div>
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
        <Column field="name" header="Name" />
        <Column field="projectUrl" header="Project Link" />
        <Column field="ExperienceLevel" header="Experience Level" />
        <Column field="appliedGigStatus" header="Transaction Status" />
      </DataTable>
      <RaiseDisputeModal
        isOpen={isEscrowOpen}
        setIsOpen={setIsEscrowOpen}
        userId={escrowUserId}
      />
    </div>
  );
};

export default ClientViewSubmittedGigDatatable;
