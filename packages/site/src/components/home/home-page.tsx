import { h, Component } from '@stencil/core';

@Component({
  tag: 'home-page',
})
export class LandingPage {
  constructor() {
    document.title = 'Blaze UI - Framework-free open source UI toolkit';
  }

  render() {
    return (
      <main>
        <h1 aria-label="Blaze UI" class="c-heading c-site-header">
          Blaze <span class="c-site-header__highlight">UI</span>
        </h1>

        <p class="o-container o-container--small u-large u-centered">Framework-free open source UI toolkit.</p>

        <p class="o-container o-container--small u-centered u-letter-box-large">
          It provides great structure for building websites quickly with a scalable and maintainable foundation.
        </p>

        <div class="c-homepage-buttons u-large u-letter-box-large u-centered">
          <stencil-route-link url="/getting-started/install" anchorClass="c-button c-button--brand c-button--rounded">
            <span class="c-button__icon-left" aria-hidden>
              <i class="fas fa-graduation-cap" />
            </span>
            Documentation
          </stencil-route-link>
        </div>

        <div class="o-container o-container--super u-centered">
          <div class="o-grid o-grid--wrap o-grid--xsmall-full o-grid--small-full o-grid--medium-full">
            <div class="o-grid__cell o-grid__cell--width-33 u-window-box-super">
              <i class="fa-fw fab fa-accessible-icon fa-5x" />

              <h3 class="c-heading u-xlarge">Accessibility</h3>

              <p class="c-paragraph">
                <span class="u-text--loud">Accessibile selectors</span> help to educate the importance of enabling
                everyone to access your site.
              </p>
            </div>
            <div class="o-grid__cell o-grid__cell--width-33 u-window-box-super">
              <i class="fa-fw fab fa-js-square fa-5x" />

              <h3 class="c-heading u-xlarge">Framework free</h3>

              <p class="c-paragraph">
                <span class="u-text--loud">Any framework</span>, or no framework at all. You're not locked in. It's your
                choice.
              </p>
            </div>
            <div class="o-grid__cell o-grid__cell--width-33 u-window-box-super">
              <i class="fa-fw fas fa-hand-paper fa-5x" />

              <h3 class="c-heading u-xlarge">Opt-in</h3>

              <p class="c-paragraph">
                Blaze won't automatically take control of any of your design unless you want it to.
              </p>
            </div>
            <div class="o-grid__cell o-grid__cell--width-33 u-window-box-super">
              <i class="fa-fw fas fa-mobile fa-5x" />

              <h3 class="c-heading u-xlarge">Responsive</h3>

              <p class="c-paragraph">All components are developed mobile first and work on any screen size.</p>
            </div>
            <div class="o-grid__cell o-grid__cell--width-33 u-letter-box-super">
              <i class="fa-fw fas fa-cogs fa-5x" />

              <h3 class="c-heading u-xlarge">Custom builds</h3>

              <p class="c-paragraph">
                In 3 easy steps you can have a custom build with easy to use variables and mixins.
              </p>
            </div>
            <div class="o-grid__cell o-grid__cell--width-33 u-letter-box-super">
              <i class="fa-fw fas fa-code fa-5x" style={{ color: '#74748c' }} />

              <h3 class="c-heading u-xlarge">#UseThePlatform</h3>

              <p class="o-paragraph">
                Our components rely solely on native browser features, not a separate library or framework.
              </p>
            </div>
            <div class="o-grid__cell o-grid__cell--width-100">
              <h2 class="c-heading u-super">
                <blaze-divider>Open Source</blaze-divider>
              </h2>
            </div>
            <div class="o-grid__cell o-grid__cell--width-33 u-letter-box-super">
              <i class="fa-fw fab fa-github fa-5x" />

              <h3 class="c-heading u-xlarge">Available to everyone</h3>

              <p class="c-paragraph">
                This project is totally free. It's hosted on Github and is accessible by everyone.
              </p>
            </div>
            <div class="o-grid__cell o-grid__cell--width-33 u-letter-box-super">
              <i class="fa-fw fas fa-gavel fa-5x" />

              <h3 class="c-heading u-xlarge">MIT Licence</h3>
              <p class="c-paragraph">You can benefit from the project however you want. In your own way.</p>
            </div>
            <div class="o-grid__cell o-grid__cell--width-33 u-letter-box-super">
              <i class="fa-fw fas fa-code-branch fa-5x" />

              <h3 class="c-heading u-xlarge">Contributing</h3>

              <p class="c-paragraph">
                See something wrong or want some new feature? Raise an issue or pull request. All feedback is welcome.
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
