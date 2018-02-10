import { Component, Prop, Method, State, Element } from '@stencil/core';

@Component({
  tag: 'blaze-drawer'
})
export class Drawer {

  @Element() elem: HTMLElement;
  @Prop() open: boolean = false;
  @Prop() dismissible: boolean = false;
  @Prop() position: string = 'bottom';
  @State() _isOpen: boolean = false;

  @Method()
  close() {
    this._isOpen = false;
  }

  @Method()
  show() {
    this._isOpen = true;
  }

  @Method()
  isOpen() {
    return this._isOpen;
  }

  componentWillLoad() {
    this._isOpen = this.open;
  }

  dismiss() {
    if (this.dismissible) this.close();
  }

  render() {
    const isOpenClass = this._isOpen ? 'o-drawer--visible' : '';
    const dismissibleOverlayClass = this.dismissible ? 'c-overlay--dismissible' : '';

    return (
      [
        this._isOpen && <div class={`c-overlay c-overlay--visible ${dismissibleOverlayClass}`} onClick={() => this.dismiss()}></div>,
        <div class={`o-drawer o-drawer--${this.position} ${isOpenClass}`}>
          <slot />
        </div>
      ]
    );
  }
}
