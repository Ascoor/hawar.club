// // النص الكامل للنعي
// const textContent = `بمشاعر يغمرها الحزن والأسى، ينعى نادي الحوار للألعاب الرياضية بقلوب مؤمنة بقضاء الله وقدره، فقيده الغالي
//     المغفور له الحاج / صفوت رمضان فودة
//     الذي أفنى عمره في خدمة النادي وأبنائه، وأصبح رمزًا للعطاء والإخلاص، تاركًا إرثًا خالدًا من المحبة والاحترام، و بصمة لا تُمحى في ذاكرة كل من عرفوه. رحل بجسده، وبقيت ذكراه ناصعة في قلوب محبيه، محفورة بحروف من نور في صفحات التاريخ.
//     نسأل الله العلي القدير أن يجعل ما قدّمه في ميزان حسناته.`;
// const obituaryText = document.getElementById('obituaryText');
// const signatureText = document.getElementById('signatureText');
// const contentBox = document.getElementById('contentBox');
const clubName = document.querySelector('.club-name');
const header = document.querySelector('.header-club');
const comingSoon = document.querySelector('.coming-soon');

// let index = 0;
// const words = textContent.split(" ");

// function displayWords() {
//     if (index < words.length) {
//         obituaryText.innerHTML += words[index] + " ";
//         index++;
//         setTimeout(displayWords, 300); // سرعة الكتابة
//     } else {
//         signatureText.style.display = "block"; // عرض التوقيع بعد انتهاء الكتابة
//         setTimeout(fadeOutContent, 4000); // الانتظار لمدة 2 ثانية بعد التوقيع قبل التلاشي
//     }
// }

// function fadeOutContent() {
//     // contentBox.classList.add('fade-out'); // بدء تأثير التلاشي
//     setTimeout(() => {
//         // contentBox.style.display = "none"; // إخفاء الصندوق القديم بعد التلاشي

//         header.classList.add("show"); // تفعيل صنف "show" للشريط العلوي لعرضه بانزلاق بطيء
//         clubName.style.display = "block"; // عرض "Hawar"
//         comingSoon.style.display = "block"; // عرض "Coming Soon"
//     }, 2000); // وقت التلاشي
// }

// تم تعطيل استدعاء الدالة displayWords مؤقتًا
// setTimeout(displayWords, 2000); // بدء الكتابة بعد تأثير الصورة

// مباشرة عرض العناصر دون تأثير التلاشي
// clubName.style.display = "block"; // عرض "Hawar"
header.classList.add("show"); // تفعيل صنف "show" للشريط العلوي لعرضه
comingSoon.style.display = "block"; // عرض "Coming Soon"

// لا حاجة لاستدعاء fadeOutContent هنا

function toggleMenu() {
    const sideMenu = document.getElementById('sideMenu');
    sideMenu.classList.toggle('show');
}
// Function to close the side menu
function closeMenu() {
    // Get the side menu element
    const sideMenu = document.querySelector('.side-menu');
    
    // Remove the 'show' class to hide the menu
    sideMenu.classList.remove('show');
}
