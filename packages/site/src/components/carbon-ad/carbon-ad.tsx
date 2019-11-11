import { h, Component } from '@stencil/core';

@Component({
  tag: 'carbon-ad',
})
export class CarbonAd {
  render() {
    return (
      <div aria-hidden>
        <script
          async
          defer
          type="text/javascript"
          src="https://cdn.carbonads.com/carbon.js?serve=CKYIL27W&placement=blazecsscom"
          id="_carbonads_js"
        />
      </div>
    );
  }
}
