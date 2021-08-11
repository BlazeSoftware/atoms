import { h, Component } from '@stencil/core';

@Component({
  tag: 'blaze-tree-leaf',
})
export class TreeLeaf {
  render() {
    return (
      <span role="treeitem" class="c-tree__item">
        <slot />
      </span>
    );
  }
}
