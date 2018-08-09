import { Component } from '@stencil/core';

@Component({
  tag: 'home-page'
})
export class LandingPage {
  constructor() {
    document.title = 'Blaze: Open Source Modular UI Toolkit';
  }

  render() {
    return (
      <div>
        <div class="o-container o-container--small u-centered">
          <h1 aria-label="Blaze UI" class="c-heading c-site-header">
            Blaze <span class="c-site-header__highlight">UI</span>
          </h1>

          <p class="u-large u-pillar-box-medium">
            Blaze is an open source modular toolkit. It provides great structure for building websites quickly with a
            scalable and maintainable foundation.
          </p>
        </div>

        <div class="o-container o-container--xsmall u-centered">
          <carbon-ad />
        </div>

        <div class="c-input-group c-homepage-buttons">
          <a href="/getting-started/install" class="c-button c-button--block">
            <span class=" c-button__icon-left" aria-hidden>
              <i class="fas fa-play-circle" />
            </span>
            Install
          </a>
          <a href="/components/buttons" class="c-button c-button--brand c-button--block">
            <span class="c-button__icon-left" aria-hidden>
              <i class="fas fa-cubes" />
            </span>
            Atoms
          </a>
          <a
            aria-label="Go to github"
            href="https://github.com/BlazeUI/blaze"
            class="c-button c-button--block"
            style={{ 'background-color': 'black' }}>
            <span class="c-button__icon-left" aria-hidden>
              <i class="fab fa-github" />
            </span>
            GitHub
          </a>
        </div>

        <div class="u-centered o-homepage-sections">
          <div class="c-homepage-section c-homepage-section--secondary">
            <div class="o-container o-container--xlarge">
              <div class="o-grid o-grid--wrap o-grid--small-full o-grid--medium-full">
                <div class="o-grid__cell o-grid__cell--width-100">
                  <h2 class="c-heading u-super">What makes Blaze different?</h2>

                  <p class="c-paragraph">
                    Blaze fills the gap between monolithic frameworks like Bootstrap, UIKit and Semantic, and "micro"
                    ones such as Skeleton, Milligram and Min. It all depends on your situation and what problem you're
                    trying to solve but we think Blaze can provide you with the best of both worlds.
                  </p>
                </div>
                <div class="o-grid__cell o-grid__cell--width-33 u-letter-box-super">
                  <i class="fas fa-table fa-5x" style={{ color: '#d3eafd' }} />

                  <h3 class="c-heading u-xlarge">More than just a grid</h3>

                  <p class="c-paragraph">
                    Micro-frameworks tend to sacrifice a lot of usefulness for the file size, leaving the developer
                    wanting more.
                  </p>
                </div>
                <div class="o-grid__cell o-grid__cell--width-33 u-window-box-super">
                  <i class="fab fa-accessible-icon fa-5x" style={{ color: '#8bc8f9' }} />

                  <h3 class="c-heading u-xlarge">Accessibility</h3>

                  <p class="c-paragraph">
                    Blaze uses <span class="u-text--loud">accessibile selectors</span> to help educate developers in the
                    importance of enabling everyone to access your site.
                  </p>
                </div>
                <div class="o-grid__cell o-grid__cell--width-33 u-window-box-super">
                  <i class="fas fa-hand-paper fa-5x" style={{ color: '#053a65' }} />

                  <h3 class="c-heading u-xlarge">Opt-in</h3>

                  <p class="c-paragraph">
                    Blaze won't automatically take control of any of your design unless you want it to.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="c-homepage-section c-homepage-section--vivid">
            <div class="o-container o-container--xlarge">
              <div class="o-grid o-grid--wrap o-grid--small-full o-grid--medium-full">
                <div class="o-grid__cell o-grid__cell--width-100">
                  <h2 class="c-heading u-super">Web Components</h2>

                  <p class="c-paragraph">
                    Blaze is a comprehensive starting point for any website. Our components provide great structure,
                    designed to help you improve your development speed it has a shallow learning curve and intuitive
                    naming conventions.
                  </p>
                </div>
                <div class="o-grid__cell o-grid__cell--width-25 u-window-box-super">
                  <i class="fas fa-tablet-alt fa-5x" style={{ color: '#085796' }} />

                  <h3 class="c-heading u-xlarge">Responsive</h3>

                  <p class="c-paragraph">Built with a mobile first approach Blaze is fully responsive.</p>
                </div>
                <div class="o-grid__cell o-grid__cell--width-25 u-letter-box-super">
                  <i class="fas fa-cubes fa-5x" style={{ color: '#053a64' }} />

                  <h3 class="c-heading u-xlarge">Modular</h3>

                  <p class="c-paragraph">
                    You can use any part of Blaze in isolation to make your payload small and focused.
                  </p>
                </div>
                <div class="o-grid__cell o-grid__cell--width-25 u-letter-box-super">
                  <i class="fas fa-cogs fa-5x" style={{ color: '#0c80df' }} />

                  <h3 class="c-heading u-xlarge">Custom builds</h3>

                  <p class="c-paragraph">
                    In 3 easy steps you can have a custom build with easy to use variables and mixins.
                  </p>
                </div>
                <div class="o-grid__cell o-grid__cell--width-25 u-letter-box-super">
                  <i class="fas fa-balance-scale fa-5x" style={{ color: '#085796' }} />

                  <h3 class="c-heading u-xlarge">Small size</h3>

                  <p class="o-paragraph">It might be small but it's complete and easy to use.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="c-homepage-section c-homepage-section--inverted">
            <div class="o-container o-container--xlarge">
              <div class="o-grid o-grid--wrap o-grid--small-full o-grid--medium-full">
                <div class="o-grid__cell o-grid__cell--width-100">
                  <h2 class="c-heading u-super">Open Source</h2>

                  <p class="c-paragraph">
                    Blaze is open source, free and always will be. Pull Requests, suggestions or comments are all
                    welcome and valued.
                  </p>
                </div>
                <div class="o-grid__cell o-grid__cell--width-33 u-letter-box-super">
                  <i class="fab fa-github fa-5x" style={{ color: '#8bc8f9' }} />

                  <h3 class="c-heading u-xlarge">Hosted on Github</h3>

                  <p class="c-paragraph">
                    Our project is hosted on Github. Blaze{' '}
                    <i class="fas fa-heart" style={{ color: '#ef4f52' }} /> Github!
                  </p>
                </div>
                <div class="o-grid__cell o-grid__cell--width-33 u-letter-box-super">
                  <i class="fas fa-gavel fa-5x" style={{ color: '#d3eafd' }} />

                  <h3 class="c-heading u-xlarge">MIT Licence</h3>

                  <p class="c-paragraph">You can benefit from using Blaze in your own way.</p>
                </div>
                <div class="o-grid__cell o-grid__cell--width-33 u-letter-box-super">
                  <i class="fas fa-code-branch fa-5x" style={{ color: '#0c80df' }} />

                  <h3 class="c-heading u-xlarge">Contributing</h3>

                  <p class="c-paragraph">
                    Blaze will thrive on contributions from the open source community, so get forking!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
