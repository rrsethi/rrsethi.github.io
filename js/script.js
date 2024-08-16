// Load header and footer
document.addEventListener("DOMContentLoaded", function () {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
    document.head.appendChild(link);
});
document.getElementById("header").innerHTML = `
    <header class="l-header">
        <nav class="nav bd-grid">
            <div>
                <a href="#" class="nav__logo">Radharaman</a>
            </div>

            <div class="nav__menu" id="nav-menu">
                <ul class="nav__list">
                    <li class="nav__item"><a href="/" class="nav__link active-link"  id="nav-home">Home</a></li>
                    <li class="nav__item"><a href="/about.html" class="nav__link" id="nav-about">About</a></li>
                    <li class="nav__item"><a href="#skills" class="nav__link" id="nav-skills">Skills</a></li>
                    <li class="nav__item"><a href="#work" class="nav__link" id="nav-certificates>Certificates</a></li>
                    <li class="nav__item"><a href="#work" class="nav__link" id="nav-work">Work</a></li>
                    <li class="nav__item"><a href="#work" class="nav__link" id="nav-blog">Blog</a></li>
                    <li class="nav__item"><a href="#contact" class="nav__link" id="nav-contact">Contact</a></li>
                </ul>
            </div>

            <div class="nav__toggle" id="nav-toggle">
                <i class='bx bx-menu'></i>
            </div>
        </nav>
    </header>
`;

document.getElementById("footer").innerHTML = `
    <footer class="footer">
        <p class="footer__title">Radharaman</p>
        <div class="footer__social">
            <a href="https://github.com/rrsethi" target="_blank" class="footer__icon"><i class="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/radharaman-sethi-53a3b1200/" target="_blank" class="footer__icon"><i class="fab fa-linkedin"></i></a>
            <a href="mailto:rrsethi13112001@gmail.com" target="_blank" class="footer__icon"><i class="fas fa-envelope"></i></a>
            <a href="https://wa.me/919680031632" target="_blank" class="footer__icon"><i class="fab fa-whatsapp"></i></a>
            <a href="https://www.instagram.com/radharaman.sethi/" target="_blank" class="footer__icon"><i class="fab fa-instagram"></i></a>
            <a href="https://x.com/radharaman__" target="_blank" class="footer__icon"><i class="fab fa-x"></i></a>
            <a href="https://www.facebook.com/radharaman.sethi.7/" target="_blank" class="footer__icon"><i class="fab fa-facebook"></i></a>
        </div>
        <p class="footer__copy">&#169; Radharaman. All rights reserved</p>
    </footer>
`;

/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ADD ACTIVE LINK BASED ON PAGE ====================*/
const currentPath = window.location.pathname;

function setActiveLink() {
    navLink.forEach(link => {
        link.classList.remove('active-link');
    });

    if (currentPath === '/' || currentPath === '/index.html') {
        document.getElementById('nav-home').classList.add('active-link');
    } else if (currentPath === '/about.html') {
        document.getElementById('nav-about').classList.add('active-link');
    } else if (currentPath === '/skills.html') {
        document.getElementById('nav-skills').classList.add('active-link');
    } else if (currentPath === '/certificates.html') {
        document.getElementById('nav-certificates').classList.add('active-link');
    } else if (currentPath.includes('#work')) {
        document.getElementById('nav-work').classList.add('active-link');
    } else if (currentPath.includes('#blog')) {
        document.getElementById('nav-blog').classList.add('active-link');
    } else if (currentPath.includes('#contact')) {
        document.getElementById('nav-contact').classList.add('active-link');
    }
}

setActiveLink();
