import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className="relative h-[500px] overflow-hidden rounded-xl bg-[#5D5FEF]">
            
            <div className="absolute left-8 top-1/2 -translate-y-1/2 text-white max-w-[500px] z-20">
                <h1 className="text-4xl font-bold mb-4">
                    Book Appointment <br /> With Trusted Doctors
                </h1>

                <div className="flex items-center gap-3 mb-4">
                    <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
                        <img className='w-28' src={assets.group_profiles} alt="" />
                        <p>
                            Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' />
                            schedule your appointment hassle-free.
                        </p>
                    </div>
                </div>

                <a
                    href="#speciality"
                    className="inline-block px-6 py-3 bg-white text-[#5D5FEF] font-semibold rounded-full shadow hover:scale-105 transition-all duration-300"
                >
                    Book appointment →
                </a>
            </div>

            <img
                className="absolute bottom-0 right-0 h-full object-cover z-10"
                src={assets.header_img}
                alt="Doctors"
            />
        </div>
    )
}

export default Header
