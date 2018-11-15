import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'page-template',
})
export class PageTemplate {
  @Prop()
  name: string;

  componentWillLoad() {
    if (this.name) {
      document.title = `${this.name}`;
    }
  }

  render() {
    return (
      <section class="o-container o-container--large u-pillar-box-medium">
        <site-links />
        <main>
          <h1 class="c-heading u-super">{this.name}</h1>
          <slot name="intro" />
          <carbon-ad />
          <slot />
        </main>
      </section>
    );
  }
}
