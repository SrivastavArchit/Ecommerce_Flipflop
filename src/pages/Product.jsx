import { useParams } from 'react-router-dom';
import React from 'react'
import { ShopContext } from '../context/ShopContext';
import { useContext } from 'react';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';  
function Product() {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams()
  const product = all_product.find((e) => e.id === Number(productId))
  return (
    <div>
    <ProductDisplay product={product}/>
    </div>
  )
}

export default Product;
