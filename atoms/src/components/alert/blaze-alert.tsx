import { Component, Method, Prop, State } from '@stencil/core';

@Component({
  tag: 'blaze-alert'
})
export class Alert {

  @Prop() type: string;
  @Prop() dismissable: boolean = true;
  @State() _isOpen: boolean = true;

  @Method()
  close() {
    this._isOpen = false;
  }

  @Method()
  open() {
    this._isOpen = true;
  }

  @Method()
  isOpen() {
    return this._isOpen;
  }

  render() {
    return (
      this._isOpen &&
      <div class={`c-text c-alert c-alert--${this.type}`}>
        {
          this.dismissable && <button class="c-button c-button--close" onClick={() => this.close()}>
            &times;
          </button>
        }
        <slot/>
      </div>
    );
  }
}
