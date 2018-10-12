import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'blaze-breadcrumb'
})
export class Breadcrumb {
  @Prop()
  href: string;

  render() {
    return (
      <li class="c-breadcrumbs__crumb">
        {this.href ? (
          <a class="c-link" href={this.href}>
            <slot />
          </a>
        ) : (
          <slot />
        )}
      </li>
    );
  }
}
