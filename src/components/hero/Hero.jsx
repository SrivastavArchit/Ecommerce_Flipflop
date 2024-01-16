import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRightLong } from "react-icons/fa6";
import hand_icon from '../assets/hand_icon.png';
import hero_image from '../assets/hero_image.png';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -1000 },
    visible: { opacity: 1, y: 0 },
  };

  const handIconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 200 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className='container1'
    >
      <motion.div variants={itemVariants} className='hero_left'>
        <h3>New Products Only</h3>
        <div className='left_mid'>
          <motion.div variants={itemVariants} className='hand_icon'>
            <section className='new_hand'>
              <p>NEW</p>
              <motion.img variants={handIconVariants} src={hand_icon} alt="" />
            </section>
            <p>COLLECTION</p>
            <p>FOR EVERYONE</p>
          </motion.div>
          <motion.div variants={itemVariants} className='hero_latest_btn'>
            <p>Latest Collection</p>
            <FaArrowRightLong />
          </motion.div>
        </div>
      </motion.div>
      <motion.div variants={itemVariants} className='hero_right'>
        <motion.img variants={itemVariants} className='hero_image' src={hero_image} alt="" />
      </motion.div>
    </motion.div>
  );
};

export default Hero;