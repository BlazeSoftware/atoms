import { Component, Method, Prop, State } from '@stencil/core';

@Component({
  tag: 'blaze-accordion-pane'
})

export class AccordionPane {

  @State() expanded: boolean;
  @Prop() header: string;

  @Method()
  close() {
    this.expanded = false;
  }

  @Method()
  open() {
    this.expanded = true;
  }

  render() {
    const expandedClass = this.expanded ? 'c-card__item--active' : '';

    return ([
      <div class={`c-card__item c-card__item--title ${expandedClass}`} onClick={() => this.expanded = !this.expanded}>
        {this.header}
      </div>,
      <div class="c-card__item c-card__item--pane">
        <slot />
      </div>
    ]);
  }
}
