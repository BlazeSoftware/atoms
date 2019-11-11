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
        <blaze-tabs>
          <blaze-tab header="CSS" open>
            <p class="c-paragraph">Addresses in Blaze are essentially a reset to a more consistent style.</p>

            <h2 id="address" class="c-heading u-xlarge">
              Basic Address
            </h2>

            <blaze-demo
              language="html"
              code={`<address class="c-address">
  10010 The Street,
  <br> Binary Town,
  <br> Offandon City,
  <br>
  <abbr class="u-text--help" title="Postcode">CPU01</abbr>
</address>`}
            />

            <h2 id="heading" class="c-heading u-xlarge">
              Heading
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
          </blaze-tab>
          <blaze-tab header="JavaScript">
            <h2 id="address" class="c-heading u-xlarge">
              Address with header
            </h2>
            <blaze-demo
              demo={false}
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
          </blaze-tab>
        </blaze-tabs>
      </page-template>
    );
  }
}
