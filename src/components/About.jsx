import React from 'react'

import { motion } from 'framer-motion'

import { styles } from '../styles'

import { Tilt } from 'react-tilt'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

import { SectionWrapper } from '../hoc'


const ServiceCard = ({index,title,icon}) =>{
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div variants={fadeIn('right', 'spring', 0.5 * index ,0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div 
        options={{
          msx:45,
          scale:1,
          speed:450

        }} 
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex 
        justify-evenly items-center flex-col'        
        >
          <img src={icon} alt={title} className='w-15 h-16 object-contain'/>

          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>


        </div>



      </motion.div>

    </Tilt>
  )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview</h2>
      </motion.div>


      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl loading-[30px]'

      >
        The recommendation to add an error boundary is a 
        good practice for handling unexpected errors gracefully.
         While it might not directly fix this specific error, it
          can prevent the entire application from crashing if similar 
          issues arise in the future. Refer to the React documentation
           on error boundaries //legacy.reactjs.org/docs/error-boundaries.html for implementation details.


      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service,index)=>(
          <ServiceCard key={service.title} index={index}{...service}/>
        ))}

      </div>
    </>
  )
}

export default SectionWrapper (About,'about')