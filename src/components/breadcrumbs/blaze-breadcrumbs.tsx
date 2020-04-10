import { h, Component } from '@stencil/core';

@Component({
  tag: 'blaze-breadcrumbs',
})
export class Breadcrumbs {
  render() {
    return (
      <nav>
        <ol class="c-breadcrumbs">
          <slot />
        </ol>
      </nav>
    );
  }
}
