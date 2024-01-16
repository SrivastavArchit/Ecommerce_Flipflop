import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsLetter '>
      <h1>Get <span  className='X'>X</span>clusive </h1>
      <h1>Offer on your Mail</h1>
      <p className='text-black'> Subscribe to our newsletter and get exclusive offers on your first purchase</p>
      <div className='email_btn'>
        <input type="email" placeholder='Enter your email' />
        <button>Subscribe</button>
        
      </div>
    </div>
  )
}

export default NewsLetter
