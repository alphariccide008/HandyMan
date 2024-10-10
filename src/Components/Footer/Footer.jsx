import { motion } from 'framer-motion';
import {Link} from 'react-router-dom'
import './Footer.css';
import { 
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn, 
  FaPhone,
  FaEnvelope,
  FaSearchLocation
} from 'react-icons/fa';
import Logo from '../../assets/logo.png'



const Footer = () => {
  const sty= 
  {fontSize :'10px'}
  return (
    <>
      <div className='footer ' style={{fontFamily: 'Poppins, sans-serif'}}>
        <div className="relative hidden md:flex clr text-center md:mx-[10%]">
            <div className="flex-col md:w-1/2  pt-[30px] ">
            <div className='flex mb-4 items-center justify-center'>
              <img src={Logo} alt="" style={{height:'70px', width:'20%'}} />
              <h4 className='text-white font-bold mt-9'>ALL A HANDYMAN AND CONTRACTOR</h4>
              </div>
               
              <p className='py-5 px-[28px]' style={{fontSize:'14px'}}>Welcome to All A Handyman and Contractor, where creativity meets craftsmanship. We are a full-service construction and renovation company dedicated to transforming spaces into beautiful, functional environments that reflect your unique style and needs. </p>
              <div className='flex justify-center text-white my-3 text-2xl '>
                <FaFacebook className='mx-2 hover:text-blue-400'/>
                <FaInstagram className='mx-2  hover:text-blue-400'/>
                <FaTwitter className='mx-2  hover:text-blue-400'/>
                <FaLinkedinIn className='mx-2  hover:text-blue-400'/>
              </div>
            </div>
            <div className="flex-col md:w-1/2 px-[40px] py-[30px] mt-10">
              <h2 className='font-bold text-white pb-3 '>Quick Link</h2>
             
              <ul className='py-8 px-[20px]' style={{fontSize:'14px'}} >
                <li className='pb-3  hover:text-cyan-500'><Link to={'/'}>Home</Link></li>
                <li className='pb-3  hover:text-cyan-500'><Link to={'/about'}>About Us</Link></li>
                <li className='pb-3  hover:text-cyan-500'><Link to={'/services'}>Services</Link></li>
                <li className='pb-3  hover:text-cyan-500'><Link to={'/contact'}>Contact Us</Link></li>
                
              </ul>
            </div>
            <div className="flex-col md:w-1/2 px-[40px] py-[30px] mt-10">
              <h2 className='text-white pb-3 font-bold'>Services</h2>
             
              <ul className='py-8 px-[20px]' style={{fontSize:'14px'}}>
                <li className='pb-3  hover:text-cyan-500'><Link to={'/bathroom'}>Bathroom Remodeling</Link></li>
                <li className='pb-3  hover:text-cyan-500'><Link to={'/kitchen'}>Kitchen Remodeling</Link></li>
                <li className='pb-3  hover:text-cyan-500'><Link to={'/livingroom'}>Living room Remodeling</Link></li>
                <li className='pb-3  hover:text-cyan-500'><Link to={'/bedroom'}>Bedroom Remodeling</Link></li>
                <li className='pb-3  hover:text-cyan-500'><Link to={'/backyard'}>Landscaping</Link></li>
                <li className='pb-3  hover:text-cyan-500'><Link to={'/roofing'}>Roofing</Link></li>
                
              </ul>
            </div>
            <div className="flex-col md:w-1/2 px-[40px] py-[30px] mt-10">
              <h2 className='text-white pb-3 font-bold'>Contact Us</h2>
              
              <div className='flex justify-center clr my-3  pt-8'style={{fontSize:'12px'}}>
                <FaPhone className='mt-1 mx-1 hover:text-blue-400'/>
                : +1(240)871-8881
                
              </div>
              <div className='flex justify-center clr my-3  'style={{fontSize:'12px'}}>
                <FaEnvelope className='mt-1 mx-1 hover:text-blue-400 '/>
                :  AllaHandyman50@gmail.com
                
              </div>
              <div className='flex justify-center clr my-3 'style={{fontSize:'12px'}}>
              <FaSearchLocation className='mt-1 mx-1 hover:text-blue-400'/>
                : 12111 Ravenwood Ct. Silver Spring, MD 20902, USA
                
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3103.041841083146!2d-76.7360482!3d38.9458725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7eb885a814b09%3A0x475f9d569b5db59!2s15400%20Excelsior%20Dr%2C%20Bowie%2C%20MD%2020716%2C%20USA!5e0!3m2!1sen!2sng!4v1723906896455!5m2!1sen!2sng"
                width="100%"
                height="50%"
                style={{ border: 0 ,borderRadius:'35px' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
                className="py-8 px-[20px]"
              ></iframe>
            </div>
            
        </div>
        <hr className='mx-[50px] font-bold'/>
        <div className="flex-col md:hidden md:w-1/2  py-[30px] text-center mt-10">
              <div className='flex mb-4 items-center justify-center'>
              <img src={Logo} alt="" style={{height:'70px', width:'20%'}} />
              <h4 className='text-white mt-6'>ALL A HANDYMAN AND CONTRACTOR</h4>
              </div>
               
              <p className='py-8 px-[20px]  ' style={{fontSize:'12px'}}>Welcome to All A Handyman and Contractor, where creativity meets craftsmanship. We are a full-service construction and renovation company dedicated to transforming spaces into beautiful, functional environments that reflect your unique style and needs.
</p>
              <div className='flex justify-center text-white my-3 text-2xl '>
                <FaFacebook className='mx-2 hover:text-cyan-500'/>
                <FaInstagram className='mx-2  hover:hover:text-cyan-500'/>
                <FaTwitter className='mx-2  hover:hover:text-cyan-500'/>
                <FaLinkedinIn className='mx-2  hover:hover:text-cyan-500'/>
              </div>
            </div>
            {/* <hr className='mx-[30px] md:hidden font-bold'/> */}
       
        <div className='relative text-center md:flex-row py-10 md:mx-[30px] mt-2'>
              
              <h6 className='clr' style={{fontSize:'15px'}}>&copy;2024 All A Handyman and Contractor. All Rights Reserved</h6>
        </div>
      </div>
    </>
  )
}
export default Footer