import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ethers } from "ethers";

//primereact
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";
import { Toast } from "primereact/toast";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";

//escrow modal component
import RaiseDisputeModal from "../Modal/RaiseDisputeModal";
import supabase from "../../config/supabaseConfig";
import { writeContract } from "@wagmi/core";
import { connectConfig } from "../../ConnectKit/Web3Provider";
import { blanceAbi, blanceAddress } from "../../contractAbi/blance";

const ClientViewSubmittedGigDatatable = () => {
  const [isEscrowOpen, setIsEscrowOpen] = useState(false);
  const [gigRequestData, setGigRequestData] = useState([]);
  const [escrowUserId, setEscrowUserId] = useState("");
  const [fetchError, setFetchError] = useState(null);

  const fetchSubmittedGigs = async () => {
    const { data, error } = await supabase
      .from("DF-FreelancerAppliedGigs") // Replace 'users' with your table name
      .select(
        `
     project_link,
    escrow_id,
    escrow_amount,
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
      )
      .eq("status", "Submitted");
    console.log("submittedGigData", data);

    if (error) {
      setFetchError("could not fetch the existing gigs");
      console.log(error);
    }
    if (data) {
      const processedData = data?.map((item) => ({
        project: item?.["DF-CreatedGig"]?.Title,
        name: item?.["DF-FreelancerProfile"]?.FirstName,
        description: item?.["DF-CreatedGig"]?.Description,
        badgeCoins: 650,
        languagesKnown: item?.["DF-FreelancerProfile"]?.Languages,
        skills: item?.["DF-FreelancerProfile"]?.Skills,
        ExperienceLevel: item?.["DF-FreelancerProfile"]?.ExperienceLevel,
        walletAddress: "233232",
        rating: 4,
        projectUrl: item?.project_link,
        appliedGigStatus: item?.status,
        ...item,
      }));
      const gigDataIndex = data.length - 1;
      console.log("gigDataIndex:", gigDataIndex);
      const escrowId = data[gigDataIndex].escrow_id;
      console.log("fetchedEscrowId:", escrowId);
      const escrowAmount = data[gigDataIndex].escrow_amount;
      console.log("fetchedEscrowAmt:", escrowAmount);
      const gigIdd = data[gigDataIndex].gig_id;
      localStorage.setItem("disputedGigId", gigIdd);

      localStorage.setItem("freelancerEscroowId", escrowId);
      localStorage.setItem("freelancerEscrwAmt", escrowAmount);
      setGigRequestData(processedData);
      // setGigdata(data);
      setFetchError(null);
      console.log(data);
    }
  };
  useEffect(() => {
    fetchSubmittedGigs();
  }, []);

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
  const freelancerEscrwId = localStorage.getItem("freelancerEscroowId");
  // const bytes32FreelancerEscrwId =
  //   ethers.utils.formatBytes32String(freelancerEscrwId);

  // console.log("bytes32-escrowId", bytes32FreelancerEscrwId);

  const disputedGigId = localStorage.getItem("disputedGigId");
  console.log("disputeEscrwId:", freelancerEscrwId);
  localStorage.removeItem("freelancerEscroowId");
  localStorage.removeItem("disputedGigId");
  console.log("type of escrwId:", typeof freelancerEscrwId);
  console.log("type of gigId:", typeof disputedGigId);
  console.log("disputedGigId:", disputedGigId);

  const actualDisputedGigId = parseInt(disputedGigId, 10);
  console.log("type of actual-disputedGigId:", typeof actualDisputedGigId);

  const haveDispute = async (rowData) => {
    console.log("rowData", rowData);
    await writeContract(connectConfig, {
      abi: blanceAbi,
      address: blanceAddress,
      functionName: "haveDispute",
      args: [rowData.escrow_id],
    });
    const { data, error } = await supabase
      .from("DF-FreelancerAppliedGigs")
      .update({
        dispute_status: "OnDispute",
      })
      .eq("gig_id", rowData.gig_id)
      .select();
    if (error) {
      console.error("Error updating column:", error);
    } else {
      console.log("Enum column updated successfully:", data);
    }
  };
  const raiseDispute = (rowData) => {
    const confirmation = window.confirm(
      "Are you sure you want to raise dispute?"
    );
    haveDispute(rowData);
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
        <div className=" my-2">
          <p>
            <span className=" font-semibold">Project Description : </span>
            {data.description}
          </p>
        </div>
        <div className="text-semibold my-3">
          Transaction Status :{" "}
          <Tag value={data.appliedGigStatus} severity="info" />
        </div>
        {data.appliedGigStatus === "Submitted" && (
          <div className="flex gap-3 mt-2">
            <button
              className="bg-red-200 hover:bg-red-300 border-2 border-red-400 hover:border-red-500 hover:shadow-md px-3 py-1 rounded-md"
              onClick={() => raiseDispute(data)}
            >
              Raise Dispute
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
