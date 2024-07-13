import React from 'react'
import {logo} from '../assets'
function Hero() {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
         <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/TidbitsJS/Summize", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>
            <h1 className='head_text'>
                Summarize Articles/Docs with <br/>
                <span
                className='orange_gradient'>
                Open AI
                </span>
            </h1>
            <h2 className='desc'>
            Turn Articles and Docs into Bite-Sized Wisdom.<br></br> Transform Lengthy Reads into Quick Insights. Experience the power of instant summaries that distill complex information into bite-sized, impactful nuggets, making learning effortless and enlightening.Get Summaries That Matter, Instantly.
           
            </h2>
        
    </header>
  )
}

export default Hero