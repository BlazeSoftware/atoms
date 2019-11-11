import { h, Component, Prop } from '@stencil/core';

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
      <main>
        <h1 class="c-heading u-super">{this.name}</h1>
        <slot name="intro" />
        <slot />
      </main>
    );
  }
}
