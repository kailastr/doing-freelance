import React from 'react';

//layout
import LandingPageLayout from '../layouts/LandingPageLayout';

//image
import Image1 from '../components/images/img.jpg'

const LandingPage = () => {
    return (
        <>
            <div className=''>

                <section className="relative z-10">
                    <div
                        className="bg-cover bg-center"
                        style={{ backgroundImage: `url(https://masterbundles.com/wp-content/uploads/2022/08/featured-image-how-easy-is-it-to-create-and-upload-a-product-to-masterbundles_-scaled.jpg)`, height: ' 70vh' }}
                    >
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                            <h1 className="text-4xl font-bold mb-4 ">Welcome to Doing<span className='text-red-600'>Freelance</span></h1>
                            <p className="text-xl font-semibold">The decentralized freelance marketplace</p>
                        </div>
                    </div>
                </section>

                <section className=' py-10' id='home'>

                    <div className='mx-28 flex flex-row'>
                        <div className='w-4/12'>
                            <img src={`https://img.freepik.com/free-vector/connected-world-concept-illustration_114360-3027.jpg`} alt="" />
                        </div>
                        <div className=' w-8/12 flex items-center flex-col text-pretty font-medium space-y-5 my-auto'>
                            <p>
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
                    </div>

                </section>

                <section className=' flex justify-center mt-10  text-center' id='about'>
                    <div className='w-3/4  bg-red-100 rounded-md'>
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
                    <h3 className='font-bold text-2xl pt-8 text-center'>How It Works ? </h3>
                    <img src="https://img.freepik.com/premium-vector/time-is-money-good-balance-idea-time-work-flat-vector-modern-illustration_566886-10165.jpg" alt="Image" className='mx-auto h-80' />

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