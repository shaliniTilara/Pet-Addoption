import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


function Pets() {
  return (
    <motion.div className='petsmain'
    initial={{opacity:0,y:50}}
    animate={{opacity:1,y:0}}
    transition={{duration:0.5}}>
      <center>
        <h1>Grab!! your BestFrirnd today💕</h1>
        </center>

        <div className='cont2'> 
          
          <div className='box1'>
            <img src='akitadog.jpg'></img>
            <p>
              
            NAME - Akita<br/>
            
            LIFE SPAN- 10-14 years<br/>
            COLOUR - Black,Red,White<br/>
            SIZE - Large to Gaint <br/>
            WEIGHT - 34-54kg<br/>
            HEIGHT - 61-71cm<br/>
              <Link to="/Adoptnow">
            <button className='apply-btn'>Buy Now</button>
            </Link>
            <Link to="/Reveiw">
            <button className='reveiw-btn'>See Reveiws</button>
            </Link>
            </p>
            </div>
            <div className='box2'>
              <img src='eskimodog.jpg'></img>
              <p>
                NAME - American Eskimo Dog<br/>
                LIFE SPAN - 12-15years<br/>
                SIZE - Small to Medium<br/>
                COLOUR - White<br/>
                WEIGHT - 3-16kg<br/>
                HEIGHT - 22-50cm<br/>
                 <Link to="/Adoptnow">
            <button className='apply-btn'>Buy Now</button>
            </Link>
            <Link to="/Reveiw">
            <button className='reveiw-btn'>See Reveiws</button>
            </Link>
              </p>
            </div>
            <div className='box3'>
              <img src='bichon.jpg'></img>
              <p>
                NAME - Bichon Frise <br/>
                LIFE SPAN - 12-15years<br/>
                SIZE - Small to Medium<br/>
                COLOUR - White<br/>
                WEIGHT - 3-16kg<br/>
                HEIGHT - 22-50cm<br/>
                 <Link to="/Adoptnow">
            <button className='apply-btn'>Buy Now</button>
            </Link>
            <Link to="/Reveiw">
            <button className='reveiw-btn'>See Reveiws</button>
            </Link>
              </p>
            </div>
            <div className='box4'>
              <img src='shihtzudog.jpeg'></img>
              <p>
                NAME - Shih Tzu <br/>
                LIFE SPAN - 12-15years<br/>
                SIZE - Small to Medium<br/>
                COLOUR - White<br/>
                WEIGHT - 3-16kg<br/>
                HEIGHT - 22-50cm<br/>
                 <Link to="/Adoptnow">
            <button className='apply-btn'>Buy Now</button>
            </Link>
            <Link to="/Reveiw">
            <button className='reveiw-btn'>See Reveiws</button>
            </Link>
              </p>
            </div>
        
        <div className='box1'>
            <img src='akitadog.jpg'></img>
            <p>
              
            NAME - Akita<br/>
            
            LIFE SPAN- 10-14 years<br/>
            COLOUR - Black,Red,White<br/>
            SIZE - Large to Gaint <br/>
            WEIGHT - 34-54kg<br/>
            HEIGHT - 61-71cm<br/>
              <Link to="/Adoptnow">
            <button className='apply-btn'>Buy Now</button>
            </Link>
            <Link to="/Reveiw">
            <button className='reveiw-btn'>See Reveiws</button>
            </Link>
            </p>
            </div>
            <div className='box2'>
              <img src='eskimodog.jpg'></img>
              <p>
                NAME - American Eskimo Dog<br/>
                LIFE SPAN - 12-15years<br/>
                SIZE - Small to Medium<br/>
                COLOUR - White<br/>
                WEIGHT - 3-16kg<br/>
                HEIGHT - 22-50cm<br/>
                 <Link to="/Adoptnow">
            <button className='apply-btn'>Buy Now</button>
            </Link>
            <Link to="/Reveiw">
            <button className='reveiw-btn'>See Reveiws</button>
            </Link>
              </p>
            </div>
            <div className='box3'>
              <img src='bichon.jpg'></img>
              <p>
                NAME - Bichon Frise <br/>
                LIFE SPAN - 12-15years<br/>
                SIZE - Small to Medium<br/>
                COLOUR - White<br/>
                WEIGHT - 3-16kg<br/>
                HEIGHT - 22-50cm<br/>
                 <Link to="/Adoptnow">
            <button className='apply-btn'>Buy Now</button>
            </Link>
            <Link to="/Reveiw">
            <button className='reveiw-btn'>See Reveiws</button>
            </Link>
              </p>
            </div>
            <div className='box4'>
              <img src='shihtzudog.jpeg'></img>
              <p>
                NAME - Shih Tzu <br/>
                LIFE SPAN - 12-15years<br/>
                SIZE - Small to Medium<br/>
                COLOUR - White<br/>
                WEIGHT - 3-16kg<br/>
                HEIGHT - 22-50cm<br/>
                 <Link to="/Adoptnow">
            <button className='apply-btn'>Buy Now</button>
            </Link>
            <Link to="/Reveiw">
            <button className='reveiw-btn'>See Reveiws</button>
            </Link>
              </p>
            </div>
        </div>
        </motion.div>
    
    
  )
}

export default Pets