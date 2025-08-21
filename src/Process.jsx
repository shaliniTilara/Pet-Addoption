import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Process() {
  return (
    

    
    <motion.section id="process" className="process-section"
    initial={{opacity:0,y:100}}
    animate={{opacity:1,y:0}}
    transition={{duration:0.8}}>
      
      <h1 ><big>🐾</big> How to Adopt a Pet</h1>
      <ol>
        <li> Browse our list of available pets.</li>
        <li> Choose the pet you'd love to adopt. 🐶🐱</li>
        <li> Fill out the simple adoption form. 📝</li>
        <li> Our team will review your application. 👀</li>
        <li> Finalize the process and bring your new friend home! 🎉</li>
      </ol>
      <Link to="/Adoptnow">
      <button className=''>ADOPT NOW</button>
      </Link>
      
    </motion.section>
    
  );
}

export default Process;