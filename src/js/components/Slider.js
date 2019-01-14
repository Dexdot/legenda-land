export default class Slider {
  init() {
    this.$slides = $('.slider .slide');
    this.$prev = $('.slider-nav__btn--prev');
    this.$next = $('.slider-nav__btn--next');
    this.$current = $('.slider-nav__num--current');
    this.$length = $('.slider-nav__num--length');

    this.index = 0;
    this.$activeSlide = this.$slides.eq(this.index);

    this.initEvents();
    this.setCurrentIndex();
    this.setSlidesLength();
  }

  initEvents() {
    const self = this;

    this.$prev.on('click', () => {
      self.prev();
    });

    this.$next.on('click', () => {
      self.next();
    });
  }

  prev() {
    // Update index
    if (this.index <= 0) {
      this.index = this.$slides.length - 1;
    } else {
      this.index = this.index - 1;
    }

    this.setCurrentIndex();

    this.hideActiveSlide();

    this.updateActiveSlide();

    // Show new active slide
    this.showSlide();
  }

  next() {
    // Update index
    if (this.index === this.$slides.length - 1) {
      this.index = 0;
    } else {
      this.index = this.index + 1;
    }

    this.setCurrentIndex();

    this.hideActiveSlide();

    this.updateActiveSlide();

    // Show new active slide
    this.showSlide();
  }

  updateActiveSlide() {
    // Update active slide
    this.$activeSlide = this.$slides.eq(this.index);
  }

  hideActiveSlide() {
    // Прячем слайд
    this.$activeSlide.removeClass('is-active');
  }

  showSlide() {
    this.$activeSlide.addClass('is-active');
  }

  setCurrentIndex() {
    const i = this.index + 1;

    if (i < 10) {
      this.$current.text(`00${i}`);
    } else {
      this.$current.text(i);
    }
  }

  setSlidesLength = () => {
    const { length } = this.$slides;

    if (length < 10) {
      this.$length.text(`00${length}`);
    } else {
      this.$length.text(length);
    }
  };
}
