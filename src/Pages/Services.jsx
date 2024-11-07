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
import Roofing1 from  '../assets/images/roffing1.jpg';
import Roofing2 from  '../assets/images/roofing2.jpg';
import Roofing3 from  '../assets/images/roofing3.jpg';
import Backyard1 from  '../assets/images/backyard1.jpeg';
import Backyard2 from  '../assets/images/backyard2.jpeg';
import Backyard3 from  '../assets/images/backyard3.jpg';
import Basement1 from  '../assets/images/basement1.jpg';
import Basement10 from  '../assets/images/basement10.jpg';
import Basement6 from  '../assets/images/basement6.jpg';
import Drywall1 from '../assets/images/drywall7.jpg'
import Drywall2 from '../assets/images/drywall2.jpg'
import Drywall3 from '../assets/images/drywall9.jpg'
import Electrical2 from '../assets/images/electricals2.jpg'
import Electrical3 from '../assets/images/electricals3.jpg'
import Electrical4 from '../assets/images/electricals4.jpg'
import Plumbing1 from '../assets/images/plum7.jpg'
import Plumbing2 from '../assets/images/plum2.jpg'
import Plumbing3 from '../assets/images/plum3.jpg'
import Painting1 from '../assets/images/painting1.jpg'
import Painting2 from '../assets/images/painting2.jpg'
import Painting3 from '../assets/images/painting3.jpg'
import Flooring1 from '../assets/images/flooring1.jpg'
import Flooring2 from '../assets/images/flooring2.jpg'
import Flooring3 from '../assets/images/flooring3.jpg'









const services = () => {
  return (
    <>
   
      {/* Toilet section */}
      <section className=' text-black    '>
               <div className='lg:mx-[20%]'>
               <div className="container relative md:flex  px-10 py-10  ">
                    <div className="text-center">
                        <h1 className='text-4xl  font-bold md:mx-16 mb-5 text-center 
                        '>BATHROOM REMODELING</h1>
                        <p className='lg:px-10 lg:text-start py-5' style={{fontFamily: 'Poppins, sans-serif'}}>All A Handyman and Contractor   offers expert bathroom remodeling solutions designed to elevate both the functionality and aesthetics of your space. Whether you're dreaming of a spa-like retreat, upgrading outdated fixtures, or maximizing storage, our skilled professionals can bring your ideas to life. We focus on delivering quality craftsmanship while providing fair pricing and flexible financing options to fit any budget. Trust All A Handyman and Contractor to turn your bathroom into a space you’ll love for years to come!
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
                        '>KITCHEN REMODELING</h1>
                        <p className='lg:px-10 lg:text-start py-5' style={{fontFamily: 'Poppins, sans-serif'}}>
                        At All A Handyman and Contractor, we specialize in transforming kitchens into beautiful, efficient, and functional spaces that suit your lifestyle. Whether you're looking to modernize your kitchen with new cabinets, countertops, or appliances, or you need a full renovation, our experienced team delivers exceptional craftsmanship. With our commitment to fair pricing and flexible financing, your dream kitchen is within reach. Let All A Handyman and Contractor create a kitchen that’s perfect for cooking, entertaining, and enjoying every day
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
                        '>BEDROOM REMODELING</h1>
                        <p className='lg:px-10 lg:text-start py-5' style={{fontFamily: 'Poppins, sans-serif'}}>
                            At All A Handyman and Contractor, we specialize in creating beautiful, functional bedroom spaces tailored to your personal style and needs. Whether you're looking to modernize your bedroom with updated fixtures, add storage, or create a cozy retreat, our skilled team offers a range of services to bring your vision to life. With fair pricing, flexible financing options, and attention to detail, we ensure your bedroom remodel is stress-free and meets your expectations. Let Handyman help you create the bedroom of your dreams!
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
                        '>LIVING ROOM REMODELING</h1>
                        <p className='lg:px-12 lg:text-start py-5' style={{fontFamily: 'Poppins, sans-serif'}}>
                        All A Handyman and Contractor is here to help you transform your living room into a stylish, comfortable space that fits your lifestyle. Whether you're looking to create a modern, cozy environment or maximize space with efficient solutions, our skilled team is ready to bring your vision to life. With our focus on quality, fair pricing, and flexible financing options, we ensure your living room remodel is seamless and stress-free. Trust All A Handyman and Contractor to make your living room a space you’ll love for years to come. From planning to completion, we’re committed to delivering exceptional results that exceed your expectations. Trust All A Handyman and Contractor to make your dream Living room a reality
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

      {/* Basement section */}

      <section className=' text-black    '>
               <div className='lg:mx-[20%]'>
               <div className="container relative md:flex  px-10 py-10  ">
                    <div className="text-center">
                        <h1 className='text-4xl  font-bold md:mx-16 mb-5 text-center 
                        '> BASEMENT </h1>
                        <p className='lg:px-10 lg:text-start py-5' style={{fontFamily: 'Poppins, sans-serif'}}>
                        When you tackle a basement renovation on your own, issues can arise, such as choosing the wrong flooring or unsuitable paint. That’s where All A Handyman & Construction LLC comes in. With our expertise, we ensure your basement is transformed efficiently and affordably.

                        We take pride in delivering the best results at competitive prices, handling all the heavy work so you can enjoy your new space for years to come. Our turnkey basement finishing projects offer peace of mind and lasting quality.
                        


                        <p className='mt-6'>
                        Your basement holds endless potential, whether it's a:

                        Custom Home Office :

                        1.⁠ ⁠Elegant Wet Bar and Lounge

                        2.⁠ ⁠Home Theater or Game Room

                        3.⁠ ⁠Personal Fitness Studio

                        4.⁠ ⁠Full or Half Bathroom</p>

                        </p>


                        <p className='text-center mb-5 md:hidden'>______________________________</p>
                        
                    </div>
                   
                </div>
                
                <div className='relative  '>
                    <div className="md:flex container px-5 gap-3 pb-10">
                    <div className="md:w-[30%] img-shadow2 md:space-y-1 hidden md:flex md:flex-col">
                            <img src={Basement1} alt="Interior" style={{ height: '200px', width:'100%', borderRadius:'10px'}} />
                            <img src={Basement10} alt="Interior" style={{ height : '200px', width : '100%', borderRadius:'10px'}} />
                        </div>
                        <div className="md:w-[70%] img-shadow2 flex-col">
                            <img src={Basement6} alt="Interior" style={{ height :'406px', width: '100%', borderRadius:'10px'}} />
                        </div>
                        
                    </div>
                </div>

                <div className="md:flex container px-5 gap-3 pb-10">
                        
                        <div className="md:w-[30%] img-shadow2 md:space-y-1  md:flex md:flex-col items-start lg:pr-[3%] md:pr[5%]">
                            <Link to={'/basement'} className=' hover:text-black hover:bg-cyan-500 px-6 py-4 bg-cyan-600 rounded-xl text-white'>SEE GALLERY</Link>
                        </div>
                    </div>

               </div>
            </section>
     
        {/* backyard section */}
        <section className='projects text-black    '>
               <div className='lg:mx-[20%]'>
               <div className="container relative md:flex  px-10 py-10 pt-28 ">
                    <div className="text-center">
                        <h1 className='text-4xl  font-bold md:mx-16 mb-5 text-center 
                        '>BACKYARD AND PATIO</h1>
                        <p className='lg:px-12 lg:text-start py-5' style={{fontFamily: 'Poppins, sans-serif'}}>
                        At All A Handyman and Contractor, we specialize in turning ordinary backyards into stunning outdoor retreats. Whether you're looking to add a new patio, deck, or custom entertainment area, our team is ready to bring your backyard vision to life. With a focus on quality craftsmanship, attention to detail, and practical solutions, we ensure a backyard remodel that suits your lifestyle and budget. Enjoy fair pricing, flexible financing options, and a seamless remodeling experience with All-Handyman.</p>
                        <p className='text-center mb-5 md:hidden'>______________________________</p>
                        
                    </div>
                   
                </div>
                
                <div className='relative  '>
                    <div className="md:flex container px-5 gap-3 pb-10">
                        <div className="md:w-[70%] img-shadow2 flex-col">
                            <img src={Backyard3} alt="Interior" style={{ height :'406px', width: '100%', borderRadius:'10px'}} />
                        </div>
                        <div className="md:w-[30%] img-shadow2 md:space-y-1 hidden md:flex md:flex-col">
                            <img src={Backyard2} alt="Interior" style={{ height: '200px', width:'100%', borderRadius:'10px'}} />
                            <img src={Backyard1} alt="Interior" style={{ height : '200px', width : '100%', borderRadius:'10px'}} />
                        </div>
                    </div>
                </div>

                <div className='relative mt-5  '>
                    <div className="md:flex container px-5 gap-3 pb-10">
                        <div className="md:w-[70%] img-shadow2 flex-col">
                            
                        </div>
                        <div className="md:w-[30%] img-shadow2 md:space-y-1  md:flex md:flex-col items-end lg:pr-[3%] md:pr[5%]">
                            <Link to={'/backyard'} className=' hover:text-black hover:bg-cyan-500 px-6 py-4 bg-cyan-600 rounded-xl text-white'>SEE GALLERY</Link>
                        </div>
                    </div>
                </div>

               </div>
      </section>

      {/* Roofing section */}
       {/* Adu section */}
       <section className=' text-black    '>
               <div className='lg:mx-[20%]'>
               <div className="container relative md:flex  px-10 py-10  ">
                    <div className="text-center">
                        <h1 className='text-4xl  font-bold md:mx-16 mb-5 text-center 
                        '>ROOFING </h1>
                        <p className='lg:px-10 lg:text-start py-5' style={{fontFamily: 'Poppins, sans-serif'}}>
                        All A Handyman and Contractor offers top-quality roofing services, providing durable and reliable solutions for all your roofing needs. Whether you're installing a new roof, repairing leaks, or upgrading to more energy-efficient materials, our experienced team ensures excellent craftsmanship and long-lasting results. We prioritize safety, affordability, and customer satisfaction, offering fair pricing and flexible financing options. Trust All A Handyman and Contractor to protect your home with a roof that stands the test of time.



                        </p>
                        <p className='text-center mb-5 md:hidden'>______________________________</p>
                        
                    </div>
                   
                </div>
                
                <div className='relative  '>
                    <div className="md:flex container px-5 gap-3 pb-10">
                    <div className="md:w-[30%] img-shadow2 md:space-y-1 hidden md:flex md:flex-col">
                            <img src={Roofing1} alt="Interior" style={{ height: '200px', width:'100%', borderRadius:'10px'}} />
                            <img src={Roofing2} alt="Interior" style={{ height : '200px', width : '100%', borderRadius:'10px'}} />
                        </div>
                        <div className="md:w-[70%] img-shadow2 flex-col">
                            <img src={Roofing3} alt="Interior" style={{ height :'406px', width: '100%', borderRadius:'10px'}} />
                        </div>
                        
                    </div>
                </div>

                <div className="md:flex container px-5 gap-3 pb-10">
                        
                        <div className="md:w-[30%] img-shadow2 md:space-y-1  md:flex md:flex-col items-start lg:pr-[3%] md:pr[5%]">
                            <Link to={'/roofing'} className=' hover:text-black hover:bg-cyan-500 px-6 py-4 bg-cyan-600 rounded-xl text-white'>SEE GALLERY</Link>
                        </div>
                    </div>

               </div>
            </section>



            {/* painting section */}
            <section className='projects text-black    '>
               <div className='lg:mx-[20%]'>
               <div className="container relative md:flex  px-10 py-10 pt-28 ">
                    <div className="text-center">
                        <h1 className='text-4xl  font-bold md:mx-16 mb-5 text-center 
                        '>PAINTING</h1>
                        <p className='lg:px-12 lg:text-start py-5' style={{fontFamily: 'Poppins, sans-serif'}}>
                        At All A Handyman and Contractor, we provide expert residential and commercial painting to refresh and elevate your space. Whether it's a single room or a full property, our skilled painters ensure smooth, lasting finishes with premium materials and attention to detail.
                        We offer color consultations, thorough prep work, and efficient service with minimal disruption. With transparent pricing and flexible scheduling, we make your painting project easy and hassle-free. Transform your space today with a fresh coat of quality!
                        </p>
                        <p className='text-center mb-5 md:hidden'>______________________________</p>
                        
                    </div>
                   
                </div>
                
                <div className='relative  '>
                    <div className="md:flex container px-5 gap-3 pb-10">
                        <div className="md:w-[70%] img-shadow2 flex-col">
                            <img src={Painting1} alt="Interior" style={{ height :'406px', width: '100%', borderRadius:'10px'}} />
                        </div>
                        <div className="md:w-[30%] img-shadow2 md:space-y-1 hidden md:flex md:flex-col">
                            <img src={Painting2} alt="Interior" style={{ height: '200px', width:'100%', borderRadius:'10px'}} />
                            <img src={Painting3} alt="Interior" style={{ height : '200px', width : '100%', borderRadius:'10px'}} />
                        </div>
                    </div>
                </div>

                <div className='relative mt-5  '>
                    <div className="md:flex container px-5 gap-3 pb-10">
                        <div className="md:w-[70%] img-shadow2 flex-col">
                            
                        </div>
                        <div className="md:w-[30%] img-shadow2 md:space-y-1  md:flex md:flex-col items-end lg:pr-[3%] md:pr[5%]">
                            <Link to={'/painting'} className=' hover:text-black hover:bg-cyan-500 px-6 py-4 bg-cyan-600 rounded-xl text-white'>SEE GALLERY</Link>
                        </div>
                    </div>
                </div>

               </div>
      </section>


        {/* Drywall section */}
      <section className=' text-black    '>
               <div className='lg:mx-[20%]'>
               <div className="container relative md:flex  px-10 py-10  ">
                    <div className="text-center">
                        <h1 className='text-4xl  font-bold md:mx-16 mb-5 text-center 
                        '>DRY-WALL INSTALLATION</h1>
                        <p className='lg:px-10 lg:text-start py-5' style={{fontFamily: 'Poppins, sans-serif'}}>
                        At All A Handyman and Contractor, we deliver seamless drywall installation for both residential and commercial spaces. Whether you're renovating a single room or building out an entire property, our team ensures precision and quality in every installation.
                        We handle everything from framing and hanging to taping and finishing, leaving you with smooth, durable walls that are ready for painting or finishing. With our attention to detail and commitment to meeting deadlines, you can expect a flawless result every time. Trust All A Handyman for reliable service, fair pricing, and a clean, professional finish on your next drywall project.



                        </p>
                        <p className='text-center mb-5 md:hidden'>______________________________</p>
                        
                    </div>
                   
                </div>
                
                <div className='relative  '>
                    <div className="md:flex container px-5 gap-3 pb-10">
                    <div className="md:w-[30%] img-shadow2 md:space-y-1 hidden md:flex md:flex-col">
                            <img src={Drywall1} alt="Interior" style={{ height: '200px', width:'100%', borderRadius:'10px'}} />
                            <img src={Drywall2} alt="Interior" style={{ height : '200px', width : '100%', borderRadius:'10px'}} />
                        </div>
                        <div className="md:w-[70%] img-shadow2 flex-col">
                            <img src={Drywall3} alt="Interior" style={{ height :'406px', width: '100%', borderRadius:'10px'}} />
                        </div>
                        
                    </div>
                </div>

                <div className="md:flex container px-5 gap-3 pb-10">
                        
                        <div className="md:w-[30%] img-shadow2 md:space-y-1  md:flex md:flex-col items-start lg:pr-[3%] md:pr[5%]">
                            <Link to={'/drywall'} className=' hover:text-black hover:bg-cyan-500 px-6 py-4 bg-cyan-600 rounded-xl text-white'>SEE GALLERY</Link>
                        </div>
                    </div>

               </div>
            </section>


         {/* plumbing Section */}
    <section className='projects text-black    '>
               <div className='lg:mx-[20%]'>
               <div className="container relative md:flex  px-10 py-10 pt-28 ">
                    <div className="text-center">
                        <h1 className='text-4xl  font-bold md:mx-16 mb-5 text-center 
                        '>PLUMBING</h1>
                        <p className='lg:px-12 lg:text-start py-5' style={{fontFamily: 'Poppins, sans-serif'}}>
                        At All A Handyman and Contractor, our expert plumbing services ensure your home or business runs smoothly. Whether it's installing new fixtures, repairing leaks, or addressing complex drainage issues, our skilled plumbers handle it all with precision and care.

                        We offer quick, reliable solutions for everything from small repairs to full system installations, ensuring efficient water flow and long-lasting results. With transparent pricing and dependable service, you can count on us for all your plumbing needs, big or small. Keep your plumbing in top shape with All A Handyman.
                        </p>
                        <p className='text-center mb-5 md:hidden'>______________________________</p>
                        
                    </div>
                   
                </div>
                
                <div className='relative  '>
                    <div className="md:flex container px-5 gap-3 pb-10">
                        <div className="md:w-[70%] img-shadow2 flex-col">
                            <img src={Plumbing1} alt="Interior" style={{ height :'406px', width: '100%', borderRadius:'10px'}} />
                        </div>
                        <div className="md:w-[30%] img-shadow2 md:space-y-1 hidden md:flex md:flex-col">
                            <img src={Plumbing2} alt="Interior" style={{ height: '200px', width:'100%', borderRadius:'10px'}} />
                            <img src={Plumbing3} alt="Interior" style={{ height : '200px', width : '100%', borderRadius:'10px'}} />
                        </div>
                    </div>
                </div>

                <div className='relative mt-5  '>
                    <div className="md:flex container px-5 gap-3 pb-10">
                        <div className="md:w-[70%] img-shadow2 flex-col">
                            
                        </div>
                        <div className="md:w-[30%] img-shadow2 md:space-y-1  md:flex md:flex-col items-end lg:pr-[3%] md:pr[5%]">
                            <Link to={'/plumbing'} className=' hover:text-black hover:bg-cyan-500 px-6 py-4 bg-cyan-600 rounded-xl text-white'>SEE GALLERY</Link>
                        </div>
                    </div>
                </div>

               </div>
      </section>


    {/* Electircal */}
    <section className=' text-black    '>
               <div className='lg:mx-[20%]'>
               <div className="container relative md:flex  px-10 py-10  ">
                    <div className="text-center">
                        <h1 className='text-4xl  font-bold md:mx-16 mb-5 text-center 
                        '>ELECTRICAL </h1>
                        <p className='lg:px-10 lg:text-start py-5' style={{fontFamily: 'Poppins, sans-serif'}}>
                        At All A Handyman and Contractor, we provide reliable and safe electrical services for your home or business. From new installations and rewiring to troubleshooting and repairs, our licensed electricians ensure your electrical systems function efficiently and safely.

                        Whether you’re upgrading lighting, adding outlets, or addressing electrical issues, we deliver expert solutions tailored to your needs. With a focus on safety, compliance, and quality, we guarantee clean, precise work every time. Choose All A Handyman for trustworthy service, transparent pricing, and peace of mind on all your electrical projects.


                        </p>
                        <p className='text-center mb-5 md:hidden'>______________________________</p>
                        
                    </div>
                   
                </div>
                
                <div className='relative  '>
                    <div className="md:flex container px-5 gap-3 pb-10">
                    <div className="md:w-[30%] img-shadow2 md:space-y-1 hidden md:flex md:flex-col">
                            <img src={Electrical2} alt="Interior" style={{ height: '200px', width:'100%', borderRadius:'10px'}} />
                            <img src={Electrical3} alt="Interior" style={{ height : '200px', width : '100%', borderRadius:'10px'}} />
                        </div>
                        <div className="md:w-[70%] img-shadow2 flex-col">
                            <img src={Electrical4} alt="Interior" style={{ height :'406px', width: '100%', borderRadius:'10px'}} />
                        </div>
                        
                    </div>
                </div>

                <div className="md:flex container px-5 gap-3 pb-10">
                        
                        <div className="md:w-[30%] img-shadow2 md:space-y-1  md:flex md:flex-col items-start lg:pr-[3%] md:pr[5%]">
                            <Link to={'/electrical'} className=' hover:text-black hover:bg-cyan-500 px-6 py-4 bg-cyan-600 rounded-xl text-white'>SEE GALLERY</Link>
                        </div>
                    </div>

               </div>
            </section>



    {/* Floring section */}
     {/* plumbing Section */}
     <section className='projects text-black    '>
               <div className='lg:mx-[20%]'>
               <div className="container relative md:flex  px-10 py-10 pt-28 ">
                    <div className="text-center">
                        <h1 className='text-4xl  font-bold md:mx-16 mb-5 text-center 
                        '>FLOORING</h1>
                        <p className='lg:px-12 lg:text-start py-5' style={{fontFamily: 'Poppins, sans-serif'}}>
                        At All A Handyman and Contractor, we specialize in transforming your space with high-quality flooring options. Whether you’re looking for the warmth of wood, the durability of vinyl, the elegance of laminate, or the comfort of carpet, we offer a wide range of materials to suit your style and needs.

                        Our skilled team ensures precise installation for a flawless finish, providing long-lasting beauty and functionality. From residential homes to commercial spaces, we handle projects of all sizes with attention to detail and expert craftsmanship. Trust All A Handyman for competitive pricing, reliable service, and the perfect flooring solution for your space.
                        </p>
                        <p className='text-center mb-5 md:hidden'>______________________________</p>
                        
                    </div>
                   
                </div>
                
                <div className='relative  '>
                    <div className="md:flex container px-5 gap-3 pb-10">
                        <div className="md:w-[70%] img-shadow2 flex-col">
                            <img src={Flooring1} alt="Interior" style={{ height :'406px', width: '100%', borderRadius:'10px'}} />
                        </div>
                        <div className="md:w-[30%] img-shadow2 md:space-y-1 hidden md:flex md:flex-col">
                            <img src={Flooring2} alt="Interior" style={{ height: '200px', width:'100%', borderRadius:'10px'}} />
                            <img src={Flooring3} alt="Interior" style={{ height : '200px', width : '100%', borderRadius:'10px'}} />
                        </div>
                    </div>
                </div>

                <div className='relative mt-5  '>
                    <div className="md:flex container px-5 gap-3 pb-10">
                        <div className="md:w-[70%] img-shadow2 flex-col">
                            
                        </div>
                        <div className="md:w-[30%] img-shadow2 md:space-y-1  md:flex md:flex-col items-end lg:pr-[3%] md:pr[5%]">
                            <Link to={'/flooring'} className=' hover:text-black hover:bg-cyan-500 px-6 py-4 bg-cyan-600 rounded-xl text-white'>SEE GALLERY</Link>
                        </div>
                    </div>
                </div>

               </div>
      </section>


   










    </>

    

      
  )
}
export default services