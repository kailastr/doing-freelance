import React, { useState, useEffect, useRef } from "react";

//primereact
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import { Toast } from "primereact/toast";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";

import supabase from "../../config/supabaseConfig";
import { writeContract } from "@wagmi/core";
import { parseEther } from "viem";
import { connectConfig } from "../../ConnectKit/Web3Provider";
import { blanceAbi, blanceAddress } from "../../contractAbi/blance";

//escrow modal component
import CreateEscrow from "../Modal/CreateEscrowModal";

const ClientGigRequestDatatable = () => {
  const Email = localStorage.getItem("userEmail");
  const [isEscrowOpen, setIsEscrowOpen] = useState(false);
  const [gigRequestData, setGigRequestData] = useState([]);
  const [escrowUserId, setEscrowUserId] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [gigData, setGigdata] = useState([]);
  useEffect(() => {
    const fetchGigs = async () => {
      //   const { data, error } = await supabase.from("DF-CreatedGig").select();
      const { data, error } = await supabase
        .from("DF-FreelancerAppliedGigs") // Replace 'users' with your table name
        .select(
          `
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
        );
      console.log("gigData", data);
      /**supabase
    .from("user_points")
    .select("address, pending_points")
    .eq("pending_points", MINIMUM_TRANSFER_SIZE); 
    const { data, error } = await supabase
      .from("user_points")
      .select("*")
      .eq("address", address)
      .single();
    */

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
        appliedGigStatus: item?.status,
      }));
      const gigDataIndex = data.length - 1;
      console.log("gigDataIndex:", gigDataIndex);
      const escrowId = data[gigDataIndex].escrow_id;
      console.log("fetchedEscrowId:", escrowId);
      const escrowAmount = data[gigDataIndex].escrow_amount;
      console.log("fetchedEscrowAmt:", escrowAmount);

      localStorage.setItem("freelancerEscrwId", escrowId);
      localStorage.setItem("freelancerEscrwAmt", escrowAmount);

      setGigRequestData(processedData);
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
    // debugger;
    fetchGigs();
  }, []);

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
      updateGigStatus(rowData, "Accepted");
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

  const escrowDeposit = async () => {
    const escrowId = localStorage.getItem("freelancerEscrwId");
    const escrowAmount = localStorage.getItem("freelancerEscrwAmt");
    localStorage.removeItem("freelancerEscrwId");
    localStorage.removeItem("freelancerEscrwAmt");
    console.log("escrowAmt type:", typeof escrowAmount);
    const actualEscrwAmt = parseInt(escrowAmount, 10);
    console.log("actual-escrwAmt:", actualEscrwAmt);
    console.log("actual-escrowAmt type:", typeof actualEscrwAmt);

    const escrowTx = await writeContract(connectConfig, {
      abi: blanceAbi,
      address: blanceAddress,
      functionName: "escrowDeposited",
      args: [escrowId],
      value: actualEscrwAmt,
    });
  };
  const depositEscrow = (rowData) => {
    escrowDeposit();
    alert("Escrow Amount Deposited");
    setExpandedRows(null);
    updateGigStatus(rowData, "Completed");
  };

  const updateGigStatus = (rowData, status) => {
    const updatedData = gigRequestData.map((item) =>
      item === rowData ? { ...item, appliedGigStatus: status } : item
    );
    setGigRequestData(updatedData);
  };

  const rowExpansionTemplate = (data) => {
    return (
      <div className="p-3 text-black mx-3 bg-red-100 rounded-md">
        <h5 className="font-semibold text-lg my-3">
          {data.project} Application
        </h5>
        <div className="my-2">
          <span className="font-semibold">Project Description:</span>{" "}
          {data.description}
        </div>
        <div className="font-semibold my-2">
          Languages Known by the user : {data.languagesKnown.join(", ")}
        </div>
        <div className="font-semibold my-2">
          User's Skills : {data.skills.join(", ")}
        </div>
        <div className="flex gap-3 my-2">
          User Rating: <Rating value={data.rating} readOnly cancel={false} />
        </div>
        <div className=" my-2">
          Applied Gig Status:{" "}
          <Tag value={data.appliedGigStatus} severity="info" />
        </div>
        {data.appliedGigStatus === "Pending" && (
          <div className="flex gap-3 mt-2">
            <button
              className="bg-blue-300 hover:bg-blue-400 border-2 hover:border-blue-500 hover:shadow-md px-3 py-1 rounded-md"
              onClick={() => AcceptGig(data)}
            >
              Accept
            </button>
            <button
              className="bg-red-300 hover:bg-red-400 border-2 hover:border-red-500 hover:shadow-md px-3 py-1 rounded-md"
              onClick={() => RejectGig(data)}
            >
              Reject
            </button>
          </div>
        )}
        {data.appliedGigStatus === "Accepted" && (
          <div className="flex gap-3 mt-2">
            <button
              className="bg-red-300 hover:bg-red-400 border-2 hover:border-red-500 hover:shadow-md px-3 py-1 rounded-md"
              onClick={() => RejectGig(data)}
            >
              Reject
            </button>

            <button
              className="bg-blue-300 hover:bg-blue-400 border-2 hover:border-blue-500 hover:shadow-md px-3 py-1 rounded-md"
              onClick={() => depositEscrow(data)}
            >
              Deposit Escrow
            </button>
          </div>
        )}
        {data.appliedGigStatus === "Rejected" && (
          <div className="flex gap-3 mt-2">
            <button
              className="bg-blue-300 hover:bg-blue-400 border-2 hover:border-blue-500 hover:shadow-md px-3 py-1 rounded-md"
              onClick={() => AcceptGig(data)}
            >
              Accept
            </button>
          </div>
        )}
      </div>
    );
  };

  const header = (
    <div className="text-xl text-center my-5">Gig Request Details</div>
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
        <Column field="badgeCoins" header="Badge Coins" />
        <Column field="ExperienceLevel" header="Experience Level" />
        <Column field="appliedGigStatus" header="Application Status" />
      </DataTable>
      <CreateEscrow
        isOpen={isEscrowOpen}
        setIsOpen={setIsEscrowOpen}
        userId={escrowUserId}
      />
    </div>
  );
};

export default ClientGigRequestDatatable;
