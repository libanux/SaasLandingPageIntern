document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu');
    const drawerMenu = document.querySelector('.drawer-menu');
    const drawerClose = drawerMenu.querySelector('.drawer-close');

    menuToggle.addEventListener('click', function () {
        drawerMenu.classList.add('active');
    });

    drawerClose.addEventListener('click', function () {
        drawerMenu.classList.remove('active');
    });
});

