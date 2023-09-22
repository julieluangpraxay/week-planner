const $button = document.querySelector('.open-modal');
const $modal = document.querySelector('.container-modal');

$button.addEventListener('click', function (event) {
  $modal.classList.remove('hidden');
});

const $openModal = document.querySelector('.open-modal');
const $popup = document.querySelector('.popup');
const $grayBackground = document.querySelector('.gray-background');

$openModal.addEventListener('click', function () {
  $popup.classList.remove('hidden');
  $grayBackground.classList.remove('hidden');
});

const $form = document.querySelector('form');
const $input = document.querySelector('input');
const $time = document.querySelector('.time-event');
const $day = document.querySelectorAll('.form-select');
const $eventInfo = document.querySelector('.event-info');

$form.addEventListener('submit', function (event) {
  event.preventDefault();

  const time = $form.elements.time.value;
  const day = $form.elements.day.value;
  const eventInfo = $form.elements.eventInfo.value;

  const tableData = {
    time: [],
    day: [],
    eventInfo: []
  };
});
