import { h, Component, Event, EventEmitter, Listen, State, Prop } from '@stencil/core';

@Component({
  tag: 'blaze-back-to-top',
})
export class BackToTop {
  @Event({ eventName: 'backtotop' })
  onBackToTop: EventEmitter;

  @State()
  _isOpen: boolean;

  @Prop()
  position: string;

  @Listen('scroll', { target: 'document' })
  enable() {
    this._isOpen = window.scrollY > window.innerHeight;
  }

  goUp() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.onBackToTop.emit();
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
          }}
        >
          <slot />
        </button>
      </div>
    );
  }
}
