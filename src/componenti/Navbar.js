import React from 'react';
import {useRive,useStateMachineInput} from 'rive-react';

export default function Navbar(){
  const {RiveComponent , rive } = useRive({
    src: "micon.riv",
    stateMachines : "Mac",
    autoplay: "false"
  });
  const onClickInput = useStateMachineInput(
    rive,
    "Mac",
    "Trigger 1"
  );
  return (
    <div className='bg-zinc-900 top-0 flex flex-col  z-40'>
      <nav className=" antialiased items-center flex flex-row justify-between xl:px-60 lg:px-40 md:px-20 px-10 py-8">
      <RiveComponent style={{width:"2.5rem"}} id="rive" onClick={() => {
        onClickInput.fire();
        document.getElementById("collapse").classList.toggle('hidden');
        }} src="micon.riv"/>
          <h1 className='text-white font-black self-center lg:text-3xl md:text-2xl text-4xl '>ma .</h1>
          <ul className=" uppercase hidden md:flex flex-row flex-shrink font-medium lg:text-lg items-center lg:gap-20 gap-10 text-neutral-300">
            <a className='hover:text-neutral-100 ' href='#home'>Home</a>
            <a className='hover:text-neutral-100' href='#servizi'>Servizi</a>
            <a href='#contatti'><button type='button' className=' focus:ring-1 focus:ring-white focus:ring-offset-5  px-5 py-3 shadow text-black/80 bg-white bg-opacity-90 hover:bg-opacity-100 font-bold uppercase rounded-full focus:outline-none '>
              Contattami
              </button></a>
          </ul>
          <div className='md:hidden'></div>
      </nav>
      <ul id="collapse" className="hidden flex transition delay-1000 ease-in flex-col text-lg flex-shrink font-medium md:hidden items-start lg:gap-20 gap-10 text-neutral-300 px-10 pb-8">
            <a href='#home' className='hover:text-neutral-100'>Home</a>
            <a href='#servizi' className='hover:text-neutral-100'>Servizi</a>
            <a href='#contatti' className='hover:text-neutral-100'>Contattami</a>
          </ul>
    </div>
  )
}

