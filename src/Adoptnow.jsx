import React, { use, useState } from 'react'
import { motion } from 'framer-motion'

function Adoptnow() {
  const [pets,setpets]=useState('')
  const [name,setname]=useState('')
  const [email,setemail]=useState('')
  const [phone,setphone]=useState('')
  const [address,setaddress]=useState('')
  const [why,setwhy]=useState('')
  

  const handlesubmit=(e)=>{
    e.preventDefault;
    localStorage.setItem("customer name",name)
    localStorage.setItem("email",email)
    localStorage.setItem("phone number",phone)
    localStorage.setItem("address",address)
    localStorage.setItem("pet name",pets)
    localStorage.setItem("reason for buy",why)

    alert("CONGRATULATION🤩,WE WILL CONTACT YOU SOON!!")
  }
   return (
    <motion.div className="apply-form"
    initial={{opacity:0,y:50}}
    animate={{opacity:1,y:0}}
    transition={{duration:0.5}}>
      <h2>Apply for Adoption</h2>
      <form o  onSubmit={handlesubmit}>
        <label>Name:</label><br />
        <input type="text" value={name} placeholder="Your Name" onChange={(e)=>setname(e.target.value)}/><br /><br />

        <label>Email:</label><br />
        <input type="email" value={email} placeholder="Your Email" onChange={(e)=>setemail(e.target.value)}/><br /><br />

        <label>Phone:</label><br />
        <input type="tel" value={phone} placeholder="Your Phone Number"onChange={(e)=>setphone(e.target.value)} /><br /><br />

        <label>Address:</label><br />
        <input type="text" value={address} placeholder="Your Full Address" onChange={(e)=>setaddress(e.target.value)}/><br /><br />

        <label>Select Pet:</label><br />
        <select value={pets} onChange={(e)=>setpets(e.target.value)}>
          <option value="">-- Select a Pet --</option>
          <option value="Akita">Akita</option>
          <option value="Bichon Frise">Bichon Frise</option>
          <option value="Shih Tzu">Shih Tzu</option>
          <option value="American Eskimo Dog">American Eskimo Dog</option>
        </select><br/><br/>

        <label>Why do you want to adopt?</label><br />
        <textarea value={why} placeholder="Write here..." rows="4" onChange={(e)=>setwhy(e.target.value)}></textarea><br /><br />

        <button type="submit">Submit Application</button>
      </form>
    </motion.div>
  );

}

export default Adoptnow