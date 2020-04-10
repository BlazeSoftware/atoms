import { snapIt } from '../../../test';

const component = 'address';

describe(component, () => {
  const snap = snapIt(component);

  describe('renders', () => {
    snap('correctly', '<blaze-address>Address line one</blaze-address>');

    snap(
      'the address heading',
      `<blaze-address>
        <blaze-address-heading>Address header</blaze-address-heading>
        Address line one<br />
        Address line two<br />
        Postcode
      </blaze-address>`
    );
  });
});
