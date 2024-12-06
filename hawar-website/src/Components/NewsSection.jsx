import React from 'react';
import newsImg1 from '../assets/images/news-img1.png';
import newsImg2 from '../assets/images/news-img2.png';
import newsImg3 from '../assets/images/news-img3.png';

const NewsSection = () => {
  return (
    <div className="news-outer py-16 bg-gray-100">
      <div className="container mx-auto">
        <div className="head text-center mb-8">
          <h3 className="text-3xl font-bold">LATEST NEWS</h3>
        </div>
        <div className="news-list">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* News Item 1 */}
            <div className="news-box bg-white p-6 rounded-lg shadow-md relative">
              <figure>
                <img src={newsImg1} alt="News 1" className="w-full h-auto rounded-lg"/>
                <div className="date-box absolute bottom-0 right-4 bg-orange-500 text-white py-2 px-4 rounded-md">
                  <span className="text-lg">JAN</span>
                  <strong className="text-2xl">20</strong>
                </div>
              </figure>
              <h4 className="text-xl font-semibold mt-4">
                <a href="news-detail.html" className="text-gray-800 hover:text-orange-500">Lorem ipsum dolor sit amet</a>
              </h4>
              <p className="mt-2 text-gray-600">
                Aliquam eu malesuada risus. Vivamus sagittis enim tempor eros consectetur, at ullamcorper neque maximus. 
                <a href="news-detail.html" className="text-blue-500 hover:text-blue-600">Read More...</a>
              </p>
            </div>

            {/* News Item 2 */}
            <div className="news-box bg-white p-6 rounded-lg shadow-md relative">
              <figure>
                <img src={newsImg2} alt="News 2" className="w-full h-auto rounded-lg"/>
                <div className="date-box absolute bottom-0 right-4 bg-orange-500 text-white py-2 px-4 rounded-md">
                  <span className="text-lg">JAN</span>
                  <strong className="text-2xl">20</strong>
                </div>
              </figure>
              <h4 className="text-xl font-semibold mt-4">
                <a href="news-detail.html" className="text-gray-800 hover:text-orange-500">Pellentesque pellentesque</a>
              </h4>
              <p className="mt-2 text-gray-600">
                Aliquam eu malesuada risus. Vivamus sagittis enim tempor eros consectetur, at ullamcorper neque maximus. 
                <a href="news-detail.html" className="text-blue-500 hover:text-blue-600">Read More...</a>
              </p>
            </div>

            {/* News Item 3 */}
            <div className="news-box bg-white p-6 rounded-lg shadow-md relative">
              <figure>
                <img src={newsImg3} alt="News 3" className="w-full h-auto rounded-lg"/>
                <div className="date-box absolute bottom-0 right-4 bg-orange-500 text-white py-2 px-4 rounded-md">
                  <span className="text-lg">JAN</span>
                  <strong className="text-2xl">20</strong>
                </div>
              </figure>
              <h4 className="text-xl font-semibold mt-4">
                <a href="news-detail.html" className="text-gray-800 hover:text-orange-500">Curabitur et scelerisque dui</a>
              </h4>
              <p className="mt-2 text-gray-600">
                Aliquam eu malesuada risus. Vivamus sagittis enim tempor eros consectetur, at ullamcorper neque maximus. 
                <a href="news-detail.html" className="text-blue-500 hover:text-blue-600">Read More...</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
