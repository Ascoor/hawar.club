import {CiDumbbell} from "react-icons/ci"
import {BsHeartPulse} from "react-icons/bs"
import {BiTimeFive} from "react-icons/bi"
import {AiOutlineArrowRight} from "react-icons/ai"

import img1 from "../assets/gym/gym-9.jpg"
import img2 from "../assets/gym/gym-9.jpg"
import img3 from "../assets//gym/gym-4.jpg"
import img4 from "../assets//gym/gym-5.jpg"
import img5 from "../assets//gym/gym-6.jpg"

import img6 from "../assets//gym/gym-7.png"
import img7 from "../assets//gym/gym-8.jpg"
import img8 from "../assets//gym/gym-team.jpg"

import img9 from "../assets//gym/gym-9.jpg"
import img10 from "../assets//gym/gym-9.jpg"

export const navLinks = [
    {label:"الرئيسية", href:"#home"},
    {label:"عن النادي", href:"#about"},
    {label:"الخدمات", href:"#services"},
    {label:"الجدول الزمني", href:"#schedule"},
    {label:"معرض الصور", href:"#gallery"},
    {label:"المدونة", href:"#blog"},
    {label:"اتصل بنا", href:"#contact"}
]

export const services = [
    {
        icon:<CiDumbbell />,
        label:"معدات رياضية عالية الجودة",
        desc:"نحن نقدم أحدث المعدات الرياضية التي تضمن لك التمرين الأمثل بأعلى معايير الجودة.",
        btnDec:"اكتشف المزيد عنا",
        btnIcon:<AiOutlineArrowRight />
    },
    {
        icon:<BsHeartPulse />,
        label:"رعاية صحية",
        desc:"نقدم خدمات صحية متكاملة تضمن لك المحافظة على صحتك ولياقتك البدنية بشكل مستمر.",
        btnDec:"اكتشف المزيد عنا",
        btnIcon:<AiOutlineArrowRight />
    },
    {
        icon:<BiTimeFive />,
        label:"استراتيجيات التدريب",
        desc:"نحن نقدم خطط تدريب مخصصة تتناسب مع أهدافك الشخصية في اللياقة البدنية.",
        btnDec:"اكتشف المزيد عنا",
        btnIcon:<AiOutlineArrowRight />
    }
]

export const client = [
    {
        id:1,
        desc:'"نادي رياضي يتيح لك تجربة مرنة وسهلة. يمكنك اختيار خطة التدريب التي تناسبك مع إمكانيات تخصيص لا حصر لها."',
        img:img1,
        clientName:"محمد العلي"
    },
    {
        id:2,
        desc:"نادي رياضي يوفر خدمات تدريبية متميزة تشمل جميع أنواع التمارين المختلفة التي تساعدك على الوصول إلى أهدافك الرياضية.",
        img:img2,
        clientName:"سارة حسن"
    },
    {
        id:3,
        desc:'"نادي رياضي يوفر خدمات متنوعة تتناسب مع جميع الأفراد، سواء كنت مبتدئًا أو محترفًا في مجال اللياقة البدنية."',
        img:img3,
        clientName:"أحمد حسين"
    },
    {
        id:4,
        desc:"نادي رياضي يقدم برامج تدريبية مبتكرة لجميع الأعمار، بما في ذلك تدريبات القوة، التحمل، والمرونة.",
        img:img4,
        clientName:"مريم فؤاد"
    },
    {
        id:5,
        desc:'"نادي رياضي يقدم بيئة صحية ومحفزة للعمل على أهدافك الرياضية، حيث تلتقي الخبرة العالية مع أحدث المعدات."',
        img:img5,
        clientName:"إبراهيم ناصر"
    }
]

export const teamMembers = [
    {
        img:img6,
        role:"مدير إبداعي",
        name:"عادل حسن"
    },
    {
        img:img7,
        role:"مدرب لياقة بدنية",
        name:"أحمد جابر"
    },
    {
        img:img8,
        role:"مدرب شخصي",
        name:"ريم عباس"
    },
]

export const blog = [
    {
        img:img9,
        date:"19",
        role:"مدير إبداعي",
        desc:"أثر التمارين الرياضية في تحسين الصحة العامة"
    },
    {
        img:img10,
        date:"27",
        role:"مدير إبداعي",
        desc:"أفضل تمارين القوة لزيادة الكتلة العضلية"
    }
]

export const footer = [
    {
        title:"الشركة",
        footerLinks:[  
            {link:"من نحن"},
            {link:"الشركة"},
            {link:"الصحافة والمدونة"},
            {link:"سياسة الخصوصية"}
        ]
    },
    {
        title:"ساعات العمل",
        footerLinks:[
            {link:"الاثنين 11ص-7م"},
            {link:"الثلاثاء - الجمعة 11ص-8م"},
            {link:"السبت 10ص-6م"},
            {link:"الأحد 11ص-6م"}
        ]
    },
    {
        title:"الموارد",
        footerLinks:[
            {link:"تأمين الحياة"},
            {link:"تأمين السفر"},
            {link:"تأمين السيارات"},
            {link:"تأمين الأعمال"},
            {link:"تأمين الصحة"}
        ]
    }
]
