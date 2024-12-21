import Gym7 from '../assets/gym/gym-7.png';
import CounterBg from '../assets/images/building_bg _blue.png';

const MuscleSection = () => {
  return (
    <>

    <div
      className=" bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${CounterBg})` }}
    >
        <div className="border-t-8 mb-8 border-orange-500"></div>

        <div className="flex flex-col-reverse lg:flex-row items-center max-w-[1200px] mx-auto">
        <div className="max-w-[700px] text-center lg:text-right lg:mr-8 space-y-6 lg:pl-6">
            <h3 className="text-3xl lg:text-5xl text-hawar-orange font-bold leading-snug">
              تغيير حياتك يبدأ هنا
            </h3>
            <p className="text-lg lg:text-2xl text-white leading-relaxed">
              انضم إلى فريقنا المتخصص وابدأ رحلتك نحو صحة أفضل وحياة أكثر نشاطًا
              باستخدام أحدث معدات
              <span className="text-hawar-orange"> Tecnogym </span> العالمية.
            </p>
            <a
              href="contact-us.html"
              className="inline-block bg-hawar-orange font-bold text-white text-lg py-3 px-8 rounded-full shadow-lg hover:bg-hawar-blue-dark hover:text-hawar-orange hover:border-orange-500 border-transparent border-2 transition-all duration-300 transform hover:-translate-y-1"
            >
              إشترك الأن
            </a>
          </div> 
          <figure className="w-full lg:w-[50%] h-[50vh] lg:h-auto overflow-hidden relative group mb-6 lg:mb-0">
            <img
              src={Gym7}
              alt="Muscle Building"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-lg"
              style={{
                background: 'linear-gradient(to top, #031023, transparent)', // اللون الأزرق الداكن المخصص (hawar-blue-darker)
                borderRadius: '50px', // حواف دائرية ناعمة
                boxShadow: '0 0 25px 10px rgba(0, 51, 102, 0.6)', // إضافة الظل مع اللون الأزرق الداكن
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30 group-hover:opacity-50 transition-opacity duration-500 rounded-lg"></div>
          </figure>

          {/* النص */}
       
        </div>

        <div className="border-b-8 mt-8 border-orange-500"></div>
      </div>
    </>
  );
};

export default MuscleSection;
