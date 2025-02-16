import React from 'react'
import "remixicon/fonts/remixicon.css";

const Navbar = () => {
  return (
    <>
      <div className='flex items-center justify-evenly h-20 bg-white '>
        <div>
            <img src="./logo.png" className='w-20 h-auto'></img>
        </div>
        <div>
            <ul className='flex items-center gap-6.5 cursor-pointer'>
                <li className='hover:bg-gray-300 px-2 py-1 rounded-lg'>Home</li>
                <li className='hover:bg-gray-300 px-2 py-1 rounded-lg'>About</li>
                <li className='hover:bg-gray-300 px-2 py-1 rounded-lg'>Services</li>
                <li className='hover:bg-gray-300 px-2 py-1 rounded-lg'>Blog</li>
                <li className='hover:bg-gray-300 px-2 py-1 rounded-lg'>Contact</li>
            </ul>
        </div>
        <div>
            <button className='bg-green-500 h-10 w-24 rounded-sm'><i class="ri-login-box-line mr-2"></i>Sign in</button>
            
        </div>
      </div>
    </>
  )
}

export default Navbar


   
