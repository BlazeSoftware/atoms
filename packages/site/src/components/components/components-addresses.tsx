import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-addresses',
})
export class ComponentsAddresses {
  @Prop()
  name: string;

  render() {
    return (
      <page-template name={this.name}>
        <blaze-demo
          language="html"
          code={`<blaze-address>
  <blaze-address-heading>
    Address header
  </blaze-address-heading>
  Address line one
  <br /> Address line two
  <br /> Postcode
</blaze-address>`}
        />

        <h2 class="c-heading" id="css">
          CSS
        </h2>
        <blaze-demo
          language="html"
          code={`<address class="c-address">
  <span class="c-address__heading">Addresses</span>
  10010 The Street,
  <br> Binary Town,
  <br> Offandon City,
  <br>
  <abbr class="u-text--help" title="Postcode">CPU01</abbr>
</address>`}
        />
      </page-template>
    );
  }
}
