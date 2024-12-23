
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


const eventNews = [
  {
    id: 1,
    image: News1,
    date: 'أغسطس 2021',
    time: '10:00 م',
    title:
      'افتتاح المرحلة الجديدة لتوسعة نادي الحوار الرياضي بالمنصورة، والتي شملت تطوير المنشآت لتقديم خدمات أفضل للأعضاء.',
  },
  {
    id: 2,
    image: News2,
    date: '21 أبريل 2022',
    time: '11:38 م',
    title:
      'زيارة وزير الشباب والرياضة لنادي الحوار الرياضي بمدينة المنصورة، حيث أشاد بالمستوى المتميز للخدمات والمنشآت.',
  },
  {
    id: 3,
    image: News3,
    date: 'مايو 2022',
    time: '12:00 م',
    title:
      "نادي الحوار يستضيف نقطة ختام ماراثون 'قادرين' وينظم يومًا رياضيًا حافلًا بالأنشطة الترفيهية والرياضية.",
  },
  {
    id: 4,
    image: News4,
    date: 'يونيو 2023',
    time: '9:00 ص',
    title:
      'بطلات نادي الحوار لكرة اليد ناشئات مواليد 2012 يحققن فوزهن الثاني على نادي النصر في بطولة الجمهورية لكرة اليد.',
  },
  {
    id: 5,
    image: News5,
    date: 'أغسطس 2023',
    time: '9:00 ص',
        title:
    'أبطال نادي الحوار لكرة اليد مواليد 2010 ينتصرون بفارق كبير على نادي جزيرة الورد ضمن فعاليات بطولة منطقة الدقهلية.',
  },
  {
    id: 6,
    image: News6,
    date: 'ديسمبر 2022',
    time: '5:00 م',
    title:
      'فريق كرة القدم مواليد 2011 بنادي الحوار يتصدر مجموعته بدون هزيمة بعد الفوز على نبروه في دوري منطقة الدقهلية.',
  },
];
const sportsData = [
  {
    id: 7,
    name: 'الكاراتيه',
    description: 'تدريبات احترافية تناسب جميع الأعمار، مع فرص للمشاركة في بطولات دولية.',
    image: KarateImage,
    link: 'karate-detail.html',
  },
  {
    id: 8,
    name: 'السباحة',
    description: 'حمامات سباحة بمواصفات أولمبية مع برامج تدريبية احترافية للأطفال والكبار.',
    image: SwimmingImage,
    link: 'swimming-detail.html',
  },
  {
    id: 9,
    name: 'الجمباز',
    description: 'تعلم فنون الجمباز بأساليب تدريب عالمية تناسب كل الأعمار والمستويات.',
    image: GymnasticsImage,
    link: 'gymnastics-detail.html',
  },
  {
    id: 10,
    name: 'كرة اليد',
    description: 'انضم لفريقنا المحترف الذي يشارك في بطولات محلية ودولية.',
    image: HandballImage,
    link: 'handball-detail.html',
  },
  {
    id: 11,
    name: 'الجودو',
    description: 'تدريبات مكثفة تجمع بين القوة والتركيز مع نخبة المدربين.',
    image: JudoImage,
    link: 'judo-detail.html',
  },
  {
    id: 12,
    name: 'الكونغ فو',
    description: 'استكشف عالم الكونغ فو وتعلم تقنياته مع أفضل المدربين.',
    image: KungfuImage,
    link: 'kungfu-detail.html',
  },
  {
    id: 13,
    name: 'تنس الطاولة',
    description: 'منافسات ودورات تدريبية لجميع المستويات على طاولات حديثة.',
    image: TableTennisImage,
    link: 'tabletennis-detail.html',
  },
  {
    id: 14,
    name: 'التنس',
    description: 'ملاعب تنس عالمية مع برامج تدريبية مكثفة للمبتدئين والمحترفين.',
    image: TennisImage,
    link: 'tennis-detail.html',
  },
  {
    id: 15,
    name: 'الشطرنج',
    description: 'تعزيز التفكير الاستراتيجي من خلال دورات تدريبية ومشاركات في بطولات عالمية.',
    image: ChessImage,
    link: 'chess-detail.html',
  },
  {
    id: 16,
    name: 'كرة السلة',
    description: 'روح الفريق وتدريبات احترافية مع فرص للانضمام إلى البطولات المحلية والدولية.',
    image: BasketballImage,
    link: 'basketball-detail.html',
  },
  {
    id: 17,
    name: 'Tecnogym Fit',
    description: 'أحدث أجهزة التمارين الرياضية مع برامج تدريب شخصية تناسب جميع المستويات.',
    image: TecnogymFitImage,
    link: 'tecnogymfit-detail.html',
  },
  {
    id: 18,
    name: 'البادل Padel',
    description: 'استمتع بملاعب البادل الحديثة مع فرص للتعلم والمنافسة في جو ممتع.',
    image: PadelImage,
    link: 'padel-detail.html',
  },
];

const counters = [
  { id: 19, image: counter1, count: 25, label: 'الأعضاء' },
  { id: 20, image: counter2, count: 2500, label: 'قوائم الإنتظار' },
  { id: 21, image: counter3, count: 199, label: 'البطولات' },
  { id: 22, image: counter4, count: 250, label: 'الأنشطة الرياضية' },
];

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


// شعارات مع معرفات فريدة
const slogans = [
  { id: '31', text: 'نتطلع إلى بناء مجتمعًا ملهم يستطيع أن يحقق التغيير.' },
  {
    id: '32',
    text: ' نؤمن بأن التعاون هو جوهر النجاح، والأساس الذي نبني عليه رؤيتنا.',
  },
  { id: 33, text: 'رؤيتنا تتجاوز الحدود، لنحقق أثرًا لا يُنسى.' },
  { id: 34, text: 'لنكمل تاريخ من الإنجازات، ومستقبل من الطموحات' },
 
  { id: 35, text: 'ولأننا نسعى دائمًا لنرتقي إلى قمم التميز، يدًا بيد.' },
  { id: 36, text: 'كن جزءًا من الحدث' },
  { id: 37, text: 'بانضمامك ، نقترب معا من تحقيق تطلعاتك.' },
  {   id: 38, text: 'الشغف هنا ليس مجرد فكرة.' },
  { id: 39, text: 'بل هو الطريق نحو إنجازات ملموسة.' },
  { id: 40, text: 'لأن في كل إنجاز بداية لإنجاز أعظم.' },
];

export { eventNews, sportsData, trainers, counters, slogans };