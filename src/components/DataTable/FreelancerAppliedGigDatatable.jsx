import React, { useState, useEffect, useRef } from "react";

// primereact
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import { Toast } from "primereact/toast";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";

// escrow modal component
import SubmitEscrowProject from "../Modal/SubmitEscrowProject";
import supabase from "../../config/supabaseConfig";
import { writeContract } from "@wagmi/core";
import { connectConfig } from "../../ConnectKit/Web3Provider";
import { blanceAbi, blanceAddress } from "../../contractAbi/blance";

const FreelancerAppliedGigDatatable = () => {
  const [isSubmitEscrowOpen, setIsSubmitEscrowOpen] = useState(false);
  const [escrowUserId, setEscrowUserId] = useState("");
  const [gigApplicationData, setGigApplicationData] = useState([]);
  const [expandedRows, setExpandedRows] = useState(null);
  const [submittedData, setSumbittedData] = useState([]);
  const toast = useRef(null);

  useEffect(() => {
    const fetchGigData = async () => {
      const { data, error } = await supabase
        .from("DF-FreelancerAppliedGigs")
        .select(
          `
          escrow_id,
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
      console.log("fetchingData:", data);

      if (error) {
        console.error("Error fetching gig data:", error);
      } else {
        const gigData = data?.map((item) => ({
          project: item?.["DF-CreatedGig"]?.Title,
          name: item?.["DF-FreelancerProfile"]?.FirstName,
          deadline: item?.["DF-CreatedGig"]?.Date,
          escrowId: item?.escrow_id,
          gigId: item?.gig_id,
          description: item?.["DF-CreatedGig"]?.Description,
          badgeCoins: 650,
          languagesKnown: item?.["DF-FreelancerProfile"]?.Languages,
          skills: item?.["DF-FreelancerProfile"]?.Skills,
          ExperienceLevel: item?.["DF-FreelancerProfile"]?.ExperienceLevel,
          walletAddress: "233232",
          rating: 4,
          appliedGigStatus: item?.status,
        }));

        setGigApplicationData(gigData);
        const gigDataIndex = gigData.length - 1;
        console.log("gigDataIndex:", gigDataIndex);
        const escrowId = gigData[gigDataIndex].escrowId;
        localStorage.setItem("freelancerEscrowId", escrowId);

        console.log("gigData:", gigData);
      }
    };

    fetchGigData();
  }, []);
  const SubmitProject = async (rowData) => {
    setSumbittedData(rowData);
    console.log("userrrData:", rowData);
    // const escrowId = localStorage.getItem("freelancerEscrowId");
    localStorage.removeItem("freelancerEscrowId");
    console.log("roowData:", rowData);
    const submitGig = await writeContract(connectConfig, {
      abi: blanceAbi,
      address: blanceAddress,
      functionName: "submitFinishedGig",
      args: [rowData.escrowId],
    });
    // const { data, error } = await supabase
    //   .from("DF-FreelancerAppliedGigs")
    //   .update({
    //     status: "Accepted",
    //     escrow_id: rowData.escrowId,
    //     escrow_amount: escrowAmount,
    //   })
    //   .eq("gig_id", giigId)
    //   .select();
    const confirmation = window.confirm(
      "Is your project completed to submit ?"
    );
    if (confirmation) {
      setIsSubmitEscrowOpen(true);
      setEscrowUserId(rowData.name);
      setExpandedRows(null);
      updateGigStatus(rowData, "Submitted");
    }
  };

  const ViewPaymentStatus = (rowData) => {
    setEscrowUserId(rowData.name);
    setExpandedRows(null);
    updateGigStatus(rowData, "Completed");
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
            {console.log("submitDataa:", data)}
          </div>
        )}
        {data.appliedGigStatus === "Submitted" && (
          <div className="gap-3 mt-2">
            <button
              className="bg-blue-300 hover:bg-blue-400 border-2 hover:border-blue-500 hover:shadow-md px-3 py-1 rounded-md"
              onClick={() => ViewPaymentStatus(data)}
            >
              Credit Payment
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
        <Column field="escrowId" header="Escrow Id" />
        <Column field="appliedGigStatus" header="Application Status" />
      </DataTable>
      <SubmitEscrowProject
        isOpen={isSubmitEscrowOpen}
        setIsOpen={setIsSubmitEscrowOpen}
        userId={escrowUserId}
        userData={submittedData}
      />
    </div>
  );
};

export default FreelancerAppliedGigDatatable;
