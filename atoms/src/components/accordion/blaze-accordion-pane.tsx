import { Component, Method, Prop, State } from '@stencil/core';

@Component({
  tag: 'blaze-accordion-pane'
})

export class AccordionPane {

  @State() _expanded: boolean = false;
  @Prop() expanded: boolean = false;
  @Prop() header: string;

  componentWillLoad() {
    this._expanded = this.expanded;
  }

  @Method()
  expand() {
    this._expanded = true;
  }

  @Method()
  collapse() {
    this._expanded = false;
  }

  toggle() {
    this._expanded ? this.collapse() : this.expand();
  }

  @Method()
  isExpanded() {
    return this._expanded;
  }

  render() {
    const cssClasses = this._expanded ? 'c-card__item--active' : '';

    return ([
      <div class={`c-card__item c-card__item--title ${cssClasses}`} onClick={() => this.toggle()}>
        {this.header}
      </div>,
      <div class="c-card__item c-card__item--pane">
        <slot />
      </div>
    ]);
  }
}
