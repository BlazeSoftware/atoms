import { Component } from '@stencil/core';

@Component({
  tag: 'demo-navs',
})
export class Navs {
  render() {
    return (
      <section class="u-window-box-super">
        <h2 class="c-heading">Navs</h2>
        <div class="o-grid o-grid--no-gutter">
          <div class="o-grid__cell o-grid__cell--width-50">
            <nav class="c-nav">
              <span class="c-nav__content u-centered u-super">
                <i aria-hidden class="fas fa-fire" />
              </span>
              <a href="#" class="c-nav__item">
                <i aria-hidden class="fas fa-home" /> Home
              </a>
              <a href="#" class="c-nav__item">
                <i aria-hidden class="fas fa-star" /> News
              </a>
              <a href="#" class="c-nav__item">
                <i aria-hidden class="fas fa-life-ring" /> Help
              </a>
              <a href="#" class="c-nav__item c-nav__item--brand">
                Brand
              </a>
              <a href="#" class="c-nav__item c-nav__item--info">
                Info
              </a>
              <a href="#" class="c-nav__item c-nav__item--active c-nav__item--warning">
                Warning
              </a>
              <a href="#" class="c-nav__item c-nav__item--success">
                Success
              </a>
              <a href="#" class="c-nav__item c-nav__item--error">
                Error
              </a>
            </nav>
          </div>
        </div>
      </section>
    );
  }
}
