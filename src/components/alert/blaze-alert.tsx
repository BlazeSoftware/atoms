import { h, Component, Event, EventEmitter, Method, Prop, State } from '@stencil/core';

@Component({
  tag: 'blaze-alert',
})
export class Alert {
  @Prop()
  type: string = '';

  @Prop()
  dismissible: boolean = false;

  @Prop()
  open: boolean = false;

  @State()
  _isOpen: boolean = false;

  @Event({ eventName: 'close' })
  onClose: EventEmitter;

  @Method()
  async close() {
    this._isOpen = false;
    this.onClose.emit();
  }

  @Method()
  async show() {
    this._isOpen = true;
  }

  @Method()
  async isOpen() {
    return this._isOpen;
  }

  componentWillLoad() {
    this._isOpen = this.open;
  }

  render() {
    const isOpenClass = !this._isOpen ? 'u-display-none' : '';
    const typeClass = this.type ? `c-alert--${this.type}` : '';

    return (
      <div role="alert" hidden={!this._isOpen} class={`c-alert ${typeClass} ${isOpenClass}`}>
        {this.dismissible && (
          <button class="c-button c-button--close" onClick={() => this.close()}>
            &times;
          </button>
        )}
        <slot />
      </div>
    );
  }
}
