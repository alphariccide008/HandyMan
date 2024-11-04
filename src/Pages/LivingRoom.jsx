import './LivingRoom.css';
import { Link } from 'react-router-dom';
import Living1 from  '../assets/images/livingroom1.jpg';
import Living2 from  '../assets/images/livingroom2.jpg';
import Living3 from  '../assets/images/livingroom3.jpg';
import Living4 from  '../assets/images/livingroom4.jpg';
import Living5 from  '../assets/images/livingroom5.jpg';
import Living6 from  '../assets/images/sittingroom11.jpeg';
import Living7 from  '../assets/images/livingroom7.jpeg';
import Living8 from  '../assets/images/livingroom8.jpeg';




import {
    FaLightbulb,
    FaTools,
    FaMoneyCheck,
    FaToolbox
} from 'react-icons/fa';
import './About.css';
import {motion} from 'framer-motion';


const Bathroom = () => {
  return (
    <>
        {/* section Gallery Images */}
        <section className='relative text-black'>
           <div className='mx-[5%] py-20'>
                <h1 className='text-center font-bold text-2xl'>LIVING-ROOM GALLERY</h1>
                <div className="hidden md:flex">
                    <div className="md:w-1/3 p-3 flex-col">
                        <img src={Living1} alt="bathroom" className='' width={'100%'} style={{borderRadius:'7px',height:'90%'}} /> 
                    </div>
                    <div className="md:w-1/3 p-3 flex-col">
                        <img src={Living2} alt="bathroom" width={'100%'} style={{borderRadius:'7px',}}/> 
                    </div>
                    <div className="md:w-1/3 p-3 flex-col">
                    <img src={Living3} alt="bathroom" width={'100%'} style={{borderRadius:'7px'}} /> 
                    </div>
                </div>
                <div className=" md:flex">
                    <div className="md:w-1/3 p-3 flex-col">
                        <img src={Living4} alt="bathroom" className='' width={'100%'} style={{borderRadius:'7px',height:'320px'}} /> 
                    </div>
                    
                    <div className="md:w-1/3 p-3 flex-col">
                    <img src={Living6} alt="bathroom" width={'100%'} style={{borderRadius:'7px',height:'320px'}} /> 
                    </div>
                    <div className="md:w-1/3 p-3 flex-col">
                    <img src={Living7} alt="bathroom" width={'100%'} style={{borderRadius:'7px',height:'320px'}} /> 
                    </div>
                    <div className="md:w-1/3 p-3 flex-col">
                    <img src={Living8} alt="bathroom" width={'100%'} style={{borderRadius:'7px',height:'320px'}} /> 
                    </div>
                    <div className="md:w-1/3 p-3 flex-col">
                    <img src={Living5} alt="bathroom" width={'100%'} style={{borderRadius:'7px',height:'320px'}} /> 
                    </div>
                </div>
                <div className='pr-[50%] mb-10 lg:pr-[90%] md:pr-[70%]'>
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
                            >CONTACT US</span >
                        </Link>
                       </div>
           </div>
        </section>

        {/* Why choose us Section */}
        <section className=' chooseColor text-black '>
            <div className="text-center font-bold md:px-8 md:mx-[5%] px-4 pt-10">
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
                    <FaLightbulb className=' lg:mx-3 my-1 text-4xl idea mx-[35%]'/><h3 className='pt-3 font-bold'>An Experienced Team </h3>
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
                    <p style={{fontSize:"12px"}}>We know that renovations are big and expensive projects, but while working with us we are committed to making renovations accessible. We offer fair and transparent prices with fair financing options to fit your budget. </p>
                    </motion.div>
                        
                    </motion.div>

                    
                    
                
                    
                   
                </div>
            </div>
        </section>
    
    </>
  )
}
export default Bathroom
