import { h, Component, Event, EventEmitter, Prop, Method, Element } from '@stencil/core';

@Component({
  tag: 'blaze-modal',
})
export class Modal {
  @Element()
  elem: HTMLElement;

  @Prop()
  ghost: boolean = false;

  @Prop()
  full: boolean = false;

  @Prop({ mutable: true, reflect: true })
  open: boolean = false;

  @Prop()
  dismissible: boolean = false;

  @Prop()
  shouldClose: () => boolean;

  @Event({ eventName: 'close' })
  onClose: EventEmitter;

  @Method()
  async close() {
    if (!this.shouldClose || this.shouldClose()) {
      this.open = false;
      this.onClose.emit();
    }
  }

  @Method()
  async show() {
    this.open = true;
  }

  @Method()
  async isOpen() {
    return this.open;
  }

  dismiss() {
    if (this.dismissible) this.close();
  }

  render() {
    const ghostClass = this.ghost ? `o-modal--ghost` : '';
    const fullClass = this.full ? `o-modal--full` : '';
    const modalIsOpenClass = this.open ? 'o-modal--visible' : '';
    const overlayIsOpenClass = this.open ? 'c-overlay--visible' : '';

    return [
      <div aria-hidden onClick={() => this.dismiss()} class={`c-overlay c-overlay--fullpage ${overlayIsOpenClass}`} />,
      <div role="dialog" class={`o-modal ${ghostClass} ${fullClass} ${modalIsOpenClass}`}>
        {this.dismissible && (
          <button type="button" class="c-button c-button--close" onClick={() => this.close()}>
            &times;
          </button>
        )}
        <slot />
      </div>,
    ];
  }
}
