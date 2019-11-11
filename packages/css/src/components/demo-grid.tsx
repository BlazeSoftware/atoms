import { h, Component } from '@stencil/core';

@Component({
  tag: 'demo-grid',
})
export class Grid {
  render() {
    return (
      <section class="o-container o-container--medium u-pillar-box-large">
        <h2 class="c-heading">Fluid Grid</h2>
        <div class="o-grid o-grid--demo">
          <div class="o-grid__cell">
            <div class="o-grid-text">first</div>
          </div>
          <div class="o-grid__cell">
            <div class="o-grid-text">second</div>
          </div>
          <div class="o-grid__cell">
            <div class="o-grid-text">third</div>
          </div>
        </div>

        <h2 class="c-heading">Full Grid</h2>
        <div class="o-grid o-grid--full o-grid--demo">
          <div class="o-grid__cell">
            <div class="o-grid-text">first</div>
          </div>
          <div class="o-grid__cell">
            <div class="o-grid-text">second</div>
          </div>
          <div class="o-grid__cell">
            <div class="o-grid-text">third</div>
          </div>
        </div>

        <h2 class="c-heading">Widths</h2>
        <div class="o-grid o-grid--demo">
          <div class="o-grid__cell o-grid__cell--width-50">
            <div class="o-grid-text">first</div>
          </div>
          <div class="o-grid__cell">
            <div class="o-grid-text">second</div>
          </div>
          <div class="o-grid__cell">
            <div class="o-grid-text">third</div>
          </div>
        </div>

        <div class="o-grid o-grid--demo">
          <div class="o-grid__cell">
            <div class="o-grid-text">first</div>
          </div>
          <div class="o-grid__cell o-grid__cell--width-fixed@large" style={{ width: '450px' }}>
            <div class="o-grid-text">450px wide only when large screen</div>
          </div>
          <div class="o-grid__cell">
            <div class="o-grid-text">third</div>
          </div>
        </div>

        <h2 class="c-heading">Offsets</h2>
        <div class="o-grid o-grid--demo">
          <div class="o-grid__cell o-grid__cell--width-20">
            <div class="o-grid-text">first</div>
          </div>
          <div class="o-grid__cell o-grid__cell--width-20 o-grid__cell--offset-60">
            <div class="o-grid-text">second</div>
          </div>
        </div>

        <h2 class="c-heading">No wrap</h2>
        <div class="o-grid o-grid--demo">
          <div class="o-grid__cell o-grid__cell--width-50">
            <div class="o-grid-text">first</div>
          </div>
          <div class="o-grid__cell o-grid__cell--width-66">
            <div class="o-grid-text">second</div>
          </div>
        </div>

        <h2 class="c-heading">Wrap</h2>
        <div class="o-grid o-grid--wrap o-grid--demo">
          <div class="o-grid__cell o-grid__cell--width-50">
            <div class="o-grid-text">first</div>
          </div>
          <div class="o-grid__cell o-grid__cell--width-66">
            <div class="o-grid-text">second</div>
          </div>
        </div>

        <h2 class="c-heading">Grid in a grid</h2>
        <div class="o-grid o-grid--demo">
          <div class="o-grid__cell">
            <div class="o-grid">
              <div class="o-grid__cell">
                <div class="o-grid-text">first</div>
              </div>
              <div class="o-grid__cell">
                <div class="o-grid-text">second</div>
              </div>
            </div>
            <div class="o-grid">
              <div class="o-grid__cell">
                <div class="o-grid-text">third</div>
              </div>
              <div class="o-grid__cell">
                <div class="o-grid-text">fourth</div>
              </div>
            </div>
          </div>
          <div class="o-grid__cell">
            <div class="o-grid-text">fifth</div>
          </div>
        </div>

        <h2 class="c-heading">Vertical alignment</h2>
        <h3 class="c-heading">Per grid</h3>
        <div class="o-grid o-grid--bottom o-grid--demo">
          <div class="o-grid__cell">
            <div class="o-grid-text">first</div>
          </div>
          <div class="o-grid__cell">
            <div class="o-grid-text">second</div>
          </div>
          <div class="o-grid__cell">
            <div class="o-grid-text">third</div>
          </div>
          <div class="o-grid__cell">
            <div class="o-grid-text">
              fourth
              <br />
              fourth
              <br />
              fourth
              <br />
              fourth
              <br />
              fourth
              <br />
            </div>
          </div>
          <div class="o-grid-text" />
        </div>

        <h3 class="c-heading">Per cell</h3>
        <div class="o-grid o-grid--bottom o-grid--demo">
          <div class="o-grid__cell o-grid__cell--top">
            <div class="o-grid-text">first</div>
          </div>
          <div class="o-grid__cell o-grid__cell--center">
            <div class="o-grid-text">second</div>
          </div>
          <div class="o-grid__cell">
            <div class="o-grid-text">third</div>
          </div>
          <div class="o-grid__cell">
            <div class="o-grid-text">
              fourth
              <br />
              fourth
              <br />
              fourth
              <br />
              fourth
              <br />
              fourth
              <br />
            </div>
          </div>
        </div>

        <h2 class="c-heading">Fluid Snapping</h2>
        <div class="o-grid o-grid--small-full o-grid--medium-fit o-grid--large-full o-grid--demo">
          <div class="o-grid__cell">
            <div class="o-grid-text">first</div>
          </div>
          <div class="o-grid__cell">
            <div class="o-grid-text">second</div>
          </div>
          <div class="o-grid__cell">
            <div class="o-grid-text">third</div>
          </div>
        </div>

        <h2 class="c-heading">No gutter</h2>
        <h3 class="c-heading">Per grid</h3>
        <div class="o-grid o-grid--no-gutter o-grid--demo">
          <div class="o-grid__cell">
            <div class="o-grid-text">first</div>
          </div>
          <div class="o-grid__cell">
            <div class="o-grid-text">second</div>
          </div>
          <div class="o-grid__cell">
            <div class="o-grid-text">third</div>
          </div>
        </div>

        <h3 class="c-heading">per cell</h3>
        <div class="o-grid o-grid--demo">
          <div class="o-grid__cell">
            <div class="o-grid-text">first</div>
          </div>
          <div class="o-grid__cell">
            <div class="o-grid-text">second</div>
          </div>
          <div class="o-grid__cell o-grid__cell--no-gutter">
            <div class="o-grid-text">third</div>
          </div>
        </div>

        <h2 class="c-heading">Responsive</h2>
        <div class="o-grid o-grid--demo">
          <div class="o-grid__cell o-grid__cell--width-50">
            <div class="o-grid-text">first</div>
          </div>
          <div class="o-grid__cell o-grid__cell--width-25">
            <div class="o-grid-text">second</div>
          </div>
          <div class="o-grid__cell o-grid__cell--width-25">
            <div class="o-grid-text">third</div>
          </div>
        </div>
        <div class="o-grid o-grid--demo">
          <div class="o-grid__cell o-grid__cell--width-50@small">
            <div class="o-grid-text">first</div>
          </div>
          <div class="o-grid__cell o-grid__cell--width-25@small">
            <div class="o-grid-text">second</div>
          </div>
          <div class="o-grid__cell o-grid__cell--width-25@small">
            <div class="o-grid-text">third</div>
          </div>
        </div>
        <div class="o-grid o-grid--demo">
          <div class="o-grid__cell o-grid__cell--width-50@medium">
            <div class="o-grid-text">first</div>
          </div>
          <div class="o-grid__cell o-grid__cell--width-25@medium">
            <div class="o-grid-text">second</div>
          </div>
          <div class="o-grid__cell o-grid__cell--width-25@medium">
            <div class="o-grid-text">third</div>
          </div>
        </div>
        <div class="o-grid o-grid--demo">
          <div class="o-grid__cell o-grid__cell--width-50@large">
            <div class="o-grid-text">first</div>
          </div>
          <div class="o-grid__cell o-grid__cell--width-25@large">
            <div class="o-grid-text">second</div>
          </div>
          <div class="o-grid__cell o-grid__cell--width-25@large">
            <div class="o-grid-text">third</div>
          </div>
        </div>
        <div class="o-grid o-grid--demo">
          <div class="o-grid__cell o-grid__cell--width-50@xlarge">
            <div class="o-grid-text">first</div>
          </div>
          <div class="o-grid__cell o-grid__cell--width-25@xlarge">
            <div class="o-grid-text">second</div>
          </div>
          <div class="o-grid__cell o-grid__cell--width-25@xlarge">
            <div class="o-grid-text">third</div>
          </div>
        </div>
        <div class="o-grid o-grid--demo">
          <div class="o-grid__cell o-grid__cell--width-50@super">
            <div class="o-grid-text">first</div>
          </div>
          <div class="o-grid__cell o-grid__cell--width-25@super">
            <div class="o-grid-text">second</div>
          </div>
          <div class="o-grid__cell o-grid__cell--width-25@super">
            <div class="o-grid-text">third</div>
          </div>
        </div>

        <h2 class="c-heading">Responsive Hide/Show</h2>
        <div class="o-grid o-grid--demo">
          <div class="o-grid__cell o-grid__cell--visible@xsmall o-grid__cell--hidden@small o-grid__cell--visible@medium o-grid__cell--hidden@large o-grid__cell--visible@xlarge o-grid__cell--hidden@super">
            <div class="o-grid-text">first</div>
          </div>
          <div class="o-grid__cell o-grid__cell--hidden o-grid__cell--hidden@xsmall o-grid__cell--visible@small o-grid__cell--hidden@medium o-grid__cell--visible@large o-grid__cell--hidden@xlarge o-grid__cell--visible@super">
            <div class="o-grid-text">second</div>
          </div>
        </div>
      </section>
    );
  }
}
