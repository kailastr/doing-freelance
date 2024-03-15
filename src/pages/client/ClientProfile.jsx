import React, { useState } from 'react';

//icons
import { LuBadgeCheck } from "react-icons/lu";
import { IoIosInformationCircleOutline, IoIosLink, IoMdClose } from "react-icons/io";
import { GrLocation, GrSemantics } from "react-icons/gr";
import { IoWalletOutline } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";

const ClientProfile = () => {

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

    return (
        <>
            <div>
                <div className='flex justify-center my-10'>
                    <h1 className='text-xl font-semibold'>Hey {user.FirstName}, Welcome to DoingFreelance</h1>
                </div>
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
            </div>
        </>
    )
}

export default ClientProfile