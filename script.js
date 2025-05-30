// Translations object
const translations = {
    es: {
        nav: {
            nosotros: 'Nosotros',
            productos: 'Productos',
            soluciones: 'Soluciones',
            contacto: 'Contacto'
        },
        hero: {
            title: 'ISEC POLYMERS',
            subtitle: 'Somos el mejor y mas confiable nexo entre tu fabrica y la materia prima plastica de la mejor calidad'
        },
        nosotros: {
            title: 'Nosotros',
            description: 'Comericializamos una amplia gama de materias primas plásticas tales como polietileno, polipropileno, PVC, plásticos de ingeniería, aditivos y otros combinando excelencia en el servicio al cliente y productos de máxima calidad a nivel internacional.'
        },
        productos: {
            title: 'Nuestros Productos',
            hdpe: {
                title: 'Polietileno HDPE/LDPE/LLDPE',
                description: '<strong>HDPE</strong>: Resistencia, rigidez y durabilidad <br> <strong>LDPE</strong>: Flexible, liviano y resistente a la humedad <br> <strong>LLDPE</strong>: Estructura molecular lineal'
            },
            pp: {
                title: 'Polipropileno',
                description: 'Termoplástico liviano, resistente al calor y a productos químicos.'
            },
            caco3: {
                title: 'Carbonato de Calcio (CaCo3)',
                description: 'Aditivo mineral que se mezcla con polímeros (como PP o PE) para reducir costos, aumentar rigidez y mejorar procesabilidad.'
            },
            engineering: {
                title: 'Plasticos De Ingeniería',
                description: 'Grupo de plásticos de alto rendimiento con mejor resistencia mecánica, térmica y química que los plásticos comunes.'
            },
            pvc: {
                title: 'PVC (Policloruro de Vinilo)',
                description: 'Resistente a la intemperie y químicos, con buena aislación eléctrica.'
            },
            pet: {
                title: 'PET (Polietileno Tereftalato)',
                description: 'Plástico transparente, fuerte y liviano, muy usado en botellas, envases y textiles (poliéster). Reciclable, con buena barrera contra gases. Apto para alimentos y bebidas por su seguridad y claridad.'
            }
        },
        soluciones: {
            title: 'Soluciones',
            subtitle: 'Abastecimiento Estratégico y Asistencia Técnica',
            description: 'Brindamos soluciones integrales en el abastecimiento de materias primas plásticas vitales para la industria. Comprendiendo asistencia técnica, desarrollo de productos, soluciones logísticas y financieras; asociados a las principales petroquímicas a nivel internacional contando con gran experiencia en el mercado.',
            features: {
                transporte: {
                    title: 'Eficiencia',
                    description: 'Gestión optimizada de documentación, logística y procesos aduaneros para garantizar tiempos competitivos.'
                },
                eficiencia: {
                    title: 'Trazabilidad',
                    description: 'Seguimiento integral desde el origen de la materia prima hasta la llegada a planta.'
                },
                seguridad: {
                    title: 'Confianza:',
                    description: 'Procesos seguros, verificados y respaldados en cada etapa del circuito comercial y logístico.'
                }
            }
        },
        contacto: {
            title: 'Contacto',
            nombre: 'Nombre',
            email: 'Email',
            mensaje: 'Mensaje',
            enviar: 'Enviar Mensaje'
        },
        footer: {
            copyright: '© ISEC S.A. All rights reserved.',
            ubicacion: 'Ubicación',
            email: 'Email: info@isecpolymers.com',
            telefono: 'Teléfono: +1 234 567 890'
        },
        kpi: {
            paises: 'Países',
            toneladas: 'Tipos de materiales',
            industrias: 'Industrias'
        },
        partners: {
            title: 'Clientes y Partners Principales',
            subtitle: 'Colaboramos con las empresas más importantes del sector para ofrecer materiales de la más alta calidad',
            description: 'Descripción breve del partner'
        },
        form: {
            nombre: 'Nombre',
            email: 'Email',
            mensaje: 'Mensaje',
            enviar: 'Enviar Mensaje',
            success: {
                title: 'Éxito',
                message: 'Tu mensaje ha sido enviado correctamente'
            }
        }
    },
    en: {
        nav: {
            nosotros: 'About Us',
            productos: 'Products',
            soluciones: 'Solutions',
            contacto: 'Contact'
        },
        hero: {
            title: 'ISEC POLYMERS',
            subtitle: 'We are the best and most reliable link between your factory and the highest quality plastic raw material'
        },
        nosotros: {
            title: 'About Us',
            description: 'We market a wide range of plastic raw materials such as polyethylene, polypropylene, PVC, engineering plastics, additives and others, combining excellence in customer service and maximum quality products at an international level.'
        },
        productos: {
            title: 'Our Products',
            hdpe: {
                title: 'Polyethylene HDPE/LDPE/LLDPE',
                description: '<strong>HDPE</strong>: Strength, rigidity and durability <br> <strong>LDPE</strong>: Flexible, lightweight and moisture resistant <br> <strong>LLDPE</strong>: Linear molecular structure'
            },
            pp: {
                title: 'Polypropylene',
                description: 'Lightweight thermoplastic, resistant to heat and chemicals.'
            },
            caco3: {
                title: 'Calcium Carbonate (CaCo3)',
                description: 'Mineral additive that is mixed with polymers (such as PP or PE) to reduce costs, increase rigidity and improve processability.'
            },
            engineering: {
                title: 'Engineering Plastics',
                description: 'Group of high-performance plastics with better mechanical, thermal and chemical resistance than the plastics common.'
            },
            pvc: {
                title: 'PVC (Polyvinyl Chloride)',
                description: 'Weather and chemical resistant, with good electrical insulation.'
            },
            pet: {
                title: 'PET (Polyethylene Terephthalate)',
                description: 'Transparent, strong and lightweight plastic, widely used in bottles, containers and textiles (polyester). Recyclable, with good gas barrier. Suitable for food and beverages due to its safety and clarity.'
            }
        },
        soluciones: {
            title: 'Solutions',
            subtitle: 'Strategic Supply and Technical Assistance',
            description: 'We provide comprehensive solutions in the supply of plastic raw materials vital to the industry. Including technical assistance, product development, logistics and financial solutions; associated with the main international petrochemical companies with extensive market experience.',
            features: {
                transporte: {
                    title: 'Efficiency',
                    description: 'Optimized management of documentation, logistics, and customs processes to ensure competitive timings.'
                },
                eficiencia: {
                    title: 'Traceability',
                    description: 'Comprehensive tracking from raw material origin to plant arrival.'
                },
                seguridad: {
                    title: 'Trust:',
                    description: 'Secure, verified, and supported processes at every stage of the commercial and logistical circuit.'
                }
            }
        },
        contacto: {
            title: 'Contact',
            nombre: 'Name',
            email: 'Email',
            mensaje: 'Message',
            enviar: 'Send Message'
        },
        footer: {
            copyright: '© ISEC S.A. All rights reserved.',
            ubicacion: 'Location',
            email: 'Email: info@isecpolymers.com',
            telefono: 'Phone: +1 234 567 890'
        },
        kpi: {
            paises: 'Countries',
            toneladas: 'Types of materials',
            industrias: 'Industries'
        },
        partners: {
            title: 'Main Clients and Partners',
            subtitle: 'We collaborate with the most important companies in the sector to offer the highest quality materials',
            description: 'Brief partner description'
        },
        form: {
            nombre: 'Name',
            email: 'Email',
            mensaje: 'Message',
            enviar: 'Send Message',
            success: {
                title: 'Success',
                message: 'Your message has been sent successfully'
            }
        }
    },
    pt: {
        nav: {
            nosotros: 'Sobre Nós',
            productos: 'Produtos',
            soluciones: 'Soluções',
            contacto: 'Contato'
        },
        hero: {
            title: 'ISEC POLYMERS',
            subtitle: 'Somos o melhor e mais confiável elo entre sua fábrica e a matéria-prima plástica da melhor qualidade'
        },
        nosotros: {
            title: 'Sobre Nós',
            description: 'Comercializamos uma ampla gama de matérias-primas plásticas, como polietileno, polipropileno, PVC, plásticos de engenharia, aditivos e outros, combinando excelência no atendimento ao cliente e produtos de máxima qualidade em nível internacional.'
        },
        productos: {
            title: 'Nossos Produtos',
            hdpe: {
                title: 'Polietileno HDPE/LDPE/LLDPE',
                description: '<strong>HDPE</strong>: Resistência, rigidez e durabilidade <br> <strong>LDPE</strong>: Flexível, leve e resistente à umidade <br> <strong>LLDPE</strong>: Estrutura molecular linear'
            },
            pp: {
                title: 'Polipropileno',
                description: 'Termoplástico leve, resistente ao calor e produtos químicos.'
            },
            caco3: {
                title: 'Carbonato de Cálcio (CaCo3)',
                description: 'Aditivo mineral que é misturado com polímeros (como PP ou PE) para reduzir custos, aumentar a rigidez e melhorar a processabilidade.'
            },
            engineering: {
                title: 'Plásticos de Engenharia',
                description: 'Grupo de plásticos de alto desempenho com melhor resistência mecânica, térmica e química que os plásticos comuns.'
            },
            pvc: {
                title: 'PVC (Policloreto de Vinila)',
                description: 'Resistente às intempéries e produtos químicos, com bom isolamento elétrico.'
            },
            pet: {
                title: 'PET (Politereftalato de Etileno)',
                description: 'Plástico transparente, forte e leve, muito usado em garrafas, recipientes e têxteis (poliéster). Reciclável, com boa barreira contra gases. Adequado para alimentos e bebidas devido à sua segurança e clareza.'
            }
        },
        soluciones: {
            title: 'Soluções',
            subtitle: 'Abastecimento Estratégico e Assistência Técnica',
            description: 'Fornecemos soluções integrais no abastecimento de matérias-primas plásticas vitais para a indústria. Incluindo assistência técnica, desenvolvimento de produtos, soluções logísticas e financeiras; associados às principais petroquímicas internacionais com vasta experiência no mercado.',
            features: {
                transporte: {
                    title: 'Eficiencia',
                    description: 'Gerenciamento otimizado de documentação, logística e processos alfandegários para garantir prazos competitivos.'
                },
                eficiencia: {
                    title: 'Rastreabilidade',
                    description: 'Acompanhamento integral desde a origem da matéria-prima até a chegada à planta.'
                },
                seguridad: {
                    title: 'Confiança:',
                    description: 'Processos seguros, verificados e respaldados em cada etapa do circuito comercial e logístico.'
                }
            }
        },
        contacto: {
            title: 'Contato',
            nombre: 'Nome',
            email: 'Email',
            mensaje: 'Mensagem',
            enviar: 'Enviar Mensagem'
        },
        footer: {
            copyright: '© ISEC S.A. Todos os direitos reservados.',
            ubicacion: 'Localização',
            email: 'Email: info@isecpolymers.com',
            telefono: 'Telefone: +1 234 567 890'
        },
        kpi: {
            paises: 'Países',
            toneladas: 'Tipos de materiales',
            industrias: 'Indústrias'
        },
        partners: {
            title: 'Principais Clientes e Parceiros',
            subtitle: 'Colaboramos com as empresas mais importantes do setor para oferecer materiais da mais alta qualidade',
            description: 'Breve descrição do parceiro'
        },
        form: {
            nombre: 'Nome',
            email: 'Email',
            mensaje: 'Mensagem',
            enviar: 'Enviar Mensagem',
            success: {
                title: 'Sucesso',
                message: 'Sua mensagem foi enviada com sucesso'
            }
        }
    }
};

console.log('script.js loaded');

let desktopSelector;
let mobileSelector;

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
    console.log('DOMContentLoaded fired');
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

    desktopSelector = document.getElementById('desktop-language-selector');
    mobileSelector = document.getElementById('mobile-language-selector');
    
    console.log('Desktop selector found:', !!desktopSelector);
    console.log('Mobile selector found:', !!mobileSelector);

    if (desktopSelector) {
        desktopSelector.addEventListener('change', (e) => {
            console.log('Desktop selector change event:', e.target.value);
            handleLanguageChange(e.target.value);
        });
    }
    
    if (mobileSelector) {
        mobileSelector.addEventListener('change', (e) => {
            console.log('Mobile selector change event:', e.target.value);
            handleLanguageChange(e.target.value);
        });
    }

    // Cargar el idioma guardado al inicio
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'es';
    console.log('Saved language:', savedLanguage);
    handleLanguageChange(savedLanguage);
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
        
        valueElement.innerHTML = `${currentValue.toLocaleString()}<span class="text-[#f4b72b]">+</span>`;
        
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

// Function to handle language change
function handleLanguageChange(language) {
    console.log('Entering handleLanguageChange. Language:', language);
    localStorage.setItem('selectedLanguage', language);
    
    // Update both selectors to stay in sync
    if (desktopSelector) desktopSelector.value = language;
    if (mobileSelector) mobileSelector.value = language;

    const t = translations[language];
    console.log('Attempting to get translations for:', language, 'Result:', !!t);

    // Fade out
    document.body.style.opacity = '0';

    // Wait for fade out to complete
    setTimeout(() => {
        console.log('Inside setTimeout, calling updateContent');
        // Update all content
        updateContent(t);
        
        // Fade in
        document.body.style.opacity = '1';
    }, 500); // Incrementado el tiempo de espera
}

// Function to update all content
function updateContent(t) {
    console.log('Entering updateContent');
    // Update navigation
    document.querySelectorAll('.nav-link').forEach((link, index) => {
        const keys = ['nosotros', 'productos', 'soluciones', 'contacto'];
        if (keys[index]) link.textContent = t.nav[keys[index]];
    });

    // Update mobile menu
    document.querySelectorAll('#mobile-menu a').forEach((link, index) => {
        const keys = ['nosotros', 'productos', 'soluciones', 'contacto'];
        if (keys[index]) link.textContent = t.nav[keys[index]];
    });

    // Update hero section
    document.querySelector('#hero h1').textContent = t.hero.title;
    document.querySelector('#hero p').textContent = t.hero.subtitle;

    // Update nosotros section
    document.querySelector('#nosotros h2').textContent = t.nosotros.title;
    document.querySelector('#nosotros p').textContent = t.nosotros.description;

    // Update productos section
    document.querySelector('#productos h2').textContent = t.productos.title;
    const productCards = document.querySelectorAll('.product-card');
    if (productCards.length > 0) {
        productCards[0].querySelector('h3').textContent = t.productos.hdpe.title;
        productCards[0].querySelector('p').innerHTML = t.productos.hdpe.description;
    }
    if (productCards.length > 1) {
        productCards[1].querySelector('h3').textContent = t.productos.pp.title;
        productCards[1].querySelector('p').textContent = t.productos.pp.description;
    }
    if (productCards.length > 2) {
        productCards[2].querySelector('h3').textContent = t.productos.caco3.title;
        productCards[2].querySelector('p').textContent = t.productos.caco3.description;
    }
    if (productCards.length > 3) {
        productCards[3].querySelector('h3').textContent = t.productos.engineering.title;
        productCards[3].querySelector('p').textContent = t.productos.engineering.description;
    }
    if (productCards.length > 4) {
        productCards[4].querySelector('h3').textContent = t.productos.pvc.title;
        productCards[4].querySelector('p').textContent = t.productos.pvc.description;
    }
    if (productCards.length > 5) {
        productCards[5].querySelector('h3').textContent = t.productos.pet.title;
        productCards[5].querySelector('p').textContent = t.productos.pet.description;
    }

    // Update KPI section
    const kpiLabels = document.querySelectorAll('.kpi-item p');
    if (kpiLabels.length >= 3) {
        kpiLabels[0].textContent = t.kpi.paises;
        kpiLabels[1].textContent = t.kpi.toneladas;
        kpiLabels[2].textContent = t.kpi.industrias;
    }

    // Update Partners section
    const partnersSection = document.querySelector('#marcas');
    if (partnersSection) {
        partnersSection.querySelector('h2').textContent = t.partners.title;
        partnersSection.querySelector('p').textContent = t.partners.subtitle;
        partnersSection.querySelectorAll('.brand-card p').forEach(p => {
            p.textContent = t.partners.description;
        });
    }

    // Update soluciones section
    const solucionesSection = document.querySelector('#soluciones');
    if (solucionesSection) {
        const mainTitle = solucionesSection.querySelector('h2');
        if (mainTitle) mainTitle.textContent = t.soluciones.title;

        const subtitle = solucionesSection.querySelector('h3');
        if (subtitle) subtitle.textContent = t.soluciones.subtitle;

        const description = solucionesSection.querySelector('p');
        if (description) description.textContent = t.soluciones.description;

        const featureCards = solucionesSection.querySelectorAll('.grid.md\\:grid-cols-3.gap-6 > .text-center');

        console.log('Found', featureCards.length, 'solution feature cards with class .text-center');

        if (featureCards.length >= 3) {
            // Card 1 (Ship Icon) -> Use transporte key (Eficiencia)
            const card1Title = featureCards[0].querySelector('h4');
            const card1Desc = featureCards[0].querySelector('p');
            if (card1Title) {
                card1Title.textContent = t.soluciones.features.transporte.title;
                console.log('Updated card 1 title to:', card1Title.textContent);
            }
            if (card1Desc) {
                 card1Desc.textContent = t.soluciones.features.transporte.description;
                 console.log('Updated card 1 description');
            }

            // Card 2 (Lightbulb Icon) -> Use eficiencia key (Trazabilidad)
            const card2Title = featureCards[1].querySelector('h4');
            const card2Desc = featureCards[1].querySelector('p');
             if (card2Title) {
                card2Title.textContent = t.soluciones.features.eficiencia.title;
                 console.log('Updated card 2 title to:', card2Title.textContent);
            }
            if (card2Desc) {
                card2Desc.textContent = t.soluciones.features.eficiencia.description;
                 console.log('Updated card 2 description');
            }

            // Card 3 (Shield Icon) -> Use seguridad key (Confianza)
            const card3Title = featureCards[2].querySelector('h4');
            const card3Desc = featureCards[2].querySelector('p');
             if (card3Title) {
                card3Title.textContent = t.soluciones.features.seguridad.title;
                 console.log('Updated card 3 title to:', card3Title.textContent);
            }
            if (card3Desc) {
                card3Desc.textContent = t.soluciones.features.seguridad.description;
                 console.log('Updated card 3 description');
            }

        } else {
            console.log('Not enough feature cards found with class .text-center to update solutions');
        }
    }

    // Update contacto section
    const contactoSection = document.querySelector('#contacto');
    if (contactoSection) {
        const title = contactoSection.querySelector('h2');
        if (title) title.textContent = t.contacto.title;

        const form = contactoSection.querySelector('#contact-form');
        if (form) {
            const labels = form.querySelectorAll('label');
            labels.forEach((label, index) => {
                if (index === 0) label.textContent = t.form.nombre;
                if (index === 1) label.textContent = t.form.email;
                if (index === 2) label.textContent = t.form.mensaje;
            });

            const inputs = form.querySelectorAll('input, textarea');
            inputs.forEach((input, index) => {
                if (index === 0) input.placeholder = t.form.nombre;
                if (index === 1) input.placeholder = t.form.email;
                if (index === 2) input.placeholder = t.form.mensaje;
            });

            const submitButton = form.querySelector('.submit-button');
            if (submitButton) submitButton.textContent = t.form.enviar;
        }
    }

    // Update Toast notification
    const toast = document.querySelector('.toast');
    if (toast) {
        const text1 = toast.querySelector('.text-1');
        const text2 = toast.querySelector('.text-2');
        if (text1) text1.textContent = t.form.success.title;
        if (text2) text2.textContent = t.form.success.message;
    }

    // Update Footer
    const footer = document.querySelector('footer');
    if (footer) {
        const contactSection = footer.querySelector('.footer-section:nth-child(2)');
        if (contactSection) {
            const contactTitle = contactSection.querySelector('h4');
            if (contactTitle) contactTitle.textContent = t.contacto.title;

            const contactParagraphs = contactSection.querySelectorAll('p');
            if (contactParagraphs.length >= 2) {
                contactParagraphs[0].textContent = t.footer.email;
                contactParagraphs[1].textContent = t.footer.telefono;
            }
        }

        const locationSection = footer.querySelector('.footer-section:nth-child(3)');
        if (locationSection) {
            const locationTitle = locationSection.querySelector('h4');
            if (locationTitle) locationTitle.textContent = t.footer.ubicacion;
        }

        const copyright = footer.querySelector('.text-gray-400');
        if (copyright) copyright.textContent = t.footer.copyright;
    }
} 