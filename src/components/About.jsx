import React from 'react'
// title is used for hover effect animation 
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

import {SectionWrapper} from '../Hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >

        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title}
            className="w-16 h-16 object-contain"
          />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>

        </div>

      </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-2.5 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am a results-driven Software Developer and Entrepreneur with a strong foundation in Full Stack Development, AI, and Operations. 
        As the Founder of **Cogniq AI**, I lead the development of innovative AI tools and the **OpenClaw** project. 
        With expertise in building sophisticated **AI bots**, managing robust PostgreSQL/Supabase backends, and scaling cloud infrastructures 
        at **LK Machinery**, I deliver high-impact, real-world solutions that solve complex challenges.
      </motion.p> 

      <div className='mt-10 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index}{...service} />
        ))}

      </div>
    </>
  ) 
}

export default SectionWrapper(About , "about");