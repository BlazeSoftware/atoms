import { Component, Element, State } from '@stencil/core';

@Component({
  tag: 'blaze-divider',
})
export class Divider {
  @Element()
  el: HTMLElement;

  @State()
  content: boolean;

  componentWillLoad() {
    this.content = !!this.el.innerHTML;
  }

  render() {
    return (
      <div class="c-divider">
        {this.content && (
          <span class="c-divider__content">
            <slot />
          </span>
        )}
      </div>
    );
  }
}
