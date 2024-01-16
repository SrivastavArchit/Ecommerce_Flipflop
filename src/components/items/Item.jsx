import React from 'react'
import './Item.css'
import { FaIndianRupeeSign } from "react-icons/fa6";
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
const Item = (props) => {
  const scrollToTop = () => {
    // Find the top of the document body and scroll to it
    document.body.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <motion.div 
    whileHover={{scale:1.07}}
    whileTap={{scale:0.9}}
    transition={{duration:0.3}}
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    key={props.id}
    id={props.id}
    
      className='item dark '>
     <Link to={`/product/${props.id}`}><img onClick={scrollToTop} src={props.image} alt="" /> </Link>
     <p className='bg-slate-100 text-black'>{props.name}</p>
     <div className='price_compare'>
     <div className='item_new_price'>
      <p><FaIndianRupeeSign />{props.new_price}</p>
     </div>
     <div className='item_old_price'>
        <p><s><FaIndianRupeeSign />{props.old_price}</s></p>
     
     </div>
     </div>
    
    </motion.div>
  )
}

export default Item
