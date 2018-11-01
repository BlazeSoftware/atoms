import { Component, Listen, State, Prop } from '@stencil/core';

@Component({
  tag: 'blaze-back-to-top',
})
export class BackToTop {
  @State()
  _isOpen: boolean;

  @Prop()
  position: string;

  @Listen('document:scroll')
  enable() {
    this._isOpen = window.scrollY > window.outerHeight;
  }

  goUp() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  render() {
    const visibleCss = !this._isOpen ? 'u-display-none' : '';
    const positionCss = this.position ? `c-back-to-top--${this.position}` : '';

    return (
      <div class={`c-back-to-top ${positionCss} ${visibleCss}`}>
        <button
          class="c-button c-button--nude"
          onClick={() => {
            this.goUp();
          }}>
          <slot />
        </button>
      </div>
    );
  }
}
