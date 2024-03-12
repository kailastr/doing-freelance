import React from 'react';

//layout
import LandingPageLayout from '../layouts/LandingPageLayout';

const LandingPage = () => {
    return (
        <>
            <div className='text-center'>
                <section className=' py-10' id='home'>
                    <h1 className='font-semibold text-3xl'>
                        Welcome to
                        <span className='font-extrabold ml-2'>
                            Doing
                        </span>
                        <span className='font-extrabold text-red-500'>
                            Freelance
                        </span>
                    </h1>

                    <h3 className='font-bold text-xl py-8'>The decentralized freelance marketplace</h3>

                    <div className='mx-28 font-medium space-y-5'>
                        <p>
                            Welcome to.our decenttalized.reelance.marketolace.where vou can.ind.and bre talented.reelancers.from around.he worl
                            Welcome to our decentralized freelance marketplace, where you can find and hire talented freelancers from around the world.
                            Our platform offers a fair and transparent way for freelancers and clients to connect and collaborate, using the latest blockchain technology.
                            Whether you're looking for a freelance writer, designer, programmer, or marketer, our platform has a diverse range of skilled professionals ready to
                            work with you.
                        </p>
                        <p>
                            With no intermediaries, you can trust that your payments will be securely and instantly transferred directly to your freelancer, with no hidden fees or
                            delays.
                        </p>
                        <p>
                            Join our growing community of freelancers and clients, and experience the benefits of a decentralized and borderless marketplace for the gig
                            economy.
                        </p>
                    </div>

                </section>

                <section className=' flex justify-center mt-10' id='about'>
                    <div className='w-3/4  bg-slate-200 rounded-md'>
                        <h3 className='font-bold text-2xl py-8'>About Us</h3>
                        <div className='mb-10 font-normal space-y-5'>
                            <p>
                                Welcome to DoingFreelance! We are a decentralized treelance marketplace that aims to revolutionize the wav
                                Tree ancers and customers connect and collaborate.
                            </p>
                            <p>
                                Our plattorm provides a secure and trusted enronment for treelancers to showcase their skills and To
                                customers to find the perfect talent for their projects.
                            </p>
                            <p>
                                Customers can easily browse through a diverse pool of registered freelancers, each with their own unique set of
                                right professional for your project on DoingFreelance.
                            </p>
                            <p>
                                Join us today and experience the power of decentralized freelancing. Whether you are a freelancer looking for
                                opportunities or a customer in need of skilled professionals, DoingFreelance is here to connect you with the
                                talent you need.
                            </p>
                            <p>Start your freelancing journey with us today!</p>
                        </div>
                    </div>
                </section>

                <section className='py-10' id='working'>
                    <h3 className='font-bold text-2xl py-8'>How It Works ? </h3>

                    <div className='flex justify-center'>
                        <div className='w-3/4 space-y-3 text-left'>
                            <p> <span className='font-bold'> 1. Post Your Gig : </span> Clients can easily post their gigs by providing details about the project, including requirements, budget, and deadline.</p>
                            <p><span className='font-bold'>2. Discover Gigs : </span>Freelancers can browse through a wide range of gigs posted by clients. They can filter gigs based on their skills, interests, and preferences.</p>
                            <p><span className='font-bold'>3. Apply for Gigs : </span>Freelancers can apply for gigs that match their skills and expertise. They can submit their proposals, showcasing their qualifications and relevant experience.</p>
                            <p><span className='font-bold'>4. Review Applications : </span>Clients have the flexibility to review applications from freelancers and assess their suitability for the gig. They can view freelancer profiles, portfolios, and ratings before making a decision.</p>
                            <p><span className='font-bold'>5. Approval & Payment : </span>Once a client approves a freelancer's application, the gig is confirmed, and work begins. Payments are securely processed through blockchain technology, ensuring transparency and decentralization.</p>
                            <p><span className='font-bold'>6. Project Completion : </span> Freelancers deliver high-quality work within the specified timeframe. Clients have the opportunity to provide feedback and ratings based on their experience.</p>
                        </div>
                    </div>

                </section>

                <hr />
                <p className='py-5'>Join our platform today to connect with top freelancers or find your next gig opportunity!</p>
            </div>
        </>
    )
}

export default LandingPageLayout(LandingPage);