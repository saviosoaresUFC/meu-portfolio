const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const body = document.body;

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');

    mobileMenu.classList.toggle('translate-x-full');
    mobileMenu.classList.toggle('translate-x-0');

    body.classList.toggle('no-scroll');
});

document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', () => {
        if (mobileMenu.classList.contains('translate-x-0')) {
            mobileMenu.classList.remove('translate-x-0');
            mobileMenu.classList.add('translate-x-full');
            menuToggle.classList.remove('active');

            body.classList.remove('no-scroll');
        }
    });
});