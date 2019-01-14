import { TweenMax, TimelineMax, Power2, Power3, Expo } from 'gsap';

const delay = 0.8;
const dark = '#3A3423';
const light = '#bb971f';

const hideHeader = selector => {
  TweenMax.staggerFromTo(
    selector,
    1.2,
    { x: '0%', opacity: 1 },
    { x: '-9vw', opacity: 0, delay: delay / 4 },
    0.02
  );
};

const hideCircle = () => {
  const tmp = { val: 100 };
  TweenMax.fromTo(
    tmp,
    1.2,
    {
      val: 100
    },
    {
      val: 0,
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

const scaleOut = selector => {
  TweenMax.fromTo(
    selector,
    1.4,
    {
      scale: 1,
      ease: Power3.easeInOut
    },
    {
      scale: 1.2,
      ease: Power3.easeInOut
    }
  );
};

const coverX = selector => {
  new TimelineMax()
    .to(selector, 1.6, {
      backgroundColor: light
    })
    .to(
      selector,
      0.4,
      {
        rotationY: -91,
        backgroundColor: dark
      },
      '-=1'
    )
    .to(
      selector,
      0.4,
      {
        backgroundColor: light
      },
      '-=1.2'
    )
    .to(selector, 0.4, { rotationY: 180, backgroundColor: dark }, '-=1.4');
};
const cover = selector => {
  new TimelineMax()
    .to(selector, 1.6, {
      backgroundColor: light
    })
    .to(
      selector,
      0.4,
      {
        rotationY: -91,
        backgroundColor: dark
      },
      '-=1'
    )
    .to(
      selector,
      0.4,
      {
        backgroundColor: light
      },
      '-=1.2'
    )
    .to(selector, 0.4, { rotationY: 180, backgroundColor: dark }, '-=1.4');
};

export default index => {
  switch (index) {
    case 0:
      // Фотки
      new TimelineMax()
        .fromTo(
          '.section-1 .image-block--top',
          1.8,
          {
            x: '0%',
            ease: Power2.easeInOut
          },
          {
            x: '-30%',
            ease: Power2.easeInOut
          }
        )
        .fromTo(
          '.section-1 .image-block--left',
          1.4,
          {
            x: '0%',
            ease: Power2.easeInOut
          },
          {
            x: '-50%',
            ease: Power2.easeInOut
          },
          '-=1.6'
        );

      // Фотка внутри
      scaleOut('.section-1 .image-block--top .image-block__inner');

      // Фотка
      new TimelineMax({
        delay: delay / 2
      })
        .to('.section-1 .image-block--right', 1.2, {
          x: '125%',
          y: '-12vh',
          scale: 1,
          ease: Power2.easeInOut
        })
        .to(
          '.section-1 .image-block--right .image-block__inner',
          1.4,
          {
            scale: 1,
            ease: Power3.easeInOut
          },
          '-=1.2'
        );
      break;

    case 1:
      // Пластинки
      coverX('.section-2 .cover--bottom');
      coverX('.section-2 .cover--top');

      // Фотка
      TweenMax.to('.section-1 .image-block--right .image-block__inner', 1.4, {
        scale: 1.3,
        ease: Power3.easeInOut
      });

      // Заголовок
      hideHeader('.section-2 .letter');
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
          x: '-25%',
          ease: Power3.easeInOut
        },
        {
          x: '-48%',
          ease: Power3.easeInOut
        }
      );

      // Фотка внутри
      scaleOut(`.section-3 .image-block--bottom .image-block__inner,
        .section-3 .image-block--top .image-block__inner`);

      // Фотка
      TweenMax.fromTo(
        '.section-3 .image-block--top',
        1.4,
        {
          x: '25%',
          ease: Power3.easeInOut
        },
        {
          x: '40%',
          ease: Power3.easeInOut
        }
      );

      // Круг
      hideCircle();

      // Заголовок
      hideHeader('.section-3 .letter');
      break;

    case 3:
      // Заголовок
      hideHeader('.section-4 .letter');
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
          x: '25%',
          ease: Power3.easeInOut
        },
        {
          x: '40%',
          ease: Power3.easeInOut
        }
      );

      // Фотка внутри
      scaleOut(`.section-ardeko .image-block--left .image-block__inner,
        .section-ardeko .image-block--right .image-block__inner`);

      hideHeader('.section-ardeko .letter');
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
          x: '-20vw',
          ease: Power3.easeInOut
        },
        {
          x: '-24vw',
          ease: Power3.easeInOut
        }
      );

      // Фотка
      TweenMax.fromTo(
        '.section-5 .image-block--top',
        1.4,
        {
          x: '30%',
          ease: Power3.easeInOut
        },
        {
          x: '60%',
          ease: Power3.easeInOut,
          delay: delay / 2
        }
      );

      // Фотка внутри
      scaleOut(`.section-5 .image-block--bottom .image-block__inner,
        .section-5 .image-block--top .image-block__inner`);

      // Заголовок
      hideHeader('.section-5 .letter');
      break;

    case 6:
      $('body').removeClass('white');
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
          x: '50%',
          ease: Power3.easeInOut
        },
        {
          x: '68%',
          ease: Power3.easeInOut
        }
      );

      // Фотки внутри
      scaleOut('.section-7 .image-block--left .image-block__inner');
      break;

    case 8:
      // Пластинки
      cover('.section-8 .cover--outside');

      // Фотки внутри
      scaleOut('.section-7 .image-block--right .image-block__inner');

      // Заголовок
      hideHeader('.section-8 .letter');
      break;

    default:
      break;
  }
};
