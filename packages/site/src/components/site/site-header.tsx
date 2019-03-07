import { Component, State } from '@stencil/core';

@Component({
  tag: 'site-header',
})
export class SiteHeader {
  @State()
  features: any;

  async componentWillLoad() {
    const request = await fetch('https://www.togglz.com/features/8bjlqwqpxlg8nmvfz6av', { mode: 'cors' });
    this.features = await request.json();
  }

  render() {
    return (
      <header class="o-page-header o-container o-container--large">
        <a href="#main" class="c-skip-link c-link">
          Skip to main content
        </a>
        <site-nav />
        {this.features.togglz_ad && (
          <div class="o-togglz-ad">
            <blaze-alert dismissible open>
              <a href="https://www.togglz.com" class="c-link">
                Check out Togglz - a feature toggle service for websites and apps
              </a>
            </blaze-alert>
          </div>
        )}
        <div class="u-centered u-letter-box-small">
          <a aria-label="Blaze Home Page" href="/" onFocus={() => document.querySelector('site-nav').close()}>
            <i aria-hidden class="o-page-logo fas fa-fire fa-4x" />
          </a>
        </div>
      </header>
    );
  }
}
