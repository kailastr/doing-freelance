import React, { useState, useEffect } from "react";
import supabase from "../../config/supabaseConfig";

//components
import GigCard from "../../components/Cards/GigCard";

//wallet
import { connectConfig } from "../../ConnectKit/Web3Provider";
import { BasicButton } from "../../ConnectKit/BasicButton";
import { getAccount } from "@wagmi/core";

const FreelancerIndex = () => {
  const [fetchError, setFetchError] = useState(null);
  const [gigs, setGigs] = useState([]);
  useEffect(() => {
    const fetchGigs = async () => {
      const { data, error } = await supabase.from("DF-CreatedGig").select();

      if (error) {
        setFetchError("could not fetch the existing gigs");
        console.log(error);
      }
      if (data) {
        setGigs(data);
        setFetchError(null);
        console.log("data:", data);
      }
    };

    fetchGigs();
  }, []);
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

  return account.isConnected ? (
    <div className="w-full flex justify-center">
      <div className="w-11/12 mt-10">
        <div className="flex justify-center mt-5">
          <h1 className="font-semibold text-3xl">
            <span className="text-red-500">Gigs</span> You may Like
          </h1>
        </div>

        <div className="w-full flex items-center">
          <div className="my-10 mx-10 w-full">
            {gigs.map((gig) => (
              <GigCard {...gig} key={gig.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full flex justify-center">
      <div
        className="w-11/12  border-4 border-blue-400 flex items-center justify-center h-96 rounded-md mt-10"
        style={{
          backgroundImage: "linear-gradient(to bottom right, #294a6b, #002447)",
        }}
      >
        <div className="flex flex-col">
          <h3 className="text-xl text-white font-semibold my-8">
            Connect Your wallet to Kickstart your Decentralised Freelancing
            Journey
          </h3>
          <div className="mx-auto">
            <BasicButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancerIndex;
