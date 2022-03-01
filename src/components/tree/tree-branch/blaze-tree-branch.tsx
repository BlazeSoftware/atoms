import { h, Component, Event, EventEmitter, State, Method } from '@stencil/core';

@Component({
  tag: 'blaze-tree-branch',
})
export class TreeBranch {
  @State()
  expanded: boolean = false;

  @Event({ eventName: 'expand' })
  onExpand: EventEmitter;

  @Event({ eventName: 'collapse' })
  onCollapse: EventEmitter;

  toggleExpanded() {
    this.expanded = !this.expanded;
    if (this.expanded) this.onExpand.emit();
    else this.onCollapse.emit();
  }

  @Method()
  async expand() {
    this.expanded = true;
  }

  @Method()
  async collapse() {
    this.expanded = false;
  }

  render() {
    return [
      <button
        role="treeitem"
        aria-expanded={this.expanded.toString()}
        class="c-tree__item"
        onClick={() => this.toggleExpanded()}
      >
        <slot name="branch" />
      </button>,
      <div role="tree" class="c-tree">
        <slot name="leaf" />
      </div>,
    ];
  }
}
