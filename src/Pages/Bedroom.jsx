import './Bedroom.css'
import Bedroom1 from  '../assets/images/bedroom1.jpg';
import Bedroom2 from  '../assets/images/bedroom2.jpg';
import Bedroom3 from  '../assets/images/bedroom3.jpg';
import Bedroom4 from  '../assets/images/bedroom4.jpg';
import Bedroom5 from  '../assets/images/bedroom13.jpeg';
import Bedroom6 from  '../assets/images/bedroom6.jpg';
import Bedroom7 from  '../assets/images/bedroom10.jpg';
import Bedroom8 from  '../assets/images/bedroom11.jpg';




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
                <h1 className='text-center font-bold text-2xl pb-3'>BEDROOM GALLERY</h1>
                <div className="hidden md:flex">
                    <div className="md:w-1/3 p-3 flex-col">
                        <img src={Bedroom1} alt="bathroom" className='' width={'100%'} style={{borderRadius:'7px'}} /> 
                    </div>
                    <div className="md:w-1/3 p-3 flex-col">
                        <img src={Bedroom2} alt="bathroom" width={'100%'} style={{borderRadius:'7px',}}/> 
                    </div>
                    <div className="md:w-1/3 p-3 flex-col">
                    <img src={Bedroom3} alt="bathroom" width={'100%'} style={{borderRadius:'7px',height:'100%'}} /> 
                    </div>
                </div>
                <div className=" md:flex">
                    <div className="md:w-1/3 p-3 flex-col">
                        <img src={Bedroom4} alt="bathroom" className='' width={'100%'} style={{borderRadius:'7px',height:'315px'}} /> 
                    </div>
                    <div className="md:w-1/3 p-3 flex-col">
                        <img src={Bedroom7} alt="bathroom" width={'100%'} style={{borderRadius:'7px',height:'315px'}}/> 
                    </div>
                    <div className="md:w-1/3 p-3 flex-col">
                    <img src={Bedroom6} alt="bathroom" width={'100%'} style={{borderRadius:'7px',height:'315px'}} /> 
                    </div>
                    <div className="md:w-1/3 p-3 flex-col">
                    <img src={Bedroom5} alt="bathroom" width={'100%'} style={{borderRadius:'7px',height:'315px'}} /> 
                    </div>
                    <div className="md:w-1/3 p-3 flex-col">
                    <img src={Bedroom8} alt="bathroom" width={'100%'} style={{borderRadius:'7px',height:'315px'}} /> 
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