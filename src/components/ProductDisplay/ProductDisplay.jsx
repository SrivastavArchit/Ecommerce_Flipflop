// ProductDisplay.jsx
import { FaShoppingCart } from "react-icons/fa";
import { FaBoltLightning } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_dull_icon from '../assets/star_dull_icon.png';
import star_icon from '../assets/star_icon.png';
import { ShopContext } from "../../context/ShopContext";
const ProductDisplay = (props) => {
  const notify = () =>toast('Added to cart', {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

    const {product} = props;
    const {addToCart} = useContext(ShopContext)
  return (
    <div className="product-container">
      <div className='product_left'>
        <div className='image_list' >
            <img src={product.image} alt={product.name} />
            <img src={product.image} alt={product.name} />
            <img src={product.image} alt={product.name} />
            <img src={product.image} alt={product.name} />
        </div>
        <div className='product_img'>
            <img className='main_img' src={product.image} alt={product.name} />
        
        </div>
        <div className='cart_button'> 
           <button   onClick={() => {addToCart(product.id) ;notify()}}  ><FaShoppingCart /> Add to Cart</button>
                        <ToastContainer
              position="bottom-left"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
theme="light"
/>
           </div>
           <button className="buy_btn"> <FaBoltLightning/> Buy Now</button>
           
      </div>
      
      
      <div className='product_right'>
        
        <h1>{product.name}</h1>
       
    
      <div className='product_star'>
      <img src={star_icon} alt="" />
      <img src={star_icon} alt="" />
      <img src={star_icon} alt="" />
      <img src={star_icon} alt="" />
      <img src={star_dull_icon} alt="" />
      <p>(133)</p>
      </div>
      <div className='price_place'>
      <div className='product_price_new'><p>Rs{product.new_price}</p></div>
      <div className='product_price_old'> <s><p>Rs{product.old_price}</p></s></div>
      </div>
      <div className='product_size'><h1>Select size</h1>
        <div className='size_variety'>
        <div className='box'>S</div>
        <div className='box'>M</div>
        <div className='box'>L</div>
        <div className='box'>XL</div>
        
          <div className='box'>XXL</div>
         
        
         
        </div>
        </div>
      <div className='product_Description'><p> <span className='color_Desc'>Colour Declaration </span> : There might be slight variation in the actual color of the product due to different screen resolutions.
Ocassion: Traditional wear, Casual Wear, party wear, evening wear,Please Click On Brand Name "GoSriKi" For More Products.
</p></div>
        
      
        <p className='product_category'><span>Category</span> Women, T-shirt, Crop top </p>
        <p className='product_category'><span>Tags</span> Party wear,modern </p>
        </div>
    </div>

  );
};

export default ProductDisplay;

