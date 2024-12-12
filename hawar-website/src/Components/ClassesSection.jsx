import { useState } from 'react';

const ClassesSection = () => {
  const [activeTab, setActiveTab] = useState('mon');

  const tabs = [
    { id: 'mon', label: 'الاثنين' },
    { id: 'tus', label: 'الثلاثاء' },
    { id: 'wed', label: 'الأربعاء' },
    { id: 'thrus', label: 'الخميس' },
    { id: 'friday', label: 'الجمعة' },
    { id: 'sat', label: 'السبت' },
    { id: 'sun', label: 'الأحد' },
  ];

  const scheduleData = {
    mon: [
      {
        class: 'يوغا',
        time: '10:00 صباحًا - 12:00 ظهرًا',
        trainer: 'روبرت سميث',
      },
      { class: 'جري', time: '09:00 صباحًا - 12:00 ظهرًا', trainer: 'لينا جون' },
      {
        class: 'نادي رياضي',
        time: '10:00 صباحًا - 12:00 ظهرًا',
        trainer: 'ميشيل روز',
      },
      {
        class: 'تمارين حرة',
        time: '09:00 صباحًا - 12:00 ظهرًا',
        trainer: 'روبن ديسوزا',
      },
      {
        class: 'يوغا',
        time: '10:00 صباحًا - 12:00 ظهرًا',
        trainer: 'مارك جينسيد',
      },
      {
        class: 'رفع الأثقال',
        time: '09:00 صباحًا - 12:00 ظهرًا',
        trainer: 'ميشال خورب',
      },
    ],
    tus: [
      {
        class: 'يوغا',
        time: '10:00 صباحًا - 12:00 ظهرًا',
        trainer: 'روبرت سميث',
      },
      { class: 'جري', time: '09:00 صباحًا - 12:00 ظهرًا', trainer: 'لينا جون' },
      {
        class: 'نادي رياضي',
        time: '10:00 صباحًا - 12:00 ظهرًا',
        trainer: 'ميشيل روز',
      },
    ],
    wed: [
      {
        class: 'رفع الأثقال',
        time: '09:00 صباحًا - 12:00 ظهرًا',
        trainer: 'ميشال خورب',
      },
      {
        class: 'يوغا',
        time: '10:00 صباحًا - 12:00 ظهرًا',
        trainer: 'روبرت سميث',
      },
      { class: 'جري', time: '09:00 صباحًا - 12:00 ظهرًا', trainer: 'لينا جون' },
      {
        class: 'نادي رياضي',
        time: '10:00 صباحًا - 12:00 ظهرًا',
        trainer: 'ميشيل روز',
      },
    ],
    thrus: [
      { class: 'جري', time: '09:00 صباحًا - 12:00 ظهرًا', trainer: 'لينا جون' },
      {
        class: 'نادي رياضي',
        time: '10:00 صباحًا - 12:00 ظهرًا',
        trainer: 'ميشيل روز',
      },
    ],
    friday: [
      {
        class: 'يوغا',
        time: '10:00 صباحًا - 12:00 ظهرًا',
        trainer: 'روبرت سميث',
      },
      { class: 'جري', time: '09:00 صباحًا - 12:00 ظهرًا', trainer: 'لينا جون' },
      {
        class: 'يوغا',
        time: '10:00 صباحًا - 12:00 ظهرًا',
        trainer: 'مارك جينسيد',
      },
      {
        class: 'رفع الأثقال',
        time: '09:00 صباحًا - 12:00 ظهرًا',
        trainer: 'ميشال خورب',
      },
    ],
    sat: [
      { class: 'جري', time: '09:00 صباحًا - 12:00 ظهرًا', trainer: 'لينا جون' },
      {
        class: 'يوغا',
        time: '10:00 صباحًا - 12:00 ظهرًا',
        trainer: 'مارك جينسيد',
      },
      {
        class: 'رفع الأثقال',
        time: '09:00 صباحًا - 12:00 ظهرًا',
        trainer: 'ميشال خورب',
      },
    ],
    sun: [
      {
        class: 'يوغا',
        time: '10:00 صباحًا - 12:00 ظهرًا',
        trainer: 'روبرت سميث',
      },
      { class: 'جري', time: '09:00 صباحًا - 12:00 ظهرًا', trainer: 'لينا جون' },
      {
        class: 'رفع الأثقال',
        time: '09:00 صباحًا - 12:00 ظهرًا',
        trainer: 'ميشال خورب',
      },
    ],
  };

  return (
    <div className="classSch-outer py-16">
      <div className="container mx-auto px-4">
        <div className="head mb-8">
          <h3 className="text-3xl font-semibold text-center">CLASS SCHEDULE</h3>
        </div>

        <ul className="tabs flex flex-wrap justify-center mb-6">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={`mx-2 mb-2 ${activeTab === tab.id ? 'border-b-2 border-hawar-orange' : ''}`}
            >
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`text-base ${
                  activeTab === tab.id
                    ? 'text-hawar-orange font-bold'
                    : 'text-gray-700 hover:text-hawar-orange'
                }`}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="table-outer">
          {tabs.map((tab) => (
            <table
              key={tab.id}
              className={`table tab_container w-full text-center ${
                activeTab === tab.id ? 'block' : 'hidden'
              }`}
            >
              <tbody>
                {scheduleData[tab.id].map((schedule, index) => (
                  <tr
                    key={index}
                    className={`border-b ${index % 2 === 1 ? 'bg-gray-200' : ''}`}
                  >
                    <td className="py-4">{schedule.class}</td>
                    <td className="py-4">{schedule.time}</td>
                    <td className="py-4">{schedule.trainer}</td>
                    <td className="py-4">
                      <a
                        href="/contact-us.html"
                        className="btn bg-hawar-orange text-white py-2 px-4 rounded hover:bg-orange-600 transition"
                      >
                        JOIN NOW
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassesSection;
