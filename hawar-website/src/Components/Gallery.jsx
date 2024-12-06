import React from 'react';

// استيراد الصور من مجلد الأصول
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

const Gallery = () => {
  const images = [
    { src: gallery1, category: "yoga" },
    { src: gallery2, category: "running" },
    { src: gallery3, category: "gym" },
    { src: gallery4, category: "fitness" },
    { src: gallery5, category: "yoga" },
    { src: gallery6, category: "gym" },
    { src: gallery7, category: "running" },
    { src: gallery8, category: "fitness" },
    { src: gallery9, category: "gym" },
    { src: gallery10, category: "running" },
    { src: gallery11, category: "gym" },
    { src: gallery12, category: "fitness" }
  ];

  return (
    <div className="gallery-outer py-12 bg-gray-100">
      <div className="container mx-auto">
        <div className="head mb-8 text-center">
          <h3 className="text-3xl font-semibold">Our Gallery</h3>
        </div>
        <ul className="tabs flex justify-center mb-6 space-x-4">
          <li className="active cursor-pointer">
            <span data-filter="*">All</span>
          </li>
          <li className="cursor-pointer">
            <span data-filter=".yoga">Yoga</span>
          </li>
          <li className="cursor-pointer">
            <span data-filter=".running">Running</span>
          </li>
          <li className="cursor-pointer">
            <span data-filter=".gym">Gym</span>
          </li>
          <li className="cursor-pointer">
            <span data-filter=".fitness">Fitness</span>
          </li>
        </ul>
        <div className="gallery-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div key={index} className={`element-item ${image.category}`}>
              <div className="gallery-box relative group">
                <figure>
                  <img
                    src={image.src}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                  <a href={image.src} className="gallery-overlay absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100">
                    <i className="fa fa-search-plus text-white text-2xl"></i>
                  </a>
                </figure>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
