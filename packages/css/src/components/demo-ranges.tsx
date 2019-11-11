import { h, Component } from '@stencil/core';

@Component({
  tag: 'demo-ranges',
})
export class Ranges {
  render() {
    return (
      <section class="u-window-box-super">
        <h2 class="c-heading">Ranges</h2>
        <label class="c-label" htmlFor="range">
          Set an amount of &pound; you earn:
        </label>
        <input type="range" id="range" class="c-range" />
        <input type="range" class="c-range c-range--brand" />
        <input type="range" class="c-range c-range--info" />
        <input type="range" class="c-range c-range--warning" />
        <input type="range" class="c-range c-range--success" />
        <input type="range" class="c-range c-range--error" />
        <input type="range" class="c-range c-range--brand" disabled={true} />
      </section>
    );
  }
}
