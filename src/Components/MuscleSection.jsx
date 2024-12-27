import Gym7 from '../assets/gym/gym-7.png';
import CounterBg from '../assets/images/building_bg _blue.png';

const MuscleSection = () => {
  return (
    <div
      className="relative bg-gradient-to-b from-hawar-blue-darker to-hawar-blue bg-cover bg-center text-white py-16 px-4 lg:px-12 overflow-hidden"
      style={{ backgroundImage: `url(${CounterBg})` }}
      id="muscle"
    >
      <div className="absolute inset-0 bg-hawar-blue-dark bg-opacity-40"></div>

      <div className="container mx-auto relative z-10">
        <div className="border-t-4 border-hawar-orange mb-12"></div>

        <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
          {}
          <div className="flex-1 text-center lg:text-right space-y-6">
            <h3
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-hawar-orange leading-snug"
              data-aos="fade-right"
            >
              تغيير حياتك يبدأ هنا
            </h3>
            <p
              className="text-base sm:text-lg lg:text-2xl leading-relaxed text-white"
              data-aos="fade-up"
            >
              انضم إلى فريقنا المتخصص وابدأ رحلتك نحو صحة أفضل وحياة أكثر نشاطًا
              باستخدام أحدث معدات{' '}
              <span className="text-hawar-orange font-semibold">Tecnogym</span>{' '}
              العالمية.
            </p>
            <a
              href="/contact-us"
              className="inline-block bg-hawar-orange text-white font-bold text-base sm:text-lg lg:text-xl py-3 px-8 rounded-full shadow-lg transition-transform duration-300 transform hover:-translate-y-1 hover:bg-white hover:text-hawar-orange border-2 border-transparent hover:border-hawar-orange"
              data-aos="fade-up"
            >
              اشترك الآن
            </a>
          </div>

          {}
          <div
            className="flex-1 relative shadow-led-orange rounded-lg overflow-hidden group"
            data-aos="fade-left"
          >
            <figure className="relative w-full aspect-w-16 aspect-h-9 lg:aspect-h-10">
              <img
                src={Gym7}
                alt="Muscle Building"
                className="
                  w-full 
                  h-full 
                  object-cover 
                  rounded-card
                  transition-transform 
                  duration-500 
                  group-hover:scale-105
                "
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
            </figure>
          </div>
        </div>

        <div className="border-b-4 border-hawar-orange mt-12"></div>
      </div>
    </div>
  );
};

export default MuscleSection;
