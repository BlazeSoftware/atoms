import { h, Component, Event, EventEmitter, Method, Prop, State } from '@stencil/core';

@Component({
  tag: 'blaze-accordion-pane',
})
export class AccordionPane {
  @State()
  _isOpen: boolean = false;

  @Prop()
  open: boolean = false;

  @Prop()
  header: string;

  @Event({ eventName: 'togglepane' })
  onToggle: EventEmitter;

  componentWillLoad() {
    this._isOpen = this.open;
  }

  @Method()
  async show() {
    this._isOpen = true;
  }

  @Method()
  async close() {
    this._isOpen = false;
  }

  toggle() {
    this._isOpen ? this.close() : this.show();
    this.onToggle.emit(this._isOpen);
  }

  @Method()
  async isOpen() {
    return this._isOpen;
  }

  render() {
    const isOpenClass = this._isOpen ? 'c-card__control--active' : '';

    return [
      <button
        role="heading"
        aria-expanded={this._isOpen.toString()}
        class={`c-card__control ${isOpenClass}`}
        onClick={() => this.toggle()}
      >
        {this.header}
      </button>,
      <section aria-hidden={!this._isOpen} class="c-card__item c-card__item--pane">
        <slot />
      </section>,
    ];
  }
}
