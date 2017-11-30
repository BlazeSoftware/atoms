import { flush, render } from '@stencil/core/testing';
import { Address } from './blaze-address';
import { AddressHeading } from './blaze-address-heading';

describe('Address', () => {
  it('should build', () => {
    expect(new Address()).toBeTruthy();
  });

  let element;

  it('renders correctly', async () => {
    element = await render({
      components: [Address],
      html: `<blaze-address>
          Address line one
        </blaze-address>`
    });
    await flush(element);

    expect(element.innerHTML).toMatchSnapshot();
  });

  it('renders the address heading correctly', async () => {
    element = await render({
      components: [Address, AddressHeading],
      html: `<blaze-address>
          <blaze-address-heading>Address header</blaze-address-heading>
          Address line one<br />
          Address line two<br />
          Postcode
        </blaze-address>`
    });
    await flush(element);

    expect(element.innerHTML).toMatchSnapshot();
  });
});
