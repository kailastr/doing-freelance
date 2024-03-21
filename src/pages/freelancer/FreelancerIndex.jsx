import React, { useState } from "react";

//components
import GigCard from "../../components/Cards/GigCard";

import { connectConfig } from "../../ConnectKit/Web3Provider";
import { BasicButton } from "../../ConnectKit/BasicButton";

import { getAccount } from "@wagmi/core";

const FreelancerIndex = () => {
  const [gigDetails, setGigDetails] = useState([
    {
      title: "Web 3 Project",
      describtion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et maiores dolore a magnam incidunt accusantium, beatae suscipit cumque atque dignissimos saepe deleniti consequuntur non doloremque ipsa fugiat repellendus sequi nam?",
      location: "Kochi",
      posted: "2024-03-27",
      price: 999,
      deadline: "2024-03-27",
      prerequisite: ["HTML", "JavaScript", "MongoDB", "Blockchain", "C#"],
    },
    {
      title: "Web 3 Project",
      describtion: "A Freelance working platform",
      location: "Kochi",
      posted: "2024-03-27",
      price: 999,
      deadline: "2024-03-27",
      prerequisite: ["React", "Angular"],
    },
    {
      title: "Web 3 Project",
      describtion: "A Freelance working platform",
      location: "Kochi",
      posted: "2024-03-27",
      price: 999,
      deadline: "2024-03-27",
      prerequisite: ["Nodejs", "Express"],
    },
    {
      title: "Web 3 Project",
      describtion: "A Freelance working platform",
      location: "Kochi",
      posted: "2024-03-27",
      price: 999,
      deadline: "2024-03-27",
      prerequisite: ["React", "Shopify"],
    },
  ]);
  const account = getAccount(connectConfig);
  if (account.isConnected !== true) {
    return (
      <>
        <div className="w-full flex justify-center">
          <div className="w-11/12 mt-10">
            <h3 className="my-3 text-xl font-semibold">
              Connect Your wallet to Kickstart your Decentralised Freelancing
              Journey
            </h3>
            <BasicButton />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="w-full flex justify-center">
          <div className="w-11/12 mt-10">
            <div className="flex justify-center mt-5">
              <h1 className="font-semibold text-3xl">
                <span className="text-red-500">Gigs</span> You may Like
              </h1>
            </div>

            <div className="w-full flex items-center">
              <div className="my-10 mx-10 w-full">
                {gigDetails.map((item, index) => (
                  <GigCard {...item} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default FreelancerIndex;
