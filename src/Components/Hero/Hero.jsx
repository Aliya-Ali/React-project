import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>We Ensure better Education for a betteer world</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel quis fugiat quia unde beatae illum nulla quisquam delectus, ipsum reprehenderit amet ducimus distinctio in provident voluptate, doloribus ex tempore incidunt!</p>
            <button className='btn'>Explore More <img src={dark_arrow} alt="" /> </button>
        </div>
      
    </div>
  )
}

export default Hero
