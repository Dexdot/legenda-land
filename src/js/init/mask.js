import '../libs/inputmask';

$(document).ready(() => {
  const $phone = $('.mask-phone');

  if ($phone) {
    $phone.inputmask('+7(999)999-99-99');
  }
});
