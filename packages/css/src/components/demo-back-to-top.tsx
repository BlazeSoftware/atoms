import { Component } from '@stencil/core';

@Component({
  tag: 'demo-back-to-top',
})
export class BackToTop {
  render() {
    return (
      <section class="u-window-box-super">
        <h2 class="c-heading">Back to top</h2>
        <div class="c-back-to-top">
          <button class="c-button c-button--ghost c-button--info">
            <i class="fas fa-angle-double-up" />
          </button>
        </div>
      </section>
    );
  }
}
