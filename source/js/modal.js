let modal = document.querySelector('.modal');
let modalReview = document.querySelector('.modal--review')
let modalButton = document.querySelector('.modal__button');
let modalButtonReview = document.querySelector('.modal__button--review');
let modalFieldset = document.querySelector('.fieldset__button');

modalButton.addEventListener('click', function () {
  modal.classList.add('modal--close');
});

modalButtonReview.addEventListener('click', function () {
  modalReview.classList.add('modal--close');
});

modalFieldset.addEventListener('click', function () {
  modalReview.classList.remove('modal--close');
});
