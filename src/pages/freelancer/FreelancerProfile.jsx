import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
//icons
import { LuBadgeCheck } from "react-icons/lu";
import {
  IoIosInformationCircleOutline,
  IoIosLink,
  IoMdClose,
} from "react-icons/io";
import { GrLocation, GrSemantics } from "react-icons/gr";
import { IoWalletOutline } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";

import supabase from "../../config/supabaseConfig";

const FreelancerProfile = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLasttName] = useState("");
  const [expLevel, setExpLevel] = useState(null);
  const [portfolio, setPortfolio] = useState("");
  const [languages, setLanguages] = useState([]);
  const [skills, setSkills] = useState([]);
  const [formError, setFormError] = useState("");
  const [userData, setUserData] = useState([]);
  const [fetchBio, setFetchBio] = useState("");
  var bioStored;

  const Email = localStorage.getItem("userEmail");

  useEffect(() => {
    const fetchGigs = async () => {
      try {
        const { data, error } = await supabase
          .from("DF-UserProfile")
          .select("*")
          .eq("mailId", Email);

        if (error) {
          throw error;
        }

        if (data) {
          console.log("data:", data);
          setFetchBio(data);
          // bioStored = fetchBio[0].userBio;
          console.log("mail:", Email);
          console.log("userBio:", fetchBio[0].userBio);
          console.log("fetchBio:", fetchBio);
          setUserData(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchGigs();
  }, [Email]);
  // debugger;

  const handleeSubmit = async () => {
    const Email = localStorage.getItem("userEmail");
    // e.preventDefault();
    if (
      !firstName ||
      !middleName ||
      !lastName ||
      !experienceLevel ||
      !portfolio
    ) {
      setFormError("kindly fill all the field to create a gig");
      return;
    }
    console.log("kooi");
    try {
      const { data, error } = await supabase
        .from("DF-FreelancerProfile")
        .insert([
          {
            Email,
            FirstName: firstName,
            MiddleName: middleName,
            LastName: lastName,
            ExperienceLevel: experienceLevel,
            Portfolio: portfolio,
            Languages: user.languagesKnown,
            Skills: user.skills,
          },
        ]);

      if (error) {
        setFormError("An error occurred while creating the gig");
        console.error(error);
      } else {
        setFormError(null);
        console.log("Data:", data[0]);
        setUserData(data[0]); // Assuming you want to store the inserted data in the userData state
      }
    } catch (error) {
      setFormError("An error occurred while creating the gig");
      console.error(error);
    }
  };
  const [user, setUser] = useState({
    fullName: "Allen",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore architecto culpa ab, expedita alias dolores tenetur perferendis deleniti voluptas fugiat ut ipsa? Deleniti culpa quibusdam nemo itaque eveniet neque reprehenderit.",
    badgeCoins: 650,
    languagesKnown: ["English", "Malayalam", "Hindi"],
    skills: ["Web Development", "PhotoGraphy", "Photoshop"],
    ExperienceLevel: "Expert",
    PortfolioLink: "",
    walletAddress: "369#2255",
    rating: 4,
  });

  const [experienceLevel, setExperienceLevel] = useState(user.ExperienceLevel);

  const handleExperienceLevelChange = (e) => {
    setExperienceLevel(e.target.value);
  };

  const addLanguage = (newLanguage) => {
    setUser((prevState) => ({
      ...prevState,
      languagesKnown: [...prevState.languagesKnown, newLanguage],
    }));
  };

  const removeLanguage = (index) => {
    setUser((prevState) => ({
      ...prevState,
      languagesKnown: prevState.languagesKnown.filter((_, i) => i !== index),
    }));
  };

  const addSkill = (newSkill) => {
    setUser((prevState) => ({
      ...prevState,
      skills: [...prevState.skills, newSkill],
    }));
  };

  const removeSkill = (index) => {
    setUser((prevState) => ({
      ...prevState,
      skills: prevState.skills.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Backend submition
    setUser((prevUser) => ({
      ...prevUser,
      FirstName: document.getElementById("firstName").value,
      MiddleName: document.getElementById("middleName").value,
      LastName: document.getElementById("lastName").value,
      ExperienceLevel: document.getElementById("experienceLevel").value,
      PortfolioLink: document.getElementById("portfolioLink").value,
      walletAddress: document.getElementById("walletAddress").value,
    }));
  };

  const SignOut = async () => {
    const { error } = await supabase.auth.signOut();
    console.log("error:", error);
    localStorage.clear();
  };

  return (
    <>
      <div id="profileView">
        <div className="w-full flex justify-center mt-10">
          <h1 className="text-xl font-semibold">{`Hey ${
            fetchBio?.[0]?.fullName || "Loading..."
          } Welcome to DoingFreelance`}</h1>
          {/* {userData.length > 0 && (
          )} */}
        </div>

        {/* profile inpage navigation */}
        <div className="flex justify-center my-5 sticky top-24">
          <div className="flex border-2 bg-white border-red-600 rounded-full mx-auto text-md">
            <a
              href="/freelancer/profile#profileView"
              className="hover:bg-red-100 px-5 py-3 rounded-full cursor-pointer transition duration-300 ease-in-out"
            >
              View Profile
            </a>
            <a
              href="/freelancer/profile#profileEdit"
              className="hover:bg-red-100 px-5 py-3 rounded-full cursor-pointer transition duration-300 ease-in-out"
            >
              Edit Profile
            </a>
            <Link to={"/index"} onClick={SignOut}>
              <p
                href="/index"
                className="hover:bg-red-100 px-5 py-3 rounded-full cursor-pointer transition duration-300 ease-in-out"
              >
                Sign Out
              </p>
            </Link>
          </div>
        </div>

        {/* view profile */}
        <div className="flex justify-center my-5">
          <div className="bg-red-100 w-8/12 rounded-md flex flex-row">
            {user.badgeCoins > 500 && (
              <div className="w-24 relative top-10 left-10 z-0">
                <img
                  src="https://png.pngtree.com/png-vector/20230523/ourmid/pngtree-verified-stamp-vector-png-image_7105265.png"
                  alt="verified badge"
                />
              </div>
            )}
            <div className="w-4/12 flex flex-col my-auto px-3 border-r-2 border-red-500">
              <img
                src="https://thumbs.dreamstime.com/b/d-man-avatar-happy-smiling-face-icon-young-businessman-student-freelancer-realistic-cartoon-character-vector-illustration-253767213.jpg"
                alt="Profile Icon"
                className="w-36 h-36 mx-auto my-3 rounded-full"
              />
              {/* Check if userData is not empty before accessing its properties */}
              <h3 className="mx-auto font-medium text-md">{`Name : ${
                fetchBio?.[0]?.fullName || "Loading..."
              } `}</h3>
              {/* {userData.length > 0 && (
              )} */}
              {console.log("userData:", userData)}
              <div className="flex justify-center gap-2">
                <IoIosInformationCircleOutline
                  className="my-auto text-xl"
                  title="Coins 500 : Intermediate level, 500+ : Expert, 500- : bad rating"
                />
                <LuBadgeCheck className="my-auto bg-blue-400 rounded-full text-xl" />
                <h3 className="font-normal text-md ">
                  {" "}
                  Badge Coins : {user.badgeCoins}{" "}
                </h3>
              </div>
            </div>

            <div className="w-8/12 flex flex-col my-5 px-10">
              <div>
                <h3 className="text-lg font-semibold">About me : </h3>
                <p>{fetchBio?.[0]?.userBio || "Loading..."}</p>
                {console.log("fetchBio:", fetchBio[0])}
              </div>
              <div className="flex gap-10 my-3 font-semibold">
                <div className="flex gap-2">
                  <GrLocation className="h-5 w-5 my-auto" />
                  <p>India-Kerala-Kochi</p>
                </div>
                <div className="cursor-pointer hover:text-red-500">
                  <a
                    href={`${userData.Portfolio}`}
                    target="_blank"
                    className="flex gap-2 "
                  >
                    <IoIosLink className="h-5 w-5 my-auto" />
                    <p>Portfolio Link</p>
                  </a>
                </div>
                <div className="flex gap-2">
                  <IoWalletOutline className="h-5 w-5 my-auto" />
                  <p>{user.walletAddress}</p>
                </div>
              </div>
              <div className="flex gap-10  my-3">
                <div className="flex gap-3">
                  <MdWorkOutline className="my-auto text-lg" />
                  <h3 className="font-semibold">Works Committed</h3>
                  <p>2</p>
                </div>
                <div className="flex gap-3">
                  <FaRegStar className="my-auto text-lg" />
                  <h3 className="font-semibold">Rating</h3>
                  <p>{user.rating}/5</p>
                </div>
              </div>
              <div className="flex gap-3 my-3">
                <GrSemantics className="my-auto text-lg" />
                <h3 className="font-semibold">Experience Level : </h3>
                <p className="font-semibold">{userData.ExperienceLevel}</p>
              </div>
              <div className="flex gap-5 my-3">
                <h3 className="font-semibold">Languages : </h3>
                {user.languagesKnown.map((item, index) => (
                  <p
                    key={index}
                    className="text-sm my-auto px-2 rounded-lg bg-red-50"
                  >
                    {item}
                  </p>
                ))}
              </div>
              <div className="flex gap-5 my-3">
                <h3 className="font-semibold">Skills : </h3>
                {user.skills.map((item, index) => (
                  <p
                    key={index}
                    className="text-sm my-auto px-2 rounded-lg bg-red-50"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div />
        </div>

        <div id="profileEdit"></div>
        {/* edit profile */}
        <div className="w-full flex justify-center">
          <div className="w-6/12 bg-slate-200 my-10 rounded-md">
            <div className="flex justify-center mt-5">
              {/* <h3 className='text-lg font-medium'>Want to update your profile ?</h3> */}
              <img
                src="https://thumbs.dreamstime.com/b/d-man-avatar-happy-smiling-face-icon-young-businessman-student-freelancer-realistic-cartoon-character-vector-illustration-253767213.jpg"
                alt="Profile Image"
                className="h-20 w-20 rounded-full"
              />
            </div>
            <div className="flex justify-center my-5">
              <h3 className="text-lg font-medium">Update your profile ?</h3>
            </div>
            <form onSubmit={handleeSubmit}>
              <label
                htmlFor="firstName"
                className="flex justify-start mx-5 mt-3 font-medium"
              >
                First Name :{" "}
              </label>
              <input
                type="text"
                id="firstName"
                // placeholder={user.FirstName}
                className="flex justify-start mx-5 mt-3 font-medium w-11/12 px-3 rounded-md py-2"
                onChange={(e) => setFirstName(e.target.value)}
              />

              <label
                htmlFor="middleName"
                className="flex justify-start mx-5 mt-3 font-medium"
              >
                Middle Name :{" "}
              </label>
              <input
                type="text"
                id="middleName"
                placeholder={user.MiddleName}
                className="flex justify-start mx-5 mt-3 font-medium w-11/12 px-3 rounded-md py-2"
                onChange={(e) => setMiddleName(e.target.value)}
              />

              <label
                htmlFor="lastName"
                className="flex justify-start mx-5 mt-3 font-medium"
              >
                Last Name :{" "}
              </label>
              <input
                type="text"
                id="lastName"
                placeholder={user.LastName}
                className="flex justify-start mx-5 mt-3 font-medium w-11/12 px-3 rounded-md py-2"
                onChange={(e) => setLasttName(e.target.value)}
              />

              <label
                htmlFor="walletAddress"
                className="flex justify-start mx-5 mt-3 font-medium"
              >
                Wallet Address :{" "}
              </label>
              <input
                type="text"
                id="walletAddress"
                placeholder={user.walletAddress}
                className="flex justify-start mx-5 mt-3 font-medium w-11/12 px-3 rounded-md py-2"
              />

              <div className="mt-3">
                <label
                  htmlFor="experienceLevel"
                  className="flex justify-start mx-5 mt-3 font-medium"
                >
                  Experience Level :{" "}
                </label>
                <select
                  id="experienceLevel"
                  className="flex justify-start mx-5 mt-3 font-medium w-11/12 px-3 rounded-md py-2"
                  value={experienceLevel}
                  onChange={handleExperienceLevelChange}
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Expert">Expert</option>
                </select>
              </div>

              <label
                htmlFor="portfolioLink"
                className="flex justify-start mx-5 mt-3 font-medium"
              >
                Portfolio Link :{" "}
              </label>
              <input
                type="text"
                id="portfolioLink"
                placeholder="https://...."
                className="flex justify-start mx-5 mt-3 font-medium w-11/12 px-3 rounded-md py-2"
              />

              <div className="mt-3">
                <h3 className="font-medium mx-5">Languages known</h3>
                <div className="flex gap-2 mx-5 mt-3">
                  <input
                    type="text"
                    id="newLanguage"
                    placeholder="Add new language"
                    className="flex justify-start font-medium w-8/12 px-3 rounded-md py-2"
                  />
                  <button
                    className="mx-5 font-medium bg-slate-300 px-5 rounded-md"
                    onClick={() =>
                      addLanguage(document.getElementById("newLanguage").value)
                    }
                  >
                    Add
                  </button>
                </div>
                <div className="flex gap-3 mx-5 mt-3">
                  {user.languagesKnown.map((language, index) => (
                    <div
                      className="bg-red-50 px-2 py-1 text-xs rounded-xl flex my-auto"
                      key={index}
                    >
                      {language}
                      <IoMdClose
                        className="my-auto ml-2 cursor-pointer"
                        onClick={() => removeLanguage(index)}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-3">
                <h3 className="font-medium mx-5">Skills</h3>
                <div className="flex gap-2 mx-5 mt-3">
                  <input
                    type="text"
                    id="newskill"
                    placeholder="Add new skill"
                    className="flex justify-start font-medium w-8/12 px-3 rounded-md py-2"
                  />
                  <button
                    className="mx-5 font-medium bg-slate-300 px-5 rounded-md"
                    onClick={() =>
                      addSkill(document.getElementById("newskill").value)
                    }
                  >
                    Add
                  </button>
                </div>
                <div className="flex gap-3 mx-5 mt-3">
                  {user.skills.map((skill, index) => (
                    <div
                      className="bg-red-50 px-2 py-1 text-xs rounded-xl flex my-auto"
                      key={index}
                    >
                      {skill}
                      <IoMdClose
                        className="my-auto ml-2 cursor-pointer"
                        onClick={() => removeSkill(index)}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center my-5">
                <button
                  type="submit"
                  className="border-2 border-red-400 px-3 rounded-md py-2 hover:bg-red-100"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreelancerProfile;
