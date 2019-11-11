import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-accordions',
})
export class ComponentsAccordions {
  @Prop()
  name: string;

  render() {
    return (
      <page-template name={this.name}>
        <blaze-demo
          language="html"
          code={`<blaze-accordion>
  <blaze-accordion-pane open header="Click me">
    This is an expanded accordion
  </blaze-accordion-pane>
  <blaze-accordion-pane header="Click me also">
    To toggle other panes
  </blaze-accordion-pane>
  <blaze-accordion-pane header="Click me also">
    To toggle other panes
  </blaze-accordion-pane>
  <blaze-accordion-pane header="Click me also">
    To toggle other panes
  </blaze-accordion-pane>
</blaze-accordion>`}
        />

        <h2 class="c-heading" id="css">
          CSS
        </h2>
        <p class="c-paragraph">
          Accordions are achieved by adding a modifier to a{' '}
          <a href="cards" class="c-link">
            card
          </a>{' '}
          element.
        </p>
        <blaze-demo
          demo={false}
          language="html"
          code={`<div class="c-card c-card--accordion">
  <button role="heading" aria-expanded="true" class="c-card__control">
    Heading one
  </button>
  <section class="c-card__item c-card__item--pane">
    This is the body
  </section>
  <button role="heading" aria-expanded="false" class="c-card__control">
    Heading two
  </button>
  <section class="c-card__item c-card__item--pane">
    This is the second body
  </section>
</div>`}
        />
      </page-template>
    );
  }
}
