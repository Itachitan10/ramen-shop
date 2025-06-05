import React from 'react'
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <div className='w-screen h-screen bg-[#343634]'>

      <div className=' bg-[#221f1f]'> 
        <nav className='p-4 flex flex-row justify-between mx-20 bg-lba'>
          <h1 className='font-bold text-white'>my 
            <span className='font-bold text-[yellow]'> ramen shop</span>
          </h1>
          <ul className='flex gap-5 text-[yellow] font-bold' >
            <li className="hover:underline cursor-pointer">
              <Link to="/dashboard">Home</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link to="/dashboard/about">About</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link to="/dashboard/contact">Contact</Link>
            </li>

          </ul>
        </nav>
        </div>
  

      <div className='p-6 mx-10'>
        
        <p className="text-5xl flex justify-center text-[yellow]" style={{ fontFamily: 'Georgia, serif' }}>
          Welcome to Ichiraku Ramen!
        </p>

        <div className='flex mt-10 justify-center max-w-6xl mx-auto'>

          <div className='flex-1 flex justify-end'>
            <img 
              src="https://i.pinimg.com/originals/6a/07/c6/6a07c617ea6f97269f2702de181d254d.jpg" 
              alt="Ichiraku Ramen" 
              className='w-[400px] h-[400px] object-cover rounded-2xl shadow-lg'
            />
          </div>

          <div className='flex-1 bg-amber-100 p-6 rounded-2xl shadow-xl ml-6'>
            <h2 className='text-3xl font-bold mb-4'>Welcome to Ichiraku Ramen!</h2>
            <p className='text-sm leading-relaxed'>
              The legendary ramen shop loved by ninjas and villagers alike. Inspired by the famous ramen house from the Hidden Leaf Village, we serve heartwarming bowls of rich broth, perfectly cooked noodles, and authentic Japanese flavors. <br /><br />
              Whether you're craving a classic Miso Ramen, a spicy Tantanmen, or our special Naruto Ramen topped with narutomaki (fish cake swirls) — there's a bowl waiting for every ramen lover here! <br /><br />
              <strong>Come hungry, leave happy.</strong> Experience the taste that kept Naruto Uzumaki coming back for more!
            </p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default About
