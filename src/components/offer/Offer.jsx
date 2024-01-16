import React from 'react'
import './Offer.css'
import { motion } from 'framer-motion'
import exclusive_image from '../assets/exclusive_image.png'
const Offer = () => {
  return (
    <motion.div 
    animate={{ x: [0, 100, 0] }} initial={{ opacity: 0,x:-100}}
    whileInView={{ opacity: 1 }} 
    transition={{ ease: "easeOut", duration: 2 }}  className='offers '>
        <div className='offer_left '> 
            <h1>Exclusive</h1>
            <h1>Offers for you</h1>
            <p>ONLY ON BEST SELLER PRODUCT</p>
            <button>check now</button>
        </div>
        <div className='offer_right'> 
        <img src={exclusive_image} alt="" />
        </div>
      
    </motion.div>
  )
}

export default Offer
