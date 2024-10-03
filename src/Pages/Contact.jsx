import ContactImg from '../assets/images/contactus.jpeg';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_bfknmsc', // Replace with your EmailJS service ID
        'template_xqo0226', // Replace with your EmailJS template ID
        formData,
        'HcrSfpfztIqM00l4W' // Replace with your EmailJS user ID (optional if using Public Key)
      )
      .then((response) => {
        console.log('Form submitted successfully!', response.status, response.text);
        setFormData({ from_name: '', from_email: '', message: '' }); // Clear all form fields
        setSuccessMessage('Message successfully sent!');
      })
      .catch((error) => {
        console.error('Submission error:', error);
      });
  };

  return (
    <>
      <section className="hero text-black pt-10 md:pt-28">
        <div className="lg:mx-[15%]">
          <div className="relative">
            <div className="md:flex container px-5 gap-3 pb-20">
              <div className="md:w-1/2 img-shadow2 mt-28 flex-col">
                <div>
                  <h3
                    className="md:absolute md:hidden mb-7 lg:mr-[-300px] text-5xl"
                    style={{ fontSize: '60px' }}
                  >
                    CONTACT US
                  </h3>
                </div>
                <div>
                  <h3
                    className="hidden md:absolute md:flex mb-7 lg:mr-[-300px] text-5xl"
                    style={{ fontSize: '90px' }}
                  >
                    CONTACT US
                  </h3>
                </div>
                <div className="md:flex my-20 md:mt-52 lg:mt-52">
                  <div className="md:w-1/2 mb-10 flex-col">
                    <h1 className="font-bold">CONTACTS</h1>
                    <p style={{ fontSize: '15px',fontFamily: 'Poppins, sans-serif' }}>(240)871-8881</p>
                    
                    <p style={{ fontSize: '15px',fontFamily: 'Poppins, sans-serif' }}>iallahandyman50@gmail.com</p>
                  </div>
                  <div className="md:w-1/2 flex-col">
                    <h1 className="font-bold">ADDRESS</h1>
                    <p className="pr-10" style={{ fontSize: '15px',fontFamily: 'Poppins, sans-serif' }}>
                    12111 Ravenwood Ct. Silver Spring, MD 20902, USA
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 md:space-y-1 md:flex flex-col">
                <img
                  src={ContactImg}
                  alt="Interior"
                  style={{ height: '408px', width: '100%', borderRadius: '10px' }}
                />
                <div className="flex gap-4 md:hidden mt-5 text-4xl">
                  <a href="#">
                    <FaFacebook className="text-blue-500 hover:text-cyan-700" />
                  </a>
                  <a href="#">
                    <FaTwitter className="text-cyan-500 hover:text-cyan-700" />
                  </a>
                  <a href="#">
                    <FaInstagram
                      className="text-white bg-red-500 hover:text-white hover:bg-cyan-700"
                      style={{ borderRadius: '10px' }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="formColor text-black pt-10 md:pt-28">
        <div className="lg:mx-[15%]">
          <div className="relative">
            <div className="md:flex container px-5 gap-3 pb-20">
              <div className="md:w-1/2 img-shadow2 mt-14 flex-col">
                <div className="pb-4" style={{ fontSize: '20px' }}>
                  <h1 className="pb-5" style={{ fontSize: '50px' }}>SEND A MESSAGE</h1>
                  <p style={{fontFamily: 'Poppins, sans-serif'}}>Are you interested in hearing more about the way we work, have a business proposal, or are interested in working with us? We’d love to hear from you!</p>
                </div>
              </div>
              <div className="md:w-1/2 mt-5 md:space-y-1 md:mx-[10%] md:flex flex-col">
                <div className="justify-center">
                  <form onSubmit={handleSubmit} className="img-shadow2 bg-white p-8" style={{ minHeight: '300px', borderRadius: '10px' }}>
                  {successMessage && (
                    <p className="text-green-500 mt-3">{successMessage}</p>
                  )}
                    <input type="text" name="from_name"
                      value={formData.from_name}
                      onChange={handleChange}
                      required
                      style={{ fontSize: '13px' }}
                      className="block w-full px-3 py-2 my-3 text-base text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-blue-500"
                      placeholder="Full Name" />

                    <input type="email" name="from_email"
                      value={formData.from_email}
                      onChange={handleChange}
                      required
                      style={{ fontSize: '13px' }}
                      className="block w-full px-3 py-2 my-3 text-base text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-blue-500"
                      placeholder="Email Address" />
                    <textarea name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      style={{ fontSize: '13px' }}
                      className="block w-full px-3 py-2 my-3 text-base text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-blue-500"
                      placeholder="Message" id="" cols="" rows="5"></textarea>
                    <button type="submit" className="w-full hover:bg-cyan-500 btnColor bg-cyan-600 py-2" style={{ borderRadius: '5px' }}>Submit Form</button>
                  </form>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
