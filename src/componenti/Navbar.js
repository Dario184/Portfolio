import React from 'react';
import {MenuAlt4Icon} from '@heroicons/react/outline';

export default function Navbar(){
  return (
    <div className='sticky top-0  z-40'>
      <nav className=" bg-zinc-900 antialiased items-center flex flex-row justify-between xl:px-60 lg:px-40 md:px-20 px-10 py-8">
          <MenuAlt4Icon className='text-4xl h-10 text-white md:hidden'/>
          <h1 className='text-white font-black self-center lg:text-4xl md:text-2xl text-4xl '>ma .</h1>
          <ul className="hidden md:flex flex-row flex-shrink font-medium lg:text-xl sm:text-lg items-center lg:gap-20 gap-10 text-neutral-300">
            <li className='hover:text-neutral-100'>Home</li>
            <a  href="#servizi" className='hover:text-neutral-100'>Servizi</a>
            <li><button type='button' className='transition focus:ring-1 focus:ring-white focus:ring-offset-5  px-5 py-3 shadow text-black/80 bg-white bg-opacity-90 hover:bg-opacity-100 font-bold uppercase rounded-full focus:outline-none '>
              Contattami
              </button></li>
          </ul>
          <div className='md:hidden'></div>
      </nav>
    </div>
  )
}

