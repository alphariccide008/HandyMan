import {Link} from 'react-router-dom'

import './home.css';
import { motion } from 'framer-motion';
import FirstImg from '../assets/images/projects.jpeg'
import BannerImg from '../assets/images/bannerimg.webp'
import SecondImg from '../assets/images/Aboutus.jpeg'
import ThridImg from '../assets/images/toilet3.jpg'
import { FaToolbox, FaTools ,FaStackExchange,FaFan} from 'react-icons/fa';

export default function Home(){
    return (
        <>
            {/* This is the Hero Section */}
            <section className='home text-black pt-10  md:pt-28   '>
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
                            

                            className='pb-2 md:img-shadow2 lg:text-start md:text-center text-color' style={{fontSize:'15px',color:''}}>LET US RE-MODEL YOUR HOME </motion.h1>
                            <motion.h3 
                            
                            
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              type: "spring",
                              stiffness: 150,
                              damping: 10,
                              delay: 0.6,
                            }}

                            className='  md:flex mb-7  lg:mr-[-300px] text-4xl font-bold text-color2 lg:text-start md:text-center'>BUILDING YOUR VISION RECREATING YOUR IMAGINATIONS</motion.h3>


                            

                            <motion.h5
                            
                            
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              type: "spring",
                              stiffness: 150,
                              damping: 10,
                              delay: 0.8,
                            }}

                            className='mt-32 md:mt-10 lg:mt-10 md:text-center lg:text-start pr-10 hidden md:flex-col md:flex text-color2 '>Let us re-model your home
                            Making imagination a reality Create that dream space you have always wanted. Our team will work with you to achieve your perfect space. Working with you to make your fantasy a reality. 
                            
                            </motion.h5>
                            <div className='hidden md:flex mt-10'>
                            <button 
                        class="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-cyan-400 rounded-md group"
                        >
                        <span
                            class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-cyan-700 rounded group-hover:-mr-4 group-hover:-mt-4"
                        >
                            <span
                            class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                            ></span>
                        </span>
                        <span
                            class="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-cyan-700 rounded group-hover:-ml-4 group-hover:-mb-4"
                        >
                            <span
                            class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                            ></span>
                        </span>
                        <span
                            class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-cyan-600 rounded-md group-hover:translate-x-0"
                        ></span>
                        <span
                            class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
                            >Explore Our Project</span
                        >
                        </button> 
                            </div>
                        </div>
                        <div className="md:w-1/2  md:space-y-1  md:flex flex-col">
                            
                           
                            <motion.h5 
                            
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              type: "spring",
                              stiffness: 150,
                              damping: 10,
                              delay: 0.8,
                            }}
                            
                            className='mt-10 mb-6 pr-10 text-color2  md:hidden ' style={{ fontSize:'14px'}}>Let us re-model your home. Making imagination a reality. Create that dream space you have always wanted. Our team will work with you to achieve your perfect space. Working with you to make your fantasy a reality. 
                            
                            </motion.h5>
                           <div className='md:hidden'>
                           <button 
                        class="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-cyan-400 rounded-md group"
                        >
                        <span
                            class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-cyan-700 rounded group-hover:-mr-4 group-hover:-mt-4"
                        >
                            <span
                            class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                            ></span>
                        </span>
                        <span
                            class="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-cyan-700 rounded group-hover:-ml-4 group-hover:-mb-4"
                        >
                            <span
                            class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                            ></span>
                        </span>
                        <span
                            class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-cyan-600 rounded-md group-hover:translate-x-0"
                        ></span>
                        <span
                            class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
                            >Explore Our Project</span
                        >
                        </button>
                           </div>

                        </div>
                    </div>
                </div>

                

               </div>
            </section>


            {/* What we Offer section */}
            <section className=' justify-center'>
                <div className='lg:mx-[18%] '>
                <div  className="container relative text-center text-black  md:px-36  px-5 md:py-28  ">
                    <h1 className='font-bold  md:text-6xl  text-center mb-5'>OUR LOVE FOR INTERIOR DESIGN</h1>
                    <p className='md:flex hidden text-center md:px-[10%] ' style={{color:'#666666'}}>_____________________ <span className='mt-2 text-sm' style={{color:'#666666'}}>ABOUT US</span>_______________________</p>
                    <p className='md:hidden py-4' style={{color:'#666666'}}>_______________  <span className='mt-5 text-sm' >ABOUT US</span>  _________________</p>
                    <h1 className='text-sm md:py-3' style={{color:'#666666', fontSize:'12px'}}>We are a passionate team dedicated to creating stunning interiors.</h1>
                    
                </div>
                
                </div>
                <div className="md:flex mx-8 mt-12 text-black">
                    <div className="flex-col md:w-1/2 mb-10"><img src={BannerImg} style={{borderRadius:'10px'}} alt="" /></div>
                    <div className="flex-col md:w-1/2 md:px-[20px] lg:pt-20 lg:px-[100px]">
                        <h1 className='font-bold md:text-2xl lg:text-2xl' style={{color:'#666666'}}>We have extensive experience in interior design and a broad knowledge of the latest trends and techniques.</h1>
                        <h1 className='text-sm my-10' style={{color:'#333333'}}>At All-handyMan, we blend creativity and functionality to transform spaces into stunning environments. Our team of passionate interior designers is dedicated to bringing your vision to life with personalized, stylish, and innovative solutions. Let us make your dream space a reality.</h1>
                        
                        <button 
                        class="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-cyan-400 rounded-md group"
                        >
                        <span
                            class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-cyan-700 rounded group-hover:-mr-4 group-hover:-mt-4"
                        >
                            <span
                            class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                            ></span>
                        </span>
                        <span
                            class="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-cyan-700 rounded group-hover:-ml-4 group-hover:-mb-4"
                        >
                            <span
                            class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                            ></span>
                        </span>
                        <span
                            class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-cyan-600 rounded-md group-hover:translate-x-0"
                        ></span>
                        <span
                            class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
                            >About Us</span
                        >
                        </button>

                    </div>
                </div>
            </section>




            {/* what we offer section */}
            <section className=' justify-center mb-10'>
                <div className='lg:mx-[18%] '>
                <div  className="container relative text-center text-black  md:px-36  px-5 md:py-28  ">
                    <h1 className='font-bold  md:text-6xl  text-center mb-5'>Expertly crafting your dream</h1>
                    <p className='md:flex hidden text-center md:px-[10%] ' style={{color:'#666666'}}>_____________________ <span className='mt-2 text-sm' style={{color:'#666666'}}>SERVICES</span>_______________________</p>
                    <p className='md:hidden py-4' style={{color:'#666666'}}>_______________  <span className='mt-5 text-sm' >SERVICES</span>  _________________</p>
                    <h1 className='text-sm md:py-3 mb-10' style={{color:'#666666', fontSize:'12px'}}>We turn your interior design dreams into reality with our specialized touch in elegant and functional spaces.</h1>
                   

                    <div className='px-[32%]'>
                    <a 
                            class="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-cyan-400 rounded-md group"
                            >
                            <span
                                class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-cyan-700 rounded group-hover:-mr-4 group-hover:-mt-4"
                            >
                                <span
                                class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                ></span>
                            </span>
                            <span
                                class="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-cyan-700 rounded group-hover:-ml-4 group-hover:-mb-4"
                            >
                                <span
                                class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                ></span>
                            </span>
                            <span
                                class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-cyan-600 rounded-md group-hover:translate-x-0"
                            ></span>
                            <span
                                class="relative w-full text-center text-white transition-colors duration-200 ease-in-out group-hover:text-white"
                                >SERVICES</span>
                    </a>

                    </div>
                </div>
               
                
                </div>
                <div className="flex mx-5 md:mx-[18%] mt-8 text-black  img-shadow2 " >
                    <div className=" w-1/2  service" style={{borderTopLeftRadius:'10px',borderBottomLeftRadius:'10px'}}>
                        
                    </div>
                    <div className=" w-1/2 md:px-[20px] p-[20px] lg:pt-20 bg-orange-50  lg:px-[100px]" style={{borderTopRightRadius:'10px',borderBottomRightRadius:'10px'}}>
                        <h1 className='font-bold md:text-2xl lg:text-2xl' style={{color:'#666666'}}>Residential</h1>
                        <hr />
                        <p className='pb-5 ' style={{fontSize:'12px',color:'#666666'}}>Personalized home interiors</p>
                        <h1 className='font-bold md:text-2xl lg:text-2xl' style={{color:'#666666'}}>Planning</h1>
                        <hr />
                        <p className='pb-5'  style={{fontSize:'12px',color:'#666666'}}>Optimized Layouts</p>
                        <h1 className='font-bold md:text-2xl lg:text-2xl' style={{color:'#666666'}}>Renovation</h1>
                        <hr />
                        <p className='pb-5' style={{fontSize:'12px',color:'#666666'}}>Seamless space Updates</p>
                        <h1 className='font-bold md:text-2xl lg:text-2xl' style={{color:'#666666'}}>Redesign</h1>
                        <hr />
                        <p className='pb-5' style={{fontSize:'12px',color:'#666666'}}>Innovative transformations</p>
                        
                        
                        
                        

                    </div>
                </div>
            </section>


       
        {/* Latest Project Section */}

        <section className='projects text-black'>
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