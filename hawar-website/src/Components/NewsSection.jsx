// src/Components/NewsSection.jsx
import React from 'react';
import newsImg1 from '../assets/images/news-img1.png';
import newsImg2 from '../assets/images/news-img2.png';
import newsImg3 from '../assets/images/news-img3.png';

const NewsSection = () => {
  return (
    <div className="news-outer py-16 bg-gray-100">
      <div className="container mx-auto">
        <div className="head text-center mb-8">
          <h3 className="text-3xl font-bold">أحدث الأخبار</h3>
        </div>
        <div className="news-list">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* News Item 1 */}
            <div className="news-box bg-white p-6 rounded-lg shadow-md relative">
              <figure>
                <img src={newsImg1} alt="حدث 1" className="w-full h-auto rounded-lg"/>
                <div className="date-box absolute bottom-0 right-4 bg-hawar-orange text-white py-2 px-4 rounded-md">
                  <span className="text-lg">يناير</span>
                  <strong className="text-2xl">20</strong>
                </div>
              </figure>
              <h4 className="text-xl font-semibold mt-4">
                <a href="news-detail.html" className="text-gray-800 hover:text-hawar-orange">افتتاح صالة الألعاب الجديدة</a>
              </h4>
              <p className="mt-2 text-gray-600">
                يسر نادي الرياض أن يعلن عن افتتاح صالة الألعاب الرياضية الحديثة التي تم تجهيزها بأحدث المعدات الرياضية.
                <a href="news-detail.html" className="text-hawar-blue-dark hover:text-hawar-blue">المزيد...</a>
              </p>
            </div>

            {/* News Item 2 */}
            <div className="news-box bg-white p-6 rounded-lg shadow-md relative">
              <figure>
                <img src={newsImg2} alt="حدث 2" className="w-full h-auto rounded-lg"/>
                <div className="date-box absolute bottom-0 right-4 bg-hawar-orange text-white py-2 px-4 rounded-md">
                  <span className="text-lg">يناير</span>
                  <strong className="text-2xl">20</strong>
                </div>
              </figure>
              <h4 className="text-xl font-semibold mt-4">
                <a href="news-detail.html" className="text-gray-800 hover:text-hawar-orange">بطولة الربيع السنوية</a>
              </h4>
              <p className="mt-2 text-gray-600">
                انطلاق بطولة الربيع السنوية في نادي الرياض، حيث يتنافس الأعضاء على أفضل أداء في مختلف الألعاب الرياضية.
                <a href="news-detail.html" className="text-hawar-blue-dark hover:text-hawar-blue">المزيد...</a>
              </p>
            </div>

            {/* News Item 3 */}
            <div className="news-box bg-white p-6 rounded-lg shadow-md relative">
              <figure>
                <img src={newsImg3} alt="حدث 3" className="w-full h-auto rounded-lg"/>
                <div className="date-box absolute bottom-0 right-4 bg-hawar-orange text-white py-2 px-4 rounded-md">
                  <span className="text-lg">يناير</span>
                  <strong className="text-2xl">20</strong>
                </div>
              </figure>
              <h4 className="text-xl font-semibold mt-4">
                <a href="news-detail.html" className="text-gray-800 hover:text-hawar-orange">برنامج التدريب الصيفي</a>
              </h4>
              <p className="mt-2 text-gray-600">
                يطلق نادي الرياض برنامج التدريب الصيفي المخصص للأطفال والشباب لتعزيز مهاراتهم الرياضية وتنمية لياقتهم البدنية.
                <a href="news-detail.html" className="text-hawar-blue-dark hover:text-hawar-blue">المزيد...</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
