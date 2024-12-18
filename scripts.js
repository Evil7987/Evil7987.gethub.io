// دالة لتبديل حالة أي قائمة عند الضغط
function toggleDropdown(dropdownId) {
  const dropdown = document.getElementById(dropdownId);

  // إذا كانت القائمة مفتوحة، أغلقها
  if (dropdown.style.display === 'block') {
    dropdown.style.display = 'none';
  } else {
    // أغلق جميع القوائم المفتوحة قبل فتح هذه القائمة
    closeAllDropdowns();
    dropdown.style.display = 'block';
  }
}

// دالة لإغلاق جميع القوائم المفتوحة
function closeAllDropdowns() {
  const dropdowns = document.querySelectorAll('.dropdown-content, .mobile-nav');
  dropdowns.forEach((dropdown) => {
    dropdown.style.display = 'none';
  });
}

// إغلاق القوائم عند الضغط خارجها
document.addEventListener('click', (event) => {
  const isClickInside = event.target.closest('.dropdown, .mobile-menu-icon');
  if (!isClickInside) {
    closeAllDropdowns();
  }
});

// دالة لتبديل قائمة التنقل على الموبايل
function toggleMobileMenu() {
  const mobileNav = document.getElementById('mobileNav');

  // إذا كانت القائمة مفتوحة، أغلقها
  if (mobileNav.style.display === 'block') {
    mobileNav.style.display = 'none';
  } else {
    // أغلق جميع القوائم المفتوحة قبل فتح قائمة الموبايل
    closeAllDropdowns();
    mobileNav.style.display = 'block';
  }
}

// عند اختيار لغة من القائمة، إغلاقها وتغيير اللغة
const languageButtons = document.querySelectorAll('.dropdown-content a');
languageButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const selectedLang = button.getAttribute('data-lang');
    localStorage.setItem('selectedLang', selectedLang); // تخزين اللغة المختارة
    setLanguage(selectedLang); // تغيير اللغة

    // إغلاق القائمة بعد اختيار اللغة
    closeAllDropdowns();
  });
});

// دالة لتغيير اللغة
function setLanguage(lang) {
  const langContents = document.querySelectorAll('.lang-content');
  langContents.forEach((content) => {
    content.classList.remove('active');
    if (content.getAttribute('data-lang') === lang) {
      content.classList.add('active');
    }
  });
}

// تحديد اللغة المختارة عند تحميل الصفحة
window.onload = function () {
  const selectedLang = localStorage.getItem('selectedLang') || 'ar'; // افتراضيًا اللغة العربية
  setLanguage(selectedLang);
};

// أضف هذه الكود لجعل العنصر يظهر عند التمرير
window.addEventListener('scroll', function () {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach(function (element) {
    const position = element.getBoundingClientRect().top;
    if (position < window.innerHeight) {
      element.classList.add('visible');
    }
  });
});

function downloadFile(filename) {
  const a = document.createElement('a'); // إنشاء عنصر <a>
  a.href = filename; // تحديد رابط الملف
  a.download = filename; // تفعيل خاصية التنزيل
  document.body.appendChild(a); // إضافة العنصر إلى DOM
  a.click(); // محاكاة النقر
  document.body.removeChild(a); // إزالة العنصر بعد التنزيل
}

