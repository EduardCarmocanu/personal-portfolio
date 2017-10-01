import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[yupScroller]'
})
export class ScrollerDirective {
  
  @Input('targetEl') targetEl: string;
  
  getElementOffset(id) {
    return document.querySelector(id).offsetTop;
  }
  calculateLeap(windowOffset, elementOffset) {
    if (windowOffset < elementOffset) {
      return {
        distance: elementOffset - windowOffset,
        direction: 'S'
      };
    }
    else {
      return {
        distance: windowOffset - elementOffset,
        direction: 'N'
      };
    }
  }

  @HostListener('click') scrollTo() {
  
  const _W = window.pageYOffset;
  const _E = this.getElementOffset(this.targetEl);
  const _L = this.calculateLeap(_W, _E);
  
  let index = _W;
  
  if (_L.direction === 'S') {
    const timer = setInterval(() => {
      index += Math.round(_L.distance / 10 / 10);
      window.scrollTo(0, index);
      if (index > _L.distance + 50) {clearInterval(timer); }
    }, 5);
  }
  else {
    const timer = setInterval(() => {
      index -= Math.round(_L.distance / 10 / 40);
      window.scrollTo(0, index);
      if (index < _L.distance) {clearInterval(timer); }
    }, 5);
  } 

    }
  }
  
  
