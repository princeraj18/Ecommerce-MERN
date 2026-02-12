import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext';
import { ShopContext } from '../context/shopContext';
import Title from '../components/Title';
import { assets } from '../assets/frontend_assets/assets';
import CartTotal from './CartTotal';
import { Navigate, useNavigate } from 'react-router-dom';

const Cart = () => {
  const {products,currency,cartItems,getCartCount , updateQuantity} = useContext(ShopContext);
  const navigate = useNavigate();
const [cartData,setCartData]=useState([]);  

useEffect(()=>{


  if (products.length>0){
  const tempData = [];
  for(const items in cartItems){
    for (const item in cartItems[items] ){
      if(cartItems[items][item]>0){
        tempData.push({
          _id:items,
          size:item,
          quantity:cartItems[items][item]
        })
      }
    }

  } setCartData(tempData);
  }

 
},[cartItems,products])





  return (
    <div className='border-t pt-14'>

      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'}/>
      </div>
      <div>
        {
         cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );

            
          return (
            <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr]  items-center gap-4  '>
<div className='flex items-start gap-6'>
  <img src={productData.image[0]} className='w-16 sm:w-20' alt="" />
  <div>
    <p className='text-xs sm:text-lg font-medium'>
      {productData.name}
    </p>
    <div className='items-center flex gap-5 mt-2'>
      <p>{currency}{productData.price} </p>
      <p>
        {item.size}
      </p>
    </div>
  </div>

</div>
<input onChange={(e)=>e.target.value === '' || e.target.value ==='0' ? null :updateQuantity(item._id , item.size ,Number(e.target.value) ) } type="number" className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 ' defaultValue={item.quantity}   />
<img onClick={
  ()=>updateQuantity(item._id , item.size , 0)
} src={assets.bin_icon} className='w-4 mr-4 sm:w-5 cursor-pointer ' alt="" />
            </div>
          )
          

          })
        }

      </div>
      <div className='flex justify-end'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal/>
          <div className='flex w-full justify-end  pb-5 sm:h-14 h-16' >
            <button onClick={()=>navigate('/place-order')} className='bg-black text-white px-4 py-2 h-12 sm:h-12 rounded-md'>Proceed to Checkout</button>
          </div>


        </div>
      </div>

    </div>
  )
}

export default Cart