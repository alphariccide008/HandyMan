import Banner from '../assets/images/about.jpg';
import BannerImg from '../assets/images/livingroom2.jpg'
import { FaArrowDown} from 'react-icons/fa'
import { Link } from 'react-router-dom';

import {FaStar,
    FaFacebook, 
    FaTwitter,
    FaInstagram,
    FaLightbulb,
    FaTools,
    FaMoneyCheck,
    FaToolbox
} from 'react-icons/fa';
import './About.css';
import {motion} from 'framer-motion';



const About = () => {
  return (
    
      <>
        <section>
        <div className=" overflow-hidden justify-center   md:px-[50px] lg:px-9 lg:mx-[100px]">
            <div className="relative container  md:flex px-10    my-20 md:mx-[80px] lg:mx-[70px]">
               <div className=" md:flex-row flex flex-col-reverse mt-20">
                <div className="md:w-1/2  md-px-7">
                    <div className='mt-10 md:mt-20'>
                        <motion.div 
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 200,
                              damping: 10,
                              delay: 2,
                              }}
                        className='absolute mt-[-20px] ml-[-23px]'>
                        <FaStar className='text-black  text-5xl'/>
                        </motion.div>
                        
                        <motion.img
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 200,
                              damping: 10,
                              }}
                        
                            src={Banner} alt="Sitting Room" className='img-shadow2' style={{ height: "450px", width:'100%',borderRadius: "4px"}}/>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 150,
                              damping: 10,
                              delay : 2,
                              }}
                        className="md:flex hidden text-black  space-x-6 text-2xl  justify-end mr-5 mt-4">
                        <a href="" className='img-shadow2'><FaTwitter/></a>
                        <a href="#"><FaFacebook/></a>
                        <a href="#"><FaInstagram/></a>
                        </motion.div>
                    </div>
                    <div className="flex-col  md:w-1/2 text-black md:px-10  lg:px-20">
                        <motion.h2
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              type: "spring",
                              stiffness: 150,
                              damping: 10,
                              delay: 0.6,
                            }}
                        
                        className=" md:absolute text-center  text-black mt-20   md:ml-[-186px]  " style={{ fontSize : "80px",fontFamily: 'Poppins, sans-serif'}}> <span className='md:text-white'>AB</span><span className='md:img-shadow2'>OUT US</span>
                        </motion.h2>
                        <hr className='md:hidden' />
                        
                        <motion.h6
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              type: "spring",
                              stiffness: 150,
                              damping: 10,
                              delay: 1,
                            }}
                        className='lg:mt-[46%]  md:mt-[43%] mt-3' style={{fontSize:'16px',fontFamily: 'Poppins, sans-serif'}}> Welcome to All A Handyman, where creativity meets craftsmanship. We are a full-service renovation company dedicated to transforming spaces into beautiful, functional environments that reflect your unique style and needs. 
                        </motion.h6>

                        <motion.h6
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              type: "spring",
                              stiffness: 150,
                              damping: 10,
                              delay: 1,
                            }}
                        className="mt-3 " style={{fontSize:'16px',fontFamily: 'Poppins, sans-serif'}}>At All A Handyman, we believe that great design goes beyond aesthetics-it's about creating spaces that inspire, comfort, and enhance your daily life. Our approach is collaborative, working closely with you from concept to completion to ensure every detail aligns with your expectations.
                        </motion.h6>
                        
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 150,
                              damping: 10,
                              delay : 2,
                              }}
                        className="flex py-10 md:hidden text-black  space-x-6 text-2xl  justify-end mr-5 mt-4">
                        <a href=""><FaTwitter/></a>
                        <a href="#"><FaFacebook/></a>
                        <a href="#"><FaInstagram/></a>
                        </motion.div>
                    </div>
               </div>
            </div>
           

        </div>
        </section>

        {/* our goals section */}
        <section className=' mt-20 bgColor sm:overflow-hidden mx-auto  '>
            <motion.div
                 initial={{ opacity: 0, scale: 0 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{
                   type: "spring",
                   stiffness: 150,
                   damping: 10,
                   delay : 0.8,
                   }}
                

            className="relative   md:flex md:flex-row my-20 md:mx-[50px] md:px-10 lg:mx-[100px]">
                <div className="flex-col md:w-1/2 px-10 fontColor">
                <motion.h1 
                     initial={{ opacity: 0, x: -100 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{
                       type: "spring",
                       stiffness: 150,
                       damping: 10,
                       delay: 0.4,
                     }}
                className='font-4xl text-center pt-28 pb-8 text-4xl font-bold'>OUR MISSION</motion.h1>
                <hr />
                    <motion.div 
                    
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 150,
                      damping: 10,
                      delay: 1,
                    }}
                    className="flex pb-[100px] pt-3 px-5">
                        
                        <motion.div 
                         initial={{ opacity: 0, scale: 0 }}
                         whileInView={{ opacity: 1, scale: 1 }}
                         transition={{
                           type: "spring",
                           stiffness: 150,
                           damping: 10,
                           delay : 0.6,
                           }}
                        className="flex-col px-7">
                        <p className='text-sm' style={{fontSize : "16px", fontFamily: 'Poppins, sans-serif'}}>
                        We want to live in a world where people can design homes that match their needs. That's why we take a lot of time and care in getting to know our clients from the moment they reach out to us and ask for our help.
                        </p>
                        </motion.div>
                    </motion.div>
                </div>
                <div className="flex-col md:w-1/2 px-10 fontColor">
                <h1 className='font-4xl text-center pt-28 pb-8 text-4xl font-bold'>OUR VISION</h1>
                <hr />
                    <div className="flex pb-[100px] pt-3 mx-3">
                       
                        <div className="flex-col px-4 md:px-7">
                            <p className='text-sm' style={{fontSize: "16px", fontFamily: 'Poppins, sans-serif'}}>
                            We want to live in a world where people can design homes that match their needs. That's why we take a lot of time and care in getting to know our clients from the moment they reach out to us and ask for our help.

                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>

        <section className=' justify-center'>
                <div className='lg:mx-[18%] '>
                <div  className="container relative text-center text-black  md:px-36  px-5 md:py-20  ">
                    <h1 className='font-bold  md:text-6xl text-2xl text-center mb-7 mt-10'>Discover Our Philosophy</h1>
                    {/* <p className='md:flex hidden text-center md:px-[10%] ' style={{color:'#666666'}}>_________________________________________________________</p>
                    <p className='md:hidden py-4' style={{color:'#666666'}}>____________________________________</p>
                     */}
                    
                </div>
                
                </div>
                <div className="md:flex mx-8 mt-2 text-black">
                    <div className="flex-col md:w-1/2 mb-10"><img src={BannerImg} style={{borderRadius:'10px'}} alt="" /></div>
                    <div className="flex-col md:w-1/2 md:px-[20px] md:pr-10px  px-5 lg:pt-12 lg:px-[100px]">
                        <h1 className='font-bold md:text-sm mb-4  text-2xl lg:text-2xl' style={{color:'#666666'}}>
                         Our Design Philosphy</h1>
                        <hr />
                        <div style={{fontSize:'16px',fontFamily: 'Poppins, sans-serif'}}>
                            <p className=' mt-5' style={{color:'#333333'}}>
                                At All A Handyman, we believe that exceptional design should seamlessly blend aesthetics, functionality, and sustainability. Our approach is rooted in a profound understanding of our clients’ needs and the unique context of each project.
                            </p>
                            <p className=' pt-3 mb-10' style={{color:'#333333'}}>
                            We collaborate closely with our clients throughout the entire design process, ensuring that their vision is brought to life in a way that is both beautiful and practical. 
                            </p>
                            <p className='lg:flex md:hidden hidden' style={{color:'#333333'}}>
                            By working together from the initial concept through to the final execution, we ensure that every detail aligns with their needs, preferences, and lifestyle. 
                            </p>
                            <p className='lg:flex md:hidden hidden'  style={{color:'#333333'}}>
                            Incorporating environmentally responsible practices is at the core of our philosophy. We carefully select sustainable materials and innovative design solutions that not only reduce the environmental impact but also enhance the long-term performance and sustainability of the space.
                            </p>
                            <p className=' pt-3 mb-10 lg:flex md:hidden ' style={{color:'#333333'}}>
                            Our commitment to excellence drives us to deliver designs that are timeless, innovative, and tailored to enhance the lives of those who inhabit them.
                            </p>
                            <div className='pr-[40%] mb-10 md:pr-[70%]'>
                       <Link to={'/contact'}
                        class="relative md:my-4 flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-cyan-400 rounded-md group"
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
                            >LEARN MORE</span >
                        </Link>
                       </div>
                        </div>
                        


                    </div>
                </div>
            </section>

        {/* Why choose us */}
        <section className=' chooseColor text-black ' style={{fontFamily: 'Poppins, sans-serif'}}>
            <div className="text-center font-bold md:px-8  px-4 pt-10">
                <motion.h1 
                   initial={{ opacity: 0, x: -100 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{
                     type: "spring",
                     stiffness: 150,
                     damping: 10,
                     delay: 0.4,
                   }} 
                className='md:mt-24 text-3xl' >WHY CHOOSE US ?</motion.h1>
                <div className="md:flex mt-8  gap-4 justify-center   py-5">
                    <motion.div
                    
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 150,
                      damping: 10,
                      delay : 0.2,
                      }}
                    className="flex-col py-20 mb-10 md:w-1/4  img-shadow2 card">
                    <motion.div className="md:px-2  px-14">
                    <motion.div className='lg:flex justify-center mb-4'>
                    <FaLightbulb className=' lg:mx-3 my-1 text-4xl idea mx-[35%]'/><h3 className='pt-3 font-bold'>Over 20 years of experience</h3>
                    </motion.div>
                    <p style={{fontSize:"12px"}}>Every member of our team is a master of their craft. Each one of us has years of experience under our belt and are passionate about what we do. This passion is seen in each and every project we get our hands on. </p>
                    </motion.div>
                        
                    </motion.div>

                    <motion.div
                    
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 150,
                      damping: 10,
                      delay : 0.2,
                      }}
                    className="flex-col py-20 mb-10 md:w-1/4  img-shadow2 card">
                    <motion.div className="md:px-2  px-14">
                    <motion.div className='lg:flex justify-center mb-4'>
                    <FaTools className=' lg:mx-3 my-1 text-4xl idea mx-[35%]'/><h3 className='pt-3 font-bold'>Personalized Service</h3>
                    </motion.div>
                    <p style={{fontSize:"12px"}}>We know and understand that your home is a representation of your personal style and needs. We work with you to create the perfect space that fits your needs and vision. </p>
                    </motion.div>
                        
                    </motion.div>

                    <motion.div
                    
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 150,
                      damping: 10,
                      delay : 0.2,
                      }}
                    className="flex-col py-20 mb-10 md:w-1/4  img-shadow2 card">
                    <motion.div className="md:px-2  px-14">
                    <motion.div className='lg:flex justify-center mb-4'>
                    <FaToolbox className=' lg:mx-3 my-1 text-4xl idea mx-[35%]'/><h3 className='pt-3 font-bold'>Quality materials and workmanship</h3>
                    </motion.div>
                    <p style={{fontSize:"12px"}}>We use only the highest quality materials and workmanship to ensure that your home and yard are beautiful and durable.</p>
                    </motion.div>
                        
                    </motion.div>

                    <motion.div
                    
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 150,
                      damping: 10,
                      delay : 0.2,
                      }}
                    className="flex-col py-20 mb-10 md:w-1/4  img-shadow2 card">
                    <motion.div className="md:px-2  px-14">
                    <motion.div className='lg:flex justify-center mb-4'>
                    <FaMoneyCheck className=' lg:mx-3 my-1 text-4xl idea mx-[35%]'/><h3 className='pt-3 font-bold'>Fair Price</h3>
                    </motion.div>
                    <p style={{fontSize:"12px"}}>We know that renovations are big and expensive projects, but while working with us we are committed to making renovations accessible. We offer fair and transparent prices with fair financing options to fit your budget. 
</p>
                    </motion.div>
                        
                    </motion.div>

                    
                    
                
                    
                   
                </div>
            </div>
        </section>
        

        {/* Frequently asked questions section */}
        <section className=' text-black ' style={{fontFamily: 'Poppins, sans-serif'}}>
            <div className=' text-center py-16 lg:py-30 lg:px-[25%] px-[10%]'>
            <h1 className='font-bold md:text-6xl text-2xl text-center mb-5'>FREQUENTLY ASKED QUESTIONS</h1>
                
                <p className="py-4 lg:px-10" style={{fontSize:'16px'}}>Frequently asked questions (FAQ) or Questions and Answers (Q&A), are listed questions and answers, all supposed to be commonly asked in some context</p>

                <details className="mb-3" style={{BorderRadiusTopright:'10px', }}>
                    <summary className='bg-cyan-500 text-white p-5' style={{borderTopRightRadius:'10px', borderTopLeftRadius:'10px'}}> <div className="flex">
                        <div className="flex-col mx-2 lg:w-1/5 " style={{paddingTop:'4px'}}><FaArrowDown/></div>
                        <div className="flex-col lg:w-1/2  text-center "> How long does a typical remodeling project take?</div>
                      </div> 
                    </summary>
                    <p className='bg-cyan-400 lg:px-36 p-2' style={{color:'#e7e6e6',fontSize:'15px', borderBottomLeftRadius:'10px', borderBottomRightRadius:'10px'}}>The duration of a project varies depending on its scope and complexity. We provide a detailed timeline during the planning phase.</p>
                </details>
                <details className="mb-3" style={{BorderRadiusTopright:'10px', }}>
                    <summary className='bg-cyan-500 text-white p-5' style={{borderTopRightRadius:'10px', borderTopLeftRadius:'10px'}}> <div className="flex">
                        <div className="flex-col mx-2 lg:w-1/5 " style={{paddingTop:'4px'}}><FaArrowDown/></div>
                        <div className="flex-col lg:w-1/2  text-center ">Do you offer free consultations?</div>
                      </div> 
                    </summary>
                    <p className='bg-cyan-400 lg:px-36 p-2' style={{color:'#e7e6e6',fontSize:'15px', borderBottomLeftRadius:'10px', borderBottomRightRadius:'10px'}}>Yes, we offer a free initial consultation to discuss your project ideas and provide a preliminary estimate.</p>
                </details>
                <details className="mb-3" style={{BorderRadiusTopright:'10px', }}>
                    <summary className='bg-cyan-500 text-white p-5' style={{borderTopRightRadius:'10px', borderTopLeftRadius:'10px'}}> <div className="flex">
                        <div className="flex-col mx-2 lg:w-1/5 " style={{paddingTop:'4px'}}><FaArrowDown/></div>
                        <div className="flex-col lg:w-1/2  text-center ">Are you licensed and insured?</div>
                      </div> 
                    </summary>
                    <p className='bg-cyan-400 lg:px-36 p-2' style={{color:'#e7e6e6',fontSize:'15px', borderBottomLeftRadius:'10px', borderBottomRightRadius:'10px'}}>Absolutely. We are fully licensed and insured to ensure the safety and peace of mind of our clients.</p>
                </details>
                <details className="mb-3" style={{BorderRadiusTopright:'10px', }}>
                    <summary className='bg-cyan-500 text-white p-5' style={{borderTopRightRadius:'10px', borderTopLeftRadius:'10px'}}> <div className="flex">
                        <div className="flex-col mx-2 lg:w-1/5 " style={{paddingTop:'4px'}}><FaArrowDown/></div>
                        <div className="flex-col lg:w-1/2  text-center ">Can I live in my home during the remodeling process?</div>
                      </div> 
                    </summary>
                    <p className='bg-cyan-400 lg:px-36 p-2' style={{color:'#e7e6e6',fontSize:'15px', borderBottomLeftRadius:'10px', borderBottomRightRadius:'10px'}}> Depending on the extent of the work, it may be possible. We strive to minimize disruption to your daily life.</p>
                </details>
                <details className="mb-3" style={{BorderRadiusTopright:'10px', }}>
                    <summary className='bg-cyan-500 text-white p-5' style={{borderTopRightRadius:'10px', borderTopLeftRadius:'10px'}}> <div className="flex">
                        <div className="flex-col mx-2 lg:w-1/5 " style={{paddingTop:'4px'}}><FaArrowDown/></div>
                        <div className="flex-col lg:w-1/2  text-center ">What types of payment do you accept?</div>
                      </div> 
                    </summary>
                    <p className='bg-cyan-400 lg:px-36 p-2' style={{color:'#e7e6e6',fontSize:'15px', borderBottomLeftRadius:'10px', borderBottomRightRadius:'10px'}}>We accept various payment methods, including cash, checks, and major credit cards. Financing options are also available.</p>
                </details>
                <details className="mb-3" style={{BorderRadiusTopright:'10px', }}>
                    <summary className='bg-cyan-500 text-white p-5' style={{borderTopRightRadius:'10px', borderTopLeftRadius:'10px'}}> <div className="flex">
                        <div className="flex-col mx-2 lg:w-1/5 " style={{paddingTop:'4px'}}><FaArrowDown/></div>
                        <div className="flex-col lg:w-1/2  text-center "> How do you handle unexpected issues during the project?</div>
                      </div> 
                    </summary>
                    <p className='bg-cyan-400 lg:px-36 p-2' style={{color:'#e7e6e6',fontSize:'15px', borderBottomLeftRadius:'10px', borderBottomRightRadius:'10px'}}> We communicate any unforeseen issues promptly and work with you to find the best solution without compromising quality.</p>
                </details>
                
                
            </div>
        </section>

    
    </>
  )
}
export default About
