import { useState } from 'react';
import gallery1 from '../assets/images/gallery1.png';
import gallery2 from '../assets/images/gallery2.png';
import gallery3 from '../assets/images/gallery3.png';
import gallery4 from '../assets/images/gallery4.png';
import gallery5 from '../assets/images/gallery5.png';
import gallery6 from '../assets/images/gallery6.png';
import gallery7 from '../assets/images/gallery7.png';
import gallery8 from '../assets/images/gallery8.png';
import gallery9 from '../assets/images/gallery9.png';
import gallery10 from '../assets/images/gallery10.png';
import gallery11 from '../assets/images/gallery11.png';
import gallery12 from '../assets/images/gallery12.png';
import { FaSearchPlus } from 'react-icons/fa';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('all');

  const trainers = [
    { image: gallery1, name: 'صورة 1', category: 'yoga' },
    { image: gallery2, name: 'صورة 2', category: 'running' },
    { image: gallery3, name: 'صورة 3', category: 'gym' },
    { image: gallery4, name: 'صورة 4', category: 'fitness' },
    { image: gallery5, name: 'صورة 5', category: 'yoga' },
    { image: gallery6, name: 'صورة 6', category: 'gym' },
    { image: gallery7, name: 'صورة 7', category: 'running' },
    { image: gallery8, name: 'صورة 8', category: 'fitness' },
    { image: gallery9, name: 'صورة 9', category: 'gym' },
    { image: gallery10, name: 'صورة 10', category: 'running' },
    { image: gallery11, name: 'صورة 11', category: 'gym' },
    { image: gallery12, name: 'صورة 12', category: 'fitness' },
  ];

  const categories = [
    { name: 'الكل', filter: 'all' },
    { name: 'يوغا', filter: 'yoga' },
    { name: 'جري', filter: 'running' },
    { name: 'نادي رياضي', filter: 'gym' },
    { name: 'لياقة', filter: 'fitness' },
  ];

  const filteredTrainers =
    activeTab === 'all'
      ? trainers
      : trainers.filter((trainer) => trainer.category === activeTab);

  return (
    <div
      className="gallery-outer py-20 bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/assets/images/trainers_bg.png')" }}
    >
      <div className="container mx-auto px-4">
        <div className="head border-b border-gray-300 mb-8 text-center">
          <h3 className="text-3xl font-semibold text-white">معرضنا</h3>
        </div>

        <ul className="tabs flex justify-center mb-8 space-x-4">
          {categories.map((category, index) => (
            <li
              key={index}
              className={`cursor-pointer px-4 py-2 rounded ${
                activeTab === category.filter
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-500 text-white hover:bg-orange-500'
              } transition duration-300`}
              onClick={() => setActiveTab(category.filter)}
            >
              {category.name}
            </li>
          ))}
        </ul>

        <div className="gallery-list">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredTrainers.map((trainer, index) => (
              <div key={index} className={`element-item ${trainer.category}`}>
                <div className="gallery-box relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-64 object-cover transition-transform duration-300 transform hover:scale-110"
                  />
                  <a
                    href={trainer.image}
                    className="gallery-overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                  >
                    <FaSearchPlus className="h-10 w-10 text-white" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
