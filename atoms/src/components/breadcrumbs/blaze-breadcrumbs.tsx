import { Component, Element } from '@stencil/core';

@Component({
  tag: 'blaze-breadcrumbs'
})
export class Breadcrumbs {

  @Element() el: HTMLElement;

  componentDidLoad() {
    const lastCrumb = this.el.querySelector('blaze-breadcrumb:last-child .c-breadcrumbs__crumb');

    if (lastCrumb) {
      lastCrumb.classList.add('c-breadcrumb__crumb--last');
    }
  }

  render() {
    return (
      <ol class="c-breadcrumbs">
        <slot />
      </ol>
    );
  }
}
