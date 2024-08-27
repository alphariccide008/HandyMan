import './LivingRoom.css'
import Living1 from  '../assets/images/livingroom1.jpg';
import Living2 from  '../assets/images/livingroom2.jpg';
import Living3 from  '../assets/images/livingroom3.jpg';
import Living4 from  '../assets/images/livingroom4.jpg';
import Living5 from  '../assets/images/livingroom5.jpg';
import Living6 from  '../assets/images/livingroom6.jpg';
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
                    <FaLightbulb className=' lg:mx-3 my-1 text-4xl idea mx-[35%]'/><h3 className='pt-3 font-bold'>Over 20 years of experience</h3>
                    </motion.div>
                    <p style={{fontSize:"12px"}}>We have a proven track record of success in the home and yard renovation industry. Our team of experienced and skilled workers is able to handle any project, big or small.</p>
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
                    <p style={{fontSize:"12px"}}>We understand that your home is a reflection of your style and personality. We work with you to create a renovation that meets your needs and desires.</p>
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
                    <p style={{fontSize:"12px"}}>We offer fair prices and flexible financing options to make your renovation affordable.</p>
                    </motion.div>
                        
                    </motion.div>

                    
                    
                
                    
                   
                </div>
            </div>
        </section>
    
    </>
  )
}
export default Bathroom
