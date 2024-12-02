import React from 'react'
import img from "../assets/img-11.jpg"

const Contact = () => {
  return (
    <section id='contact' className='w-full'>
      <div className='max-w-[1500px] m-auto grid grid-cols-2 items-center gap-10 py-0 max-xl:pt-[100px] max-lg:pt-[0px] max-lg:pb-[60px] max-md:pt-[0px] max-md:pb-[70px] max-lg:grid-cols-1 max-lg:gap-6 padding-x'>
        <div className='h-[80%] max-lg:max-w-[50%] max-md:max-w-[70%] max-sm:max-w-[100%] max-md:h-[100%]'>
          <img src={img} alt="ContactImg" className='object-cover w-full h-full'/>
        </div>

        <div className='px-5 max-lg:px-0'>
          <p className='w-fit text-[#f04e3c] relative before:absolute before:w-20 before:h-1 before:bg-[#f04e3c] before:top-[50%] before:left-0 pl-24 text-2xl before:translate-y-[-50%]'>
            نموذج الاتصال
          </p>

          <div className='text-5xl font-semibold leading-[70px] mt-5 mb-20 max-xl:leading-[50px] max-xl:mb-10 max-sm:text-3xl'>
            <h1>لا تتردد في الاتصال</h1>
            <h1>معنا!</h1>
          </div>

          <div className='grid grid-cols-2 gap-14 max-xl:gap-10 max-lg:gap-14 max-md:grid-cols-1 max-sm:w-[90%] max-sm:m-auto'>
            <input type="text" placeholder='الاسم' className='input'/>
            <input type="text" placeholder='رقم الهاتف' className='input'/>
            <select className='input text-slate-500 text-lg'>
              <option value="Boxing">ملاكمة</option>
              <option value="Cardio">كارديو</option>
              <option value="Chest">صدر</option>
              <option value="Shoulder">أكتاف</option>
              <option value="Triceps">ترايسبس</option>
            </select>

            <input type="email" placeholder='البريد الإلكتروني' className='input'/>
            <textarea placeholder='الرسالة' className='h-36 input resize-none col-span-2 max-md:col-span-1'></textarea>
          </div>

          <button className='mt-20 py-4 px-9 text-xl group relative text-white bg-[orangered] rounded-sm max-xl:mt-10'>
            <div className='buttonDiv'></div>
            <span className='buttonSpan'>إرسال الرسالة</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Contact