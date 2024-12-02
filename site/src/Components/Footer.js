import React from 'react'
import { footer } from '../Data/Data'
import logo from "../assets/logo-3.png"

import {BiLogoFacebook} from "react-icons/bi"
import {BsTwitter} from "react-icons/bs"
import {FaGlobe} from "react-icons/fa6"
import {BsInstagram} from "react-icons/bs"

import {TbArrowBigUpFilled} from "react-icons/tb"

const Footer = ({nav}) => {

  const date = new Date().getFullYear()

  return (
    <section className='text-white min-h-[65vh] w-full bg-footer-pattern bg-center bg-cover bg-no-repeat'>
        {/* Show the back-to-top button only if nav is true */}
        {nav && <a href="#home">
            <div className='bg-orange-500 w-14 h-14 fixed right-10 bottom-10 text-2xl flex justify-center items-center rounded-full cursor-pointer hover:bg-blue-900 hover:border-2 hover:border-orange-600'>
                <TbArrowBigUpFilled />
            </div>
        </a>}

      <div className='max-container grid grid-cols-4 gap-10 padding-hero-y px-20 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:px-10 max-sm:grid-cols-1'>
        {/* Iterate through footer data */}
        {footer.map((val) => (
          <div key={val.title}>
            <h1 className='text-2xl font-medium mb-8'>{val.title}</h1>
            {val.footerLinks.map((li) => (
              <ul key={li.link} className='mb-3'>
                <li className='text-xl tracking-wide text-gray-400 font font-thin hover:translate-x-1 duration-300'>
                  <a href="#home">{li.link}</a>
                </li>
              </ul>
            ))}
          </div>
        ))}

        {/* Footer logo and social links */}
        <div>
          <a href="#home" className='font-semibold mr-12 text-5xl flex items-center gap-1 text-white'>
            <img src={logo} alt="logo" width={120} height={120}/>

          </a>

          <p className='mt-5 font text-start'>
            الحرب التجارية الحالية التي تدور بين الولايات المتحدة والعديد من البلدان حول العالم، وخاصة مع.
          </p>

          <div className='flex items-center gap-6 cursor-pointer text-2xl mt-[35px] text-slate-200 max-sm:text-xl'>
            {/* Social media icons */}
            <BiLogoFacebook className='hover:-scale-x-110 duration-300'/>
            <BsTwitter className='hover:-scale-x-110 duration-300'/>
            <FaGlobe className='hover:-scale-x-110 duration-300'/>
            <BsInstagram className='hover:-scale-x-110 duration-300'/>
          </div>
        </div>
      </div>

   {/* Footer bottom text */}
<div className='border-t border-[#3e3e3e] max-container pt-10 pb-16 text-[#c4c4c4] text-center px-4'>
  <p className='font'>
  جميع الحقوق محفوظة  
    <span className='font-bold text-lg'> نادى الحوار للألعاب الرياضية </span>
    &copy; {date} 
    <br />
    تم تصميم هذا القالب بواسطة 
    <a className='font text-[red]' href="https://ask-ar.net">Ask-ar.net</a>
  </p>
</div>

    </section>
  )
}

export default Footer
