import '../libs/lettering';

// Our selector
const $hook = $('.split-text');

$hook.each((i, el) => {
  $(el)
    .lettering('words')
    .children('.word')
    .lettering();
});
