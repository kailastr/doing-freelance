import React, { useState } from "react";
import supabase from "../../config/supabaseConfig";
// import supabase from "../../config/supabaseConfig";
// import { connectConfig } from "../../ConnectKit/Web3Provider";
// import { BasicButton } from "../../ConnectKit/BasicButton";

// import { getAccount } from "@wagmi/core";

const AddNewGigCard = () => {
  const [projectDetails, setProjectDetails] = useState({
    skills: [],
  });
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [skills, setSkills] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState();
  const [fetchError, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    const Email = localStorage.getItem("userEmail");
    e.preventDefault();
    if (!title || !price || !location || !skills || !description || !date) {
      setFormError("kindly fill all the field to create a gig");
      return;
    }
    console.log("kooi");
    const { data, error } = await supabase
      .from("DF-CreatedGig")
      .insert([
        {
          Title: title,
          Description: description,
          Price: price,
          Location: location,
          Date: date,
          Skills: skills,
          Email,
        },
      ])
      .select();

    if (error) {
      setFormError("kindly fill all the field to create a gig");
      console.log(error);
    }
    if (data) {
      console.log(data);
      setFormError(null);
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const skills = formData
      .get("skills")
      .split(",")
      .map((skill) => skill.trim());

    const updatedProjectDetails = {
      ...projectDetails,
      title: formData.get("projectTitle"),
      description: formData.get("projectDescription"),
      price: formData.get("price"),
      location: formData.get("location"),
      deadline: formData.get("deadline"),
      skills: skills,
    };

    setProjectDetails(updatedProjectDetails);
  };

  return (
    <div className="w-11/12 bg-red-100 rounded-md my-5 shadow-lg">
      <div className="flex justify-center">
        <h3 className="my-3 text-xl font-semibold">
          Fill Up Required Gig Details
        </h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3 mx-10 my-3">
          <div className="flex gap-3 mx-10 my-3">
            <label
              htmlFor="projectTitle"
              className="text-lg w-3/12 font-medium text-gray-700"
            >
              Project Title (Keep It Short)
            </label>
            <input
              type="text"
              id="projectTitle"
              name="projectTitle"
              className="w-9/12 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-opacity-50 shadow-sm"
              placeholder="Enter your project title..."
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-3 mx-10 my-3">
            <label
              htmlFor="projectDescription"
              className="text-lg font-medium text-gray-700"
            >
              Project Description
            </label>
            <input
              type="text"
              id="projectDescription"
              name="projectDescription"
              className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-opacity-50 shadow-sm h-24 resize-none"
              placeholder="Write a detailed description of your project..."
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex justify-between gap-3 my-3 mx-10">
            <div className="flex flex-row gap-3">
              <label htmlFor="price" className="font-medium text-gray-700 py-2">
                Price{" "}
              </label>
              <input
                type="text"
                id="price"
                name="price"
                className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-opacity-50 shadow-sm"
                placeholder="In USDT$"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="flex flex-row gap-3">
              <label
                htmlFor="location"
                className="font-medium text-gray-700 py-2"
              >
                Add Your location{" "}
              </label>
              <input
                type="text"
                id="location"
                name="location"
                className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-opacity-50 shadow-sm"
                placeholder="Work/Company Location"
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="flex flex-row gap-3">
              <label
                htmlFor="deadline"
                className="font-medium text-gray-700 py-2"
              >
                Add Deadline of your project{" "}
              </label>
              <input
                type="date"
                id="deadline"
                name="deadline"
                className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-opacity-50 shadow-sm"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-row gap-3 mx-10 my-3">
            <label
              htmlFor="skills"
              className="text-lg font-medium py-2 text-gray-700"
            >
              Required Skills{" "}
            </label>
            <input
              type="text"
              id="skills"
              name="skills"
              className="w-96 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-opacity-50 shadow-sm"
              placeholder="Eg : Reading, Writing,..."
              onChange={(e) => setSkills(e.target.value)}
            />
          </div>
          <div className="flex justify-center gap-3 my-3 mx-10">
            <input
              type="submit"
              className="border-2 border-blue-700 w-24 rounded-lg font-semibold hover:bg-blue-200 transition duration-300 ease-in-out px-3 py-2"
              value={"Submit"}
            />
            <input
              type="reset"
              className="border-2 border-red-700 w-24 rounded-lg font-semibold hover:bg-red-200 transition duration-300 ease-in-out px-3 py-2"
              value={"Cancle"}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddNewGigCard;
