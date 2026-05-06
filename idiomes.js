const translations = {
    'ca': {
        'nav-inici': 'Inici',
        'nav-mes': 'Més',
        'nav-plans': 'Veure Plans',
        'nav-faq': 'FAQ',
        'nav-presu': 'Pressupost',
        'hero-cat': 'INSTAL·LACIÓ TECNOLÒGICA',
        'hero-title': 'Muntem la <span>Tecnologia</span> que millora la teva Empresa',
        'hero-sub': 'Especialistes en instal·lació de xarxes, dispositius i cablejat estructural.',
        'btn-mes': 'Més de nosaltres',
        'section-serv': 'Més de nosaltres',
        'serv-1-t': '01. Què fem?',
        'serv-1-p': 'Ens encarreguem de fer instal·lacions a empreses PIME, garantint seguretat i professionalitat.',
        'serv-2-t': '02. On estem?',
        'serv-2-p': "Ens trobem al Carrer d'Antoni Bori, 08918 Badalona, Barcelona. Vine a visitar-nos!",
        'serv-3-t': '03. Com treballem?',
        'serv-3-p': 'Fem instal·lacions a mida: des de projectes sencers fins a apartats concrets com càmeres IP.',
        'serv-4-t': '04. Contacte',
        'plan-subtitle': 'Escull la teva instal·lació',
        'plan-title': "Plans d'Instal·lació",
        'plan-complet': 'Complet',
        'plan-wifi': 'Wifi',
        'plan-cable': 'Sol Cablejat',
        'plan-vigi': 'Vigilància',
        'btn-fer-presu': 'Fer pressupost'
    },
    'en': {
        'nav-inici': 'Home',
        'nav-mes': 'More',
        'nav-plans': 'View Plans',
        'nav-faq': 'FAQ',
        'nav-presu': 'Quote',
        'hero-cat': 'TECHNOLOGICAL INSTALLATION',
        'hero-title': 'We set up the <span>Technology</span> that improves your Business',
        'hero-sub': 'Specialists in network installation, devices, and structured cabling.',
        'btn-mes': 'More about us',
        'section-serv': 'More about us',
        'serv-1-t': '01. What we do?',
        'serv-1-p': 'We handle installations for SME companies, guaranteeing security and professionalism.',
        'serv-2-t': '02. Location',
        'serv-2-p': 'We are located at Antoni Bori Street, 08918 Badalona, Barcelona. Visit us!',
        'serv-3-t': '03. How we work?',
        'serv-3-p': 'Custom installations: from full projects to specific parts like IP cameras or WiFi.',
        'serv-4-t': '04. Contact',
        'plan-subtitle': 'Choose your installation',
        'plan-title': 'Installation Plans',
        'plan-complet': 'Full Plan',
        'plan-wifi': 'WiFi Plan',
        'plan-cable': 'Cabling Only',
        'plan-vigi': 'Surveillance',
        'btn-fer-presu': 'Get a Quote'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('lang-btn');
    let currentLang = localStorage.getItem('language') || 'ca';

    function updateText() {
        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.getAttribute('data-key');
            if (translations[currentLang][key]) {
                el.innerHTML = translations[currentLang][key];
            }
        });
        langBtn.innerText = currentLang === 'ca' ? 'CA / EN' : 'EN / CA';
    }

    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'ca' ? 'en' : 'ca';
        localStorage.setItem('language', currentLang);
        updateText();
    });

    updateText();

    // Lógica menú móvil (compartida para todos)
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    if(menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});