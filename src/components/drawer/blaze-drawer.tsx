import { h, Component, Event, EventEmitter, Prop, Method, State } from '@stencil/core';

@Component({
  tag: 'blaze-drawer',
})
export class Drawer {
  @Prop()
  open: boolean = false;

  @Prop()
  dismissible: boolean = false;

  @Prop()
  position: string = 'bottom';

  @Prop()
  shouldClose: () => boolean;

  @State()
  _isOpen: boolean = false;

  @Event({ eventName: 'close' })
  onClose: EventEmitter;

  @Method()
  async close() {
    if (!this.shouldClose || this.shouldClose()) {
      this._isOpen = false;
      this.onClose.emit();
    }
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

  dismiss() {
    if (this.dismissible) this.close();
  }

  render() {
    const drawerIsOpenClass = this._isOpen ? 'o-drawer--visible' : '';
    const overlayIsOpenClass = this._isOpen ? 'c-overlay--visible' : '';

    return [
      <div
        aria-hidden="true"
        onClick={() => this.dismiss()}
        class={`c-overlay c-overlay--fullpage ${overlayIsOpenClass}`}
      />,
      <aside aria-expanded={this.isOpen.toString()} class={`o-drawer o-drawer--${this.position} ${drawerIsOpenClass}`}>
        <slot />
      </aside>,
    ];
  }
}
