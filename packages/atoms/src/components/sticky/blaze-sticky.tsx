import { h, Component, Listen, Element, State, Prop } from '@stencil/core';

@Component({
  tag: 'blaze-sticky',
})
export class Sticky {
  @Element()
  elem: HTMLElement;

  @Prop()
  top: number = 0;

  @State()
  staticStyles: any;

  @State()
  stickyStyles: any;

  dimensions: ClientRect;
  offsetTop: number;

  componentWillUpdate() {
    this.positionElement();
  }

  @Listen('resize', { target: 'window' })
  @Listen('scroll', { target: 'document' })
  positionElement() {
    this.dimensions = this.elem.children[0].getBoundingClientRect();
    this.offsetTop = this.dimensions.top + window.scrollY;

    if (this.offsetTop - window.scrollY - this.top <= 0) {
      this.staticStyles = {
        width: `${this.dimensions.width}px`,
        height: `${this.dimensions.height}px`,
      };
      this.stickyStyles = {
        position: 'fixed',
        top: `${this.top}px`,
        left: `${this.dimensions.left}px`,
        width: `${this.dimensions.width}px`,
      };
    } else {
      this.staticStyles = {};
      this.stickyStyles = {};
    }
  }

  render() {
    return (
      <div style={this.staticStyles}>
        <div style={this.stickyStyles}>
          <slot />
        </div>
      </div>
    );
  }
}
