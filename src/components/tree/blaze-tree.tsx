import { h, Component } from '@stencil/core';

@Component({
  tag: 'blaze-tree',
})
export class Tree {
  render() {
    return (
      <div role="tree" class="c-tree">
        <slot />
      </div>
    );
  }
}
