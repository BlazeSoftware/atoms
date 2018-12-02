import { Component } from '@stencil/core';

@Component({
  tag: 'demo-trees',
})
export class Trees {
  render() {
    return (
      <section class="u-window-box-super">
        <h2 class="c-heading">Trees</h2>
        <div role="tree" class="c-tree">
          <button role="treeitem" aria-expanded="false" class="c-tree__item">
            Directory 1
          </button>
          <button role="treeitem" aria-expanded="false" class="c-tree__item">
            Directory 2
          </button>
          <button role="treeitem" aria-expanded="true" class="c-tree__item">
            Directory 3
          </button>
          <div role="tree" class="c-tree">
            <span role="treeitem" class="c-tree__item">
              File 1
            </span>
            <span role="treeitem" class="c-tree__item">
              File 2
            </span>
            <span role="treeitem" class="c-tree__item">
              File 3
            </span>
            <span role="treeitem" class="c-tree__item">
              File 4
            </span>
            <span role="treeitem" class="c-tree__item">
              File 5
            </span>
          </div>
          <button role="treeitem" aria-expanded="false" class="c-tree__item">
            Directory 4
          </button>
          <div role="tree" class="c-tree">
            <span role="treeitem" class="c-tree__item">
              File 1
            </span>
            <span role="treeitem" class="c-tree__item">
              File 2
            </span>
            <span role="treeitem" class="c-tree__item">
              File 3
            </span>
          </div>
          <button role="treeitem" aria-expanded="false" class="c-tree__item">
            Directory 5
          </button>
          <button role="treeitem" aria-expanded="true" class="c-tree__item">
            Directory 6
          </button>
          <div role="tree" class="c-tree">
            <span role="treeitem" class="c-tree__item u-text--quiet">
              (empty)
            </span>
          </div>
        </div>
      </section>
    );
  }
}
