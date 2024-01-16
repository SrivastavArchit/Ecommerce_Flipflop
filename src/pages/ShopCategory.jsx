import React, { useContext } from 'react'
import  {ShopContext}  from '../context/ShopContext'
import './css/ShopCategory.css'
import Item from '../components/items/Item'
import { FaArrowDown } from "react-icons/fa";


const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <div className='shopcategory'>
      <img className='banner' src={props.banner} alt="" />
      <div className='shopcategory-content'>
       <p>
       <span className='show'>showing 1-12</span> out of 36 products.
        </p> 
        <div className='shopcategory_sort'>
         <button>Sort by <FaArrowDown /></button> 
        </div>
      </div>
      <div className='shopcategory_products'>
        {
          all_product.map((item,i)=>{
            if(item.category === props.category){
              return <Item key={i} id={item.id} name={item.name} new_price={item.new_price} 
              old_price={item.old_price} image={item.image}  />
            }})
        }
      </div>
    </div>
  )
}

export default ShopCategory

