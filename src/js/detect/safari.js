const safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

if (safari) {
  $('html').addClass('safari');
}

export default safari;
