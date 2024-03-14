import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
//icons
import { LuBadgeCheck } from "react-icons/lu";
import { IoIosInformationCircleOutline, IoIosLink, IoMdClose } from "react-icons/io";
import { GrLocation, GrSemantics } from "react-icons/gr";
import { IoWalletOutline } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";

const FreelancerProfile = () => {

    const [user, setUser] = useState({
        FirstName: "Allen",
        MiddleName: "Jack",
        LastName: "Taylor",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore architecto culpa ab, expedita alias dolores tenetur perferendis deleniti voluptas fugiat ut ipsa? Deleniti culpa quibusdam nemo itaque eveniet neque reprehenderit.",
        badgeCoins: 650,
        languagesKnown: ["English", "Malayalam", "Hindi"],
        skills: ["Web Development", "PhotoGraphy", "Photoshop"],
        ExperienceLevel: "Expert",
        PortfolioLink: "",
        walletAddress: "369#2255"
    });

    const [experienceLevel, setExperienceLevel] = useState(user.ExperienceLevel);

    const handleExperienceLevelChange = (e) => {
        setExperienceLevel(e.target.value);
    };

    const addLanguage = (newLanguage) => {
        setUser(prevState => ({
            ...prevState,
            languagesKnown: [...prevState.languagesKnown, newLanguage]
        }));
    };

    const removeLanguage = (index) => {
        setUser(prevState => ({
            ...prevState,
            languagesKnown: prevState.languagesKnown.filter((_, i) => i !== index)
        }));
    };

    const addSkill = (newSkill) => {
        setUser(prevState => ({
            ...prevState,
            skills: [...prevState.skills, newSkill]
        }));
    };

    const removeSkill = (index) => {
        setUser(prevState => ({
            ...prevState,
            skills: prevState.skills.filter((_, i) => i !== index)
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Backend submition
        setUser(prevUser => (
            {
                ...prevUser,
                FirstName: document.getElementById('firstName').value,
                MiddleName: document.getElementById('middleName').value,
                LastName: document.getElementById('lastName').value,
                ExperienceLevel: document.getElementById('experienceLevel').value,
                PortfolioLink: document.getElementById('portfolioLink').value,
                walletAddress: document.getElementById('walletAddress').value
            }
        ));
        console.log("Updated user details:", user);
    };

    return (
        <>
            <div id='profileView'>
                <div className='w-full flex justify-center mt-10'  >
                    <h1 className='text-xl font-semibold'>{`Hey ${user.FirstName}, Welcome to DoingFreelance`}</h1>
                </div>

                {/* profile inpage navigation */}
                <div className='flex justify-center my-5 sticky top-24'>
                    <div className='flex border-2 bg-white border-red-600 rounded-full mx-auto text-md'>
                        <a href='/freelancer/profile#profileView' className='hover:bg-red-100 px-5 py-3 rounded-full cursor-pointer transition duration-300 ease-in-out'>View Profile</a>
                        <a href='/freelancer/profile#profileEdit' className='hover:bg-red-100 px-5 py-3 rounded-full cursor-pointer transition duration-300 ease-in-out'>Edit Profile</a>
                    </div>
                </div>

                {/* view profile */}
                <div className='flex justify-center my-5'>
                    <div className='bg-red-100 w-8/12 rounded-md flex flex-row'>

                        <div className='w-4/12 flex flex-col my-auto px-3 border-r-2 border-red-500'>
                            <img
                                src="https://us.123rf.com/450wm/odkyrylov/odkyrylov2002/odkyrylov200200003/140021006-user-sign-icon-person-symbol-human-avatar-flat-style.jpg"
                                alt="Profile Icon"
                                className='w-36 h-36 mx-auto my-3 rounded-full'
                            />
                            <h3 className='mx-auto font-medium text-md'>{`Name : ${user.FirstName} ${user.MiddleName} ${user.LastName}`}</h3>
                            <div className='flex justify-center gap-2'>
                                <IoIosInformationCircleOutline className='my-auto text-xl' title='Coins 500 : Intermediate level, 500+ : Expert, 500- : bad rating' />
                                <LuBadgeCheck className='my-auto bg-blue-400 rounded-full text-xl' />
                                <h3 className='font-normal text-md '>  Badge Coins : {user.badgeCoins} </h3>
                            </div>
                        </div>

                        <div className='w-8/12 flex flex-col my-5 px-10'>
                            <div>
                                <h3 className='text-lg font-semibold'>About me : </h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Inventore architecto culpa ab, expedita alias dolores tenetur perferendis deleniti voluptas fugiat ut ipsa?
                                    Deleniti culpa quibusdam nemo itaque eveniet neque reprehenderit.
                                </p>
                            </div>
                            <div className='flex gap-10 my-3 font-semibold'>
                                <div className='flex gap-2'>
                                    <GrLocation className='h-5 w-5 my-auto' />
                                    <p>India-Kerala-Kochi</p>
                                </div>
                                <div className='cursor-pointer hover:text-red-500'>
                                    <a href={`${user.PortfolioLink}`} target='_blank' className='flex gap-2 '>
                                        <IoIosLink className='h-5 w-5 my-auto' />
                                        <p>Portfolio Link</p>
                                    </a>
                                </div>
                                <div className='flex gap-2'>
                                    <IoWalletOutline className='h-5 w-5 my-auto' />
                                    <p>{user.walletAddress}</p>
                                </div>
                            </div>
                            <div className='flex gap-10  my-3'>
                                <div className='flex gap-3'>
                                    <MdWorkOutline className='my-auto text-lg' />
                                    <h3 className='font-semibold'>Works Committed</h3>
                                    <p>2</p>
                                </div>
                                <div className='flex gap-3'>
                                    <FaRegStar className='my-auto text-lg' />
                                    <h3 className='font-semibold'>Rating</h3>
                                    <p>4/5</p>
                                </div>
                            </div>
                            <div className='flex gap-3 my-3'>
                                <GrSemantics className='my-auto text-lg' />
                                <h3 className='font-semibold'>Experience Level : </h3>
                                <p className='font-semibold'>{user.ExperienceLevel}</p>
                            </div>
                            <div className='flex gap-5 my-3'>
                                <h3 className='font-semibold'>Languages : </h3>
                                {user.languagesKnown.map((item, index) => (
                                    <p key={index} className='text-sm my-auto px-2 rounded-lg bg-red-50'>{item}</p>
                                ))}
                            </div>
                            <div className='flex gap-5 my-3'>
                                <h3 className='font-semibold'>Skills : </h3>
                                {user.skills.map((item, index) => (
                                    <p key={index} className='text-sm my-auto px-2 rounded-lg bg-red-50'>{item}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div />
                </div>

                <div id='profileEdit' ></div>
                {/* edit profile */}
                <div className='w-full flex justify-center'>
                    <div className='w-6/12 bg-slate-200 my-10 rounded-md'>
                        <div className='flex justify-center mt-5'>
                            {/* <h3 className='text-lg font-medium'>Want to update your profile ?</h3> */}
                            <img
                                src="https://us.123rf.com/450wm/odkyrylov/odkyrylov2002/odkyrylov200200003/140021006-user-sign-icon-person-symbol-human-avatar-flat-style.jpg"
                                alt="Profile Image"
                                className='h-20 w-20 rounded-full'
                            />
                        </div>
                        <div className='flex justify-center my-5'>
                            <h3 className='text-lg font-medium'>Want to update your profile ?</h3>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="firstName" className='flex justify-start mx-5 mt-3 font-medium'>First Name : </label>
                            <input type="text" id='firstName' placeholder={user.FirstName} className='flex justify-start mx-5 mt-3 font-medium w-11/12 px-3 rounded-md' />

                            <label htmlFor="middleName" className='flex justify-start mx-5 mt-3 font-medium'>Middle Name : </label>
                            <input type="text" id='middleName' placeholder={user.MiddleName} className='flex justify-start mx-5 mt-3 font-medium w-11/12 px-3 rounded-md' />

                            <label htmlFor="lastName" className='flex justify-start mx-5 mt-3 font-medium'>Last Name : </label>
                            <input type="text" id='lastName' placeholder={user.LastName} className='flex justify-start mx-5 mt-3 font-medium w-11/12 px-3 rounded-md' />

                            <label htmlFor="walletAddress" className='flex justify-start mx-5 mt-3 font-medium'>Wallet Address : </label>
                            <input type="text" id='walletAddress' placeholder={user.walletAddress} className='flex justify-start mx-5 mt-3 font-medium w-11/12 px-3 rounded-md' />

                            <div className='mt-3'>
                                <label htmlFor="experienceLevel" className='flex justify-start mx-5 mt-3 font-medium'>Experience Level : </label>
                                <select id="experienceLevel" className='flex justify-start mx-5 mt-3 font-medium w-11/12 px-3 rounded-md' value={experienceLevel} onChange={handleExperienceLevelChange}>
                                    <option value="Beginner">Beginner</option>
                                    <option value="Intermediate">Intermediate</option>
                                    <option value="Expert">Expert</option>
                                </select>
                            </div>

                            <label htmlFor="portfolioLink" className='flex justify-start mx-5 mt-3 font-medium'>Portfolio Link : </label>
                            <input type="text" id='portfolioLink' placeholder="https://...." className='flex justify-start mx-5 mt-3 font-medium w-11/12 px-3 rounded-md' />

                            <div className='mt-3'>
                                <h3 className='font-medium mx-5'>Languages known</h3>
                                <div className='flex gap-2 mx-5 mt-3'>
                                    <input type="text" id='newLanguage' placeholder="Add new language" className='flex justify-start font-medium w-8/12 px-3 rounded-md' />
                                    <button
                                        className='mx-5 font-medium bg-slate-300 px-5 rounded-md'
                                        onClick={() => addLanguage(document.getElementById('newLanguage').value)}
                                    >
                                        Add
                                    </button>
                                </div>
                                <div className='flex gap-3 mx-5 mt-3'>
                                    {user.languagesKnown.map((language, index) => (
                                        <div className='bg-red-50 px-2 py-1 text-xs rounded-xl flex my-auto' key={index}>
                                            {language}
                                            <IoMdClose className='my-auto ml-2 cursor-pointer' onClick={() => removeLanguage(index)} />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className='mt-3'>
                                <h3 className='font-medium mx-5'>Skills</h3>
                                <div className='flex gap-2 mx-5 mt-3'>
                                    <input type="text" id='newskill' placeholder="Add new skill" className='flex justify-start font-medium w-8/12 px-3 rounded-md' />
                                    <button
                                        className='mx-5 font-medium bg-slate-300 px-5 rounded-md'
                                        onClick={() => addSkill(document.getElementById('newSkill').value)}
                                    >
                                        Add
                                    </button>
                                </div>
                                <div className='flex gap-3 mx-5 mt-3'>
                                    {user.skills.map((skill, index) => (
                                        <div className='bg-red-50 px-2 py-1 text-xs rounded-xl flex my-auto' key={index}>
                                            {skill}
                                            <IoMdClose className='my-auto ml-2 cursor-pointer' onClick={() => removeSkill(index)} />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className='flex justify-center my-5'>
                                <button
                                    type='submit'
                                    className='border-2 border-red-400 px-3 rounded-md py-2 hover:bg-red-100'
                                >
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FreelancerProfile;