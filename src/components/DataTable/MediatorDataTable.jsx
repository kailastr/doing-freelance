import React, { useState, useEffect, useRef } from "react";

//component
import EscrowSuccessModal from "../Modal/EscrowSuccessModal";

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [escrowUserId, setEscrowUserId] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [gigData, setGigdata] = useState([]);
  useEffect(() => {
    const fetchGigs = async () => {
      //   const { data, error } = await supabase.from("DF-CreatedGig").select();
      const { data, error } = await supabase
        .from("DF-FreelancerAppliedGigs")
        .select(
          `
        *,
        DF-FreelancerProfile (
          *
        ),
        DF-CreatedGig (
          Title,
          Description
        )
      `
        )
        .filter("dispute_status", "eq", "OnDispute");

      if (error) {
        setFetchError("could not fetch the existing gigs");
        console.log(error);
      }
      if (data) {
        const enthoData = data.map((item) => ({
          project: item?.["DF-CreatedGig"]?.Title,
          freelancerName: item?.["DF-FreelancerProfile"]?.FirstName,
          description: item?.["DF-CreatedGig"]?.Description,
          projectLink: item?.project_link,
          escrowid: item?.escrow_id,
          disputeStatus: item?.dispute_status,
        }));
        setGigdata(enthoData);
        setFetchError(null);
        console.log("DisputedData:", data);
      }
    };
    fetchGigs();
  }, []);

  const [expandedRows, setExpandedRows] = useState(null);
  const toast = useRef(null);

  const AcceptGig = (rowData) => {
    const confirmation = window.confirm(
      "Are you sure you want to resolve this gig dispute ?"
    );
    if (confirmation) {
      setIsModalOpen(true);
      setEscrowUserId(rowData.name);
      setExpandedRows(null);
      updateGigStatus(rowData, "Completed");
    }
  };

  const updateGigStatus = (rowData, status) => {
    const updatedData = gigData.map((item) =>
      item === rowData ? { ...item, disputeStatus: status } : item
    );
    setGigdata(updatedData);
  };

  const rowExpansionTemplate = (data) => {
    return (
      <div className="p-3 text-black mx-3 bg-red-100 rounded-md">
        <h5 className="font-semibold text-lg my-3">
          {data.project} Application
        </h5>
        <div>
          <a href={data.projectLink} target="_blank">
            <button className="bg-red-200 border-2 border-red-600 hover:bg-red-300 px-3 py-1 rounded-md">
              Project Link
            </button>
          </a>
        </div>
        {console.log("veereData:", data)}
        <div className="my-2">
          <span className="font-semibold">Project Description:</span>{" "}
          {data.description}
        </div>
        <div className=" my-2">
          Applied Gig Status: <Tag value={data.disputeStatus} severity="info" />
        </div>
        <div className="flex gap-3 mt-2">
          <button
            className="bg-red-200 hover:bg-red-300 border-2 border-red-600 hover:border-red-500 hover:shadow-md px-3 py-1 rounded-md"
            onClick={() => AcceptGig(data)}
          >
            Resolve Dispute
          </button>
        </div>
        {/* {data.disputeStatus == "onDispute" && (
        )} */}
      </div>
    );
  };

  const header = <div className="text-xl text-center my-5">Disputes</div>;

  return (
    <div className="card">
    <EscrowSuccessModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} isEscrowSuccess={false} />
      <Toast ref={toast} />
      <DataTable
        value={gigData}
        expandedRows={expandedRows}
        header={header}
        rowExpansionTemplate={rowExpansionTemplate}
        onRowToggle={(e) => setExpandedRows(e.data)}
      >
        <Column expander style={{ width: "3rem" }} />
        <Column field="project" header="Project" />
        <Column field="clientName" header="Client Name" />
        <Column field="freelancerName" header="Freelancer Name" />
        <Column field="escrowid" header="Escrow Id" />
        <Column field="disputeStatus" header="Dispute Status" />
      </DataTable>
    </div>
  );
};

export default MediatorDataTable;
