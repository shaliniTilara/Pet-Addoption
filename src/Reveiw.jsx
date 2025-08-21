import React from 'react'
import { motion } from 'framer-motion';

function Review() {
  return (
    
    <motion.div className="review-container"
    initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8}}>
      <h1>What Our Adopters Say 🐾</h1>

      <div className="review-card">
        <h3>Amit Sharma</h3>
        <p>"I adopted a puppy from here. Best decision of my life! ❤"</p>
        <p><big>⭐</big> 5 / 5</p>
      </div>

      <div className="review-card">
        <h3>Pooja Verma</h3>
        <p>"Very helpful staff and lovely animals. Highly recommended!"</p>
        <p><big>⭐</big> 4 / 5</p>
      </div>

      <div className="review-card">
        <h3>Rajesh Patel</h3>
        <p>"Adoption process was easy and transparent. Thank you!"</p>
        <p><big>⭐</big> 5 / 5</p>
      </div>
    </motion.div>
  );
}

export default Review;