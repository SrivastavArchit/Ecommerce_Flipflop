import React, { useContext, useState } from 'react'
import './Navbar.css'
import { BsFillMoonFill } from "react-icons/bs";
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link ,NavLink} from 'react-router-dom'
import Switcher from '../Switcher';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import {motion} from 'framer-motion';
import { ShopContext } from '../../context/ShopContext';
const Navbar = (props) => {
  const {gettotalcartitem} = useContext(ShopContext);
    // const [menu,setmenu] = useState('Shop');
  return (
   
  <motion.div className='navbar_section '>

<Link to={'/'}> <div className='logo_section'>
      <motion.img animate={{ rotate: 360 }}
                transition={{ ease: "linear", duration: 2, repeat: Infinity }} src={logo} alt="logo" />
     <motion.h3 style={{textDecoration:"none"}} ><span className='logo_letter'>F</span>lip<span className='logo_letter'>Z</span>one</motion.h3>
    </div></Link>
    <ul className='cart_section'>

    <motion.li
  whileTap={{ scale: 0.8 }}
  whileHover={{
    scale: 1.1,
    transition: { duration: 0.5 },
  }}
>
 <NavLink style={{ textDecoration: 'none' ,color:"black",fontSize:'15px' }}  to={'/'}> Home</NavLink> 

</motion.li>
<motion.li
  whileTap={{ scale: 0.8 }}
  whileHover={{
    scale: 1.1,
    transition: { duration: 0.5 },
  }}
>
  <NavLink style={{ textDecoration: 'none' ,color:"black",fontSize:'15px' }} to={'/mens'}>Men</NavLink>
  </motion.li>

  <motion.li
  whileTap={{ scale: 0.8 }}
  whileHover={{
    scale: 1.1,
    transition: { duration: 0.5 },
  }}
>
  <NavLink style={{ textDecoration: 'none' ,color:"black",fontSize:'15px' }} to={'/womens'}>Women</NavLink>

  </motion.li>

  <motion.li
  whileTap={{ scale: 0.8 }}
  whileHover={{
    scale: 1.1,
    transition: { duration: 0.5 },
  }}
>
  <NavLink style={{ textDecoration: 'none' ,color:"black",fontSize:'15px' }} to={'/kids'}>Kids</NavLink>

  </motion.li>




    </ul>
   
  <div className='nav_3'>
  <Switcher />
    <Link to={'/login'}><button >Sign in</button></Link>
    <Link to={'/cart'}><img src={cart_icon} alt="cart_icon" /></Link>
    <div className='cartNumber'>
    <h3 style={{fontSize:".9rem",fontWeight:"bold",textAlign:"center"}} >{gettotalcartitem()}</h3>
    </div>
  
  </div>

  </motion.div>
    
  )
}

export default Navbar;
