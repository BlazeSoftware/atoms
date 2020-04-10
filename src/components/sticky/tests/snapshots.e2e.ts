import { snapIt } from '../../../test';

const component = 'sticky';

describe(component, () => {
  const snap = snapIt(component);

  describe('renders', () => {
    snap(
      'sticky no scroll',
      `<blaze-sticky top="20">
        <blaze-alert open dismissible type="info">Sticky alert</blaze-alert>
       </blaze-sticky>`
    );
  });
});
