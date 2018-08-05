import { Component, Method, Prop, State } from '@stencil/core';

@Component({
  tag: 'blaze-overlay'
})
export class Overlay {

  @Prop() open: boolean;
  @Prop() dismissible: boolean = false;
  @Prop() transparent: boolean = false;
  @Prop() fullpage: boolean = false;
  @State() _isOpen: boolean = false;

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

  @Method()
  isOpen() {
    return this._isOpen;
  }

  dismiss() {
    if (this.dismissible) {
      this.close();
    }
  }

  render() {
    const openClass = this._isOpen ? 'c-overlay--visible' : '';
    const dismissibleClass = this.dismissible ? 'c-overlay--dismissible' : '';
    const transparentClass = this.transparent ? 'c-overlay--transparent' : '';
    const fullpageClass = this.fullpage ? 'c-overlay--fullpage' : '';

    return (
      <div aria-hidden
           onClick={() => this.dismiss()}
           class={`c-overlay ${openClass} ${dismissibleClass} ${transparentClass} ${fullpageClass}`}></div>
    );
  }
}
