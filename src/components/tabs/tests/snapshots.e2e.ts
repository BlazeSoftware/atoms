import { snapIt } from '../../../test';

const component = 'tabs';

describe(component, () => {
  const snap = snapIt(component);

  describe('renders', () => {
    snap(
      'renders correctly with no props',
      `<blaze-tabs>
      <blaze-tab>This is tab one</blaze-tab>
      <blaze-tab>This is tab two</blaze-tab>
    </blaze-tabs>`
    );
    snap(
      'renders correctly with props set',
      `<blaze-tabs>
      <blaze-tab header="Tab one" open>This is tab one</blaze-tab>
      <blaze-tab header="Tab two" disabled>This is tab two</blaze-tab>
    </blaze-tabs>`
    );
  });
});
