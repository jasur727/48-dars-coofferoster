var elHeaderSection = document.querySelector('.header');
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
  });
});


var elBtnCreatePlan = document.querySelector(".create__plan");
var elOrderModal = document.querySelector('.order-modal');
elBtnCreatePlan.addEventListener("click", function () {
  elOrderModal.classList.add('order-modal--active');
})

var elOrderModalActiveSection = document.querySelector(".order-modal--active");


elOrderModal.addEventListener("click", function () {
    elOrderModal.classList.remove("order-modal--active");
})