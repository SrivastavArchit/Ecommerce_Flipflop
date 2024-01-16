import React from 'react'
import new_collections from '../assets/new_collections'
import './NewCollection.css'
import { easeInOut, motion } from 'framer-motion'
import Item from '../items/Item'
const NewCollection = () => {
  return (
    <motion.div 
    whileInView={{ opacity: 1 }} animate={{ y:0}}   transition={{  ease: "easeOut", duration: 1.5,stagger:0.5}}  initial={{ opacity: 0,y:-1000 }}
    
    className='collection'>
        <h1> New Collections</h1>
        <hr/>
        <div className='collection-items'>
           {

            new_collections.map((item,i)=> {
              return <Item key={i} id={item.id} name={item.name} new_price={item.new_price} 
              old_price={item.old_price} image={item.image}/>
            })}

        </div>
      
    </motion.div>
  )
}

export default NewCollection
