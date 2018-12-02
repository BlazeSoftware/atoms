import { Component } from '@stencil/core';

@Component({
  tag: 'demo-progress-bars',
})
export class ProgressBars {
  render() {
    return (
      <section class="u-window-box-super">
        <h2 class="c-heading">Progress Bars</h2>
        <div class="c-progress u-xsmall">
          <div
            role="progressbar"
            aria-valuenow="15"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: '15%' }}
            class="c-progress__bar"
          />
        </div>
        <br />
        <div class="c-progress c-progress--rounded u-small">
          <div
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: '20%' }}
            class="c-progress__bar c-progress__bar--brand"
          />
        </div>
        <br />
        <div class="c-progress u-medium">
          <div
            role="progressbar"
            aria-valuenow="35"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: '35%' }}
            class="c-progress__bar c-progress__bar--info"
          />
        </div>
        <br />
        <div class="c-progress c-progress--rounded u-large">
          <div
            role="progressbar"
            aria-valuenow="45"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: '45%' }}
            class="c-progress__bar c-progress__bar--warning"
          />
        </div>
        <br />
        <div class="c-progress u-xlarge">
          <div
            role="progressbar"
            aria-valuenow="60"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: '60%' }}
            class="c-progress__bar c-progress__bar--success"
          />
        </div>
        <br />
        <div class="c-progress c-progress--rounded u-super">
          <div
            role="progressbar"
            aria-valuenow="85"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: '85%' }}
            class="c-progress__bar c-progress__bar--error"
          />
        </div>
        <br />
        <h3 class="c-heading">Stacked</h3>
        <div class="c-progress">
          <div
            role="progressbar"
            aria-valuenow="15"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: '15%' }}
            class="c-progress__bar"
          />
          <div
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: '25%' }}
            class="c-progress__bar c-progress__bar--brand"
          />
          <div
            role="progressbar"
            aria-valuenow="10"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: '10%' }}
            class="c-progress__bar c-progress__bar--info"
          />
          <div
            role="progressbar"
            aria-valuenow="12"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: '12%' }}
            class="c-progress__bar c-progress__bar--warning"
          />
          <div
            role="progressbar"
            aria-valuenow="18"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: '18%' }}
            class="c-progress__bar c-progress__bar--success"
          />
          <div
            role="progressbar"
            aria-valuenow="3"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: '3%' }}
            class="c-progress__bar c-progress__bar--error"
          />
        </div>
        <br />
        <h3 class="c-heading">Text</h3>
        <div class="c-progress u-xsmall">
          <div
            role="progressbar"
            aria-valuetext="15% complete"
            aria-valuenow="15"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: '15%' }}
            class="c-progress__bar">
            15% complete
          </div>
        </div>
        <br />
        <div class="c-progress c-progress--rounded u-small">
          <div
            role="progressbar"
            aria-valuetext="20% complete"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: '20%' }}
            class="c-progress__bar c-progress__bar--brand">
            20% complete
          </div>
        </div>
        <br />
        <div class="c-progress u-medium">
          <div
            role="progressbar"
            aria-valuetext="35% complete"
            aria-valuenow="35"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: '35%' }}
            class="c-progress__bar c-progress__bar--info">
            35% complete
          </div>
        </div>
        <br />
        <div class="c-progress c-progress--rounded u-large">
          <div
            role="progressbar"
            aria-valuetext="45% complete"
            aria-valuenow="45"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: '45%' }}
            class="c-progress__bar c-progress__bar--warning">
            45% complete
          </div>
        </div>
        <br />
        <div class="c-progress u-xlarge">
          <div
            role="progressbar"
            aria-valuetext="60% complete"
            aria-valuenow="60"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: '60%' }}
            class="c-progress__bar c-progress__bar--success">
            60% complete
          </div>
        </div>
        <br />
        <div class="c-progress c-progress--rounded u-super">
          <div
            role="progressbar"
            aria-valuetext="100% complete"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: '100%' }}
            class="c-progress__bar c-progress__bar--error">
            100% complete
          </div>
        </div>
      </section>
    );
  }
}
