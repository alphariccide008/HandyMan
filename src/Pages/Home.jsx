import {Link} from 'react-router-dom'

import './home.css';
import { motion } from 'framer-motion';
import FirstImg from '../assets/images/projects.jpeg'
import BannerImg from '../assets/images/project1.jpg'
import SecondImg from '../assets/images/Aboutus.jpeg'
import ThridImg from '../assets/images/toilet3.jpg'
import { FaToolbox, FaTools ,FaStackExchange,FaFan} from 'react-icons/fa';

export default function Home(){
    return (
        <>
            {/* This is the Hero Section */}
            <section className='hero text-black pt-10  md:pt-28   '>
               <div className='lg:mx-[20%]'>

                <div className='relative '>
                    <div className="md:flex container px-5 gap-3 pb-20">
                        <div className="md:w-1/2 img-shadow2 mt-28  flex-col">
                            <motion.h1 
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 150,
                              damping: 10,
                              delay : 0.4,
                              }}
                            

                            className='pb-2 md:img-shadow2 ' style={{fontSize:'15px'}}>LET US RE-VAMP YOUR HOME </motion.h1>
                            <motion.h3 
                            
                            
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              type: "spring",
                              stiffness: 150,
                              damping: 10,
                              delay: 0.6,
                            }}

                            className='md:absolute  md:flex mb-7  lg:mr-[-300px] text-4xl font-bold'>BRINGING IMAGINATIONS TO LIFE</motion.h3>


                            

                            <motion.h5
                            
                            
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              type: "spring",
                              stiffness: 150,
                              damping: 10,
                              delay: 0.8,
                            }}

                            className='mt-32 pr-10 hidden md:flex-col md:flex '>Let us revamp your home
                            Making imagination a reality Create that dream space you have always wanted. Our team will work with you to achieve your perfect space. Working with you to make your fantasy a reality. 
                            
                            </motion.h5>
                        </div>
                        <div className="md:w-1/2  md:space-y-1  md:flex flex-col">
                            
                            <motion.img 
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 150,
                              damping: 10,
                              delay : 0.10,
                              }}
                            
                            src={BannerImg} alt="Interior" style={{ height: '408px', width:'100%', borderRadius:'10px'}} />
                            <motion.h5 
                            
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              type: "spring",
                              stiffness: 150,
                              damping: 10,
                              delay: 0.8,
                            }}
                            
                            className='mt-10 pr-10  md:hidden ' style={{ fontSize:'14px'}}>Let us revamp your home. Making imagination a reality. Create that dream space you have always wanted. Our team will work with you to achieve your perfect space. Working with you to make your fantasy a reality. 
                            
                            </motion.h5>
                        </div>
                    </div>
                </div>

                

               </div>
            </section>


            {/* What we Offer section */}
            <section className='offer justify-center'>
                <div className='lg:mx-[18%]'>
                <div className="container relative md:flex md:px-5  px-10 py-28  ">
                    <div className="md:w-1/2 flex-col lg:px-20">
                        <h1 className='text-4xl font-bold text-center md:mb-10'>WHAT WE OFFER</h1>
                        <p className='hidden md:flex mt-48'>__________________________________</p>
                        <p className='mb-10 md:hidden'>___________________________________</p>
                    </div>
                    <div className="md:w-1/2 flex-col lg:px-10 md:justify-center">
                        <div className="md:flex mb-5 ">
                            <div className="flex-col">
                                <FaToolbox className='text-4xl mb-3 mt-7 '/>
                            </div>
                            <div className="flex-col px-10 ">
                                <h3 className='font-bold mb-3'>EXPERIENCED TEAM</h3>
                                <p className='fontColor'>
                                Every member of our team is a master of their craft. Each one of us has years of experience under our belt and are passionate about what we do. This passion is seen in each and every project we get our hands on. 
                                </p>
                            </div>
                        </div>
                        <div className="md:flex mb-5 ">
                            <div className="flex-col">
                                <FaTools className='text-4xl mb-3 my-8  '/>
                            </div>
                            <div className="flex-col px-10 ">
                                <h3 className='font-bold mb-3'>PERSONALIZED SERVICE</h3>  
                                <p className='fontColor'>
                                We know and understand that your home is a representation of your personal style and needs. We work with you to create the perfect space that fits your needs and vision. 
                                </p>
                            </div>
                        </div>
                        <div className="md:flex mb-5 ">
                            <div className="flex-col">
                                <FaStackExchange className='text-4xl mb-3 mt-7 '/>
                            </div>
                            <div className="flex-col px-10 ">
                                <h3 className='font-bold mb-3'>FAIR PRICE</h3>
                                
                                <p className='fontColor'>
                                We know that renovations are big and expensive projects, but while working with us we are committed to making renovations accessible. We offer fair and transparent prices with fair financing options to fit your budget. 
                                </p>
                            </div>
                        </div>
                        
                       
                        
                    </div>
                </div>
                </div>
            </section>


       
        {/* Latest Project Section */}

        <section className='projects text-black    '>
               <div className='lg:mx-[20%]'>
               <div className="container relative md:flex  px-10 py-10 pt-28 ">
                    <div className="md:w-1/2 flex-col">
                        <h1 className='text-4xl  font-bold md:mx-16 mb-5 text-center 
                        '>LATEST PROJECT</h1>
                        <p className='text-center mb-5 md:hidden'>______________________________</p>
                        
                    </div>
                    <div className="md:w-1/2 flex-col md:px-6 md:text-center  md:justify-center">
                        <div className="md:flex mb-5">
                            <div className="hidden md:flex-col md:flex">
                                <FaFan className='text-5xl my-3 md:mx-3 img-shadow2 ring-blue-300 '/>
                            </div>
                            <div className="flex-col px-10 md:px-5  ">
                                    <p style={{ fontSize: '14px'}}>
                                    Our team is constantly striving for perfection. We are lucky to build relationships with our clients and the community. Building this relationships help in making every client's renovation needs a reality.
                                    </p>
                            </div>

                        </div>
                       
                    </div>
                </div>
                
                <div className='relative  '>
                    <div className="md:flex container px-5 gap-3 pb-10">
                        <div className="md:w-[70%] img-shadow2 flex-col">
                            <motion.img 
                            
                            
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 150,
                              damping: 10,
                              delay : 0.4,
                              }}
                            
                            src={FirstImg} alt="Interior" style={{ height :'406px', width: '100%', borderRadius:'10px'}} />
                        </div>
                        <div className="md:w-[30%] img-shadow2 md:space-y-1 hidden md:flex md:flex-col">
                            <motion.img 
                            
                             
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 150,
                              damping: 10,
                              delay : 0.6,
                              }}

                            src={SecondImg} alt="Interior" style={{ height: '200px', width:'100%', borderRadius:'10px'}} />
                            <motion.img 
                             
                             initial={{ opacity: 0, scale: 0 }}
                             whileInView={{ opacity: 1, scale: 1 }}
                             transition={{
                               type: "spring",
                               stiffness: 150,
                               damping: 10,
                               delay : 0.8,
                               }}
                            
                            src={ThridImg} alt="Interior" style={{ height : '200px', width : '100%', borderRadius:'10px'}} />
                        </div>
                    </div>
                </div>

                <div className='relative mt-5  '>
                    <div className="md:flex container px-5 gap-3 pb-10">
                        <div className="md:w-[70%] img-shadow2 flex-col">
                            <h1 className='text-2xl font-bold lg:pt-3 mb-8'>SUNSHINE RESIDENCE</h1>
                        </div>
                        <div className="md:w-[30%] img-shadow2 md:space-y-1  md:flex md:flex-col items-end lg:pr-[3%] md:pr[5%]">
                            <Link to={'/services'} className=' hover:text-black hover:bg-cyan-500 px-6 py-4 bg-cyan-600 rounded-xl text-white'>See More</Link>
                        </div>
                    </div>
                </div>

               </div>
            </section>

        {/* Client Testimonial */}
        <section className='projects text-black pt-20 checkColor    '>
               <div className='lg:mx-[10%] md:mx-[%]'>
                
                <div className='relative  '>
                    <h1 className='text-center text-4xl font-bold'>TESTIMONIAL</h1>
                    <div className="md:flex container px-5 gap-3 pb-10">
                    <div className="md:w-1/2 img-shadow2 my-10 md:space-y-1 flex-col">
                            <motion.div 
                            
                             
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 150,
                              damping: 10,
                              delay : 0.6,
                              }}
                            
                            className="md:flex card p-12  ">
                                    <div className='flex-col'>
                                        <FaFan className='my-4 mr-4' style={{fontSize:'70px'}}/>
                                    </div>
                                    <div>
                                        <h1 className='font-bold mb-4' style={{fontSize:'20px'}}>James Johnson</h1>
                                        <p style={{fontSize:'14px'}}>
                                        
                                        "I just wanted to take a moment to thank you for the amazing work you did on my kitchen. It looks absolutely stunning! I am so happy with the results. Your team was so professional and efficient. They worked hard and got the job done on time and within budget. I especially appreciated their willingness to go the extra mile to make sure that everything was perfect. 
                                        
                                        </p>
                                    </div>
                            </motion.div>
                        </div>
                        <div className="md:w-1/2 img-shadow2 my-10 md:space-y-1 flex-col">
                            <motion.div 
                            
                             
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 150,
                              damping: 10,
                              delay : 0.8,
                              }}
                            
                            className="md:flex p-12  card">
                                    <div className='flex-col'>
                                        <FaFan className='my-4 mr-4' style={{fontSize:'70px'}}/>
                                    </div>
                                    <div>
                                        <h1 className='font-bold mb-4' style={{fontSize:'20px'}}>Noah Davis</h1>
                                        <p style={{fontSize:'14px'}}>
                                        
                                        "I am writing to recommend all remodeling. I recently had them remodel my bathroom and I am absolutely thrilled with the results. all remodeling and his team were professional, efficient, and affordable. They listened to my needs and came up with a plan that was both functional and stylish. They worked hard to meet my deadlines and kept me updated on the progress of the project.
                                        </p>
                                    </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

               
               </div>
            </section>
       
        </>
    )
}