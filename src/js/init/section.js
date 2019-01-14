import Section from '../components/Section';
import onLeave from '../section/leave';
import onEnter from '../section/enter';

let obj = {
  index: 0,
  x: 0
};

const section = new Section({
  selector: '.sections',
  onStart: data => {
    onLeave(obj.index);
    obj = data;
    onEnter(obj.index);
  }
});
