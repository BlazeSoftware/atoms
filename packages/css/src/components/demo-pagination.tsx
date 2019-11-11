import { h, Component } from '@stencil/core';

@Component({
  tag: 'demo-pagination',
})
export class Pagination {
  render() {
    return (
      <section class="u-window-box-super">
        <h2 class="c-heading">Pagination</h2>
        <nav class="c-pagination">
          <button class="c-pagination__control">&lsaquo;</button>
          <div class="c-pagination__pages">
            <button class="c-pagination__control">4</button>
            <button class="c-pagination__control" aria-current="page">
              5
            </button>
            <button class="c-pagination__control">6</button>
          </div>
          <button class="c-pagination__control">&rsaquo;</button>
        </nav>
      </section>
    );
  }
}
