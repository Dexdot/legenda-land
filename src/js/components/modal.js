import '../polyfill/assign';
import '../polyfill/from';

$(window).on('DOMContentLoaded', () => {
  window.MicroModal.init({
    awaitCloseAnimation: true
  });
});

$('.image-block[data-micromodal-trigger]').on(
  'click',
  function onModalTriggerClick() {
    const imgModal = $('.m-modal-image')[0];
    const bg = $(this)
      .find('.image-block__inner')[0]
      .style.backgroundImage.replace(/(url\(|\)|")/g, '');

    imgModal.src = bg;
  }
);
