import React from "react";

//icons
import { GoVerified } from "react-icons/go";
import { GrMapLocation } from "react-icons/gr";
import { AiTwotoneDollarCircle } from "react-icons/ai";

const GigCard = (props) => {
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
        <button className="border-2 border-blue-600 py-2 px-5 mx-auto rounded-md hover:bg-blue-100">
          Apply Gig
        </button>
        <p className="mx-auto my-2 text-red-400 text-sm">
          Apply to connect with client
        </p>
      </div>
    </div>
  );
};

export default GigCard;
