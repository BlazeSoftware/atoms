import { Component } from '@stencil/core';

@Component({
  tag: 'demo-toggles',
})
export class Toggles {
  render() {
    return (
      <section class="u-window-box-super">
        <h2 class="c-heading">Toggles</h2>
        <label class="c-toggle">
          <input type="checkbox" checked />
          <div class="c-toggle__track">
            <div class="c-toggle__handle" />
          </div>
          Activate lockdown?
        </label>
        <label class="c-toggle c-toggle--brand">
          <input type="checkbox" checked />
          <div class="c-toggle__track">
            <div class="c-toggle__handle" />
          </div>
          Brand
        </label>
        <label class="c-toggle c-toggle--info">
          <input type="checkbox" checked />
          <div class="c-toggle__track">
            <div class="c-toggle__handle" />
          </div>
          Info
        </label>
        <label class="c-toggle c-toggle--warning">
          <input type="checkbox" checked />
          <div class="c-toggle__track">
            <div class="c-toggle__handle" />
          </div>
          Warning
        </label>
        <label class="c-toggle c-toggle--success">
          <input type="checkbox" checked />
          <div class="c-toggle__track">
            <div class="c-toggle__handle" />
          </div>
          Success
        </label>
        <label class="c-toggle c-toggle--error">
          <input type="checkbox" checked />
          <div class="c-toggle__track">
            <div class="c-toggle__handle" />
          </div>
          Error
        </label>
        <label class="c-toggle c-toggle--info">
          <input type="checkbox" disabled={true} />
          <div class="c-toggle__track">
            <div class="c-toggle__handle" />
          </div>
          Disabled
        </label>
      </section>
    );
  }
}
