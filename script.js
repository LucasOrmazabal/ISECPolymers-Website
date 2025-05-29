// Header scroll effect
const header = document.getElementById('main-header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuButton = document.getElementById('close-menu');
let isMenuOpen = false;

function closeMenu() {
    isMenuOpen = false;
    mobileMenu.classList.remove('show');
    setTimeout(() => {
        mobileMenu.classList.add('hidden');
    }, 300); // Espera a que termine la animación
    document.body.style.overflow = '';
}

function openMenu() {
    isMenuOpen = true;
    mobileMenu.classList.remove('hidden');
    // Pequeño delay para asegurar que la animación funcione
    setTimeout(() => {
        mobileMenu.classList.add('show');
    }, 10);
    document.body.style.overflow = 'hidden';
}

mobileMenuButton.addEventListener('click', openMenu);
closeMenuButton.addEventListener('click', closeMenu);

// Cerrar menú al hacer click en un enlace
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('nosotros-carousel');
    if (!carousel) return;

    const inner = carousel.querySelector('.carousel-inner');
    const items = carousel.querySelectorAll('.carousel-item');
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');
    
    let currentIndex = 0;
    let autoPlayInterval;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        inner.style.transform = `translateX(${offset}%)`;
    }

    function next() {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    }

    function prev() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    }

    function startAutoPlay() {
        stopAutoPlay();
        autoPlayInterval = setInterval(next, 4000);
    }

    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
            autoPlayInterval = null;
        }
    }

    // Event listeners
    prevBtn.addEventListener('click', () => {
        prev();
        stopAutoPlay();
        startAutoPlay();
    });

    nextBtn.addEventListener('click', () => {
        next();
        stopAutoPlay();
        startAutoPlay();
    });

    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);

    // Start autoplay
    startAutoPlay();

    // Forzar la actualización inicial
    updateCarousel();
});

// Brands carousel animation
document.addEventListener('DOMContentLoaded', function() {
    const brandsCarousel = document.querySelector('.brands-carousel');
    if (!brandsCarousel) return;

    // Duplicar los logos para crear un efecto infinito
    const items = brandsCarousel.querySelectorAll('.brand-item');
    const totalItems = items.length;
    
    // Clonar los items para el efecto infinito
    for (let i = 0; i < totalItems; i++) {
        const clone = items[i].cloneNode(true);
        brandsCarousel.appendChild(clone);
    }

    // Configurar la animación
    let position = 0;
    const speed = 1; // Velocidad ajustada
    
    function animate() {
        position -= speed;
        const itemWidth = items[0].offsetWidth;
        const totalWidth = itemWidth * totalItems;
        
        if (position <= -totalWidth) {
            position = 0;
        }
        
        brandsCarousel.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(animate);
    }
    
    // Iniciar la animación
    animate();
});

// Animaciones de scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (entry.target.classList.contains('kpi-item')) {
                animateKPIValue(entry.target);
            }
            // Si el elemento tiene un delay personalizado, lo aplicamos
            const delay = entry.target.dataset.delay;
            if (delay) {
                entry.target.style.transitionDelay = `${delay}ms`;
            }
        }
    });
}, observerOptions);

// Observar todos los elementos con animaciones
document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .fade-in, .product-card, .solutions-container, .form-container, .footer-section, .kpi-item').forEach(element => {
    observer.observe(element);
});

// KPI Counter Animation
function animateKPIValue(element) {
    const valueElement = element.querySelector('.kpi-value');
    if (!valueElement) return;
    
    const targetValue = parseInt(valueElement.getAttribute('data-value'));
    const duration = 2000;
    const startTime = performance.now();
    
    function updateValue(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(easeOutQuart * targetValue);
        
        valueElement.textContent = currentValue.toLocaleString();
        
        if (progress < 1) {
            requestAnimationFrame(updateValue);
        }
    }
    
    requestAnimationFrame(updateValue);
}

// Toast Notification
const toast = document.getElementById('toast');
const closeIcon = toast.querySelector('.close');
const progress = toast.querySelector('.progress');

function showToast() {
    toast.classList.add('active');
    setTimeout(() => {
        toast.classList.remove('active');
    }, 5000); // 5 segundos
}

closeIcon.addEventListener('click', () => {
    toast.classList.remove('active');
});

// Form Submission
const contactForm = document.getElementById('contact-form');
const formContainer = document.querySelector('.form-container');
const submitButton = contactForm.querySelector('button[type="submit"]');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Añadir estado de carga
    formContainer.classList.add('loading');
    submitButton.textContent = 'Enviando...';
    
    // Enviar email usando EmailJS
    emailjs.sendForm('default_service', 'template_uggitgp', this)
        .then(() => {
            // Si el envío es exitoso
            formContainer.classList.add('success');
            showToast();
            contactForm.reset();
            submitButton.textContent = 'Enviar Mensaje';
        })
        .catch((error) => {
            console.error('Error:', error);
            formContainer.classList.add('error');
        })
        .finally(() => {
            // Remover estado de carga
            formContainer.classList.remove('loading');
            
            // Remover estados de éxito/error después de un tiempo
            setTimeout(() => {
                formContainer.classList.remove('success', 'error');
            }, 2000);
        });
});

// Language selector with smooth transition
const languageSelector = document.querySelector('.language-selector select');

if (languageSelector) {
    languageSelector.addEventListener('change', (e) => {
        const selectedOption = e.target.options[e.target.selectedIndex];
        const newLanguage = selectedOption.value;
        
        // Add transition class
        languageSelector.classList.add('transitioning');
        
        // Simulate language change with fade effect
        const content = document.querySelector('body');
        content.style.opacity = '0';
        
        setTimeout(() => {
            languageSelector.classList.remove('transitioning');
            content.style.opacity = '1';
            // Here you would typically update the page content
            console.log(`Language changed to: ${newLanguage}`);
        }, 300);
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if open
            if (mobileMenu && mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
}); 