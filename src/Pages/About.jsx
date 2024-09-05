import Banner from '../assets/images/about.jpg';
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
                        
                        className=" md:absolute text-center  text-black mt-20   md:ml-[-186px]  " style={{ fontSize : "80px"}}> <span className='md:text-white'>AB</span><span className='md:img-shadow2'>OUT US</span>
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
                        className='lg:mt-56  md:mt-48 mt-10   text-sm '> Welcome to All-Remodelling, where creativity meets craftsmanship. We are a full-service interior design company dedicated to transforming spaces into beautiful, functional environments that reflect your unique style and needs. Whether you're looking to revamp your home, office, or any other space, our team of experienced designers and skilled craftsmen are here to bring your vision to life.
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
                        className="mt-5 text-sm">At All-Remodelling, we believe that great design goes beyond aesthetics—it's about creating spaces that inspire, comfort, and enhance your daily life. Our approach is collaborative, working closely with you from concept to completion to ensure every detail aligns with your expectations.
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
                <div className="flex-col md:w-1/2 px-5 fontColor">
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
                    <motion.div 
                    
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 150,
                      damping: 10,
                      delay: 1,
                    }}
                    className="flex pb-[100px]">
                        <motion.div 
                             initial={{ opacity: 0, scale: 0 }}
                             whileInView={{ opacity: 1, scale: 1 }}
                             transition={{
                               type: "spring",
                               stiffness: 150,
                               damping: 10,
                               delay : 2,
                               }}
                            className="flex-col">
                            <FaStar className='text-5xl mt-5'/>
                        </motion.div>
                        <motion.div 
                         initial={{ opacity: 0, scale: 0 }}
                         whileInView={{ opacity: 1, scale: 1 }}
                         transition={{
                           type: "spring",
                           stiffness: 150,
                           damping: 10,
                           delay : 0.6,
                           }}
                        className="flex-col px-5">
                        <p className='text-sm' style={{fontSize : "12px"}}>
                        We're on a mission to change the way the housing market works. Rather than offering one service or another, we want to combine as many and make our clients' lives easy and carefree. Our goal is to match our clients with the perfect properties that fit their tastes, needs, and budgets.
                        </p>
                        </motion.div>
                    </motion.div>
                </div>
                <div className="flex-col md:w-1/2 md:px-5 fontColor">
                <h1 className='font-4xl text-center pt-28 pb-8 text-4xl font-bold'>OUR VISION</h1>
                    <div className="flex pb-[100px] mx-3">
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 150,
                            damping: 10,
                            delay : 2,
                            }}
                        className="flex-col">
                            <FaStar className='text-5xl mt-5'/>
                        </motion.div>
                        <div className="flex-col px-4 md:px-5">
                            <p className='text-sm' style={{fontSize: "12px"}}>
                            We want to live in a world where people can design homes that match their needs. That's why we take a lot of time and care in getting to know our clients from the moment they reach out to us and ask for our help.

                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>

        {/* Why choose us */}
        <section className=' chooseColor text-black '>
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

    
    </>
  )
}
export default About
