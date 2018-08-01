import { Component, Element } from '@stencil/core';

@Component({
  tag: 'blaze-breadcrumbs'
})
export class Breadcrumbs {

  @Element() el: HTMLElement;

  componentDidLoad() {
    const lastCrumb = this.el.querySelector('blaze-breadcrumb:last-child .c-breadcrumbs__crumb');

    if (lastCrumb) {
      lastCrumb.setAttribute('aria-current', 'true');
    }
  }

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
