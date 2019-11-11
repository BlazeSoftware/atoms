import { h, Component } from '@stencil/core';

@Component({
  tag: 'demo-accordion',
})
export class Accordion {
  render() {
    return (
      <section class="u-window-box-super">
        <h2 class="c-heading">Accordion</h2>
        <div class="c-card c-card--accordion">
          <button role="heading" aria-expanded="true" class="c-card__control">
            Heading one
          </button>
          <section class="c-card__item c-card__item--pane">This is the body</section>
          <button role="heading" aria-expanded="false" class="c-card__control">
            Heading two
          </button>
          <section class="c-card__item c-card__item--pane">This is the second body</section>
        </div>
      </section>
    );
  }
}
