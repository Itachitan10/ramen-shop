import { Link } from 'react-router-dom'
// import { BrowserRouter , Routes , Route ,link } from 'react-router-dom'

import React from 'react'

const dashboard = () => {
  return (
       <div className="h-screen w-screen bg-[url('https://tse1.mm.bing.net/th/id/OIP.kCZGyPUl02MAYSoGvfTmfwHaEK?rs=1&pid=ImgDetMain')] bg-cover bg-center">

       <div className=' bg-[#221f1f]'>
        <div className=''>
        <nav className='p-4 flex flex-row justify-between mx-20'>
          <h1 className='font-bold text-white'>my 
            <span className='font-bold text-[yellow]'> ramen shop</span>
          </h1>
          <ul className='flex gap-5 text-[yellow] font-bold' >
            <li className="hover:underline cursor-pointer">
              <Link to="/dashboard/about">About</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link to="/dashboard/contact">Contact</Link>
            </li>
               <li className="hover:underline cursor-pointer">
              <Link to="/dashboard/product">product</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
      <div className='mt-10'>
        <div className='mx-[50px]'>
          <div className='flex justify-center'>
            <div className='flex1  justify-between mt-[70px] w-[600px]'>
              <div className=' justify-center '> 
                  <h1 className="text-4xl font-bold mt-10 text-[yellow]">ICHIRAKU <span className='text-[white]'>RAMEN</span></h1>
                 
                    <h1 className='text-[15px] font-light text-[white] py-5'>“Authentic, heartwarming ramen made with passion and tradition. Every bowl is crafted to bring you the rich flavors and comforting warmth of Japan. Come and find your perfect bowl today a taste that feels like home in every sip.”</h1>
                
                    <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded shadow-md transition duration-300 mt-[30px] flex justify-center"> Order Now</button>

              </div>

 
            </div>
            <div className='flex-1'>
              <div>
                <img src="https://static.vecteezy.com/system/resources/previews/036/083/981/non_2x/ai-generated-plate-of-ramen-isolated-on-transparent-background-free-png.png" alt="" className="w-full max-w-[500px] h-auto"
/>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  )
}

export default dashboard
