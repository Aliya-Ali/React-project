import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt=""  className='play-icon' onClick={setPlayState(true)}/>
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt voluptatum quisquam eveniet blanditiis recusandae voluptas. Debitis atque consectetur, fugiat vel eos unde excepturi error. Numquam expedita esse ipsam iure sapiente.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse laborum dicta sunt accusamus natus aperiam sint et. Repellat, fuga aliquid. Eos ad iure placeat voluptatem perferendis magni eaque dolorum inventore vel, laudantium ipsum enim voluptate nam iusto atque in mollitia. Unde fugiat deleniti dicta doloribus quia aperiam odit dolor magnam?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit vitae mollitia enim corporis corrupti recusandae nisi maiores asperiores provident totam? Aperiam necessitatibus voluptates autem qui quo iste repellendus cum consequatur?</p>
      </div>
    </div>
  )
}
import './About.css'
export default About
