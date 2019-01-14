import { TimelineMax, Power2 } from 'gsap';

const z = $('html').hasClass('safari') ? '' : '-30vw';

export default onComplete => {
  if (window.innerWidth > 900) {
    new TimelineMax({
      onComplete
    })
      .staggerFrom(
        '.section-1 .image-block--left, .section-1 .image-block--top, .section-1 .i-logo, .section-1 .image-block--right',
        1.6,
        {
          z,
          perspective: '1000px',
          scale: 0,
          x: '100vw',
          ease: Power2.easeInOut
        },
        0.075
      )
      .staggerFromTo(
        '.section-1 .image-block--left, .section-1 .image-block--top, .section-1 .i-logo, .section-1 .image-block--right',
        2,
        {
          opacity: 0
        },
        {
          opacity: 1
        },
        0.075,
        '-=1.6'
      );
  } else {
    onComplete();
  }
};
