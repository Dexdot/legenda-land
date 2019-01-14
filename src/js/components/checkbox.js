const $checkbox = $('.checkbox');
const $input = $checkbox.find('input');

$checkbox.on('click', function onCheckboxClick() {
  // Animate
  const $this = $(this);
  $this.addClass('checkbox--is-clicked');
  setTimeout(() => {
    $this.removeClass('checkbox--is-clicked');
  }, 300);

  // Hide helper
  if ($(this).find('.checkbox__input')[0].validity.valid) {
    $(this)
      .find('.checkbox__helper')
      .removeClass('visible');
  }
});

$input.on('change', function onInputClick() {
  $(this)
    .closest('.checkbox')
    .toggleClass('checkbox--is-checked');
});
