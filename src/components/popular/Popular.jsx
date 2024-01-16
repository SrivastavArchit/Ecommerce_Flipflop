import React, { useEffect } from 'react';
import data_product from '../assets/data';
import Item from '../items/Item';
import './Popular.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Popular = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      
      animate={controls}
      transition={{ ease: 'easeOut', duration: 2 }}
      className='popular'
    >
      <h1>Popular in Women</h1>
      <hr className="dark:bg-white" />
      <div className='popular_item'>
        {data_product.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Popular;
