// --- 1. Theme Switcher Logic ---
var themeButton = document.getElementById('theme-toggle');

function switchTheme() {
    if (document.body.classList.contains('light-theme')) {
        document.body.classList.remove('light-theme');
    } else {
        document.body.classList.add('light-theme');
    }
}

themeButton.addEventListener('click', switchTheme);


// --- 2. Translation Dictionary (Bounce 02 Integration) ---
var translations = {
    en: {
        navAbout: "About",
        navSkills: "Skills",
        navProjects: "Projects",
        navHobbies: "Hobbies",
        navContact: "Contact",
        heroTitle: "Hello, I'm Osama Khader",
        heroSubtitle: "Web Developer & Cybersecurity Trainee",
        aboutHeading: "About Me",
        aboutText: "I am a developer with a background in engineering and computing, specializing in modern web development and cybersecurity analysis.",
        skillsHeading: "Skills",
        projectsHeading: "Project Showcase",
        p0Title: "Project 00",
        p0Desc: "Static Website Architecture & HTML/CSS Fundamentals.",
        p1Title: "Project 01",
        p1Desc: "Responsive Layouts & Advanced CSS Styling.",
        p2Title: "Project 02",
        p2Desc: "JavaScript DOM Manipulation & Dynamic UI Components.",
        p3Title: "Project 03",
        p3Desc: "Interactive Web Applications & Asynchronous Features.",
        hobbiesHeading: "Hobbies",
        hobby1: "Gym & Weightlifting",
        hobby2: "Swimming & Sports",
        hobby3: "Language Learning",
        hobby4: "Outdoor Camping & Travel",
        contactHeading: "Contact Me",
        inputName: "Your Name",
        inputEmail: "Your Email",
        inputMessage: "Your Message",
        submitBtn: "Send Message",
        footerText: "© 2026 Osama Khader. All rights reserved.",
        langBtnText: "العربية"
    },
    ar: {
        navAbout: "عني",
        navSkills: "المهارات",
        navProjects: "المشاريع",
        navHobbies: "الهوايات",
        navContact: "تواصل معي",
        heroTitle: "أهلاً، أنا أسامة خضر",
        heroSubtitle: "مطور ويب ومتدرب أمن سيبراني",
        aboutHeading: "عن حياتي المهنية",
        aboutText: "أنا مطور ذو خلفية في الهندسة والحوسبة، أختص في تطوير الويب الحديث وتحليل الأمن السيبراني.",
        skillsHeading: "المهارات",
        projectsHeading: "معرض المشاريع",
        p0Title: "المشروع 00",
        p0Desc: "هندسة المواقع الثابتة وأساسيات HTML/CSS.",
        p1Title: "المشروع 01",
        p1Desc: "التصميم المتجاوب وتنسيقات CSS المتقدمة.",
        p2Title: "المشروع 02",
        p2Desc: "التعامل مع عناصر DOM باستخدام JavaScript وتطوير مكونات تفاعلية.",
        p3Title: "المشروع 03",
        p3Desc: "تطبيقات الويب التفاعلية والميزات غير المتزامنة.",
        hobbiesHeading: "الهوايات",
        hobby1: "الجيم وريادة الأوزان",
        hobby2: "السباحة والرياضة",
        hobby3: "تعلم اللغات",
        hobby4: "التخييم الخارجي والسفر",
        contactHeading: "تواصل معي",
        inputName: "اسمك",
        inputEmail: "بريدك الإلكتروني",
        inputMessage: "رسالتك",
        submitBtn: "إرسال الرسالة",
        footerText: "© 2026 أسامة خضر. جميع الحقوق محفوظة.",
        langBtnText: "English"
    }
};

var currentLang = "en";
var langBtn = document.getElementById("lang-btn");

function switchLanguage() {
    if (currentLang === "en") {
        currentLang = "ar";
        document.documentElement.setAttribute("dir", "rtl");
        document.documentElement.setAttribute("lang", "ar");
    } else {
        currentLang = "en";
        document.documentElement.setAttribute("dir", "ltr");
        document.documentElement.setAttribute("lang", "en");
    }

    var dict = translations[currentLang];

    // Update navbar and sections text content
    document.getElementById("nav-about").textContent = dict.navAbout;
    document.getElementById("nav-skills").textContent = dict.navSkills;
    document.getElementById("nav-projects").textContent = dict.navProjects;
    document.getElementById("nav-hobbies").textContent = dict.navHobbies;
    document.getElementById("nav-contact").textContent = dict.navContact;

    document.getElementById("hero-title").innerHTML = dict.heroTitle + ' <span class="highlight">Osama Khader</span>';
    document.getElementById("hero-subtitle").textContent = dict.heroSubtitle;

    document.getElementById("about-heading").textContent = dict.aboutHeading;
    document.getElementById("about-text").textContent = dict.aboutText;

    document.getElementById("skills-heading").textContent = dict.skillsHeading;
    document.getElementById("projects-heading").textContent = dict.projectsHeading;

    document.getElementById("p0-title").textContent = dict.p0Title;
    document.getElementById("p0-desc").textContent = dict.p0Desc;
    document.getElementById("p1-title").textContent = dict.p1Title;
    document.getElementById("p1-desc").textContent = dict.p1Desc;
    document.getElementById("p2-title").textContent = dict.p2Title;
    document.getElementById("p2-desc").textContent = dict.p2Desc;
    document.getElementById("p3-title").textContent = dict.p3Title;
    document.getElementById("p3-desc").textContent = dict.p3Desc;

    document.getElementById("hobbies-heading").textContent = dict.hobbiesHeading;
    document.getElementById("hobby-1").textContent = dict.hobby1;
    document.getElementById("hobby-2").textContent = dict.hobby2;
    document.getElementById("hobby-3").textContent = dict.hobby3;
    document.getElementById("hobby-4").textContent = dict.hobby4;

    document.getElementById("contact-heading").textContent = dict.contactHeading;
    document.getElementById("input-name").placeholder = dict.inputName;
    document.getElementById("input-email").placeholder = dict.inputEmail;
    document.getElementById("input-message").placeholder = dict.inputMessage;
    document.getElementById("submit-btn").textContent = dict.submitBtn;

    document.getElementById("footer-text").textContent = dict.footerText;
    langBtn.textContent = dict.langBtnText;
}

langBtn.addEventListener("click", switchLanguage);


// --- 3. Contact Form Submission Handler ---
var contactForm = document.getElementById('contact-form');

function handleFormSubmit(event) {
    event.preventDefault();
    alert(currentLang === 'ar' ? 'شكراً لك! تم إرسال رسالتك.' : 'Thank you! Your message has been sent.');
    contactForm.reset();
}

if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
}