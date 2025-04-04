import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (

    <div className='flex flex-col md:flex-row flex-wrap bg-blue-600 rounded-lg px-6 md:px-10 lg:px-20'> 

      {/*----- Left side ------- */}
      <div>
        <p>
          Book Appointment <br/> With Trusted Doctors
        </p>
        <div>
          <img src={assets.group_profiles} alt="" />
          <p>Simply browse through our extensive list of trusted doctors, <br /> schedule your appointment easily.</p>
        </div>
        <a href=''>
          Book Appointment <img src={assets.arrow_icon} alt="" />
        </a>
      </div>

      {/* ---- right side ----- */}
      <div>
        <img src={assets.header_img} alt="" />
      </div>
    </div>
  )
}

export default Header