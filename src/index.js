const buttons = document.querySelectorAll('.join__button');
const info = document.querySelectorAll('.join__moreifo');
const closeButtons = document.querySelectorAll('.join__close');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', (e) => {
    info[i].classList.toggle('join__moreifo--active');
    buttons[i].classList.toggle('join__button--hide');
    closeButtons[i].classList.toggle('join__close--visible');
  });
};

for (let i = 0; i < buttons.length; i++) {
  closeButtons[i].addEventListener('click', (e) => {
    info[i].classList.remove('join__moreifo--active');
    closeButtons[i].classList.remove('join__close--visible');
    buttons[i].classList.remove('join__button--hide');
  });
};