import { style } from 'framer-motion/client'
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


function Home() {
  return (
    
    <div className='homecont'>
        <center>
    
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8}}
           > Looking🧐 for a new bestfriend??<br></br>
            Meet your perfect match here!!😍 </motion.h1>
        </center>
        
         <h2>
          <marquee direction="right">
            Every pet deserves a loving Home🏠...
            </marquee>

          </h2>
        <motion.div className='main'
        initial={{opacity:0,y:50}}
    animate={{opacity:1,y:0}}
    transition={{duration:0.5}}>
        
         
        <p>
            Open your heart and home to a deserving animal! Our shelter is filled with loving cats and dogs waiting for their forever families. Adopting a pet provides a loving companion, reduces stress, and enriches your life in countless ways. Consider giving a rescue animal a second chance at happiness – you won't regret it! Visit us today to meet your new best friend.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ad molestias quasi eveniet! Saepe natus totam fuga adipisci nemo. Repudiandae iusto odit perferendis eius quo temporibus! Ratione alias atque obcaecati?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus earum laboriosam at deserunt eaque voluptatum voluptas consectetur modi deleniti accusantium illum minima id consequatur suscipit, provident saepe vel fugit <molestiae className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. In odit veniam, distinctio ullam asperiores possimus impedit. Totam provident fugiat expedita delectus, deleniti obcaecati voluptas, autem, commodi libero tempore necessitatibus porro!</molestiae>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis itaque dolorem earum exercitationem libero accusantium quisquam alias ipsa unde officia maiores porro possimus nihil iste laborum, deserunt provident? Placeat, eos!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, corrupti suscipit. Soluta veritatis libero, eligendi omnis voluptatem ex consequuntur corporis reiciendis placeat. Dignissimos sit corporis nostrum nobis, illo maxime atque?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla consequatur accusamus iusto, hic modi quas, adipisci veritatis magnam esse et excepturi voluptas sint tempore earum saepe quo eius laborum molestias!
        </p>
        
        <img src='petadpt.jpg'></img>
        
        
        </motion.div>
        <Link to="/Pets">
        <button className='see-pets-btn'>See Available Pets</button>
        </Link>
        
        
        </div>
        
  )
}

export default Home