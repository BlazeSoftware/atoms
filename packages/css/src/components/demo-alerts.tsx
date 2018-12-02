import { Component } from '@stencil/core';

@Component({
  tag: 'demo-alerts',
})
export class Alerts {
  render() {
    return (
      <section class="u-window-box-super">
        <h2 class="c-heading">Alerts</h2>
        <div role="alert" class="c-alert">
          <button class="c-button c-button--close">&times;</button>
          Default
        </div>
        <div role="alert" class="c-alert c-alert--brand">
          <button class="c-button c-button--close">&times;</button>
          Brand
        </div>
        <div role="alert" class="c-alert c-alert--info">
          <button class="c-button c-button--close">&times;</button>
          Info
        </div>
        <div role="alert" class="c-alert c-alert--warning">
          <button class="c-button c-button--close">&times;</button>
          Warning
        </div>
        <div role="alert" class="c-alert c-alert--success">
          <button class="c-button c-button--close">&times;</button>
          Success
        </div>
        <div role="alert" class="c-alert c-alert--error">
          <button class="c-button c-button--close">&times;</button>
          Error
        </div>
        <h2 class="c-heading">Alerts (formally Toasts)</h2>
        <div class="o-demo-container">
          <div aria-label="6 alerts" role="presentation" class="c-alerts c-alerts--bottomright">
            <div role="alert" class="c-alert">
              Default
            </div>
            <div role="alert" class="c-alert c-alert--brand">
              Brand
            </div>
            <div role="alert" class="c-alert c-alert--info">
              Info
            </div>
            <div role="alert" class="c-alert c-alert--warning">
              Warning
            </div>
            <div role="alert" class="c-alert c-alert--success">
              Success
            </div>
            <div role="alert" class="c-alert c-alert--error">
              Error
            </div>
          </div>
        </div>
      </section>
    );
  }
}
