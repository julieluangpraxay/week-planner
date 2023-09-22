const $button = document.querySelector('.open-modal');
const $modal = document.querySelector('.container-modal');

$button.addEventListener('click', function (event) {
  console.log('button', $button);
  $modal.classList.remove('hidden');
});

const $openModal = document.querySelector('.open-modal');
const $popup = document.querySelector('.popup');
const $grayBackground = document.querySelector('.gray-background');

$openModal.addEventListener('click', function () {
  $popup.classList.remove('hidden');
  $grayBackground.classList.remove('hidden');
});
