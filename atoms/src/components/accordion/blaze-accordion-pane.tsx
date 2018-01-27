import { Component, Method, Prop, State } from '@stencil/core';

@Component({
  tag: 'blaze-accordion-pane'
})

export class AccordionPane {

  @State() _isOpen: boolean = false;
  @Prop() open: boolean = false;
  @Prop() header: string;

  componentWillLoad() {
    this._isOpen = this.open;
  }

  @Method()
  show() {
    this._isOpen = true;
  }

  @Method()
  close() {
    this._isOpen = false;
  }

  toggle() {
    this._isOpen ? this.close() : this.show();
  }

  @Method()
  isOpen() {
    return this._isOpen;
  }

  render() {
    const isOpenClass = this._isOpen ? 'c-card__item--active' : '';

    return ([
      <div class={`c-card__item c-card__item--title ${isOpenClass}`} onClick={() => this.toggle()}>
        {this.header}
      </div>,
      <div class="c-card__item c-card__item--pane">
        <slot />
      </div>
    ]);
  }
}
