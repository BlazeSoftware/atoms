import { Component, Method, Prop, State } from '@stencil/core';

@Component({
  tag: 'blaze-alert'
})
export class Alert {

  @Prop() type: string;
  @State() isOpen: boolean = true;

  @Method()
  close() {
    this.isOpen = false;
  }

  @Method()
  open() {
    this.isOpen = true;
  }

  render() {
    return (
      this.isOpen &&
      <div class={`c-text c-alert c-alert--${this.type}`}>
        <button class="c-button c-button--close" onClick={() => this.close()}>
          &times;
        </button>
        <slot/>
      </div>
    );
  }
}
