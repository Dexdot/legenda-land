import { TweenMax, TimelineMax, Power2, Power3, Expo } from 'gsap';

const delay = 0.8;
const dark = '#3A3423';
const light = '#bb971f';

const showHeader = selector => {
  TweenMax.staggerFromTo(
    selector,
    0.6,
    { opacity: 0, x: '9vw' },
    { x: '0%', opacity: 1, delay },
    0.02
  );
};

const showCircle = () => {
  const tmp = { val: 0 };

  TweenMax.fromTo(
    tmp,
    1.2,
    {
      val: 0
    },
    {
      val: 100,
      ease: Expo.easeOut,
      onUpdate: () => {
        TweenMax.set('.circle-path', {
          'stroke-dasharray': `${tmp.val} 100`
        });
      },
      delay
    }
  );
};

const scaleIn = selector => {
  TweenMax.fromTo(
    selector,
    1.8,
    {
      scale: 1.2,
      ease: Power2.easeInOut
    },
    {
      scale: 1,
      ease: Power2.easeInOut,
      delay: delay / 2
    }
  );
};

const coverX = selector => {
  new TimelineMax({
    delay: delay / 1.5
  })
    .to(selector, 1.6, {
      x: '0vw',
      backgroundColor: dark
    })
    .to(
      selector,
      0.4,
      {
        rotationY: 0,
        backgroundColor: light
      },
      '-=1'
    )
    .to(
      selector,
      0.4,
      {
        rotationY: -91,
        backgroundColor: dark
      },
      '-=1.2'
    )
    .to(selector, 0.4, { rotationY: -180, backgroundColor: light }, '-=1.4');
};

const cover = selector => {
  new TimelineMax({
    delay: delay / 1.5
  })
    .to(selector, 1.6, {
      backgroundColor: dark
    })
    .to(
      selector,
      0.4,
      {
        rotationY: 0,
        backgroundColor: light
      },
      '-=1'
    )
    .to(
      selector,
      0.4,
      {
        rotationY: -91,
        backgroundColor: dark
      },
      '-=1.2'
    )
    .to(selector, 0.4, { rotationY: -180, backgroundColor: light }, '-=1.4');
};

export default index => {
  switch (index) {
    case 0:
      // Фотки
      new TimelineMax({
        delay: delay / 2
      })
        .fromTo(
          '.section-1 .image-block--top',
          1.8,
          {
            x: '-30%',
            ease: Power2.easeInOut
          },
          {
            x: '-0%',
            ease: Power2.easeInOut
          }
        )
        .fromTo(
          '.section-1 .image-block--left',
          1.4,
          {
            x: '-50%',
            ease: Power2.easeInOut
          },
          {
            x: '0%',
            ease: Power2.easeInOut
          },
          '-=1.6'
        );

      // Фотки внутри
      scaleIn('.section-1 .image-block--top .image-block__inner');

      // Фотка
      new TimelineMax({
        delay: delay / 2
      })
        .to('.section-1 .image-block--right', 1.2, {
          x: '22%',
          y: '7vh',
          scale: 0.83,
          ease: Power2.easeInOut
        })
        .to(
          '.section-1 .image-block--right .image-block__inner',
          1.4,
          {
            scale: 1.2,
            ease: Power3.easeInOut
          },
          '-=1.2'
        );

      break;

    case 1:
      // Пластинки
      coverX('.section-2 .cover--bottom');
      coverX('.section-2 .cover--top');

      // Фотка внутри
      scaleIn('.section-1 .image-block--right .image-block__inner');

      // Заголовок
      showHeader('.section-2 .letter');
      break;
    case 2:
      // Пластинки
      coverX('.section-3 .cover--bottom');
      coverX('.section-3 .cover--top');

      // Фотка
      TweenMax.fromTo(
        '.section-3 .image-block--bottom',
        1.4,
        {
          x: '-48%',
          ease: Power3.easeInOut
        },
        {
          x: '-25%',
          ease: Power3.easeInOut,
          delay: delay / 2
        }
      );

      // Фотка внутри
      scaleIn(`.section-3 .image-block--bottom .image-block__inner,
        .section-3 .image-block--top .image-block__inner`);

      // Фотка
      TweenMax.fromTo(
        '.section-3 .image-block--top',
        1.4,
        {
          x: '40%',
          ease: Power3.easeInOut
        },
        {
          x: '25%',
          ease: Power3.easeInOut,
          delay: delay / 2
        }
      );

      // Круг
      showCircle();

      // Заголовок
      showHeader('.section-3 .letter');
      break;

    case 3:
      // Заголовок
      showHeader('.section-4 .letter');
      break;

    case 4:
      // Пластинки
      coverX('.section-ardeko .cover--left');
      coverX('.section-ardeko .cover--right');

      // Фотка
      TweenMax.fromTo(
        '.section-ardeko .image-block--left',
        1.4,
        {
          x: '40%',
          ease: Power3.easeInOut
        },
        {
          x: '25%',
          ease: Power3.easeInOut,
          delay: delay / 2
        }
      );

      // Фотка внутри
      scaleIn(`.section-ardeko .image-block--left .image-block__inner,
        .section-ardeko .image-block--right .image-block__inner`);

      // Заголовок
      showHeader('.section-ardeko .letter');
      break;

    case 5:
      // Пластинки
      coverX('.section-5 .cover--left');
      coverX('.section-5 .cover--center');
      coverX('.section-5 .cover--right');
      cover('.section-5 .cover--bottom');

      // Фотка
      TweenMax.fromTo(
        '.section-5 .image-block--bottom',
        1.4,
        {
          x: '-24vw',
          ease: Power3.easeInOut
        },
        {
          x: '-20vw',
          ease: Power3.easeInOut,
          delay: delay / 2
        }
      );

      // Фотка
      TweenMax.fromTo(
        '.section-5 .image-block--top',
        1.4,
        {
          x: '60%',
          ease: Power2.easeInOut
        },
        {
          x: '30%',
          ease: Power2.easeInOut,
          delay: delay / 2
        }
      );

      // Фотки внутри
      scaleIn(`.section-5 .image-block--bottom .image-block__inner,
        .section-5 .image-block--top .image-block__inner`);

      // Заголовок
      showHeader('.section-5 .letter');
      break;

    case 6:
      $('body').addClass('white');
      break;

    case 7:
      // Пластинки
      coverX('.section-7 .cover--right');
      cover('.section-7 .cover--left, .section-7 .cover--center');

      // Фотка
      TweenMax.fromTo(
        '.section-7 .image-block--right',
        1.4,
        {
          x: '68%',
          ease: Power3.easeInOut
        },
        {
          x: '50%',
          ease: Power3.easeInOut,
          delay: delay / 2
        }
      );

      // Фотки внутри
      scaleIn('.section-7 .image-block--left .image-block__inner');

      break;

    case 8:
      // Фотки внутри
      scaleIn('.section-7 .image-block--right .image-block__inner');

      // Пластинки
      cover('.section-8 .cover--outside');

      // Заголовок
      showHeader('.section-8 .letter');
      break;

    default:
      break;
  }
};
