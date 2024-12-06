import React from 'react';
import Build1 from '../assets/images/build1.png'; // Update with correct image path
import Build2 from '../assets/images/build2.png';
import Build3 from '../assets/images/build3.png';
import BuildingBg from '../assets/images/building_bg.png'; // Update with the correct path

const BuildingOuter = () => {
  return (
    <div
      className="building-outer py-12 bg-cover bg-center"
      style={{ backgroundImage: `url(${BuildingBg})` }}
    >
      <div className="container mx-auto">
        <div className="building-list relative -mt-36">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Building Box 1 */}
            <div className="building-box bg-white p-10 text-center">
              <figure className="mb-4">
                <img src={Build1} alt="Body Building" className="w-1/3 mx-auto" />
              </figure>
              <h4 className="text-xl font-bold mb-4">BODY BUILDING</h4>
              <p className="mb-4">Lorem ipsum dolor sit amet, ei veritus consetetur repudiandae eam, duo ne homero nostro moderatius.</p>
              <a href="classes-detail.html" className="inline-flex items-center justify-center px-6 py-3 border-2 border-transparent text-[#fb9221] font-medium rounded-md transition duration-300 hover:bg-[#fb9221] hover:text-white">
                View Detail
              </a>
            </div>

            {/* Building Box 2 */}
            <div className="building-box bg-white p-10 text-center">
              <figure className="mb-4">
                <img src={Build2} alt="Fitness & Boxing" className="w-1/3 mx-auto" />
              </figure>
              <h4 className="text-xl font-bold mb-4">FITNESS & BOXING</h4>
              <p className="mb-4">Lorem ipsum dolor sit amet, ei veritus consetetur repudiandae eam, duo ne homero nostro moderatius.</p>
              <a href="classes-detail.html" className="inline-flex items-center justify-center px-6 py-3 border-2 border-transparent text-[#fb9221] font-medium rounded-md transition duration-300 hover:bg-[#fb9221] hover:text-white">
                View Detail
              </a>
            </div>

            {/* Building Box 3 */}
            <div className="building-box bg-white p-10 text-center">
              <figure className="mb-4">
                <img src={Build3} alt="Yoga" className="w-1/3 mx-auto" />
              </figure>
              <h4 className="text-xl font-bold mb-4">YOGA</h4>
              <p className="mb-4">Lorem ipsum dolor sit amet, ei veritus consetetur repudiandae eam, duo ne homero nostro moderatius.</p>
              <a href="classes-detail.html" className="inline-flex items-center justify-center px-6 py-3 border-2 border-transparent text-[#fb9221] font-medium rounded-md transition duration-300 hover:bg-[#fb9221] hover:text-white">
                View Detail
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingOuter;
