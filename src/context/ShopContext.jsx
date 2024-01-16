import React,{createContext, useState} from "react";
import all_product from "../components/assets/all_product";



export const ShopContext = createContext(null);
const getdefaultCart = () => {
    let cart = {};
 for(let i = 0; i < all_product.length+1; i++){
     cart[i] = 0;
 }
return cart; 
}
const ShopContextProvider  = (props) => {
    const [cartItem,setcartItem] = useState(getdefaultCart());
    const addToCart = (itemId) => {
        setcartItem({...cartItem, [itemId]: cartItem[itemId] + 1});
   }
   const gettotalcartitem = () => {
    let count = 0;
    for(let id in cartItem){
        count = count + cartItem[id];
    }

    return count;
   }
   const getTotalCartAmount = () => {
    let totalAmount = 0;
  
    for (const itemId in cartItem) {
      const quantity = cartItem[itemId];
      
      if (quantity > 0) {
        const itemInfo = all_product.find((product) => product.id === Number(itemId));
  
        if (itemInfo) {
          totalAmount += itemInfo.new_price * quantity;
        }
      }
    }
  
    return totalAmount;
  };
  
   const removeFromCart = (itemId) => {
    setcartItem({...cartItem, [itemId]: cartItem[itemId] - 1});
}
    const contextValue = {all_product, getTotalCartAmount ,gettotalcartitem,cartItem ,addToCart,removeFromCart};




    return (
       
     <ShopContext.Provider value={contextValue}>
        {props.children}
     </ShopContext.Provider>
    )
}
export default ShopContextProvider;