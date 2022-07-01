/* ============== (Mostrar - Ocultar) Menú ============== */

const navToggle = document.getElementById('nav-toggle'),
  navMenu = document.getElementById('nav-menu'),
  navClose = document.getElementById('nav-close'),
  navItem = document.querySelectorAll('.nav__item');

navToggle.addEventListener('click', () => {
  navMenu.classList.add('show-me');
});

navClose.addEventListener('click', () => {
  navMenu.classList.remove('show-me');
});

navItem.forEach(item => item.addEventListener('click', () => {
  navMenu.classList.remove('show-me');
}));


/* ============== SKILLS ============== */
const skillsHeader = document.querySelectorAll('.skills__header');

skillsHeader.forEach((elm, index) =>
  elm.addEventListener('click', () => {
    let accordion = skillsHeader[index].parentNode.className;

    accordion === 'skills__content skills__open'
      ? skillsHeader[index].parentNode.className = 'skills__content skills__close'
      : skillsHeader[index].parentNode.className = 'skills__content skills__open'
  })
);

/* ============== VENTANA MODAL ============== */
const modalBtns = document.querySelectorAll('.services__button'),
  modalWindows = document.querySelectorAll('.services__modal'),
  modalClose = document.querySelectorAll('.services__modal-close');

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

/* ============== SWIPER CARROUSEL ============== */
