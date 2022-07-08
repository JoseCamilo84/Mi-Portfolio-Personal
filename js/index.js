/* ============== (Mostrar - Ocultar) Menú ============== */

const navToggle = document.getElementById('nav-toggle'),
    navMenu = document.getElementById('nav-menu'),
    navClose = document.getElementById('nav-close'),
    navItem = document.querySelectorAll('.nav_item');

navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-me');
});

navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-me');
});

navItem.forEach(item => item.addEventListener('click', () => {
    navMenu.classList.remove('show-me');
}));


/* ============== SKILLS (Habilidades) ============== */
const skillsHeader = document.querySelectorAll('.skills_header');

skillsHeader.forEach((elm, index) =>
    elm.addEventListener('click', () => {
        let skillsClassParent = skillsHeader[index].parentNode.className;

        console.log(skillsClassParent);// Las clases del Nodo Padre

        skillsClassParent === 'skills_content skills_open'
            ? skillsHeader[index].parentNode.className = 'skills_content skills_close'
            : skillsHeader[index].parentNode.className = 'skills_content skills_open';
    })
);

/* ============== VENTANA MODAL ============== */
const modalBtns = document.querySelectorAll('.services_button'),
    modalWindows = document.querySelectorAll('.services_modal'),
    modalClose = document.querySelectorAll('.services_modal-close');

modalBtns.forEach((ele, index) => {
    ele.addEventListener('click', () => {
        modalWindows[index].classList.add('active-modal');
    });
});

modalClose.forEach((ele, index) => {
    ele.addEventListener('click', () => {
        modalWindows[index].classList.remove('active-modal');
    });
});
