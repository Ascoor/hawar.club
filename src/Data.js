import News1 from './assets/images/News6.jpg';
import News2 from './assets/images/News5.jpg';
import News3 from './assets/images/News4.jpg';
import News4 from './assets/images/News3.jpg';
import News5 from './assets/images/News2.jpg';
import News6 from './assets/images/News1.png';
import KarateImage from './assets/images/sports/karatia.png';
import SwimmingImage from './assets/images/sports/sports-swiming-1.png';
import GymnasticsImage from './assets/images/sports/gymnast.png';
import HandballImage from './assets/images/sports/handball.png';
import JudoImage from './assets/images/sports/judo.png';
import BasketballImage from './assets/images/sports/basketball.png';
import KungfuImage from './assets/images/sports/kungfu.png';
import TableTennisImage from './assets/images/sports/ping.png';
import ChessImage from './assets/images/sports/chess.png';
import TennisImage from './assets/images/sports/teneise.png';
import TecnogymFitImage from './assets/images/sports/gym.png';
import PadelImage from './assets/images/sports/padel.png';
import counter1 from './assets/images/counters/members-counter.png';
import counter2 from './assets/images/counters/waitinglist-counter.png';
import counter3 from './assets/images/counter3.png';
import counter4 from './assets/images/counters/sports-counter.png';
import trainer1 from './assets/gym/trainer-1.jpg';
import trainer2 from './assets/gym/trainer-2.jpg';
import trainer3 from './assets/gym/trainer-3.jpg';
import trainer4 from './assets/gym/trainer-4.jpg';
import trainer5 from './assets/gym/trainer-5.jpg';
import trainer6 from './assets/gym/trainer-6.jpg';
import trainer7 from './assets/gym/gym-team.jpg';
import trainer8 from './assets/gym/gym-team2.jpg';

// الأخبار والفعاليات
const eventNews = [
  {
    id: 1,
    image: News1,
    date: 'أغسطس 2021',
    time: '10:00 م',
    title:
      'افتتاح المرحلة الجديدة لتوسعة نادي الحوار، مع تحسين المرافق وتوفير خدمات رياضية واجتماعية مبتكرة.',
  },
  {
    id: 2,
    image: News2,
    date: '21 أبريل 2022',
    time: '11:38 م',
    title:
      'زيارة وزير الشباب والرياضة لنادي الحوار وإشادة بالمستوى المتقدم للخدمات المقدمة.',
  },
  {
    id: 3,
    image: News3,
    date: 'مايو 2022',
    time: '12:00 م',
    title:
      "نادي الحوار يستضيف ماراثون 'قادرين' ويقدم يومًا رياضيًا وترفيهيًا استثنائيًا.",
  },
  {
    id: 4,
    image: News4,
    date: 'يونيو 2023',
    time: '9:00 ص',
    title:
      'بطلات نادي الحوار لكرة اليد يحققن الفوز الثاني ببطولة الجمهورية، إنجاز يُضاف إلى سجل النجاحات.',
  },
  {
    id: 5,
    image: News5,
    date: 'أغسطس 2023',
    time: '9:00 ص',
    title:
      'فوز ساحق لفريق كرة اليد بنادي الحوار في بطولة منطقة الدقهلية يؤكد ريادته.',
  },
  {
    id: 6,
    image: News6,
    date: 'ديسمبر 2022',
    time: '5:00 م',
    title:
      'فريق كرة القدم بنادي الحوار يتصدر مجموعته في دوري منطقة الدقهلية بدون هزيمة.',
  },
];

// الأنشطة الرياضية
const sportsData = [
  {
    id: 7,
    name: 'الكاراتيه',
    description: 'تحدى نفسك مع تدريبات احترافية وفرص للمشاركة في بطولات دولية.',
    image: KarateImage,
    link: 'karate-detail.html',
  },
  {
    id: 8,
    name: 'السباحة',
    description: 'حمامات سباحة أولمبية وبرامج تدريبية شاملة لكل الأعمار.',
    image: SwimmingImage,
    link: 'swimming-detail.html',
  },
  {
    id: 9,
    name: 'الجمباز',
    description: 'استمتع بتدريبات احترافية تناسب كل المستويات والأعمار.',
    image: GymnasticsImage,
    link: 'gymnastics-detail.html',
  },
  {
    id: 10,
    name: 'كرة اليد',
    description: 'شارك في بطولات محلية ودولية مع فريقنا المتميز.',
    image: HandballImage,
    link: 'handball-detail.html',
  },
  {
    id: 11,
    name: 'الجودو',
    description: 'تعلم تقنيات الجودو مع أفضل المدربين وخوض تحديات مميزة.',
    image: JudoImage,
    link: 'judo-detail.html',
  },
  {
    id: 12,
    name: 'الكونغ فو',
    description: 'ارتقِ بلياقتك البدنية واكتشف تقنيات الكونغ فو المذهلة.',
    image: KungfuImage,
    link: 'kungfu-detail.html',
  },
  {
    id: 13,
    name: 'تنس الطاولة',
    description: 'انضم لدورات تدريبية ومنافسات مثيرة في تنس الطاولة.',
    image: TableTennisImage,
    link: 'tabletennis-detail.html',
  },
  {
    id: 14,
    name: 'التنس',
    description: 'تجربة فريدة في ملاعب تنس عالمية وبرامج تدريب متكاملة.',
    image: TennisImage,
    link: 'tennis-detail.html',
  },
  {
    id: 15,
    name: 'الشطرنج',
    description: 'طور مهاراتك الاستراتيجية وشارك في بطولات محلية وعالمية.',
    image: ChessImage,
    link: 'chess-detail.html',
  },
  {
    id: 16,
    name: 'كرة السلة',
    description: 'عش روح الفريق مع تدريبات احترافية ومنافسات مشوقة.',
    image: BasketballImage,
    link: 'basketball-detail.html',
  },
  {
    id: 17,
    name: 'Tecnogym Fit',
    description: 'أجهزة حديثة وتمارين شخصية تناسب أهدافك الرياضية.',
    image: TecnogymFitImage,
    link: 'tecnogymfit-detail.html',
  },
  {
    id: 18,
    name: 'البادل',
    description: 'ملاعب حديثة وتجربة ممتعة لرياضة البادل المتنامية.',
    image: PadelImage,
    link: 'padel-detail.html',
  },
];

// العدادات والإحصائيات
const counters = [
  { id: 19, image: counter1, count: 25, label: 'الأعضاء الجدد' },
  { id: 20, image: counter2, count: 2500, label: 'قوائم الانتظار' },
  { id: 21, image: counter3, count: 199, label: 'البطولات المحققة' },
  { id: 22, image: counter4, count: 250, label: 'الأنشطة الرياضية' },
];

// المدربون
const trainers = [
  { id: 23, image: trainer7, name: 'مدربو نادي الحوار - تكنوجيم' },
  { id: 24, image: trainer1, name: 'المدرب: أحمد رأفت' },
  { id: 25, image: trainer2, name: 'المدربة: نهى عادل' },
  { id: 26, image: trainer3, name: 'المدربة: نورهان عقل' },
  { id: 27, image: trainer4, name: 'المدرب : أحمد إبراهيم' },
  { id: 28, image: trainer5, name: 'المدربة: آية هلال' },
  { id: 29, image: trainer6, name: 'المدرب : شادي الزكي' },
  { id: 30, image: trainer8, name: ' مدربو نادي الحوار - تكنوجيم' },
];

const slogans = [
  { id: 31, text: 'نسعى لبناء مجتمعًا ملهم يستطيع أن يصنع التغيير.' },
   
  { id: 32, text: 'ولأننا نسعى دائمًا لنرتقي إلى قمم التميز، يدًا بيد.' },
  { id: 33, text: 'نؤمن بأن التعاون هو جوهر النجاح.', },
  { id: 34, text: 'رؤيتنا تتجاوز الحدود، لنحقق أثرًا لا يُنسى.' },
  { id: 35, text: 'لنكمل تاريخ من الإنجازات، ومستقبل من الطموحات' },
  { id: 36, text: 'الشغف هنا ليس مجرد فكرة.' },
  { id: 37, text: 'بل هو الطريق نحو إنجازات ملموسة.' },
  { id: 38, text: 'حيث يجتمع الفكر، فتبدأ قصص النجاح.' },
  { id: 39, text: 'كن جزءًا من الحدث.' },
  { id: 40, text: 'لأن في كل إنجاز بداية لإنجاز أعظم.' },
];

export { eventNews, sportsData, trainers, counters, slogans };
