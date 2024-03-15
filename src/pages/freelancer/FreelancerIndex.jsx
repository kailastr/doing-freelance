import React, { useState } from 'react';

//components
import GigCard from '../../components/Cards/GigCard';

const FreelancerIndex = () => {

    const [gigDetails, setGigDetails] = useState([
        {
            title: "Web 3 Project",
            describtion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et maiores dolore a magnam incidunt accusantium, beatae suscipit cumque atque dignissimos saepe deleniti consequuntur non doloremque ipsa fugiat repellendus sequi nam?",
            prerequisite: ["HTML", "JavaScript", "MongoDB", "Blockchain", "C#"]
        },
        {
            title: "Web 3 Project",
            describtion: "A Freelance working platform",
            prerequisite: ["React", "Angular"]
        },
        {
            title: "Web 3 Project",
            describtion: "A Freelance working platform",
            prerequisite: ["Nodejs", "Express"]
        },
        {
            title: "Web 3 Project",
            describtion: "A Freelance working platform",
            prerequisite: ["React", "Shopify"]
        },
    ]);

    return (
        <>
            <div className='w-full flex justify-center'>
                <div className='w-11/12 bg-slate-100 mt-20'>

                    <div className='flex justify-center mt-5'>
                        <h1 className='font-semibold text-3xl'><span className='text-red-500'>Gigs</span> You may Like</h1>
                    </div>

                    <div className='w-full flex items-center'>
                        <div className='my-10 mx-10 w-full'>
                            {gigDetails.map((item, index) => (
                                <GigCard {...item} key={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FreelancerIndex;