import React from 'react'
import img from "../assets/heros/hero-5.png"

const About = () => {
  return (
    <section id='about' className='w-screen min-h-screen'>
      <div className='max-container flex justify-center items-center gap-24 padding-hero-y padding-x h-full max-xl:gap-7 max-lg:flex-col'>
        <div className='flex-1 w-full'>
          <div className='bg-[orangered] flex justify-start pt-10 pr-10 max-sm:pt-5 max-sm:pr-5'>
            <img src={img} alt="aboutImg" className='object-cover object-center max-lg:w-full' />
          </div>
        </div>

        <div className='flex-1'>
          <p className='text-[#f04e3c] relative before:absolute before:w-20 before:h-1 before:bg-[#f04e3c] before:top-[50%] before:right-0 pr-24 text-2xl before:translate-y-[-50%]'>
            عن نادي الحوار للألعاب الرياضية
          </p>

          <div className='my-7 text-5xl leading-[60px] font-semibold text-black max-xl:text-4xl max-xl:my-4 max-lg:my-7 max-lg:text-5xl max-lg:leading-[60px] max-sm:text-3xl'>
            <h1>حلول بناء الجسم الصحي بطريقة آمنة توفر وقتنا الثمين!</h1>
          </div>

          <p className='font text-lg text-slate-800'>
            يقدم نادي الحوار خدمات مرنة ومريحة مع تصاميم متعددة الاستخدامات. يمكنك اختيار التصاميم والعناصر المفضلة لديك مع إمكانيات تخصيص غير محدودة. تم تصميم كل شيء بدقة ليتناسب مع احتياجاتك.
          </p>

          <p className='font text-lg text-slate-500 mt-5 mb-14 max-xl:mb-8'>
            يقدم نادي الحوار حلولاً مرنة ومريحة تضمن أفضل تجربة للمشتركين. يمكنك اختيار كل ما يناسبك من خدمات وتصاميم.
          </p>

          <button className='py-4 px-9 text-xl group relative text-white bg-[orangered] rounded-sm'>
            <div className='buttonDiv'></div>
            <span className='buttonSpan'>انضم كعضو</span>
          </button>

        </div>
      </div>
    </section>
  )
}

export default About
