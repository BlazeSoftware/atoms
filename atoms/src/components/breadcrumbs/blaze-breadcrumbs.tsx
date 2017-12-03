import { Component, Element, State } from '@stencil/core';

@Component({
  tag: 'blaze-breadcrumbs'
})
export class Breadcrumbs {
  @Element() el: HTMLElement;

  @State() empty: boolean = false;

  componentDidLoad() {
    if (!this.el.querySelector('blaze-breadcrumb')) {
      return this.empty = true;
    }

    const lastCrumb = this.el.querySelector('blaze-breadcrumb:last-child .c-breadcrumbs__crumb');

    if (lastCrumb) {
      lastCrumb.classList.add('c-breadcrumb__crumb--last');
    }
  }

  render() {
    return (
      !this.empty && <ol class="c-text c-breadcrumbs">
        <slot />
      </ol>
    );
  }
}
