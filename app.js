// Toggling navbar menu
const toggler = document.querySelector('#toggler');

toggler.addEventListener('click', () => {
    const navItems = document.querySelector('.nav-items');
    navItems.classList.toggle('fold');
})

// Scroll animation
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;

        if (elementTop < windowHeight - 150) {
            reveal.classList.add('active');
        } else {
            reveal.classList.remove('active');
        }
    })
})

// Back-to-top button
const backToTopButton = document.querySelector('.back-to-top');
const hero = document.querySelector('.hero');
const displayButtonHeight = hero.getBoundingClientRect().bottom;

document.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > displayButtonHeight) {
        backToTopButton.classList.remove('hidden')
    } else {
        backToTopButton.classList.add('hidden')
    }
})

backToTopButton.addEventListener('click', () => {
    document.body.scrollIntoView({
        behavior: 'smooth'
    });
})

