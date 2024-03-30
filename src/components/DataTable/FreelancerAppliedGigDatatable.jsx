import React, { useState, useEffect, useRef } from "react";

//primereact
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import { Toast } from "primereact/toast";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";

//escrow modal component
import SubmitEscrowProject from "../Modal/SubmitEscrowProject";
import supabase from "../../config/supabaseConfig";

const FreelancerAppliedGigDatatable = async () => {
  const [isSubmitEscrowOpen, setIsSubmitEscrowOpen] = useState(false);

  const [escrowUserId, setEscrowUserId] = useState("");
  const [gigApplicationData, setGigApplicationData] = useState([]);
  const { data, error } = await supabase
    .from("DF-FreelancerAppliedGigs") // Replace 'users' with your table name
    .select(
      `
    id,
    gig_id,
    status,
    freelancer_email,
    DF-FreelancerProfile (
      *
    ),
    DF-CreatedGig (
      *
    )
  `
    );
  console.log("gigData", data);

  // const processedData = data?.map((item) => ({
  //   project: item?.["DF-CreatedGig"]?.Title,
  //   name: item?.["DF-FreelancerProfile"]?.FirstName,
  //   description: item?.["DF-CreatedGig"]?.Description,
  //   badgeCoins: 650,
  //   languagesKnown: item?.["DF-FreelancerProfile"]?.Languages,
  //   skills: item?.["DF-FreelancerProfile"]?.Skills,
  //   ExperienceLevel: item?.["DF-FreelancerProfile"]?.ExperienceLevel,
  //   walletAddress: "233232",
  //   rating: 4,
  //   appliedGigStatus: item?.status,
  // }));
  // setGigApplicationData(processedData);

  setGigApplicationData(
    data?.map((item) => ({
      project: item?.["DF-CreatedGig"]?.Title,
      name: item?.["DF-FreelancerProfile"]?.FirstName,
      description: item?.["DF-CreatedGig"]?.Description,
      badgeCoins: 650,
      languagesKnown: item?.["DF-FreelancerProfile"]?.Languages,
      skills: item?.["DF-FreelancerProfile"]?.Skills,
      ExperienceLevel: item?.["DF-FreelancerProfile"]?.ExperienceLevel,
      walletAddress: "233232",
      rating: 4,
      appliedGigStatus: item?.status,
    }))
  );

  //   const [gigApplicationData, setGigApplicationData] = useState([
  //     {
  //       project: "Web 3 project",
  //       deadline: "2024-03-27",
  //       name: "Allen",
  //       description:
  //         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore architecto culpa ab, expedita alias dolores tenetur perferendis deleniti voluptas fugiat ut ipsa? Deleniti culpa quibusdam nemo itaque eveniet neque reprehenderit.",
  //       badgeCoins: 650,
  //       languagesKnown: ["English", "Malayalam", "Hindi"],
  //       skills: ["Web Development", "PhotoGraphy", "Photoshop"],
  //       ExperienceLevel: "Expert",
  //       walletAddress: "369#2255",
  //       rating: 4,
  //       appliedGigStatus: "Pending",
  //     },
  //     {
  //       project: "Static web",
  //       deadline: "2024-03-27",
  //       name: "Allen",
  //       description:
  //         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore architecto culpa ab, expedita alias dolores tenetur perferendis deleniti voluptas fugiat ut ipsa? Deleniti culpa quibusdam nemo itaque eveniet neque reprehenderit.",
  //       badgeCoins: 650,
  //       languagesKnown: ["English", "Malayalam", "Hindi"],
  //       skills: ["Web Development", "PhotoGraphy", "Photoshop"],
  //       ExperienceLevel: "Expert",
  //       walletAddress: "369#2255",
  //       rating: 3,
  //       appliedGigStatus: "Accepted",
  //     },
  //     {
  //       project: "Python Project",
  //       deadline: "2024-03-27",
  //       name: "Allen",
  //       description:
  //         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore architecto culpa ab, expedita alias dolores tenetur perferendis deleniti voluptas fugiat ut ipsa? Deleniti culpa quibusdam nemo itaque eveniet neque reprehenderit.",
  //       badgeCoins: 650,
  //       languagesKnown: ["English", "Malayalam", "Hindi"],
  //       skills: ["Web Development", "PhotoGraphy", "Photoshop"],
  //       ExperienceLevel: "Expert",
  //       walletAddress: "369#2255",
  //       rating: 5,
  //       appliedGigStatus: "Rejected",
  //     },
  //     {
  //       project: "Embedded Programmer",
  //       deadline: "2024-03-27",
  //       name: "Allen",
  //       description:
  //         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore architecto culpa ab, expedita alias dolores tenetur perferendis deleniti voluptas fugiat ut ipsa? Deleniti culpa quibusdam nemo itaque eveniet neque reprehenderit.",
  //       badgeCoins: 650,
  //       languagesKnown: ["English", "Malayalam", "Hindi"],
  //       skills: ["Web Development", "PhotoGraphy", "Photoshop"],
  //       ExperienceLevel: "Expert",
  //       walletAddress: "369#2255",
  //       rating: 4,
  //       appliedGigStatus: "Pending",
  //     },
  //     {
  //       project: "Flutter app",
  //       deadline: "2024-03-27",
  //       name: "Allen",
  //       description:
  //         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore architecto culpa ab, expedita alias dolores tenetur perferendis deleniti voluptas fugiat ut ipsa? Deleniti culpa quibusdam nemo itaque eveniet neque reprehenderit.",
  //       badgeCoins: 650,
  //       languagesKnown: ["English", "Malayalam", "Hindi"],
  //       skills: ["Web Development", "PhotoGraphy", "Photoshop"],
  //       ExperienceLevel: "Expert",
  //       walletAddress: "369#2255",
  //       rating: 4,
  //       appliedGigStatus: "Completed",
  //     },
  //     {
  //       project: "Blockchain Dev",
  //       deadline: "2024-03-27",
  //       name: "Allen",
  //       description:
  //         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore architecto culpa ab, expedita alias dolores tenetur perferendis deleniti voluptas fugiat ut ipsa? Deleniti culpa quibusdam nemo itaque eveniet neque reprehenderit.",
  //       badgeCoins: 650,
  //       languagesKnown: ["English", "Malayalam", "Hindi"],
  //       skills: ["Web Development", "PhotoGraphy", "Photoshop"],
  //       ExperienceLevel: "Expert",
  //       walletAddress: "369#2255",
  //       rating: 4,
  //       appliedGigStatus: "Pending",
  //     },
  //     {
  //       project: "Web 3 project",
  //       deadline: "2024-03-27",
  //       name: "Allen",
  //       description:
  //         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore architecto culpa ab, expedita alias dolores tenetur perferendis deleniti voluptas fugiat ut ipsa? Deleniti culpa quibusdam nemo itaque eveniet neque reprehenderit.",
  //       badgeCoins: 650,
  //       languagesKnown: ["English", "Malayalam", "Hindi"],
  //       skills: ["Web Development", "PhotoGraphy", "Photoshop"],
  //       ExperienceLevel: "Expert",
  //       walletAddress: "369#2255",
  //       rating: 4,
  //       appliedGigStatus: "Pending",
  //     },
  //     {
  //       project: "Static web",
  //       deadline: "2024-03-27",
  //       name: "Allen",
  //       description:
  //         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore architecto culpa ab, expedita alias dolores tenetur perferendis deleniti voluptas fugiat ut ipsa? Deleniti culpa quibusdam nemo itaque eveniet neque reprehenderit.",
  //       badgeCoins: 650,
  //       languagesKnown: ["English", "Malayalam", "Hindi"],
  //       skills: ["Web Development", "PhotoGraphy", "Photoshop"],
  //       ExperienceLevel: "Expert",
  //       walletAddress: "369#2255",
  //       rating: 4,
  //       appliedGigStatus: "Pending",
  //     },
  //     {
  //       project: "Python Project",
  //       deadline: "2024-03-27",
  //       name: "Allen",
  //       description:
  //         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore architecto culpa ab, expedita alias dolores tenetur perferendis deleniti voluptas fugiat ut ipsa? Deleniti culpa quibusdam nemo itaque eveniet neque reprehenderit.",
  //       badgeCoins: 650,
  //       languagesKnown: ["English", "Malayalam", "Hindi"],
  //       skills: ["Web Development", "PhotoGraphy", "Photoshop"],
  //       ExperienceLevel: "Expert",
  //       walletAddress: "369#2255",
  //       rating: 4,
  //       appliedGigStatus: "Pending",
  //     },
  //     {
  //       project: "Embedded Programmer",
  //       deadline: "2024-03-27",
  //       name: "Allen",
  //       description:
  //         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore architecto culpa ab, expedita alias dolores tenetur perferendis deleniti voluptas fugiat ut ipsa? Deleniti culpa quibusdam nemo itaque eveniet neque reprehenderit.",
  //       badgeCoins: 650,
  //       languagesKnown: ["English", "Malayalam", "Hindi"],
  //       skills: ["Web Development", "PhotoGraphy", "Photoshop"],
  //       ExperienceLevel: "Expert",
  //       walletAddress: "369#2255",
  //       rating: 4,
  //       appliedGigStatus: "Pending",
  //     },
  //     {
  //       project: "Flutter app",
  //       deadline: "2024-03-27",
  //       name: "Allen",
  //       description:
  //         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore architecto culpa ab, expedita alias dolores tenetur perferendis deleniti voluptas fugiat ut ipsa? Deleniti culpa quibusdam nemo itaque eveniet neque reprehenderit.",
  //       badgeCoins: 650,
  //       languagesKnown: ["English", "Malayalam", "Hindi"],
  //       skills: ["Web Development", "PhotoGraphy", "Photoshop"],
  //       ExperienceLevel: "Expert",
  //       walletAddress: "369#2255",
  //       rating: 4,
  //       appliedGigStatus: "Pending",
  //     },
  //     {
  //       project: "Blockchain Dev",
  //       deadline: "2024-03-27",
  //       name: "Allen",
  //       description:
  //         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore architecto culpa ab, expedita alias dolores tenetur perferendis deleniti voluptas fugiat ut ipsa? Deleniti culpa quibusdam nemo itaque eveniet neque reprehenderit.",
  //       badgeCoins: 650,
  //       languagesKnown: ["English", "Malayalam", "Hindi"],
  //       skills: ["Web Development", "PhotoGraphy", "Photoshop"],
  //       ExperienceLevel: "Expert",
  //       walletAddress: "369#2255",
  //       rating: 4,
  //       appliedGigStatus: "Pending",
  //     },
  //   ]);

  const [expandedRows, setExpandedRows] = useState(null);
  const toast = useRef(null);

  const SubmitProject = (rowData) => {
    const confirmation = window.confirm(
      "Is your project completed to submit ?"
    );
    if (confirmation) {
      setIsSubmitEscrowOpen(true);
      setEscrowUserId(rowData.name);
      setExpandedRows(null);
      updateGigStatus(rowData, "Completed");
    }
  };

  const updateGigStatus = (rowData, status) => {
    const updatedData = gigApplicationData.map((item) =>
      item === rowData ? { ...item, appliedGigStatus: status } : item
    );
    setGigApplicationData(updatedData);
  };

  const rowExpansionTemplate = (data) => {
    const today = new Date();
    const deadlineDate = new Date(data.deadline);
    const differenceInTime = deadlineDate.getTime() - today.getTime();
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));

    return (
      <div className="p-3 text-black mx-3 bg-red-100 rounded-md">
        <h5 className="font-semibold text-lg my-2">{data.project}</h5>
        <div className="my-2">
          <p>
            <span className="font-semibold">Project Description:</span>{" "}
            {data.description}
          </p>
        </div>
        <div className="font-semibold text-normal">
          User's Skills : {data.skills.join(", ")}
        </div>
        <div className="text-semibold my-2">
          Applied Gig Status:{" "}
          <Tag value={data.appliedGigStatus} severity="info" />
        </div>
        {data.appliedGigStatus === "Accepted" && (
          <div className="gap-3 mt-2">
            <div className="font-semibold text-md my-2">
              Deadline : {differenceInDays} more days
            </div>
            <button
              className="bg-blue-300 hover:bg-blue-400 border-2 hover:border-blue-500 hover:shadow-md px-3 py-1 rounded-md"
              onClick={() => SubmitProject(data)}
            >
              Submit Project
            </button>
          </div>
        )}
      </div>
    );
  };

  const header = (
    <div className="text-xl text-center my-5">Gig Application Details</div>
  );

  return (
    <div className="card">
      <Toast ref={toast} />
      <DataTable
        value={gigApplicationData}
        expandedRows={expandedRows}
        header={header}
        rowExpansionTemplate={rowExpansionTemplate}
        onRowToggle={(e) => setExpandedRows(e.data)}
      >
        <Column expander style={{ width: "3rem" }} />
        <Column field="project" header="Project" />
        <Column field="deadline" header="Deadline" />
        <Column field="appliedGigStatus" header="Application Status" />
      </DataTable>
      <SubmitEscrowProject
        isOpen={isSubmitEscrowOpen}
        setIsOpen={setIsSubmitEscrowOpen}
        userId={escrowUserId}
      />
    </div>
  );
};

export default FreelancerAppliedGigDatatable;
