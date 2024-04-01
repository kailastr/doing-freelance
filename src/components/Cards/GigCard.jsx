import React, { useState } from "react";

//icons
import { GoVerified } from "react-icons/go";
import { GrMapLocation } from "react-icons/gr";
import { AiTwotoneDollarCircle } from "react-icons/ai";
import ApplyGigModal from "../Modal/ApplyGigModal";

import { readContract, writeContract, getAccount } from "@wagmi/core";
import { connectConfig } from "../../ConnectKit/Web3Provider";
import { blanceAbi, blanceAddress } from "../../contractAbi/blance";
import supabase from "../../config/supabaseConfig";

const GigCard = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isApplied, setIsApplied] = useState(false);

  const handleApplyGig = () => {
    setIsLoading(true);
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
      setIsApplied(true);
      setIsModalOpen(true);
    }, 1000); // Adjust the loading duration as needed
  };

  const freelancerApply = async () => {
    console.log("hii..");
    console.log("propsdat:", props.id);
    console.log("localstorage:", localStorage.getItem("userEmail"));
    const { data, error: storeError } = await supabase
      .from("DF-FreelancerAppliedGigs")
      .insert([
        {
          gig_id: props.id,
          freelancer_email: localStorage.getItem("userEmail"),
        },
      ])
      .select();
    console.log("data:", data);
  };
  const applyGig = async () => {
    const account = getAccount(connectConfig);
    console.log("account:", account);
    console.log("isConnected:", account.isConnected);
    const transaction = await writeContract(connectConfig, {
      abi: blanceAbi, // Assuming this is correctly defined
      address: blanceAddress, // Assuming this is correctly defined
      functionName: "applyGig",
    });
    handleApplyGig();
    await freelancerApply();
    console.log("Hii..");

    console.log("function caller:", transaction);
  };
  return (
    <div className="bg-red-50 hover:bg-red-100 transition duration-300 ease-in-out my-5 mx-5 rounded-md overflow-hidden">
      <div className="m-3">
        <h2 className="font-semibold text-xl text-red-600">{props.Title}</h2>
        <p className="text-md my-2">Posted on {props.created_at}</p>
        <p className="text-slate-600">{props.Description}</p>
        <div className="flex gap-3 my-3">
          {/* {props.map((item, index) => (
            <div
              className="bg-white px-2 py-1 text-xs rounded-xl my-auto"
              key={index}
            >
              {item}
            </div>
          ))} */}
        </div>
        <div className="flex items-center gap-2">
          <p className=" text-red-600">Deadline : {props.Date}</p>
        </div>
        <div className="flex gap-20 items-center text-slate-800 my-3">
          <div className="flex items-center gap-2">
            <GoVerified className="text-blue-600 text-xl" />
            <p>Verified User</p>
          </div>
          <div className="flex items-center gap-2">
            <GrMapLocation className=" text-xl" />
            <p>{props.Location}</p>
          </div>
          <div className="flex items-center gap-2">
            <AiTwotoneDollarCircle className="text-blue-600 text-xl" />
            <p>{props.Price}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center my-5">
        {" "}
        {isApplied ? (
          <button className="border-2 bg-slate-300 border-slate-600 py-2 px-5 mx-auto rounded-md hover:bg-slate-200 cursor-not-allowed">
            Applied
          </button>
        ) : (
          <button
            className="border-2 border-blue-600 py-2 px-5 mx-auto rounded-md hover:bg-blue-100"
            onClick={applyGig}
          >
            {isLoading ? "Loading..." : "Apply Gig"}
          </button>
        )}
        <p className="mx-auto my-2 text-red-400 text-sm">
          Apply to connect with client
        </p>
      </div>
      <ApplyGigModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
};

export default GigCard;
