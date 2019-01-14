import { TweenMax, TimelineMax, Power2 } from 'gsap';
import WheelIndicator from 'wheel-indicator';

export default class Section {
  constructor({ selector, onStart }) {
    this.DOM = { $container: $(selector) };
    [this.DOM.container] = this.DOM.$container;
    this.DOM.slides = this.DOM.container.querySelectorAll('.section');
    this.containerWidth = this.DOM.slides.length * window.innerWidth;

    this.onStartCallback = onStart;

    this.duration = 1.6;
    // this.duration = 0.2;
    this.index = 0;
    this.x = 0;
    this.ease = Power2.easeInOut;
    this.tl = new TimelineMax();

    this.createSteps();
    this.initEvents();
  }

  createSteps() {
    this.steps = [];

    for (let i = 0; i < this.DOM.slides.length; i++) {
      // this.steps.push(i * window.innerWidth);
      if (i === 0) {
        this.steps.push(0);
      } else {
        const slide = this.DOM.slides[i];
        const margin = this.getMargin(slide, 'left');
        const value = window.innerWidth + margin + this.steps[i - 1];

        this.steps.push(value);
      }
    }
  }

  initEvents() {
    // Wheel
    this.indicator = new WheelIndicator({
      elem: this.DOM.container,
      callback: e => {
        this.onWheel(e.direction);
      }
    });

    // Resize
    window.addEventListener('resize', this.createSteps.bind(this));
    $(window).on('load resize', () => {
      this.indicator.setOptions({
        preventMouse: window.innerWidth > 900
      });
    });
  }

  canAnimate() {
    return !TweenMax.isTweening(this.DOM.container) && window.innerWidth > 900;
  }

  onWheel(dir) {
    if (dir === 'down') {
      if (this.index !== this.DOM.slides.length - 1) this.next();
    } else if (dir === 'up') {
      if (this.index !== 0) this.prev();
    }
  }

  prev() {
    if (this.canAnimate()) {
      this.index -= 1;
      this.animate();
    }
  }

  next() {
    if (this.canAnimate()) {
      this.index += 1;
      this.animate();
    }
  }

  animate() {
    this.x = this.steps[this.index];
    this.onStart();

    this.tl.to(this.DOM.container, this.duration, {
      x: `${-1 * this.x}px`,
      ease: this.ease
    });
  }

  onStart() {
    this.onStartCallback({ index: this.index, x: this.x });
  }

  getMargin = (el, side) =>
    +$(el)
      .css(`margin-${side}`)
      .split('px')[0];
}
