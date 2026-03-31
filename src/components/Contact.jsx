import React from 'react';
import { useState, useRef } from 'react';       // useRef is used to manipulate dom
import { motion } from 'framer-motion';          // for smooth animation
import emailjs from '@emailjs/browser';          // for email functionality
import { styles } from '../styles';              // for styling purpose

import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../Hoc';         // higher order function
import { slideIn } from '../utils/motion';

const EMAILJS_SERVICE_ID  = 'service_ciuut4h';
const EMAILJS_TEMPLATE_ID = 'template_iyqt69v';
const EMAILJS_PUBLIC_KEY  = 'x899Gq6z7bRRfcUoO';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  // Update the correct field in form state as the user types
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Send email via EmailJS when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      alert('Please fill in all fields before sending.');
      return;
    }

    setLoading(true);

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Ravi',
          from_email: form.email,
          to_email: 'your-email@example.com',  // ← replace with your actual email
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        alert('Thank you! I will get back to you as soon as possible.');
        setForm({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        setLoading(false);
        console.error('EmailJS error:', error);
        alert('Something went wrong. Please try again.');
      });
  };

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left','tween', 0.2,1 )}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get In Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
          >

            {/* for name */}

            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Name</span>
              <input 
                type="text"
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="what's your name"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
              />
            </label>

            {/* for email */}

            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Email</span>
              <input 
              type="text"
              name='email'
              value={form.email}
              onChange={handleChange}  
              placeholder="what's your Email"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
              />
            </label>

            {/* for message */}
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Message</span>
              <textarea 
              rows='7'
              type="text"
              name='message'
              value={form.message} 
              onChange={handleChange}
              placeholder="what do you want to say"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
              />
            </label>
            <button
              type='submit'
              className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
            >
              {loading ? 'sending...' : 'send'}
            </button>

          </form>  

      </motion.div>

      <motion.div
        variants={slideIn('right','tween', 0.2, 1 )}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas/>

      </motion.div>

    </div>
  )
}

export default SectionWrapper( Contact, "contact")