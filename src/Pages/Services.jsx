import './service.css';
import {Link} from 'react-router-dom'


import Toilet1 from  '../assets/images/toilet1.jpg';
import Toilet2 from  '../assets/images/toilet2.jpg';
import Toilet3 from  '../assets/images/toilet3.jpg';
import Kitchen1 from  '../assets/images/kitchen1.jpg';
import Kitchen2 from  '../assets/images/kitchen2.jpg';
import Kitchen3 from  '../assets/images/kitchen3.jpg';
import Living1 from  '../assets/images/livingroom1.jpg';
import Living2 from  '../assets/images/livingroom2.jpg';
import Living3 from  '../assets/images/livingroom3.jpg';
import Bedroom1 from  '../assets/images/bedroom1.jpg';
import Bedroom2 from  '../assets/images/bedroom2.jpg';
import Bedroom3 from  '../assets/images/bedroom3.jpg';







const services = () => {
  return (
    <>
   
      {/* Toilet section */}
      <section className=' text-black    '>
               <div className='lg:mx-[20%]'>
               <div className="container relative md:flex  px-10 py-10  ">
                    <div className="text-center">
                        <h1 className='text-4xl  font-bold md:mx-16 mb-5 text-center 
                        '>BATHROOM REMODELLING</h1>
                        <p className='lg:px-10 text-center py-5' style={{fontFamily: 'Poppins, sans-serif'}}>All-Handyman   offers expert bathroom remodeling solutions designed to elevate both the functionality and aesthetics of your space. Whether you're dreaming of a spa-like retreat, upgrading outdated fixtures, or maximizing storage, our skilled professionals can bring your ideas to life. We focus on delivering quality craftsmanship while providing fair pricing and flexible financing options to fit any budget. Trust Handyman to turn your bathroom into a space you’ll love for years to come!
</p>
                        <p className='text-center mb-5 md:hidden'>______________________________</p>
                        
                    </div>
                   
                </div>
                
                <div className='relative  '>
                    <div className="md:flex container px-5 gap-3 pb-10">
                    <div className="md:w-[30%] img-shadow2 md:space-y-1 hidden md:flex md:flex-col">
                            <img src={Toilet2} alt="Interior" style={{ height: '200px', width:'100%', borderRadius:'10px'}} />
                            <img src={Toilet3} alt="Interior" style={{ height : '200px', width : '100%', borderRadius:'10px'}} />
                        </div>
                        <div className="md:w-[70%] img-shadow2 flex-col">
                            <img src={Toilet1} alt="Interior" style={{ height :'406px', width: '100%', borderRadius:'10px'}} />
                        </div>
                        
                    </div>
                </div>

                <div className="md:flex container px-5 gap-3 pb-10">
                        
                        <div className="md:w-[30%] img-shadow2 md:space-y-1  md:flex md:flex-col items-start lg:pr-[3%] md:pr[5%]">
                            <Link to={'/bathroom'} className=' hover:text-black hover:bg-cyan-500 px-6 py-4 bg-cyan-600 rounded-xl text-white'>SEE GALLERY</Link>
                        </div>
                    </div>

               </div>
      </section>

      {/* Kitchen Section */}
      <section className='projects text-black    '>
               <div className='lg:mx-[20%]'>
               <div className="container relative md:flex  px-10 py-10 pt-28 ">
                    <div className="text-center">
                        <h1 className='text-4xl  font-bold md:mx-16 mb-5 text-center 
                        '>KITCHEN REMODELLING</h1>
                        <p className='lg:px-10 text-center py-5' style={{fontFamily: 'Poppins, sans-serif'}}>
                            At All-Handyman, we specialize in transforming kitchens into beautiful, efficient, and functional spaces that suit your lifestyle. Whether you're looking to modernize your kitchen with new cabinets, countertops, or appliances, or you need a full redesign, our experienced team delivers exceptional craftsmanship. With our commitment to fair pricing and flexible financing, your dream kitchen is within reach. Let Handyman create a kitchen that’s perfect for cooking, entertaining, and enjoying every day!
                        </p>
                        <p className='text-center mb-5 md:hidden'>______________________________</p>
                        
                    </div>
                   
                </div>
                
                <div className='relative  '>
                    <div className="md:flex container px-5 gap-3 pb-10">
                        <div className="md:w-[70%] img-shadow2 flex-col">
                            <img src={Kitchen1} alt="Interior" style={{ height :'406px', width: '100%', borderRadius:'10px'}} />
                        </div>
                        <div className="md:w-[30%] img-shadow2 md:space-y-1 hidden md:flex md:flex-col">
                            <img src={Kitchen2} alt="Interior" style={{ height: '200px', width:'100%', borderRadius:'10px'}} />
                            <img src={Kitchen3} alt="Interior" style={{ height : '200px', width : '100%', borderRadius:'10px'}} />
                        </div>
                    </div>
                </div>

                <div className='relative mt-5  '>
                    <div className="md:flex container px-5 gap-3 pb-10">
                        <div className="md:w-[70%] img-shadow2 flex-col">
                            
                        </div>
                        <div className="md:w-[30%] img-shadow2 md:space-y-1  md:flex md:flex-col items-end lg:pr-[3%] md:pr[5%]">
                            <Link to={'/kitchen'} className=' hover:text-black hover:bg-cyan-500 px-6 py-4 bg-cyan-600 rounded-xl text-white'>SEE GALLERY</Link>
                        </div>
                    </div>
                </div>

               </div>
      </section>

      {/* Bedroom section */}
      <section className=' text-black    '>
               <div className='lg:mx-[20%]'>
               <div className="container relative md:flex  px-10 py-10  ">
                    <div className="text-center">
                        <h1 className='text-4xl  font-bold md:mx-16 mb-5 text-center 
                        '>BEDROOM REMODELLING</h1>
                        <p className='lg:px-10 text-center py-5' style={{fontFamily: 'Poppins, sans-serif'}}>
                            At All-Handyman, we specialize in creating beautiful, functional bedroom spaces tailored to your personal style and needs. Whether you're looking to modernize your bedroom with updated fixtures, add storage, or create a cozy retreat, our skilled team offers a range of services to bring your vision to life. With fair pricing, flexible financing options, and attention to detail, we ensure your bedroom remodel is stress-free and meets your expectations. Let Handyman help you create the bedroom of your dreams!
                        </p>
                        <p className='text-center mb-5 md:hidden'>______________________________</p>
                        
                    </div>
                   
                </div>
                
                <div className='relative  '>
                    <div className="md:flex container px-5 gap-3 pb-10">
                    <div className="md:w-[30%] img-shadow2 md:space-y-1 hidden md:flex md:flex-col">
                            <img src={Bedroom1} alt="Interior" style={{ height: '200px', width:'100%', borderRadius:'10px'}} />
                            <img src={Bedroom2} alt="Interior" style={{ height : '200px', width : '100%', borderRadius:'10px'}} />
                        </div>
                        <div className="md:w-[70%] img-shadow2 flex-col">
                            <img src={Bedroom3} alt="Interior" style={{ height :'406px', width: '100%', borderRadius:'10px'}} />
                        </div>
                        
                    </div>
                </div>

                <div className="md:flex container px-5 gap-3 pb-10">
                        
                        <div className="md:w-[30%] img-shadow2 md:space-y-1  md:flex md:flex-col items-start lg:pr-[3%] md:pr[5%]">
                            <Link to={'/bedroom'} className=' hover:text-black hover:bg-cyan-500 px-6 py-4 bg-cyan-600 rounded-xl text-white'>SEE GALLERY</Link>
                        </div>
                    </div>

               </div>
            </section>

      {/* Sitting room  */}
      <section className='projects text-black    '>
               <div className='lg:mx-[20%]'>
               <div className="container relative md:flex  px-10 py-10 pt-28 ">
                    <div className="text-center">
                        <h1 className='text-4xl  font-bold md:mx-16 mb-5 text-center 
                        '>SITTING-ROOM REMODELLING</h1>
                        <p className='lg:px-10 text-center py-5' style={{fontFamily: 'Poppins, sans-serif'}}>
                            All-Handyman is here to help you transform your sitting room into a stylish, comfortable space that fits your lifestyle. Whether you’re looking to create a modern, cozy environment or maximize space with clever design solutions, our skilled team is ready to bring your vision to life. With our focus on quality, fair pricing, and flexible financing options, we ensure your sitting room remodel is seamless and stress-free. Trust Handyman to make your
                        </p>
                        <p className='text-center mb-5 md:hidden'>______________________________</p>
                        
                    </div>
                   
                </div>
                
                <div className='relative  '>
                    <div className="md:flex container px-5 gap-3 pb-10">
                        <div className="md:w-[70%] img-shadow2 flex-col">
                            <img src={Living1} alt="Interior" style={{ height :'406px', width: '100%', borderRadius:'10px'}} />
                        </div>
                        <div className="md:w-[30%] img-shadow2 md:space-y-1 hidden md:flex md:flex-col">
                            <img src={Living2} alt="Interior" style={{ height: '200px', width:'100%', borderRadius:'10px'}} />
                            <img src={Living3} alt="Interior" style={{ height : '200px', width : '100%', borderRadius:'10px'}} />
                        </div>
                    </div>
                </div>

                <div className='relative mt-5  '>
                    <div className="md:flex container px-5 gap-3 pb-10">
                        <div className="md:w-[70%] img-shadow2 flex-col">
                            
                        </div>
                        <div className="md:w-[30%] img-shadow2 md:space-y-1  md:flex md:flex-col items-end lg:pr-[3%] md:pr[5%]">
                            <Link to={'/livingroom'} className=' hover:text-black hover:bg-cyan-500 px-6 py-4 bg-cyan-600 rounded-xl text-white'>SEE GALLERY</Link>
                        </div>
                    </div>
                </div>

               </div>
      </section>
    </>

      
  )
}
export default services