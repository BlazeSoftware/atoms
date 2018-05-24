import { Component, Prop, Method, State, Element } from '@stencil/core';

@Component({
  tag: 'blaze-modal'
})
export class Modal {

  @Element() elem: HTMLElement;
  @Prop() ghost: boolean = false;
  @Prop() full: boolean = false;
  @Prop() open: boolean = false;
  @Prop() dismissible: boolean = false;
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
    const ghostClass = this.ghost ? `o-modal--ghost` : '';
    const fullClass = this.full ? `o-modal--full` : '';
    const modalIsOpenClass = this._isOpen ? 'o-modal--visible' : '';

    return (
      [
        <blaze-overlay aria-hidden open={this._isOpen} onClick={() => this.dismiss()}></blaze-overlay>,
        <div role="dialog" class={`o-modal ${ghostClass} ${fullClass} ${modalIsOpenClass}`}>
          {
            this.dismissible &&
            <button type="button" class="c-button c-button--close" onClick={() => this.close()}>
              &times;
            </button>
          }
          <slot />
        </div>
      ]
    );
  }
}
