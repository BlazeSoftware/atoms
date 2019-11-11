import { h, Component } from '@stencil/core';

@Component({
  tag: 'demo-breadcrumbs',
})
export class Breadcrumbs {
  render() {
    return (
      <section class="u-window-box-super">
        <h2 class="c-heading">Breadcrumbs</h2>
        <nav aria-label="Breadcrumb">
          <ol class="c-breadcrumbs">
            <li class="c-breadcrumbs__crumb">
              <a class="c-link">Home</a>
            </li>
            <li class="c-breadcrumbs__crumb">
              <a class="c-link">Cars</a>
            </li>
            <li class="c-breadcrumbs__crumb">
              <a class="c-link">Electric</a>
            </li>
            <li class="c-breadcrumbs__crumb">
              <a class="c-link">Tesla</a>
            </li>
            <li class="c-breadcrumbs__crumb" aria-current="page">
              P100d
            </li>
          </ol>
        </nav>
      </section>
    );
  }
}
