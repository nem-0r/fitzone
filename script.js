// ========== SMOOTH SCROLLING (Плавная прокрутка) ==========
// Когда кликаем на ссылку, страница плавно прокручивается к нужной секции
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Закрыть мобильное меню после клика
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        }
    });
});

// ========== NAVBAR SCROLL EFFECT (Эффект при прокрутке навигации) ==========
// Меняет фон навигации когда прокручиваем страницу
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(17, 24, 39, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.background = 'rgba(17, 24, 39, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// ========== SCROLL TO TOP BUTTON (Кнопка "наверх") ==========
// Показывает кнопку когда прокручиваем вниз
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('active');
    } else {
        scrollTopBtn.classList.remove('active');
    }
});

// При клике на кнопку - возвращаемся наверх
scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========== CONTACT FORM HANDLING (Обработка формы) ==========
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Показать сообщение об успехе
        alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
        
        // Очистить форму
        contactForm.reset();
    });
}

// ========== ACTIVE MENU ITEM ON SCROLL (Активный пункт меню) ==========
// Подсвечивает текущую секцию в меню при прокрутке
window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ========== ANIMATION ON SCROLL (Анимация при прокрутке) ==========
// Карточки появляются с анимацией когда прокручиваем до них
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Анимация для всех карточек
const cards = document.querySelectorAll('.program-card, .service-card, .coach-card, .pricing-card, .contact-info-card');
cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// ========== LOADING ANIMATION (Анимация загрузки) ==========
// Плавное появление страницы при загрузке
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(function() {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});
