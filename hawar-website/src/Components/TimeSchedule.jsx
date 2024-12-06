import React, { useState } from 'react'

const TimeSchedule = () => {

  const [active, setActive] = useState("1");

  return (
    <section id='schedule' className='w-full'>
      <div className='max-container padding-hero-y padding-x'>
        <p className='text-[#f04e3c] relative before:absolute before:w-20 before:h-1 before:bg-[#f04e3c] before:top-[50%] before:left-0 pl-24 text-2xl before:translate-y-[-50%] text-center w-fit m-auto max-sm:before:w-16 max-sm:pl-20'>جدول مواعيدنا</p>

        <div className='max-w-[40%] m-auto text-6xl font-semibold leading-[70px] mt-5 mb-20 text-center max-lg:text-5xl max-lg:leading-[50px] max-md:max-md:max-w-[100%] max-sm:text-3xl'>
          <h1>اختر الوقت المثالي لك الآن</h1>
        </div>

        <div className='grid grid-cols-7 max-w-[1130px] m-auto gap-2 max-lg:grid-cols-4 max-sm:grid-cols-2'>
          <button onClick={() => setActive("1")} className={`${active === "1" ? "bg-[red] text-white" : undefined} py-4 px-4 text-2xl font-semibold max-lg:py-3 max-lg:px-2 max-sm:text-lg`}>الأحد</button>
          <button onClick={() => setActive("2")} className={`${active === "2" ? "bg-[red] text-white" : undefined} py-4 px-4 text-2xl font-semibold max-lg:py-3 max-lg:px-2 max-sm:text-lg`}>الإثنين</button>
          <button onClick={() => setActive("3")} className={`${active === "3" ? "bg-[red] text-white" : undefined} py-4 px-4 text-2xl font-semibold max-lg:py-3 max-lg:px-2 max-sm:text-lg`}>الثلاثاء</button>
          <button onClick={() => setActive("4")} className={`${active === "4" ? "bg-[red] text-white" : undefined} py-4 px-4 text-2xl font-semibold max-lg:py-3 max-lg:px-2 max-sm:text-lg`}>الأربعاء</button>
          <button onClick={() => setActive("5")} className={`${active === "5" ? "bg-[red] text-white" : undefined} py-4 px-4 text-2xl font-semibold max-lg:py-3 max-lg:px-2 max-sm:text-lg`}>الخميس</button>
          <button onClick={() => setActive("6")} className={`${active === "6" ? "bg-[red] text-white" : undefined} py-4 px-4 text-2xl font-semibold max-lg:py-3 max-lg:px-2 max-sm:text-lg`}>الجمعة</button>
          <button onClick={() => setActive("7")} className={`${active === "7" ? "bg-[red] text-white" : undefined} py-4 px-4 text-2xl font-semibold max-lg:py-3 max-lg:px-2 max-sm:text-lg`}>السبت</button>
        </div>

        <div className='grid grid-cols-5 gap-4 w-[80%] mt-10 max-xl:w-[100%] max-lg:grid-cols-2 max-sm:grid-cols-1 m-auto duration-300'>
          <div className={` ${active === "1" ? "bg-[red]" : undefined} group hover:bg-[red] px-6 py-10 text-center h-[250px] max-lg:h-[270px] max-sm:h-[250px]`}>
            <p className={` ${active === "1" ?"bg-white text-black" : "text-white"} text-lg bg-black group-hover:bg-white group-hover:text-black text-center max-w-[80%] m-auto py-1 mt-4 max-lg:max-w-[35%]`}>6 صباحًا - 8 صباحًا</p>
            <h1 className={`${active === "1" ? "text-white" : undefined} text-black mt-5 group-hover:text-white text-3xl`}>كيك بوكسينغ</h1>
            <p className={`${active === "1" ? "text-white" : undefined} text-black group-hover:text-white text-lg`}>بـ <span className={`${active === "1" ? "text-white" : undefined} text-slate-500 group-hover:text-white`}>جوس باتلر</span></p>
          </div>

          <div className={` ${active === "2" ? "bg-[red]" : undefined} group hover:bg-[red] px-6 py-10 text-center h-[250px] max-lg:h-[270px] max-sm:h-[250px]`}>
            <p className={` ${active === "2" ? "bg-white text-black" : "text-white"} text-lg bg-black group-hover:bg-white group-hover:text-black text-center max-w-[80%] m-auto py-1 mt-4 max-lg:max-w-[35%]`}>6 صباحًا - 8 صباحًا</p>
            <h1 className={`${active === "2" ? "text-white" : undefined} text-black mt-5 group-hover:text-white text-3xl`}>كارديو</h1>
            <p className={`${active === "2" ? "text-white" : undefined} text-black group-hover:text-white text-lg`}>بـ <span className={`${active === "2" ? "text-white" : undefined} text-slate-500 group-hover:text-white`}>تيجاس باكري</span></p>
          </div>

          <div className={` ${active === "3" ? "bg-[red]" : undefined} group hover:bg-[red] px-6 py-10 text-center h-[250px] max-lg:h-[270px] max-sm:h-[250px]`}>
            <p className={` ${active === "3" ? "bg-white text-black" : "text-white"} text-lg bg-black group-hover:bg-white group-hover:text-black text-center max-w-[80%] m-auto py-1 mt-4 max-lg:max-w-[35%]`}>6 صباحًا - 8 صباحًا</p>
            <h1 className={`${active === "3" ? "text-white" : undefined} text-black mt-5 group-hover:text-white text-3xl`}>صدر و ترايسبس</h1>
            <p className={`${active === "3" ? "text-white" : undefined} text-black group-hover:text-white text-lg`}>بـ <span className={`${active === "3" ? "text-white" : undefined} text-slate-500 group-hover:text-white`}>جورو مان</span></p>
          </div>

          <div className={` ${active === "4" ? "bg-[red]" : undefined} group hover:bg-[red] px-6 py-10 text-center h-[250px] max-lg:h-[270px] max-sm:h-[250px]`}>
            <p className={` ${active === "4" ? "bg-white text-black" : "text-white"} text-lg bg-black group-hover:bg-white group-hover:text-black text-center max-w-[80%] m-auto py-1 mt-4 max-lg:max-w-[35%]`}>6 صباحًا - 8 صباحًا</p>
            <h1 className={`${active === "4" ? "text-white" : undefined} text-black mt-5 group-hover:text-white text-3xl`}>أكتاف و أرجل</h1>
            <p className={`${active === "4" ? "text-white" : undefined } text-black group-hover:text-white text-lg`}>بـ <span className={`${active === "4" ? "text-white" : undefined} text-slate-500 group-hover:text-white`}>نيكولاس فان دير</span></p>
          </div>

          <div className={` ${active === "5" ? "bg-[red]" : undefined} group hover:bg-[red] px-6 py-10 text-center h-[250px] max-lg:h-[270px] max-sm:h-[250px]`}>
            <p className={` ${active === "5" ? "bg-white text-black" : "text-white"} text-lg bg-black group-hover:bg-white group-hover:text-black text-center max-w-[80%] m-auto py-1 mt-4 max-lg:max-w-[35%]`}>6 صباحًا - 8 صباحًا</p>
            <h1 className={`${active === "5" ? "text-white" : undefined} text-black mt-5 group-hover:text-white text-3xl`}>ترايسبس و بطن</h1>
            <p className={`${active === "5" ? "text-white" : undefined} text-black group-hover:text-white text-lg`}>بـ <span className={`${active === "5" ? "text-white" : undefined} text-slate-500 group-hover:text-white`}>كاميرون</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TimeSchedule;
