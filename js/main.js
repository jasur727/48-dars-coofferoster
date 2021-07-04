var elHeaderSection = document.querySelector('.header')
var elHeaderButton = document.querySelector('.js-header-button');


if (elHeaderButton) {
  elHeaderButton.addEventListener('click', function () {
    elHeaderSection.classList.toggle('header-section--open');
  });
}


// accordion

let elsAccordionButton = document.querySelectorAll('.how__drink--button');

elsAccordionButton.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.how__drink').classList.toggle('how__drink--open')
  })
})