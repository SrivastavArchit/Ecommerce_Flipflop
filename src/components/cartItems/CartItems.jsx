import React, { useContext } from 'react'
import { ShopContext } from "../../context/ShopContext";
import './CartItem.css'
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';
import { FaIndianRupeeSign } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import Bolejo from '../../pages/BoleJo/Bolejo';

  import 'react-toastify/dist/ReactToastify.css';
import remove_icon from '../assets/cart_cross_icon.png'
const CartItems = () => {
    const notify = () => toast.success('Removed from Cart', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    const {all_product,getTotalCartAmount,cartItem ,addToCart,removeFromCart,get}= useContext(ShopContext)
  return (
    <div className='cartItems'>
      <div className='cart_item_main'>
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>

      </div>
      <hr />
      {
        all_product.map((e)=>{
            if(cartItem[e.id]>0){
                return <div>
                    <div className='cartItem_format cart_item_main'>
        <img src={e.image}alt="" />
        <p style={{fontSize:"14px"}}>{e.name}</p>
        <p><FaIndianRupeeSign/>{e.new_price}</p>
        <div className='cartItem_quantity'>{cartItem[e.id]}</div>
        <p><FaIndianRupeeSign/>{e.new_price*cartItem[e.id]}</p>
        <ImCross onClick={()=> {removeFromCart(e.id) ; notify()}}/>
        <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
      </div>
      
      </div>
            }
            return null;
        } )
    
}
    <div className='cartitem_down'>
        <div className='cartTotal'>
            <h1 style={{fontSize:"1.4rem",textAlign:"center",marginTop:"2rem"}}>Cart total</h1>
            <div className='cart_total'>
                <p>Subtotal</p>
                <p><FaIndianRupeeSign/>{getTotalCartAmount()} </p>
            </div>
            <hr />
            <div className='cart_total'>
                <p>Shipping</p>
                <p>Free</p>
            
            </div>
            <hr />
            <div className='cart_total'>
                <h3>Total</h3>
                <h3><FaIndianRupeeSign/>{getTotalCartAmount()} <span style={{color:"#969392",fontSize:"15px"}}>only</span> </h3>
            </div>
            <Link to ="/Bolejo" ><button style={{backgroundColor:"#FB641B",color:"white"}} >Proceed to Pay</button></Link>
        </div>
    </div>
</div>
  )
}

export default CartItems
