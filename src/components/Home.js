import React from 'react'

export default function Home() {

  const getScroll = (e) =>{
    e.preventdefault();
  }

  return (
    <div className='home'>
      <div className="subtext">
        <h1>Welcome to webstore</h1>
        <a href='#category' onClick={getScroll}>Shop Now</a>
      </div>
        <img src='img/9c28de0e-b9e7-4a3f-be05-715d5a2c770a.webp' alt='bg'></img>
    </div>
  )
}
