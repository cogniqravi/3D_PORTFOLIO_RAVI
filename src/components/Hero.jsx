
import { motion } from 'framer-motion';

import {styles} from '../styles'
import {ComputersCanvas} from './canvas'

const Hero = () => {
  return (
   
    <section className={`relative w-full h-screen mx-auto`}>

      <div className={`${
        styles.paddingX
        } absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>

        <div>
          <h1 className={`${
            styles.heroHeadText
            } text-white `}
          >
            Hi, I'm
            <span className='text-[#915EFF]'> Ravi</span>
          </h1>
          <p className={`${
            styles.heroSubText
            } mt-2 text-white-100`}>
              I develop 3D visuals, user 
              <br className='sm:block hidden' />
              interfaces and web applications.
          </p>
        </div>
      </div>
      
      <ComputersCanvas/>

{/*For creation of mouse icon shows on website */}
<div className='absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center'>
 
            
            {/* For navigation to about section */}
            <a href='#about'>

          {/* creating recangle with rounded border of mouse icon */}
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>

            {/* creating rounded ball inside the rectangle with infinite loop */}
             
            <motion.div
              animate={{ 
                y: [0, 24, 0],          // move only in y direction
              }}
              transition={{         
                duration : 1.5,      // time to move to reach end point of animation
                repeat: Infinity,   // how much time want to move ball
                repeatType: 'loop'    
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
              
             

          </div>
        </a>

      </div>

    </section>
    
  )
}

export default Hero