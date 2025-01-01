import News1 from './assets/images/news/News1.png';
import News2 from './assets/images/news/News2.jpg';
import News3 from './assets/images/news/News3.jpg';
import News4 from './assets/images/news/News4.jpg';
import News5 from './assets/images/news/News5.jpg';
import News6 from './assets/images/news/News6.jpg';
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
    date: 'الخميس 19 أغسطس 2021',
    time: '10:00 م',
    title:
      'دشن نادي الحوار للألعاب الرياضية، بمحافظة الدقهلية، مشروع التوسعة المرحلة الثانية، واستكمال المنشآت الرياضية والاجتماعية والاستثمارية، على مساحة 4 أفدنة. جاء ذلك خلال مؤتمر صحفي، بحضور إيهاب صفوت فودة، رئيس مجلس الإدارة، وأعضاء المجلس، وأحمد الشرقاوي، ووحيد فودة، نائبا المنصورة، وطارق عبد الهادي، وجمال عبد الظاهر، وثروت فتح، أعضاء مجلس الشيوخ، وجلال الغازي، رئيس مجلس إدارة ستاد المنصورة، ولفيف من القيادات ورجال الأعمال بالمحافظة. واستعرض فودة الخدمات التي تم تنفيذها خلال المرحلة الأولى، منها رفع كفاءة الصالة الاجتماعية، وإنشاء ملعبين، وتراس اجتماعي، ومنطقة للشباب، وصالة ألعاب إلكترونية، وصالة جيم، ووحدة إسعاف، وإحلال وتجديد مجمعات حمام السباحة. وأضاف أن المرحلة الجديدة تضم رياضات لا يوجد لها مثيل في الدلتا، مثل سباقات اليخوت، والرماية، والجمباز، والإسكواش. كما تتضمن إنشاء جراج تحت الأرض يخدم رواد النادي والمناطق المحيطة، وتم طرح العديد من الأعمال للاستثمار. وعبر فيديو كونفرانس، وجه الدكتور أشرف صبحي، وزير الشباب والرياضة، كلمة أكد خلالها دعمه لنادي الحوار لاستكمال منشآته الرياضية والاجتماعية. وأضاف أنه يشجع الأندية على الاستثمار الرياضي، بما يعود بالنفع على أعضاء الجمعيات العمومية، ويرفع من شأن الرياضة المصرية.',
  },

  {
    id: 2,
    image: News2,
    date: '21 أبريل 2022',
    time: '11:38 م',
    title:
      'تفقد الدكتور أشرف صبحي وزير الشباب والرياضة، اليوم الخميس، نادي الحوار الرياضي بمدينة المنصورة، في مستهل زيارته لمحافظة الدقهلية، برفقة الدكتور أيمن مختار محافظ الدقهلية، علاء الشربينى وكيل وزارة الشباب والرياضة بالدقهلية، وأعضاء الهيئة البرلمانية بالمحافظة، وكان في استقبالهم المحاسب ايهاب فودة رئيس مجلس ادارة نادي الحوار الرياضي.وأكد وزير الشباب والرياضة أن ملف تطوير مراكز الشباب والأندية الرياضية على مستوى الجمهورية، أحد أهم الملفات التي توليها الوزارة أهمية كبري من حيث الاهتمام بتطوير أدائها الإدارى، والبرامج والأنشطة المنفذة بها من جانب ، والحرص على تطوير بنيتها الإنشائية من جانب أخر بهدف إتاحة الفرصة بصورة كاملة أمام النشء والشباب لممارسة مختلف الأنشطة..',
  },
  {
    id: 3,
    image: News3,
    date: 'مايو 2022',
    time: '12:00 م',
    title:
      'نظم نادي الحوار للألعاب الرياضية بالمنصورة التابع لمديرية الشباب والرياضة بالدقهلية اليوم ماراثون للمشي تحت شعار  صحتك أولًا. وانطلق الماراثون من أمام مكتبة مصر العامة بالمنصورة بجوار مبنى ديوان عام المحافظة وصولًا إلى مقر النادي بمنطقة المشاية بالمنصورة بمشاركة المئات من أعضاء النادي من مختلف الأعمار. وأطلق إشارة البدء المحاسب إيهاب صفوت فودة رئيس مجلس الإدارة، والذي حرص على المشاركة هو وباقي أعضاء مجلس الإدارة وارتدى الجميع زيًا موحدًا وعليه أرقام لتحديد الفائزين في نهاية الماراثون، وذلك بمشاركة الدكتور أحمد بيومي عضو مجلس إدارة النادي وعدد من أعضاء مجلس الإدارة.',
  },
  {
    id: 4,
    image: News4,
    date: 'يونيو 2023',
    time: '9:00 ص',
    title:
      'بطلات نادي الحوار  لكرة اليد 🤾🤾مواليد (٢٠١٠) انسات يحققوا فوزا كبيرا على ستاد المنصوره بنتيجة ( ١٣/١٧ ) ضمن فعاليات بطولة الجمهورية لليد.',
  },
  {
    id: 5,
    image: News6,
    date: 'أغسطس 2023',
    time: '9:00 ص',
    title:
      'مجلس إدارة النادي برئاسة المحاسب /إيهاب صفوت فوده يستقبل أبطال كرة اليد مواليد ٢٠٠٤ الحاصلين علي المركز الأول في بطولة النصر السابعه ببورسعيد وقدم مجلس إدارة النادي التهنئه للاعبين والجهاز الفني والإداري.',
  },
  {
    id: 6,
    image: News5,
    date: 'ديسمبر 2022',
    time: '5:00 م',
    title:
      'ابطال نادي الحوار لكرة القدم مواليد ( ٢٠٠٥ ) يضيفوا انتصار جديد لقطاع كرة القدم بفوزهم اليوم على فريق شها المحترم فى عقر داره ووسط جماهيره  بنتيجة ٤ /١ .',
  },
];

const sportsData = [
  {
    id: 7,
    name: 'الكاراتيه',
    description:
      'انضم لتجربة مثيرة في تعلم تقنيات الدفاع عن النفس مع تدريبات احترافية، فرص للمشاركة في بطولات محلية ودولية، وبرامج تدريب تناسب المبتدئين والمحترفين.',
    image: KarateImage,
    link: 'karate-detail.html',
  },
  {
    id: 8,
    name: 'السباحة',
    description:
      'استمتع بحمامات سباحة أولمبية حديثة وبرامج تدريبية شاملة تلبي احتياجات جميع الأعمار، من تعليم السباحة إلى تطوير الأداء الرياضي الاحترافي.',
    image: SwimmingImage,
    link: 'swimming-detail.html',
  },
  {
    id: 9,
    name: 'الجمباز',
    description:
      'طور مرونتك وقوتك البدنية من خلال برامج الجمباز الاحترافية المصممة للأطفال والكبار، مع مدربين معتمدين وتجهيزات عالمية.',
    image: GymnasticsImage,
    link: 'gymnastics-detail.html',
  },
  {
    id: 10,
    name: 'كرة اليد',
    description:
      'انضم إلى فريق كرة اليد المتميز واستمتع بتجربة رياضية مثيرة تشمل تدريبات احترافية وفرص للمشاركة في بطولات محلية ودولية.',
    image: HandballImage,
    link: 'handball-detail.html',
  },
  {
    id: 11,
    name: 'الجودو',
    description:
      'اكتشف فنون الدفاع عن النفس مع تدريبات الجودو التي تعزز القوة والثقة بالنفس، مع مدربين خبراء وتجهيزات عالية الجودة.',
    image: JudoImage,
    link: 'judo-detail.html',
  },
  {
    id: 12,
    name: 'الكونغ فو',
    description:
      'تدريبات الكونغ فو تساعدك على تعزيز لياقتك البدنية واكتساب تقنيات الدفاع والهجوم بأسلوب مذهل وممتع.',
    image: KungfuImage,
    link: 'kungfu-detail.html',
  },
  {
    id: 13,
    name: 'تنس الطاولة',
    description:
      'انضم إلى مجتمع تنس الطاولة المليء بالحيوية، مع برامج تدريب متقدمة ومنافسات مثيرة لجميع المستويات.',
    image: TableTennisImage,
    link: 'tabletennis-detail.html',
  },
  {
    id: 14,
    name: 'التنس',
    description:
      'تجربة لا مثيل لها في ملاعب تنس حديثة مع برامج تدريبية متكاملة تناسب اللاعبين من جميع المستويات، مع بطولات تنافسية.',
    image: TennisImage,
    link: 'tennis-detail.html',
  },
  {
    id: 15,
    name: 'الشطرنج',
    description:
      'اختبر ذكاءك الاستراتيجي مع دورات الشطرنج الاحترافية، وشارك في بطولات محلية وعالمية لتعزيز مهاراتك.',
    image: ChessImage,
    link: 'chess-detail.html',
  },
  {
    id: 16,
    name: 'كرة السلة',
    description:
      'عش روح الفريق مع تدريبات كرة السلة الممتعة وفرص المنافسة في بطولات مشوقة محليًا ودوليًا.',
    image: BasketballImage,
    link: 'basketball-detail.html',
  },
  {
    id: 17,
    name: 'Tecnogym Fit',
    description:
      'استمتع بأحدث أجهزة اللياقة البدنية وتمارين مخصصة تناسب أهدافك الرياضية والصحية، مع مدربين متخصصين.',
    image: TecnogymFitImage,
    link: 'tecnogymfit-detail.html',
  },
  {
    id: 18,
    name: 'البادل',
    description:
      'اكتشف متعة رياضة البادل على ملاعب حديثة مجهزة بأعلى المعايير، مع دورات تدريبية وفرص منافسة تناسب جميع المستويات.',
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

  { id: 32, text: 'لأننا نسعى دائمًا لنرتقي إلى قمم التميز، يدًا بيد.' },
  { id: 33, text: 'نؤمن بأن التعاون هو جوهر النجاح.' },
  { id: 34, text: 'رؤيتنا تتجاوز الحدود، لنحقق أثرًا لا يُنسى.' },
  { id: 35, text: 'لنكمل تاريخ من الإنجازات، ومستقبل من الطموحات' },
  { id: 36, text: 'الشغف هنا ليس مجرد فكرة.' },
  { id: 37, text: 'بل هو الطريق نحو إنجازات ملموسة.' },
  { id: 38, text: 'لأن في كل إنجاز بداية لإنجاز أعظم.' },
  { id: 39, text: 'حيث يجتمع الفكر، فتبدأ قصص النجاح.' },
  { id: 40, text: 'كن جزءًا من الحدث.' },
];

export { eventNews, sportsData, trainers, counters, slogans };
